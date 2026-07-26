import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "El correo es requerido" }, { status: 400 });
    }

    await resend.emails.send({
      from: "CamargoTech <onboarding@resend.dev>",
      to: "antoninocamargo2003@gmail.com", //[cite: 1]
      subject: "⚡ Nuevo Cliente Potencial - CamargoTech",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>¡Nuevo contacto recibido en CamargoTech!</h2>
          <p>Un visitante ha solicitado contacto desde la página web:</p>
          <p><strong>Correo del cliente:</strong> ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
  }
}