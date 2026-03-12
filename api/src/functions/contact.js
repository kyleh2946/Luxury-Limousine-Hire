const { app } = require("@azure/functions");

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "contact",
  handler: async (request, context) => {
    try {
      const body = await request.json();
      const { name, email, message } = body;

      if (!name || typeof name !== "string" || name.trim().length === 0) {
        return {
          status: 400,
          jsonBody: { success: false, error: "Name is required." },
        };
      }

      if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
          status: 400,
          jsonBody: { success: false, error: "A valid email address is required." },
        };
      }

      if (!message || typeof message !== "string" || message.trim().length === 0) {
        return {
          status: 400,
          jsonBody: { success: false, error: "Message is required." },
        };
      }

      const apiKey = process.env.MAIL_API_KEY;
      const mailTo = process.env.MAIL_TO;
      const mailFrom = process.env.MAIL_FROM;

      if (!apiKey || !mailTo || !mailFrom) {
        context.error("Missing email configuration environment variables (MAIL_API_KEY, MAIL_TO, MAIL_FROM).");
        return {
          status: 500,
          jsonBody: { success: false, error: "Email service is not configured." },
        };
      }

      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          to: [mailTo],
          sender: mailFrom,
          reply_to_address: email,
          subject: `New enquiry from ${name.trim()}`,
          text_body: `Name: ${name.trim()}\nEmail: ${email.trim()}\nMessage:\n${message.trim()}`,
          html_body: `<h2>New Contact Enquiry</h2>
<p><strong>Name:</strong> ${name.trim()}</p>
<p><strong>Email:</strong> ${email.trim()}</p>
<p><strong>Message:</strong></p>
<p>${message.trim().replace(/\n/g, "<br>")}</p>`,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.data?.error) {
        context.error("SMTP2GO error:", JSON.stringify(result));
        return {
          status: 500,
          jsonBody: { success: false, error: "Failed to send message. Please try again later." },
        };
      }

      return {
        status: 200,
        jsonBody: { success: true },
      };
    } catch (err) {
      context.error("Failed to process contact form submission:", err);
      return {
        status: 500,
        jsonBody: { success: false, error: "Failed to send message. Please try again later." },
      };
    }
  },
});
