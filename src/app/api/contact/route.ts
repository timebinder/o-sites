import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    // Check if Supabase is configured
    if (!supabase) {
      console.log('Supabase not configured - logging submission:', body)
      return NextResponse.json(
        { success: true, message: 'Form submitted (logging mode)' },
        { status: 200 }
      )
    }

    // Insert into Supabase (websites schema)
    const { error } = await supabase
      .schema('websites')
      .from('contact_submissions')
      .insert({
        name: body.name,
        email: body.email,
        company: body.company || null,
        stage: body.stage || null,
        message: body.message,
        site: body.site,
        submission_type: body.type,
      })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

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
