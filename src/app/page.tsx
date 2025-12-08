import {
  Hero,
  Mission,
  VideoSection,
  Portfolio,
  Accelerator,
  PirateMetrics,
  Leadership,
  ContactForm,
  Thesis,
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
        <VideoSection />
        <Portfolio />
        <Accelerator />
        <PirateMetrics />
        <Leadership />
        <Thesis />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
