import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, phone, company, message } = await req.json()

        await resend.emails.send({
            from: "ARQA Website <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL!,
            subject: `New Contact Message from ${name}`,
            replyTo: email,
            html: `
                <h3>New Contact Message</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone || "-"}</p>
                <p><b>Company:</b> ${company || "-"}</p>
                <p><b>Message:</b><br/>${message}</p>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
