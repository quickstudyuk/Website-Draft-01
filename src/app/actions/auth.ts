'use server';

import { getSession, sessionOptions } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "admin" && password === "adminQS") {
    const session = await getSession();
    session.isAdmin = true;
    await session.save();
    redirect("/admin");
  } else {
    return { error: "Invalid username or password" };
  }
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/login");
}

export async function forgotPassword() {
  try {
    // Note: To use Gmail, you must provide an App Password, not your regular password.
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
      subject: "QuickStudy Admin Password Recovery",
      text: "Your QuickStudy Admin password is: adminQS",
    };

    await transporter.sendMail(mailOptions);
    return { success: "Password recovery email sent to quickstudyuk@gmail.com." };
  } catch (error: any) {
    console.error("Email error:", error);
    return { error: "Failed to send email. Check email configuration." };
  }
}
