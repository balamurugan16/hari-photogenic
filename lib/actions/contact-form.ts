"use server";

import { ContactForm } from "../schemas";
import { supabase } from "@/lib/supabase/supabase"

export async function submitContactForm(values: ContactForm) {
  return supabase.from("contact_form").insert({
    event_date: values.eventDate.toISOString(),
    event_type: values.eventType,
    location: values.location,
    email: values.email,
    name: values.name,
    phone_number: values.phoneNumber,
    note: values.note
  })
}
