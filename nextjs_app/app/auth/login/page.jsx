'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { UserAuth } from '../../../context/AuthContext';
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
import { loginSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  // const { googleSignIn } = UserAuth();
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error);
        throw new Error(errorData.error || 'Failed to login');
      }
      console.log(response)
      toast.success('Login successful');
      //need to dispatch resopnse into redux store
      router.push("/")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };;
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
              alt='google logo'
            />
            oogle
          </Button>
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="mx-4 text-gray-500">or</div>
            <div className="flex-grow border-t border-gray-300"></div>
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
                        placeholder="Email"
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
                        placeholder="Password"
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
