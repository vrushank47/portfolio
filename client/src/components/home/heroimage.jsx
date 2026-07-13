import vrushankPhoto from "../../assets/images/vrushank.jpeg";

const HeroImage = () => {
  return (
    <div className="relative ml-10 flex h-[560px] w-[440px] items-center justify-center">
      {/* Outer Gold Frame */}
      <div className="absolute inset-0 rounded-[36px] border border-[#d29f22]/40" />

      {/* Second Frame */}
      <div className="absolute inset-5 rounded-[30px] border border-[#d29f22]/20" />
      {/* Vertical Line */}
      <div className="absolute left-6 top-24 h-56 w-px bg-gradient-to-b from-transparent via-[#d29f22]/40 to-transparent" />

      {/* Vertical Line */}
      <div className="absolute right-6 bottom-24 h-48 w-px bg-gradient-to-b from-transparent via-[#d29f22]/30 to-transparent" />

      {/* Horizontal */}
      <div className="absolute top-8 left-24 h-px w-36 bg-gradient-to-r from-[#d29f22]/40 to-transparent" />

      {/* Horizontal */}
      <div className="absolute bottom-10 right-24 h-px w-36 bg-gradient-to-l from-[#d29f22]/40 to-transparent" />

      {/* Accent Frame */}
      <div className="absolute h-[400px] w-[310px] translate-x-5 translate-y-5 rounded-[24px] border border-[#d29f22]/15" />

      {/* Gold Accent Line */}
      <div className="absolute left-20 top-48 h-1 w-10 bg-[#d29f22]" />

      {/* Gold Accent Line */}
      <div className="absolute right-20 bottom-48 h-1 w-8 bg-[#d29f22]" />

      {/* Gold Dot */}
      <div className="absolute right-24 top-52 h-2 w-2 rounded-full bg-[#d29f22]" />

      {/* Gold Dot */}
      <div className="absolute left-24 bottom-40 h-2 w-2 rounded-full bg-[#d29f22]" />

      {/* Left Cut */}
      <div className="absolute left-0 top-44 h-px w-12 bg-[#d29f22]/40" />

      {/* Right Cut */}
      <div className="absolute right-0 bottom-44 h-px w-12 bg-[#d29f22]/40" />

      {/* Top Cut */}
      <div className="absolute top-0 left-44 h-12 w-px bg-[#d29f22]/40" />

      {/* Bottom Cut */}
      <div className="absolute bottom-0 right-44 h-12 w-px bg-[#d29f22]/40" />

      <div className="absolute top-24 right-28 h-px w-20 bg-[#d29f22]/25" />

      <div className="absolute bottom-24 left-24 h-px w-16 bg-[#d29f22]/20" />

      <div className="absolute top-40 left-12 h-12 w-px bg-[#d29f22]/20" />

      <div className="absolute bottom-32 right-12 h-14 w-px bg-[#d29f22]/20" />

      {/* Decorative Square */}
      <div className="absolute top-12 right-10 h-16 w-16 border border-[#d29f22]/20 rotate-45" />

      {/* Small Square */}
      <div className="absolute bottom-16 left-8 h-8 w-8 border border-[#d29f22]/30 rotate-12" />

      {/* Circle */}
      <div className="absolute top-36 left-0 h-3 w-3 rounded-full bg-[#d29f22]/60" />

      {/* Circle */}
      <div className="absolute bottom-28 right-4 h-2 w-2 rounded-full bg-[#d29f22]" />

      <div className="relative flex items-center justify-center">
        {/* Soft Glow */}
        <div className="absolute h-[300px] w-[300px] rounded-full bg-[#d29f22]/5 blur-3xl" />
        <div className="absolute h-[340px] w-[340px] rounded-full border border-[#d29f22]/10" />
        <div className="absolute h-[420px] w-[420px] rounded-full border border-[#d29f22]/5" />

        {/* Portrait */}
        <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border border-[#d29f22]/30 bg-[#252628]/60 backdrop-blur-sm">
          <img
            src={vrushankPhoto}
            alt="Vrushank Saravade"
            className="h-full w-full object-cover object-[210%_90%]"
          />
          {/* subtle gold tint over the photo to match the theme */}
          <div className="pointer-events-none absolute inset-0 bg-[#d29f22]/5 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;