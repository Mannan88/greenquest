"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Recycle,
  Leaf,
  Sun,
  Repeat2,
  FlaskConical,
  Gauge,
  HardHat,
  Mail,
  MapPin,
} from "lucide-react";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

// Content
const LOOP_STAGES = [
  { label: "Waste", color: "#6B7B6E" },
  { label: "Biomass", color: "#8DC63F" },
  { label: "Energy", color: "#4CAF50" },
  { label: "Circular Economy", color: "#8DC63F" },
];

const SERVICES = [
  { icon: Recycle, title: "Waste Management Solutions", text: "End-to-end collection, processing, and recycling of industrial, agricultural, and municipal waste." },
  { icon: Leaf, title: "Biomass Resource Management", text: "Converting agricultural and biomass residues into biomass fuel, bio-based materials, and engineered solutions." },
  { icon: Sun, title: "Renewable Energy Solutions", text: "Consulting and project development across solar, wind, biomass energy, and emerging clean technologies." },
  { icon: Repeat2, title: "Circular Economy Consulting", text: "Helping businesses cut waste and improve resource efficiency through circular economy principles." },
  { icon: FlaskConical, title: "Green Technology R&D", text: "Researching sustainable manufacturing, waste valorization, renewable materials, and clean industrial processes." },
  { icon: Gauge, title: "Sustainability Consulting", text: "Guiding organizations on carbon reduction, resource optimization, ESG, and sustainable infrastructure." },
  { icon: HardHat, title: "Industrial Project Development", text: "Concept-to-execution support for green manufacturing, renewable energy, and biomass processing facilities." },
];

const WHY_US = [
  "Innovation-driven sustainable solutions",
  "Commitment to environmental responsibility",
  "Focus on research and emerging technologies",
  "Practical, scalable, and commercially viable solutions",
  "Dedicated to building a circular economy",
  "Customer-centric approach with long-term partnerships",
];

const TESTIMONIALS = [
  { quote: "Greenquest combines innovation with practical sustainability solutions, making them a valuable partner for organizations looking to reduce their environmental impact.", who: "Client testimonial (coming soon)" },
  { quote: "Their vision of transforming waste into valuable resources aligns perfectly with the future of sustainable industry.", who: "Industry partner (coming soon)" },
  { quote: "We are currently collaborating with industry partners and look forward to showcasing our client success stories as our projects progress.", who: "Greenquest team" },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<SVGGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Hero loop diagram
      const arcs = gsap.utils.toArray<SVGPathElement>(".loop-arc");
      const nodes = gsap.utils.toArray<SVGCircleElement>(".loop-node");
      const labels = gsap.utils.toArray<SVGTextElement>(".loop-label");

      if (!reduced) {
        arcs.forEach((arc) => {
          const len = arc.getTotalLength();
          gsap.set(arc, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap.set(nodes, { scale: 0, transformOrigin: "center" });
        gsap.set(labels, { opacity: 0, y: 6 });

        gsap
          .timeline({ delay: 0.3 })
          .to(arcs, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut", stagger: 0.22 })
          .to(nodes, { scale: 1, duration: 0.4, ease: "back.out(3)", stagger: 0.22 }, "-=1.1")
          .to(labels, { opacity: 1, y: 0, duration: 0.5, stagger: 0.22 }, "-=1.2")
          .to(loopRef.current, { rotation: 360, duration: 60, ease: "none", repeat: -1, transformOrigin: "center" });

        gsap.to(".loop-label-counter", { rotation: -360, duration: 60, ease: "none", repeat: -1, transformOrigin: "center" });
      } else {
        gsap.set(arcs, { strokeDashoffset: 0 });
        gsap.set(nodes, { scale: 1 });
        gsap.set(labels, { opacity: 1 });
      }

      gsap.from(".hero-reveal", { opacity: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.1 });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, { opacity: 0, y: 28, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((group) => {
        gsap.from(group.children, { opacity: 0, y: 24, duration: 0.6, ease: "power2.out", stagger: 0.1, scrollTrigger: { trigger: group, start: "top 85%" } });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className={`${display.variable} ${body.variable} ${mono.variable} bg-[#F1EDE2] text-[#14532D] font-[family-name:var(--font-body)] overflow-x-hidden`}>
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#F1EDE2]/95 border-b border-[#14532D]/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Image src="/greenquest_logo.png" alt="Greenquest logo" width={36} height={36} className="rounded-full size-9" />
            <span className="font-[family-name:var(--font-display)] font-bold tracking-tight text-lg">Greenquest</span>
          </div>
          <a href="#contact" className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-[#4CAF50] text-white hover:bg-[#3d9142] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]">
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-dvh flex items-center pt-20 pb-12 px-6 bg-[#14532D] text-white">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="hero-reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#8DC63F] mb-4">
              Greenquest Resource Management Pvt. Ltd.
            </p>
            <h1 className="hero-reveal font-[family-name:var(--font-display)] font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl mb-6">
              Greener today.
              <br />
              <span className="text-[#8DC63F]">Better tomorrow.</span>
            </h1>
            <p className="hero-reveal text-white/80 text-base sm:text-lg leading-relaxed max-w-md mb-8">
              Building a sustainable future through technologies that transform waste into value, accelerate clean energy adoption, and create a circular economy for generations to come.
            </p>
            <div className="hero-reveal flex flex-wrap gap-4">
              <a href="#services" className="px-6 py-3 rounded-full bg-[#8DC63F] text-[#14532D] font-semibold hover:bg-[#9ed456] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F]">
                Explore our services
              </a>
              <a href="#about" className="px-6 py-3 rounded-full border border-white/25 hover:border-white/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                Who we are
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-100 h-auto" role="img" aria-label="Diagram showing waste flowing through biomass and energy stages into a circular economy">
              <g ref={loopRef}>
                {LOOP_STAGES.map((stage, i) => {
                  const total = LOOP_STAGES.length;
                  const gap = 10;
                  const sweep = 360 / total - gap;
                  const start = (360 / total) * i + gap / 2 - 90;
                  const end = start + sweep;
                  const r = 150;
                  const cx = 200;
                  const cy = 200;
                  const toXY = (deg: number) => {
                    const rad = (deg * Math.PI) / 180;
                    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
                  };
                  const [x1, y1] = toXY(start);
                  const [x2, y2] = toXY(end);
                  const largeArc = sweep > 180 ? 1 : 0;
                  const midDeg = (start + end) / 2;
                  const [lx, ly] = toXY(midDeg);
                  const [nx, ny] = toXY(end);

                  return (
                    <g key={stage.label}>
                      <path className="loop-arc" d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`} fill="none" stroke={stage.color} strokeWidth={3} strokeLinecap="round" />
                      <circle className="loop-node" cx={nx} cy={ny} r={5} fill={stage.color} />
                      <g className="loop-label-counter" style={{ transformOrigin: "200px 200px" }}>
                        <text className="loop-label" x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="16" letterSpacing="0.5">
                          {stage.label}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </g>
              <text x="200" y="196" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-display)" fontWeight={700} fontSize="30">Value</text>
              <text x="200" y="218" textAnchor="middle" fill="#8DC63F" fontFamily="var(--font-mono)" fontSize="16" letterSpacing="1">FROM WASTE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#4CAF50] mb-3">About us</p>
          <h2 className="reveal font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl max-w-2xl mb-6">Who we are</h2>
          <p className="reveal text-[#3F4A42] leading-relaxed max-w-3xl mb-4">
            Greenquest Resource Management Pvt. Ltd. is a sustainability-focused company committed to developing and implementing cutting-edge technologies that contribute to a cleaner, greener, and more resource-efficient world. We believe environmental challenges can be transformed into opportunities through innovation, responsible resource management, and renewable energy solutions.
          </p>
          <p className="reveal text-[#3F4A42] leading-relaxed max-w-3xl mb-12">
            Our focus spans waste management, biomass utilization, renewable energy, circular economy solutions, and emerging green technologies such as green hydrogen, solar, and wind energy. As a forward-looking startup, we research and commercialize next-generation sustainable technologies that help industries, governments, and communities reduce their environmental footprint while creating long-term value.
          </p>

          <div className="reveal-stagger grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-[#14532D] text-white">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl mb-3 text-[#8DC63F]">Our mission</h3>
              <p className="text-white/80 leading-relaxed">
                To create a cleaner and more sustainable planet by developing innovative green technologies, promoting renewable energy, transforming waste into valuable resources, and enabling a circular economy that benefits people and the environment.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-[#14532D]/15">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl mb-3 text-[#4CAF50]">Our vision</h3>
              <p className="text-[#3F4A42] leading-relaxed">
                To become a leading sustainability and clean technology company driving the transition towards a circular, low-carbon economy through innovation, research, and responsible resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#4CAF50] mb-3">What we do</p>
          <h2 className="reveal font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl mb-10 max-w-2xl">Our services</h2>

          <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-[#14532D]/10 hover:border-[#4CAF50]/50 transition-colors">
                <Icon className="size-6 text-[#4CAF50] mb-4" strokeWidth={1.75} />
                <h3 className="font-[family-name:var(--font-display)] font-bold text-base mb-2">{title}</h3>
                <p className="text-[#5B6B5E] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-16 bg-[#EFF6EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#4CAF50] mb-3">Why choose us</p>
            <h2 className="reveal font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl max-w-md">Sustainability, built for the long run.</h2>
          </div>
          <ul className="reveal-stagger space-y-4">
            {WHY_US.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-1.5 size-2 rounded-full bg-[#4CAF50] shrink-0" />
                <span className="text-[#3F4A42] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#4CAF50] mb-3">In their words</p>
          <h2 className="reveal font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl mb-10 max-w-2xl">Testimonials</h2>

          <div className="reveal-stagger grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.who} className="p-7 rounded-2xl border border-[#14532D]/10 flex flex-col justify-between">
                <p className="text-[#3F4A42] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <cite className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wide text-[#6B7B6E] not-italic">{t.who}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Contact and footer */}
      <section id="contact" className="px-6 py-16 bg-[#14532D] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="reveal font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#8DC63F] mb-3">Get in touch</p>
            <h2 className="reveal font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl mb-8 max-w-md">Let&rsquo;s build something regenerative.</h2>

            <div className="reveal-stagger space-y-4 text-white/85">
              <div className="flex gap-3">
                <MapPin className="size-5 text-[#8DC63F] shrink-0 mt-0.5" />
                <p>
                  Greenquest Resource Management Pvt. Ltd.
                  <br />
                  X-123 Rahul Market, Raghubarpur No.1
                  <br />
                  Gandhinagar, Delhi 110032
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="size-5 text-[#8DC63F] shrink-0" />
                <a href="mailto:info@greenquest.in" className="hover:text-[#8DC63F] transition-colors">info@greenquest.in</a>
              </div>
            </div>

            {/*<div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/share/1QCNujqr6B/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="size-10 rounded-full border border-white/25 flex items-center justify-center hover:border-[#8DC63F] hover:text-[#8DC63F] transition-colors">
                <Facebook className="size-4" />
              </a>
              <span aria-label="LinkedIn, coming soon" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/30">
                <Linkedin className="size-4" />
              </span>
              <span aria-label="X, coming soon" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/30">
                <Twitter className="size-4" />
              </span>
              <span aria-label="Instagram, coming soon" className="size-10 rounded-full border border-white/10 flex items-center justify-center text-white/30">
                <Instagram className="size-4" />
              </span>
            </div>*/}
          </div>

          <form className="reveal space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-[family-name:var(--font-mono)] uppercase tracking-wide text-white/60 mb-2">Name</label>
              <input id="name" type="text" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8DC63F]" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-[family-name:var(--font-mono)] uppercase tracking-wide text-white/60 mb-2">Email</label>
              <input id="email" type="email" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8DC63F]" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-[family-name:var(--font-mono)] uppercase tracking-wide text-white/60 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8DC63F]" placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="px-6 py-3 rounded-full bg-[#8DC63F] text-[#14532D] font-semibold hover:bg-[#9ed456] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DC63F]">
              Send message
            </button>
          </form>
        </div>

        <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-md p-1">
              <Image src="/greenquest_logo.png" alt="Greenquest logo" width={24} height={24} className="rounded size-6" />
            </div>
            <span className="font-[family-name:var(--font-mono)] text-xs text-white/60">© {new Date().getFullYear()} Greenquest Resource Management Pvt. Ltd.</span>
          </div>
          <div className="flex gap-6 font-[family-name:var(--font-mono)] text-xs text-white/60">
            <span>Privacy Policy (coming soon)</span>
            <span>Terms of Service (coming soon)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
