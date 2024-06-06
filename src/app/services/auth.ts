"use server";
import { redirect } from "next/navigation";
import { HostApi } from "../config/apiConstants";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string()
  .min(1, { message: "This field has to be filled." }),
});

export async function authetication(formData: FormData): Promise<any> {
  debugger;
  const { email, password } = FormSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  const url = `${HostApi}authenticate`;
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    let thiss = await response.json();
    console.log(thiss);
    redirect(`/`);
  } else {
    console.log(response);
  }
}
