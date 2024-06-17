import dbConnection from '@/lib/mongo';
import User from '@/models/User';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await dbConnection();
    const { firstName, lastName, position, email, password, confirmPassword } =
      await request.json();
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const hashedConfirmPassword = await bcryptjs.hash(confirmPassword, salt);

    if (hashedPassword !== hashedConfirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match.' },
        { status: 400 }
      );
    }

    const userStoredInDB = await User.findOne({ email: email });
    if (userStoredInDB) {
      return NextResponse.json(
        { error: 'User already exists.' },
        { status: 409 }
      );
    }

    const newUser = new User({
      firstName,
      lastName,
      position,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    return NextResponse.json(savedUser, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
