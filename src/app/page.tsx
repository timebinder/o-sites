import {
  Hero,
  VideoSection,
  Portfolio,
  Accelerator,
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
        <VideoSection />
        <Portfolio />
        <Accelerator />
        <Leadership />
        <Thesis />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
