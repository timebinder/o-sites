import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/immortalventures/iv-logo.png"
              alt="Immortal Ventures"
              width={40}
              height={40}
              className="opacity-80"
            />
            <span className="text-zinc-400 text-sm">
              Immortal Ventures is a subsidiary of Cyclic Media, Inc.
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#portfolio" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Portfolio
            </a>
            <a href="#accelerator" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Accelerator
            </a>
            <a href="#contact" className="text-zinc-500 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Immortal Ventures
          </p>
        </div>
      </div>
    </footer>
  )
}
