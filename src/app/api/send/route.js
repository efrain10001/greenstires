import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_dNeWcc9c_8686trGb2qxDwppRFgK3LW61");

export async function POST(req, res) {
  try {
    const data = await resend.emails.send({
      from: "<noreplaygreenstires.com>",
      to: ["moalmiguel@gmail.com"],
      subject: "Hello world",
      react: <p>ejemplo template</p>,
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
