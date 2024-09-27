import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import DemoData from "@/models/DemoData";

export async function POST(req) {
  try {
    await connectToDatabase();

    const data = await req.json(); // Get form data from request
    const newData = new DemoData(data);
    await newData.save(); // Save to MongoDB

    // Set up Nodemailer to send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: data.email, // Sender's email from form data
      to: "icaglobal.in@gmail.com", // Recipient's email
      subject: "New Demo Class Booking!", // Email subject
      text: `You have received a new demo enquiry.\n\nName: ${data.name}\nEmail: ${data.email}\nMobile:${data.mobile}\nCollege or School: ${data.college}\nDate: ${data.date}\nCourse: ${data.course}`,
    };

    await transporter.sendMail(mailOptions); // Send the email

    // Respond with success
    return new Response(JSON.stringify(newData), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
