"use client";

import Image from "next/image";

const BASE = "https://cdn.prod.website-files.com/67c5741832d4da33d634d750";

const logos = [
  { src: `${BASE}/67c98336b799bff353525c45_companies-logo%20(1).svg`, alt: "Company 1" },
  { src: `${BASE}/67c98353145104d3fcb92646_companies-logo%20(2).svg`, alt: "Company 2" },
  { src: `${BASE}/67c9836abee96e60c36c8e28_companies-logo%20(3).svg`, alt: "Company 3" },
  { src: `${BASE}/67c9838fc9c2b7dee9c84e95_companies-logo%20(4).svg`, alt: "Company 4" },
  { src: `${BASE}/67c983a494953ab3f872b4d1_companies-logo%20(5).svg`, alt: "Company 5" },
  { src: `${BASE}/67c983b47d37ca2c20a3d2b9_companies-logo%20(6).svg`, alt: "Company 6" },
];

function LogoItem({ src, alt, dark }: { src: string; alt: string; dark?: boolean }) {
  return (
    <div className={`flex items-center justify-center px-10 py-3 shrink-0 transition-opacity ${dark ? "opacity-40 hover:opacity-80" : "opacity-80 hover:opacity-100"}`}>
      <Image
        src={src}
        alt={alt}
        width={120}
        height={40}
        className={`h-8 w-auto object-contain${dark ? " brightness-0 invert" : " grayscale brightness-[0.2]"}`}
        unoptimized
      />
    </div>
  );
}

export default function LogoMarquee({ dark }: { dark?: boolean }) {
  const doubled = [...logos, ...logos];

  return (
    <div className={`overflow-hidden ${dark ? "bg-transparent" : "py-10 border-y border-border bg-surface"}`}>
      <div className="relative">
        {/* Left fade */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${
            dark ? "from-black/60 to-transparent" : "from-surface to-transparent"
          }`}
        />
        {/* Right fade */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${
            dark ? "from-black/60 to-transparent" : "from-surface to-transparent"
          }`}
        />

        <div className="marquee-inner">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} dark={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}
