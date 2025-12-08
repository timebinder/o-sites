import {
  Hero,
  Mission,
  Portfolio,
  Accelerator,
  Leadership,
  PirateMetrics,
  AdvisoryServices,
  Thesis,
  ContactForm,
  Navbar,
  Footer,
} from '@/components/immortalventures'

export default function ImmortalVenturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Portfolio />
        <Accelerator />
        <Leadership />
        <PirateMetrics />
        <AdvisoryServices />
        <Thesis />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
