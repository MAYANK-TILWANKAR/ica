import connectToDatabase from "@/lib/mongoose";
import EnquiryExcelData from "@/models/EnquiryExcelData";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch the data from the EnquiryData collection
    const data = await EnquiryExcelData.find({});

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ success: false, error: "Database connection error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
