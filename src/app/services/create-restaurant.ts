"use server";
import { redirect } from "next/navigation";
import { HostApi } from "../config/apiConstants";
import { object, string, z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "This field has to be filled." }),
  phone: z.string(),
  address: z.string(),
  image: z.any(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  industry: z.string(),
});

const CreateRestaurant = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
    contactPhone?: string[];
  };
  message?: string | null;
};

export async function register(
  prevState: State,
  formData: FormData
): Promise<any> {
  async function encodeFileAsBase64URL(file: any) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  }

  const validatedFields = CreateRestaurant.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    industry: formData.get("industry"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(validatedFields);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed validate fields",
    };
  }

  const {
    name,
    phone,
    address,
    city,
    state,
    zip,
    industry,
  } = validatedFields.data;

  const image = validatedFields.data.image;
  debugger;

  const jsonData = {
    name,
    phone,
    address,
    image,
    city,
    state,
    zip,
    industry,
  };
  const url = `${HostApi}restaurant/create`;
  
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });

  if (response.ok) {
    let thiss = await response.json();
    console.log(thiss);
    return thiss;
  } else {
    console.log(response);
    return {
      errors: response.statusText,
      message: "Error. send petition back  .",
    };
  }
}
