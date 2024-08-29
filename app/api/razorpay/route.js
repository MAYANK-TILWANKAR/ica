// app/api/razorpay/route.js
import Razorpay from "razorpay";
import shortid from "shortid";

export async function POST(request) {
  try {
    const { taxAmt } = await request.json();

    // Initialize Razorpay instance with your API keys
    const razorpay = new Razorpay({
      key_id: "rzp_test_bXKakLpXIfiPaY",
      key_secret: "pWupPwb7jzIp9kEgmC1qvwh8",
    });

    // Create an order in Razorpay
    const payment_capture = 1;
    const amount = taxAmt;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    const response = await razorpay.orders.create(options);

    return new Response(JSON.stringify({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
