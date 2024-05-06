"use server";
import "server-only"

import { EmailTemplate } from "@/components/email-template";
import { resend } from "../resend";
import { ContactForm } from "../schemas";
import { supabase } from "@/lib/supabase/supabase"
import React from "react";

export async function submitContactForm(values: ContactForm) {
  return supabase.from("contact_form").insert({
    event_date: values.eventDate.toISOString(),
    event_type: values.eventType,
    location: values.location,
    email: values.email,
    name: values.name,
    phone_number: values.phoneNumber,
    note: values.note,
  })
}

export async function sendContactFormInEmail(values: ContactForm) {
  const { error, data } = await resend.emails.send({
    from: "",
    to: ["balagriffon@gmail.com"],
    subject: `New Message from ${values.name}}`,
    react: EmailTemplate({ firstName: values.name }) as React.ReactElement
  })

  if (!error) {
    await supabase.from("contact_form").update({ is_emailed: true, email_id: data?.id })
  }
}
