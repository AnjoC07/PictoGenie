"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// ADD IMAGE TO DATABASE
export async function addImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDatabase();

    revalidatePath(path);

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}

// UPADATE IMAGE
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDatabase();

    revalidatePath(path);

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    handleError(error);
  }
}
