'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

async function saveFileLocally(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}-${file.name.replace(/\\s+/g, '-')}`;
  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  return `/uploads/${fileName}`;
}

export async function uploadNote(formData: FormData) {
  const title = formData.get("title") as string;
  const file = formData.get("file") as File;

  if (!title || !file) return { error: "Missing required fields" };

  try {
    const fileUrl = await saveFileLocally(file);

    await prisma.note.create({
      data: {
        title,
        fileUrl,
      },
    });

    revalidatePath("/admin/notes");
    revalidatePath("/notes");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to upload note" };
  }
}

export async function deleteNote(id: string) {
  try {
    await prisma.note.delete({ where: { id } });
    revalidatePath("/admin/notes");
    revalidatePath("/notes");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete note" };
  }
}

export async function uploadBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const file = formData.get("file") as File;

  if (!title || !file) return { error: "Missing required fields" };

  try {
    const pdfUrl = await saveFileLocally(file);

    await prisma.blog.create({
      data: {
        title,
        pdfUrl,
      },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to upload blog" };
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({ where: { id } });
    revalidatePath("/admin/blogs");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete blog" };
  }
}
