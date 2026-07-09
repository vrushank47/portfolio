const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Gold Glow */}
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#d29f22]/8 blur-[160px]" />

      {/* Crimson Glow */}
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#5d0018]/10 blur-[180px]" />

      {/* Center Ambient Light */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[150px]" />
    </div>
  );
};

export default Background;