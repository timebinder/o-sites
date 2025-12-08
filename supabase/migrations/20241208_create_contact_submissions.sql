-- Create websites schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS websites;

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS websites.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  stage TEXT,
  message TEXT NOT NULL,
  site TEXT NOT NULL,
  submission_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read_at TIMESTAMPTZ,
  archived_at TIMESTAMPTZ
);

-- Create index for querying by site
CREATE INDEX IF NOT EXISTS idx_contact_submissions_site ON websites.contact_submissions(site);

-- Create index for querying by email
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON websites.contact_submissions(email);

-- Enable RLS
ALTER TABLE websites.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON websites.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated reads" ON websites.contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update submissions (e.g., marking as read)
CREATE POLICY "Allow authenticated updates" ON websites.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);
