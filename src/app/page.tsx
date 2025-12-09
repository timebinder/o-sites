import {
  Hero,
  Mission,
  Portfolio,
  Accelerator,
  Leadership,
  AdvisoryServices,
  SectionNav,
  Footer,
} from '@/components/immortalventures'

export default function ImmortalVenturesPage() {
  return (
    <>
      <main>
        <Hero />
        <SectionNav />
        <Mission />
        {/* Section anchor wrappers - IDs here for accurate scroll position detection */}
        <div id="portfolio-anchor" className="relative">
          <Portfolio />
        </div>
        <div id="accelerator-anchor" className="relative">
          <Accelerator />
        </div>
        <div id="advisory-anchor" className="relative">
          <AdvisoryServices />
        </div>
        <div id="leadership-anchor" className="relative">
          <Leadership />
        </div>
      </main>
      <Footer />
    </>
  )
}
