"use client"

import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function TrialForm() {
  const form = useForm();
  const [transport, setTransport] = useState(false);
  const [facilitator, setFacilitator] = useState(false);
  const [others, setOthers] = useState(false);
  const [estimate, setEstimate] = useState(0);

  function transportOnChange() {
    setTransport(!transport);
  }

  function facilitatorOnChange() {
    setFacilitator(!facilitator);
  }

  function othersOnChange() {
    setOthers(!others);
  }

  useEffect(() => {
    if(transport){
      setEstimate(estimate + 10);
    } else {
      setEstimate(estimate - 10);
    }
  }, [transport]);

  useEffect(() => {
    if(facilitator){
      setEstimate(estimate + 8);
    } else {
      setEstimate(estimate - 8);
    }
  }, [facilitator]);

  useEffect(() => {
    if(others){
      setEstimate(estimate + 6);
    } else {
      setEstimate(estimate - 6);
    }
  }, [others]);

  useEffect(() => {
    setEstimate(0);
  }, []);

  return (
    <Form {...form}>
      <form className="space-y-8">
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="transport"
          render={({ field }) => (
            <FormItem className="flex justify-between space-y-0 items-center">
              <FormLabel className="flex items-center">
                <div className='rounded-full h-12 w-12 bg-gray-500 mr-2'></div>
                <p>Transport</p>
              </FormLabel>
              <FormControl>
                <Checkbox id="transport" className="border-violet checked:bg-violet" onCheckedChange={transportOnChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facilitator"
          render={({ field }) => (
            <FormItem className="flex justify-between space-y-0 items-center">
              <FormLabel className="flex items-center">
                <div className='rounded-full h-12 w-12 bg-gray-500 mr-2'></div>
                <p>Facilitator/Tour Guide</p>
              </FormLabel>
              <FormControl>
                <Checkbox id="facilitator" className="border-violet checked:bg-violet" onCheckedChange={facilitatorOnChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="others"
          render={({ field }) => (
            <FormItem className="flex justify-between space-y-0 items-center">
              <FormLabel className="flex items-center">
                <div className='rounded-full h-12 w-12 bg-gray-500 mr-2'></div>
                <p>Other Stuff</p>
              </FormLabel>
              <FormControl>
                <Checkbox id="others" className="border-violet checked:bg-violet" onCheckedChange={othersOnChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='w-full h-px bg-gray-400'></div>
        <div className="flex flex-col items-end">
          <p className="text-md">Estimated Price:</p>
          <p className="text-3xl mb-8">${estimate}</p>
          <Button className="border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent">Join the JJ Fam!</Button>
        </div>
      </form>
    </Form>
  )
}
