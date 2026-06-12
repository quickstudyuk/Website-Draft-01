import { prisma } from "@/lib/db";
import FAQClient from "./FAQClient";

export default async function FAQPage() {
  const dbFaqs = await prisma.fAQ.findMany({
    orderBy: { order: 'asc' }
  });

  return <FAQClient dbFaqs={dbFaqs} />;
}
