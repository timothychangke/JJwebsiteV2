import * as zod from 'zod';

export const registerSchema = zod.object({
  firstName: zod.string().min(1, {
    message: 'Enter a valid first name',
  }),
  lastName: zod.string().min(1, {
    message: 'Enter a valid last name',
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
  dob: zod.date({
    message: 'Date of Birth is not a valid date',
  }),
  typeOfAccount: zod.enum(['Institution', 'Organisation', 'Individual'], {
    message: 'Select an option',
  }),
  phoneNumber: zod.number().min(8, {
    message: 'Phone number is not a valid number',
  }),
  tos: zod.boolean(),
});

export const loginSchema = zod.object({
  email: zod.string().email({
    message: 'Enter a valid Email',
  }),
  password: zod.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
});

export const sessionSchema = zod.object({
  sessionName: zod.string().min(1),
  sessionDate: zod.date({
    message: 'Date of Birth is not a valid date',
  }),
  sessionTime: zod.string().min(1),
  studentsNum: zod.string().min(1),
});
