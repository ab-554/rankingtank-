import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // TODO: Wire up Resend when API key is provided
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@abdulbasit.nl',
    //   to: 'hello@abdulbasit.nl',
    //   subject: `New inquiry from ${data.name}`,
    //   html: `...`,
    // });

    console.log('Contact form submission:', data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
