"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim().min(1, { message: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(1, { message: "Phone number is required" }),
  nation: z.enum(["vietnam"]),
  message: z.string({ required_error: "Message is required" }).trim().min(1, { message: "Name is required" }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      nation: "vietnam",
      message: "",
    },
  });

  function onSubmit(data) {
    console.log("onSubmit ~ data:", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-[650px] py-7 sm:py-10 px-5 sm:space-y-5 space-y-2 shadow-box rounded-[30px]"
      >
        <h1 className="font-semibold text-[40px] text-black-gradient">Contact us</h1>
        <div className="grid grid-cols-2 gap-5 sm:gap-[20px]">
          <div className="col-span-2 sm:col-span-1">
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
          </div>
          <div className="col-span-2 sm:col-span-1">
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
          </div>
          <div className="col-span-2 sm:col-span-1">
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
          </div>
          <div className="col-span-2 sm:col-span-1">
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
          </div>
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" className="resize-none h-[150px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button variant="sandstone" type="submit" className="w-full !mt-7">
          Start free trial{" "}
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.3411 0.0985203L0.711173 8.29787C0.29186 8.48228 0.0150581 8.89382 0.000595312 9.35431C-0.0138643 9.81586 0.236076 10.244 0.64198 10.4555L4.41287 12.4236L15.6705 4.52111C15.7191 4.48777 15.78 4.4836 15.8317 4.50965C15.8833 4.53569 15.9174 4.58779 15.9194 4.64613L6.48562 13.7331C6.25117 13.9592 6.11794 14.2728 6.11794 14.5999V18.8007C6.11587 19.3372 6.46909 19.8092 6.98137 19.9551C7.49365 20.1009 8.03897 19.8832 8.31577 19.4248L10.6055 15.6449L15.4465 18.1651V18.1662C15.7687 18.3349 16.1509 18.3454 16.4824 18.1932C16.8129 18.0411 17.0566 17.7442 17.1413 17.3869L20.9669 1.47784C21.0723 1.03611 20.9215 0.573518 20.5765 0.280745C20.2326 -0.0109884 19.7543 -0.0817284 19.3411 0.0985203Z"
              fill="black"
            />
          </svg>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
