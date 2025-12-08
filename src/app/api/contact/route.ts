import { NextResponse } from 'next/server'

// Contact form API route
// For now, logs to console. Will integrate with Supabase next.

interface ContactFormData {
  name: string
  email: string
  company?: string
  stage?: string
  message: string
  site: string
  type: string
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the submission (will replace with Supabase insert)
    console.log('Contact form submission:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with Supabase
    // const { data, error } = await supabase
    //   .from('websites.contact_submissions')
    //   .insert({
    //     name: body.name,
    //     email: body.email,
    //     company: body.company,
    //     stage: body.stage,
    //     message: body.message,
    //     site: body.site,
    //     type: body.type,
    //   })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
