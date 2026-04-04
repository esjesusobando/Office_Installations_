import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 border-t border-glass-border flex flex-col items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-black tracking-tighter mb-6 block">
            OBAND<span className="text-accent underline">.</span>
          </Link>
          <p className="text-neutral-500 max-w-sm leading-relaxed">
            Leading the digital frontier through innovative engineering and premium design. 
            Part of the PersonalOS v6.1 ecosystem.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs text-neutral-400">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-xs text-neutral-400">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t border-glass-border/30 text-neutral-600 text-xs font-mono tracking-widest uppercase">
        <span>&copy; 2026 OBAND // All Rights Reserved</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
