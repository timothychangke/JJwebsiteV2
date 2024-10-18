import * as zod from 'zod';

export const registerSchema = zod.object({
  firstName: zod.string().min(1, {
    message: 'Enter a first name',
  }),
  lastName: zod.string().min(1, {
    message: 'Enter a last name',
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
  dob: zod.coerce.date({
    errorMap: () => ({
      message: "Enter date of birth",
    }),
  }),
  accountType: zod.string().min(1, {
    message: 'Select an account type',
  }),
  phoneNumber: zod.string().optional(),
  // .length(8, {
  //   message: 'Phone number have to be 8 numbers',
  // }),
  tos: zod.literal(true, {
    errorMap: () => ({
      message: "You have to read and agree to our terms of service and privacy policy to proceed",
    }),
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

export const resetPasswordSchema = zod.object({
  email: zod.string().email({
    message: 'Enter a valid Email',
  }),
});

export const sessionSchema = zod.object({
  sessionName: zod.string().min(1, {
    message: 'Please enter a valid session name',
  }),
  sessionDate: zod.date({
    message: 'Please select a valid date',
  }),
  sessionTime: zod.string().min(1, {
    message: 'Please select a valid session time',
  }),
  studentsNum: zod.number().min(1, {
    message: 'Minimum of 1 student(s) expected',
  }),
});

export const storeItemsSchema = zod.object({
  sessionName: zod.string().min(1, {
    message: 'Please enter a valid session name',
  }),
  sessionDate: zod.date({
    message: 'Please select a valid date',
  }),
  sessionTime: zod.string().min(1, {
    message: 'Please select a valid session time',
  }),
  studentsNum: zod.number().min(1, {
    message: 'Minimum of 1 student(s) expected',
  }),
});
