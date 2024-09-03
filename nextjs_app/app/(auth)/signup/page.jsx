'use client';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/Checkbox";
import Link from 'next/link';
import Image from 'next/image';
import google_logo from '../../../public/google_logo.png';
import { registerSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);
  const [accountType, setAccountType] = useState("");
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dob: '',
      accountType: '',
      phoneNumber: '',
      tos: false,
      schoolName: '',
      organisationName: '',
      country: '',
      city: '',
      purpose: '',
    },
  });
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    setAccountType(data.accountType);
    try {
      if(!next) {
        setNext(true);
        return;
      }
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error);
        throw new Error(errorData.error || 'Failed to register');
      }
      toast.success('Registration successful');
      router.push("/login")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-[#8772A9] pt-20 relative items-center flex flex-col min-h-screen">
      <Image alt="Jalan Journey logo" className='absolute bottom-0 mx-auto' src={"/images/Login/Signin_Bottom.png"} width={200} height={200}></Image>
      <Card className="bg-[#674C93]/70 p-6 pt-0 rounded-lg md:w-1/2 max-w-[400px] border-0 relative z-10">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-3 items-center justify-center text-white text-center">
            <Image alt="Jalan Journey logo" className='' src={"/images/Login/Signin_Logo.png"} width={125} height={125}></Image>
            <h1 className="text-4xl font-semibold">{!next ? "Welcome!" : "Create account"}</h1>
            <p className="text-sm">{!next ? "Time to start Your Journey" : <>{accountType}</>}</p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center pb-1">
          <p className="text-xs text-white mt-2">{!next ? "Sign up for an account" : <>{accountType}’s Information</>} </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 pt-3 w-full justify-center flex flex-col">
              <div className="flex flex-row gap-3">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className={next ? " hidden" : ""}>
                      <FormControl>
                        <Input {...field} placeholder="First Name*" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className={next ? " hidden" : ""}>
                      <FormControl>
                        <Input {...field} placeholder="Last Name*" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email*" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password*"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm Password*"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className={"flex flex-col" + (next ? " hidden" : "")}>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal justify-start",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Date of Birth*</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type of Account*" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Institution" className="cursor-pointer">Institution</SelectItem>
                        <SelectItem value="Organisation" className="cursor-pointer">Organisation</SelectItem>
                        <SelectItem value="Individual" className="cursor-pointer">Individual</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Phone Number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tos"
                render={({ field }) => (
                  <FormItem className={next ? " hidden" : ""}>
                    <div className="flex items-center">
                      <FormControl>
                        <Checkbox className="border-white" checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="text-xs text-white ml-2 mb-2 leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        By signing up, you agree to our terms of service and privacy policy
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountType == "Institution" && (
                <FormField
                  control={form.control}
                  name="schoolName"
                  render={({ field }) => (
                    <FormItem className={next ? "" : " hidden"}>
                      <FormControl>
                        <Input {...field} type="text" placeholder="School Name*" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {accountType == "Organisation" && (
                <FormField
                  control={form.control}
                  name="organisationName"
                  render={({ field }) => (
                    <FormItem className={next ? "" : " hidden"}>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Organisation Name*" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className={next ? "" : " hidden"}>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Country*" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className={next ? "" : " hidden"}>
                    <FormControl>
                      <Input {...field} type="text" placeholder="City/Town*" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem className={next ? "" : " hidden"}>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue className="placeholder-gray-500" placeholder="Purpose of Use*" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="onething" className="cursor-pointer">One Thing</SelectItem>
                        <SelectItem value="something" className="cursor-pointer">Something</SelectItem>
                        <SelectItem value="anotherthing" className="cursor-pointer">Another Thing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="text-white bg-dark-green border-white border-[3px] mx-auto px-7">
                {next ? "Sign up" : "Next"}
              </Button>
            </form>
          </Form>
          {!next && (
            <>
              <p className="my-3 text-white text-center text-xs">--------- OR ---------</p>
              <Button
                variant="outline"
                className="rounded-full mb-5 border border-blue-500 hover:bg-blue-50 font-semibold py-1 px-8 transition-colors duration-300"
                onClick={handleSignIn}
              >
              <Image
                src={google_logo}
                width={20}
                height={20}
                className="mr-1"
                alt='google logo'
              />
                Sign in with Google
              </Button>
            </>
          )}
        </CardContent>
        {!next && (
          <div className="text-center text-xs text-white flex-none mb-5">
            <Link href="/login">Already have an account?<span className="underline font-bold ml-1 underline-offset-2">Login</span></Link>
          </div>
        )}
      </Card>
      <p className="text-xs text-white uppercase relative z-10 font-bold mt-10 mb-6">© 2024 Jalan Journey. All Rights Reserved.</p>
    </section>
  );
};

export default SignupPage;
