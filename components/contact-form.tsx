"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions/contact-form";
import {
  type ContactForm as ContactFormType,
  contactFormSchema,
} from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, SendIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function ContactForm() {
  const methods = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {},
  });

  const { toast } = useToast();

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    const response = await submitContactForm(data);
    console.log(response);
    if (response.error === null) {
      toast({
        variant: "success",
        title: "Yay! We received your Message",
        description: "We will reach out to you very soon!",
      });
      return;
    }
    toast({
      variant: "destructive",
      title: "Uh oh! Your submission failed, can you try again",
      description: "There was a problem with your request.",
    });
  };

  return (
    <section className="m-4 p-10 min-w-[60%]">
      <Form {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of the Person / Couple *</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number *</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event / Photoshoot Location *</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormDescription>
                  Please mention the location of the event / photoshoot
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What type of session are you looking for? *
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Wedding">Wedding</SelectItem>
                      <SelectItem value="Portraits">
                        Portrait (Couple, family, engagements, etc)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event date*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell me more!</FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    placeholder="I'd love to hear more details, if you're up for sharing. What's your wedding's style, inspiration, what kind of photos do you love, etc?"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="self-center">
            <Button
              type="submit"
              size="lg"
              className="w-40 flex justify-around"
            >
              Send
              <SendIcon size="16" />
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
