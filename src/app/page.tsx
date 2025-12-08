import {
  Hero,
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
