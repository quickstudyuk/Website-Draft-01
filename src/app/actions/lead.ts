'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

export async function saveLead(name: string, phone: string) {
  if (!name || !phone) {
    return { error: "Name and phone number are required" };
  }

  // Create the lead in the database
  const lead = await prisma.lead.create({
    data: { name, phone }
  });

  // Revalidate admin paths so counts and tables update
  revalidatePath("/admin");
  revalidatePath("/admin/leads");

  // Attempt to send an email alert defensively (won't crash the save if it fails)
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "quickstudyuk@gmail.com",
        pass: process.env.EMAIL_APP_PASSWORD || "your_app_password_here",
      },
    });

    const mailOptions = {
      from: "quickstudyuk@gmail.com",
      to: "quickstudyuk@gmail.com",
      subject: `New Lead Captured: ${name}`,
      text: `Hello,\n\nA new lead has been captured from the QS Chatbot on the website.\n\nLead Details:\n- Name: ${name}\n- Contact Number: ${phone}\n- Date: ${new Date().toLocaleString()}\n\nPlease follow up as soon as possible for their free consultation.\n\nBest regards,\nQuickStudy System`,
      html: `
        <h3>New Lead Captured</h3>
        <p>A new lead has been captured from the <strong>QS Chatbot</strong> on the website.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <p>Please follow up as soon as possible for their free consultation.</p>
      `
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Defensive lead email alert failed to send:", error);
  }

  return { success: true, lead };
}

export async function deleteLead(id: string) {
  if (!id) return { error: "Lead ID is required" };

  await prisma.lead.delete({
    where: { id }
  });

  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  
  return { success: true };
}
