import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request): Promise<Response> {
    const { name, email, message }: ContactFormData = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission on Personal Website from ${name} (${email})`,
            text: message,
        });

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}