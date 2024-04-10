import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
	try {
		const formData = await req.json();
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: ['transportes.santaclaraanalytics@gmail.com'],
			subject: `Correo desde: ${formData.pathName}`,
			react: EmailTemplate({
				firstName: formData.name,
				email: formData.email || '',
				phone: formData.phone,
				message: formData.message,
				pathName: formData.pathName
			}),
			text: ''
		});
		return NextResponse.json({ message: 'Email sent' }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
