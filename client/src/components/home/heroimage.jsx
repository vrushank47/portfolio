import vrushankPhoto from "../../assets/images/vrushank.jpeg";

/**
 * Hero portrait frame.
 * The whole wireframe layer is a single SVG (viewBox 470 x 598) so every
 * line, node and crosshair stays perfectly aligned and scales with the frame.
 * The photo is a normal <img> layered on top, centred on the SVG's ring.
 */

const GOLD = "#d29f22";
const BLUE = "#3f78b5";

const HeroImage = () => {
  return (
    <div
      className="relative mx-auto aspect-[470/598] w-full max-w-[470px] lg:mx-0 lg:justify-self-end"
      style={{ width: "min(100%, 470px, calc((100svh - 4rem) * 0.786))" }}
    >
      <svg
        viewBox="0 0 470 598"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full overflow-visible [&_*]:[vector-effect:non-scaling-stroke]"
      >
        <defs>
          {/* Honeycomb tile: pointy-top hexagons, r = 24 */}
          <pattern id="hf-hex" width="41.569" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M20.785 0 L41.569 12 V36 L20.785 48 L0 36 V12 Z M20.785 48 V72"
              stroke={BLUE}
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </pattern>

          <clipPath id="hf-inner-clip">
            <rect x="22" y="22" width="426" height="554" rx="34" />
          </clipPath>

          <filter id="hf-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="hf-halo" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor={GOLD} stopOpacity="0.22" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </radialGradient>

          <radialGradient id="hf-panel" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#1a1a22" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0d0d12" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        {/* ---- Panels --------------------------------------------------- */}
        <rect x="1" y="1" width="468" height="596" rx="46" fill="url(#hf-panel)" stroke={GOLD} strokeOpacity="0.7" />
        <rect x="22" y="22" width="426" height="554" rx="34" stroke={BLUE} strokeOpacity="0.75" />

        {/* Hex mesh, clipped to the inner panel */}
        <g clipPath="url(#hf-inner-clip)">
          <rect x="22" y="22" width="426" height="554" fill="url(#hf-hex)" />
        </g>

        {/* ---- Halo + rings around the portrait -------------------------- */}
        <circle cx="235" cy="299" r="200" fill="url(#hf-halo)" />
        <circle cx="235" cy="299" r="181" stroke={BLUE} strokeOpacity="0.85" strokeWidth="1.25" />
        <circle cx="235" cy="299" r="160" stroke={GOLD} strokeOpacity="0.22" />

        {/* ---- Top: gold crosshair + blue diamond ------------------------ */}
        <g stroke={GOLD} strokeOpacity="0.85">
          <path d="M102 35 H234" />
          <path d="M189 0 V53" />
          <path d="M264 103 H352" strokeOpacity="0.55" />
        </g>
        <path d="M392 38 L440 86 L392 134 L344 86 Z" stroke={BLUE} strokeOpacity="0.85" />

        {/* ---- Left edge: node chain ------------------------------------- */}
        <circle cx="6" cy="161" r="6" fill={GOLD} filter="url(#hf-glow)" />
        <path d="M0 188 H52" stroke={GOLD} strokeOpacity="0.85" />
        <path d="M27 188 V313" stroke={BLUE} strokeOpacity="0.55" />
        <path d="M52 173 V220" stroke={BLUE} strokeOpacity="0.7" />
        <circle cx="52" cy="173" r="3.5" fill={BLUE} />
        <circle cx="52" cy="220" r="3.5" fill={BLUE} />
        <path d="M86 207 H118" stroke={GOLD} strokeWidth="3" strokeOpacity="0.9" />

        {/* ---- Right of portrait: bracket + dash ------------------------- */}
        <path d="M384 321 H402 a15 15 0 0 1 15 15 V460" stroke={GOLD} strokeOpacity="0.8" />
        <path d="M417 410 H470" stroke={GOLD} strokeOpacity="0.8" />
        <path d="M352 391 H384" stroke={GOLD} strokeWidth="4" strokeOpacity="0.95" />
        <circle cx="448" cy="474" r="5" fill={GOLD} filter="url(#hf-glow)" />

        {/* ---- Bottom-left: dot, square, blue tick ----------------------- */}
        <circle cx="107" cy="423" r="5" fill={GOLD} filter="url(#hf-glow)" />
        <rect
          x="34"
          y="495"
          width="36"
          height="36"
          stroke={GOLD}
          strokeOpacity="0.7"
          transform="rotate(10 52 513)"
        />
        <path d="M104 495 H169" stroke={BLUE} strokeOpacity="0.8" />
        <circle cx="106" cy="495" r="2.5" fill={BLUE} />

        {/* ---- Bottom: crosshair + node ---------------------------------- */}
        <path d="M228 554 H362" stroke={GOLD} strokeOpacity="0.85" />
        <path d="M282 533 V598" stroke={GOLD} strokeOpacity="0.85" />
        <circle cx="363" cy="555" r="4.5" fill={BLUE} filter="url(#hf-glow)" />

       
      </svg>

      {/* Portrait */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[63.8%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-[#d29f22]/60 bg-[#252628] shadow-[0_0_48px_rgba(210,159,34,0.28)]">
        <img
          src={vrushankPhoto}
          alt="Vrushank Saravade"
          className="h-full w-full object-cover object-[210%_90%]"
        />
        {/* subtle gold tint over the photo to match the theme */}
        <div className="pointer-events-none absolute inset-0 bg-[#d29f22]/5 mix-blend-overlay" />
      </div>
    </div>
  );
};

export default HeroImage;