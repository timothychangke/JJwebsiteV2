import * as zod from 'zod';

export const registerSchema = zod.object({
  firstName: zod.string().min(1, {
    message: 'Enter a valid first name',
  }),
  lastName: zod.string().min(1, {
    message: 'Enter a valid last name',
  }),
  position: zod.enum(['student', 'teacher'], {
    message: 'Select an option',
  }),
  email: zod.string().email({
    message: 'Enter a valid Email',
  }),
  password: zod.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
  confirmPassword: zod.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
});

export const loginSchema = zod.object({
  email: zod.string().email({
    message: 'Enter a valid Email',
  }),
  password: zod.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
});
