"use server";
import { redirect } from "next/navigation";
import { HostApi } from "../config/apiConstants";
import { z } from "zod";

// const FormSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: "This field has to be filled." })
//     .email("This is not a valid email."),
//     password: z.string()
//     .min(1, { message: "This field has to be filled." }),
// });

export async function register(formData: FormData): Promise<any> {


  const url = `${HostApi}restaurant/create`;
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    let thiss = await response.json();
    console.log(thiss);
    return(thiss);
  } else {
    console.log(response);
  }
}

