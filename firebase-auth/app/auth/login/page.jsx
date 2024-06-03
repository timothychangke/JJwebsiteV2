'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { UserAuth } from '../../context/AuthContext';
import Image from 'next/image';
import google_logo from '../../../public/google_logo.png';
import google_logo_white from '../../../public/google_logo_white.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { registerSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { googleSignIn } = UserAuth();
  const [isHovered, setIsHovered] = useState(false);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      position: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = () => {};
  return (
    <>
      <Card className="p-6 rounded-lg shadow-xl xl:w-1/4 md:w-1/2 m-auto mt-20">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className="text-muted-foreground text-sm">
              Sign in to your account
            </p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <Button
            variant="outline"
            className="mb-5 w-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            onClick={handleSignIn}
            onMouseEnter={() => {
              setTimeout(() => {
                setIsHovered(true);
              }, 100);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsHovered(false);
              }, 100);
            }}
          >
            Continue with{' '}
            <Image
              src={isHovered ? google_logo_white : google_logo}
              width={20}
              height={20}
              className="ml-1 mb-1"
            />
            oogle
          </Button>
          <div class="flex items-center">
            <div class="flex-grow border-t border-gray-300"></div>
            <div class="mx-4 text-gray-500">or</div>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeHolder="Email"
                        className="mb-5 mt-5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeHolder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
          >
            <Link href="/auth/signup">Don't have an account? Sign up here</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
