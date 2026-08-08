import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "El correo es requerido" }, { status: 400 });
    }

    // Enviamos el correo a TU bandeja personal
    const { data, error } = await resend.emails.send({
      from: "CamargoTech <onboarding@resend.dev>",
      to: "and43s2003@gmail.com",
      subject: "⚡ Nuevo Cliente Potencial - CamargoTech",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>¡Nuevo contacto recibido en CamargoTech!</h2>
          <p>Un visitante ha solicitado contacto desde la página web:</p>
          <p><strong>Correo del cliente:</strong> ${email}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error directo de Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Correo enviado con éxito ID:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });

  } catch (error) {
    console.error("Error catch general:", error);
    return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
  }
}