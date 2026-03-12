const { app } = require("@azure/functions");
const sgMail = require("@sendgrid/mail");

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

      sgMail.setApiKey(apiKey);

      const msg = {
        to: mailTo,
        from: mailFrom,
        replyTo: email,
        subject: `New enquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nMessage:\n${message.trim()}`,
        html: `<h2>New Contact Enquiry</h2>
<p><strong>Name:</strong> ${name.trim()}</p>
<p><strong>Email:</strong> ${email.trim()}</p>
<p><strong>Message:</strong></p>
<p>${message.trim().replace(/\n/g, "<br>")}</p>`,
      };

      await sgMail.send(msg);

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
