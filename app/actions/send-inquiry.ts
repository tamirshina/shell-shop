"use server";

export async function sendInquiry(formData: {
  name: string;
  email: string;
  phone?: string;
  selectedProducts: string[];
  bespokeRequest?: string;
}) {
  const { name, email, phone, selectedProducts, bespokeRequest } = formData;

  const subject = `New First Drop Inquiry from ${name}`;
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
      <h2 style="color: #2c3e50; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Sea Shells Waitlist Inquiry</h2>
      
      <p style="font-size: 16px; margin: 15px 0;">A new bespoke waitlist application has been submitted.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; width: 140px;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Selected Pieces:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #b89c56; font-weight: bold;">
            ${selectedProducts.length > 0 ? selectedProducts.join(", ") : "None selected"}
          </td>
        </tr>
      </table>

      <h3 style="color: #2c3e50; margin-top: 30px; border-bottom: 1px solid #eaeaea; padding-bottom: 5px;">Bespoke Inquiries / Custom Request</h3>
      <div style="background-color: #f4f6f7; padding: 15px; border-left: 4px solid #b89c56; border-radius: 3px; font-style: italic; margin-top: 10px; line-height: 1.5;">
        ${bespokeRequest ? bespokeRequest.replace(/\n/g, "<br/>") : "No custom desires entered."}
      </div>

      <p style="font-size: 12px; color: #999; text-align: center; margin-top: 40px; border-top: 1px solid #eaeaea; padding-top: 20px;">
        This is an automated notification from your Sea Shells waitlist portal.
      </p>
    </div>
  `;

  // Log simulation to developer terminal
  console.log("\n==================================================");
  console.log(`[EMAIL NOTIFICATION SIMULATION]`);
  console.log(`To: tamir@seashells-holyland.com`);
  console.log(`Subject: ${subject}`);
  console.log(`Selected Items: ${selectedProducts.join(", ") || "None"}`);
  console.log(`Message Content:\n"${bespokeRequest || "No request message"}"`);
  console.log("==================================================\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      success: true,
      message: "Simulation active. Add RESEND_API_KEY to .env.local to send live emails.",
      simulated: true,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.RESEND_TO_EMAIL || "tamir@seashells-holyland.com",
        subject: subject,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API failure details:", errText);
      throw new Error(`Resend API returned status code ${res.status}`);
    }

    const data = await res.json();
    return {
      success: true,
      message: "Email sent successfully!",
      data,
    };
  } catch (error: any) {
    console.error("Failed to send email via Resend:", error);
    return {
      success: false,
      error: error.message || "Failed to send waitlist email",
    };
  }
}
