import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);
interface Data {
  name: string;
  email: string;
  secretFriend: string;
}
interface RegistersDb {
  draw: Data[];
  who: string;
}

export async function sendEmail(arrayDB: [] | any) {
  let emails = arrayDB.map((items: RegistersDb) => {
    return items.draw.map((drawers: Data) => ({
      to: {
        name: `${drawers.name}`,
        email: `${drawers.email}`,
      },
      from: {
        name: "Henrique Marques",
        email: "marquesprogrammer@hotmail.com",
      },
      subject: `Olá, ${drawers.name}! Sorteio Realizado e seu amigo secreto é...`,
      html: `<p>Seu amigo secreto é ${drawers.secretFriend}. Prepara o presente</p>`,
    }));
  });

  return await sgMail.send(emails);
}
