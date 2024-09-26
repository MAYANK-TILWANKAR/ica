import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import EnquiryExcelData from "@/models/EnquiryExcelData";

export async function POST(req) {
  try {
    await connectToDatabase();

    const data = await req.json(); // Get form data from request
    const newData = new EnquiryExcelData(data);
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
      to: "mayanktilwankar2355@gmail.com", // Recipient's email
      subject: "New Enquiry!", // Email subject
      text: `You have received a new enquiry.\n\nName: ${data.name}\nEmail: ${data.email}\nMobile:${data.mobile}\nMessage: ${data.message}`,
    };

    await transporter.sendMail(mailOptions); // Send the email

    // Respond with success
    return new Response(JSON.stringify(newData), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
