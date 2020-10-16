import sgMail, { MailDataRequired } from "@sendgrid/mail";
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export async function sendEmail(emailTo: string, name: string) {
  const msg: MailDataRequired = {
    to: {
      email: emailTo,
      name,
    },
    from: {
      email: "marquesprogrammer@hotmail.com",
      name: "Henrique Marques Dev",
    }, // Use the email address or domain you verified above
    subject: "Aqui está o seu amigo secreto",
    html: `
        
        <body>
        <h1 style="color:red; font-size:28px;">Seu amigo secreto é ${name}</h1>
        <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="image" width="250" height="250"/>
        <p style="color:blue;">Obrigado por participar do amigo secreto! </p>
        </body>
        `,
  };

  return await sgMail.send(msg);
}
