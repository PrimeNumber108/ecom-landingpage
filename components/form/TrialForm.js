"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const FormSchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim().min(1, { message: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(1, { message: "Phone number is required" }),
  nation: z.enum(["vietnam"]),
  social: z.optional(z.string()),
});

const TrialForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      nation: "vietnam",
      social: "",
    },
  });

  function onSubmit(data) {
    console.log("onSubmit ~ data:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nation</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a nation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="vietnam">Viet Nam</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social media account</FormLabel>
              <FormControl>
                <Input placeholder="Social media account" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="sandstone" type="submit" className="w-full !mt-7">
          Start free trial
        </Button>
      </form>
    </Form>
  );
};

export default TrialForm;
