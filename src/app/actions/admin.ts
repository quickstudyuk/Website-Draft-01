'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// FAQ Actions
export async function createFAQ(formData: FormData) {
  const question = formData.get("question") as string;
  const answer = formData.get("answer") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  if (!question || !answer) return { error: "Missing required fields" };

  await prisma.fAQ.create({
    data: { question, answer, order }
  });

  revalidatePath("/admin/faqs");
  revalidatePath("/faq");
}

export async function deleteFAQ(id: string) {
  await prisma.fAQ.delete({ where: { id } });
  revalidatePath("/admin/faqs");
  revalidatePath("/faq");
}

// Policy Actions
export async function updatePolicy(slug: string, formData: FormData) {
  const content = formData.get("content") as string;
  const title = formData.get("title") as string;

  if (!content) return { error: "Content is required" };

  await prisma.policy.upsert({
    where: { slug },
    update: { content, title },
    create: { slug, title, content }
  });

  revalidatePath("/admin/policies");
  revalidatePath(`/legal/${slug}`);
  revalidatePath("/legal/[slug]", "page");
}
