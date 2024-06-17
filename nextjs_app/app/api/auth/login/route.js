import jwt from 'jsonwebtoken';
import dbConnection from '@/lib/mongo';
import User from '@/models/User';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  await dbConnection();
  try {
    const { email, password } = await request.json();
    const userStoredInDB = await User.findOne({ email });
    if (!userStoredInDB) {
      return NextResponse.json(
        { error: 'User does not exist.' },
        { status: 400 }
      );
    }

    const passwordMatch = await bcryptjs.compare(
      password,
      userStoredInDB.password
    );
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials.' },
        { status: 400 }
      );
    }

    const authToken = jwt.sign(
      { id: userStoredInDB._id },
      process.env.JWT_SECRET
    );

    const { password: _, ...userData } = userStoredInDB.toObject();
    return NextResponse.json({ authToken, user: userData }, { status: 200 });
  } catch (err) {
    console.error('Login error:', err.message);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
};
