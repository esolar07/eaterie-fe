"use server";
import { redirect } from "next/navigation";
import { HostApi } from "../config/apiConstants";
import { boolean, object, string, z } from "zod";

const FormSchema = z.object({
  firstname: string({ required_error: "Firstname is required" })
  .min(1,"Firstname is required"),
  lastname: string({ required_error: "Lastname is required" })
  .min(1, "Lastname is required"),
  phone: string({ required_error: "Phone is required" })
  .min(1,"Phone is required"),
  gender: string({ required_error: "Gender is required" })
  .min(1,"Gender is required"),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  password2: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  isBusiness: boolean().nullable(),
});
const CreateUser = FormSchema.omit({ password2: true });

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function registerUser(
  prevState: State,
  formData: FormData
): Promise<any> {
  if (formData.get("password") !== formData.get("password2")) {
    return {
      errors: "Error",
      message: "Password. The password set are not equals.",
    };
  }

  const validatedFields = CreateUser.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    gender: formData.get("gender"),
    password: formData.get("password"),
    isBusiness: formData.get("isBusiness") ? true: false,
  });

  if (!validatedFields.success) {
    console.log(validatedFields, validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed validate fields",
    };
  }

  const { firstname, lastname, phone, gender, email, password, isBusiness } =
    validatedFields.data;

  const jsonData = {
    firstname,
    lastname,
    phone,
    gender,
    email,
    password,
    isBusiness,
  };
  const url = `${HostApi}register`;
  const body = JSON.stringify(jsonData);
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (response.ok) {
    let thiss = await response.json();
    console.log(thiss);
    if (thiss.isBusiness) {
    return thiss;
    } else {
      redirect('/');
    }
  } else {
    console.log(response);
    return {
      errorMsg : response.statusText,
      message: "Error. send petition back  .",
    };
  }
}
