'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <>
      <Card className="p-6 rounded-lg shadow-xl xl:w-1/4 md:w-1/2 m-auto mt-20">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-4xl font-semibold">Register</h1>
            <p className="text-muted-foreground text-sm">
              Sign up for an account
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex flex-row gap-5 mb-5">
            <Input type="text" placeHolder="First Name" />
            <Input type="text" placeHolder="Last Name" />
          </div>
            <Select>
              <SelectTrigger >
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
              </SelectContent>
            </Select>

          <Input type="email" className="mb-5 mt-5" placeHolder="Email" />
          <Input type="password" className="mb-5" placeHolder="Password" />
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
          >
            <Link href="/auth/login">Already have an account? Login here</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupPage;
