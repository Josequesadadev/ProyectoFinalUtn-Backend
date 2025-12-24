// services/emailService.ts
import transporter from "../config/emailConfig"
import createTemplate from "../templates/emailTemplate"

interface SendEmailParams {
  subject: string
  emailUser: string
  message: string
}

const sendWelcomeEmail = async ({
  subject,
  emailUser,
  message
}: SendEmailParams): Promise<void> => {

  await transporter.sendMail({
    from: `"GamerStore" <${process.env.EMAIL_USER}>`,
    to: emailUser,
    subject,
    html: createTemplate(emailUser, message)
  })
}

export default sendWelcomeEmail

