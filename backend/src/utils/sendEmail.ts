import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);
interface Data {
  name: string;
  email: string;
  secretFriend: string;
}

export async function sendEmail(array: [] | any) {
  let emails = array.map((items: Data) => {
    return {
      to: {
        name: `${items.name}`,
        email: `${items.email}`,
      },
      from: {
        name: "Henrique Marques",
        email: "marquesprogrammer@hotmail.com",
      },
      subject: `Olá, ${items.name}! Sorteio Realizado e seu amigo secreto é...`,
      html: `<p>Seu amigo secreto é ${items.secretFriend}. Prepara o presente</p>`,
    };
  });

  return await sgMail.send(emails);
}
