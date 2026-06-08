import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  ShoppingBag, 
  User, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  RotateCw,
  Gift
} from "lucide-react";

interface PhoneMockupProps {
  scrollPercentage: number;
}

export function InteractivePhoneMockup({ scrollPercentage }: PhoneMockupProps) {
  // Determine active stage based on scroll percentage
  // 0.00 - 0.30: Stage 1 - Home Screen + Story Ring loading (appears at 0.12)
  // 0.30 - 0.50: Stage 2 - Story Open
  // 0.50 - 0.68: Stage 3 - Nudge Bottom Sheet
  // 0.68 - 0.82: Stage 4 - Scratch Card Nudge
  // 0.82 - 0.92: Stage 5 - Spin the Wheel
  // 0.92 - 1.00: Stage 6 - SDK Connected Success Screen
  
  let stage = 1;
  let stageProgress = 0; // progress within the current stage

  if (scrollPercentage < 0.30) {
    stage = 1;
    stageProgress = Math.max(0, (scrollPercentage - 0.12) / 0.18);
  } else if (scrollPercentage < 0.50) {
    stage = 2;
    stageProgress = (scrollPercentage - 0.30) / 0.20;
  } else if (scrollPercentage < 0.68) {
    stage = 3;
    stageProgress = (scrollPercentage - 0.50) / 0.18;
  } else if (scrollPercentage < 0.82) {
    stage = 4;
    stageProgress = (scrollPercentage - 0.68) / 0.14;
  } else if (scrollPercentage < 0.92) {
    stage = 5;
    stageProgress = (scrollPercentage - 0.82) / 0.10;
  } else {
    stage = 6;
    stageProgress = (scrollPercentage - 0.92) / 0.08;
  }

  // State to track wheel spin completion in Stage 5 (Spin the Wheel)
  const [hasSpun, setHasSpun] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);

  useEffect(() => {
    if (stage === 5) {
      if (!hasSpun) {
        // Spin the wheel: rotate multiple times and land on a prize segment (e.g. 50% OFF, which is segment 3 -> ~135 degrees)
        setWheelRotation(1440 + 135);
        setHasSpun(true);
      }
    } else {
      setHasSpun(false);
      setWheelRotation(0);
    }
  }, [stage, hasSpun]);

  return (
    <div className="relative w-full max-w-[300px] xl:max-w-[325px] aspect-[9/18.5] mx-auto">
      {/* Glossy Overlay/Reflection and Shadow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-foreground/5 via-transparent to-foreground/5 pointer-events-none z-20 border border-foreground/10" />
      
      {/* Outer Phone Frame */}
      <div className="absolute inset-0 rounded-[2.5rem] border-[8px] border-foreground bg-background shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(255,255,255,0.05)] transition-colors duration-500 overflow-hidden flex flex-col">
        
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-foreground rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-800" />
          <div className="w-12 h-1 bg-neutral-900 dark:bg-neutral-800 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-800" />
        </div>

        {/* Status Bar */}
        <div className="h-10 px-6 pt-3 flex justify-between items-center text-[10px] font-semibold text-foreground/80 z-20 select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="font-mono">5G</span>
            <div className="w-4 h-2.5 border border-foreground/80 rounded-sm p-[1px] flex items-center">
              <div className="h-full w-3/4 bg-foreground/80 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Area */}
        <div className="flex-1 relative bg-background text-foreground transition-colors duration-500 overflow-hidden flex flex-col p-4 pt-1">
          
          {/* Main App Layout (Header + Scrollable Feed) */}
          <div className="flex-1 flex flex-col">
            {/* App Header */}
            <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-foreground text-background flex items-center justify-center font-bold text-xs">
                  E
                </div>
                <span className="font-bold text-xs tracking-wider">EMBEDCRAFTAPP</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/75">
                <Search className="h-4 w-4" />
                <div className="relative">
                  <Bell className="h-4 w-4" />
                  {stage >= 3 && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-foreground rounded-full animate-ping" />
                  )}
                </div>
              </div>
            </div>

            {/* Stories List Component */}
            <div className="flex gap-3 overflow-x-auto pb-3 border-b border-border/40 scrollbar-none">
              {/* Animated Story (EmbedCraft promo) */}
              <div className="flex flex-col items-center gap-1 shrink-0 relative cursor-pointer">
                <div className="relative h-12 w-12 flex items-center justify-center rounded-full bg-secondary border border-border">
                  {/* Story Progress Ring */}
                  <svg className="absolute inset-0 -rotate-90 w-full h-full p-[1px]">
                    <motion.circle
                      cx="23"
                      cy="23"
                      r="21"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 21}
                      strokeDashoffset={2 * Math.PI * 21 * (1 - (stage === 1 ? stageProgress : 1))}
                      className="text-foreground"
                    />
                  </svg>
                  {/* Inner Avatar */}
                  <div className="h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center relative overflow-hidden">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
                <span className="text-[9px] font-medium text-foreground tracking-tight">Live Offer</span>
              </div>

              {/* Placeholder Stories */}
              {[
                { label: "New In", icon: ShoppingBag },
                { label: "Sale", icon: Gift },
                { label: "Account", icon: User },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 shrink-0 opacity-40">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                    <s.icon className="h-4.5 w-4.5 text-foreground" />
                  </div>
                  <span className="text-[9px] text-foreground/80">{s.label}</span>
                </div>
              ))}
            </div>

            {/* App Feed Content */}
            <div className="flex-1 mt-3 space-y-3 overflow-y-auto pr-1">
              <div className="border border-border/50 rounded-xl p-3 bg-secondary/20">
                <div className="aspect-[4/3] rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse mb-3" />
                <div className="h-3.5 w-2/3 bg-foreground/15 rounded mb-2" />
                <div className="h-2.5 w-1/3 bg-foreground/10 rounded" />
              </div>
              <div className="border border-border/50 rounded-xl p-3 bg-secondary/20">
                <div className="h-3.5 w-3/4 bg-foreground/15 rounded mb-2" />
                <div className="h-2.5 w-1/2 bg-foreground/10 rounded" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STAGE 2: FULL-SCREEN STORY VIEW */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-neutral-950 text-neutral-100 z-30 p-4 flex flex-col"
              >
                {/* Story Top Progress Indicator */}
                <div className="flex gap-1 h-[2px] w-full mb-4">
                  <div className="flex-1 bg-neutral-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-neutral-100 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: stageProgress }}
                      transition={{ type: "tween", ease: "linear" }}
                    />
                  </div>
                  <div className="flex-1 bg-neutral-700/50 rounded-full" />
                </div>

                {/* Story Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-[10px] font-bold tracking-wider">EMBEDCRAFT × APP</div>
                  </div>
                  <button className="text-neutral-400 hover:text-white text-xs">✕</button>
                </div>

                {/* Story Main Content Card */}
                <div className="flex-1 border border-neutral-800 rounded-2xl bg-neutral-900 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-neutral-800 px-2 py-0.5 rounded-full">
                      FLASH PROMO
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mt-4 leading-tight">
                      Zero friction.<br />Instant checkout.
                    </h3>
                    <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                      Launch stories directly inside your app layouts instantly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-dashed border-neutral-700 rounded-lg p-3 text-center">
                      <div className="text-[10px] uppercase text-neutral-500">YOUR COUPON CODE</div>
                      <div className="text-lg font-mono font-bold tracking-widest text-white mt-1">
                        CRAFT40
                      </div>
                    </div>
                    
                    <button className="w-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs py-2.5 rounded-xl transition-colors">
                      Claim 40% Discount
                    </button>
                  </div>
                </div>

                {/* Swipe Up Area */}
                <div className="text-center py-3 text-[10px] text-neutral-400 flex flex-col items-center gap-1 select-none animate-pulse">
                  <span>Swipe up to explore</span>
                  <span>↑</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ========================================================================= */}
          {/* STAGE 3: IN-APP NUDGE / BOTTOM SHEET */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {stage === 3 && (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-3 right-3 bottom-3 border border-foreground bg-card text-card-foreground rounded-2xl p-4 shadow-xl z-20"
              >
                {/* Drag handle */}
                <div className="w-10 h-1 bg-foreground/20 rounded-full mx-auto mb-3" />
                
                <div className="flex gap-3 items-start">
                  <div className="h-8 w-8 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-snug">
                      Claim Your Welcome Reward!
                    </h4>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-normal">
                      We detected this is your first purchase. Get 15% off code <strong>HELLO15</strong> instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 border border-border text-foreground hover:bg-secondary text-[10px] py-1.5 rounded-lg font-medium transition-colors">
                    Dismiss
                  </button>
                  <button className="flex-1 bg-foreground text-background hover:bg-foreground/95 text-[10px] py-1.5 rounded-lg font-semibold transition-colors">
                    Apply Code
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ========================================================================= */}
          {/* STAGE 4: IN-APP SCRATCH CARD NUDGE */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {stage === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 p-5 flex flex-col items-center justify-center text-center animate-fade-in"
              >
                <div className="border border-foreground bg-card text-card-foreground p-5 rounded-2xl w-full relative shadow-xl overflow-hidden">
                  <span className="text-[9px] font-bold tracking-widest text-neutral-400 bg-secondary px-2.5 py-0.75 rounded-full uppercase">
                    Reward Nudge
                  </span>
                  <h4 className="text-sm font-bold mt-3">Scratch & Win!</h4>
                  <p className="text-[10px] text-muted-foreground mt-1 mb-4">
                    Scratch the card below to reveal your secret offer.
                  </p>

                  {/* Scratchable Card Container */}
                  <div className="w-full h-24 border border-dashed border-neutral-300 rounded-xl relative overflow-hidden flex items-center justify-center bg-secondary/10">
                    
                    {/* Underlying Revealed Offer */}
                    <div className="text-center p-3">
                      <div className="text-[9px] uppercase text-neutral-400">YOUR WINNING OFFER</div>
                      <div className="text-base font-extrabold tracking-wide text-foreground mt-1">
                        70% DISCOUNT
                      </div>
                      <div className="text-[9px] font-mono tracking-widest text-neutral-500 mt-0.5">
                        CODE: NINJA70
                      </div>
                    </div>

                    {/* Scratch overlay layer that scratches and reveals */}
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700 flex flex-col items-center justify-center text-[10px] font-bold text-neutral-600 dark:text-neutral-300 select-none pointer-events-none"
                    >
                      {/* Scratch scribble drawing path */}
                      <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                        <motion.path
                          d="M10,30 C30,70 50,20 70,80 T90,30"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                          className="text-neutral-400 dark:text-neutral-500"
                        />
                      </motion.svg>
                      
                      <motion.div 
                        animate={{ scale: [1, 0.92, 1], rotate: [0, -2, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="z-10 flex items-center gap-1.5"
                      >
                        <span>🖐️ Scratching...</span>
                      </motion.div>
                    </motion.div>

                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={stageProgress > 0.6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 1.8 }}
                    className="mt-4"
                  >
                    <button className="w-full bg-foreground text-background font-semibold text-xs py-2 rounded-lg hover:bg-foreground/90 transition-colors">
                      Claim Reward
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ========================================================================= */}
          {/* STAGE 5: GAMIFICATION (SPIN THE WHEEL) */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {stage === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 p-4 flex flex-col items-center justify-center text-center"
              >
                <Gift className="h-6 w-6 mb-1 text-foreground" />
                <h4 className="text-xs font-bold">Spin and Win</h4>
                <p className="text-[9px] text-muted-foreground max-w-[150px] mt-0.5 mb-4 leading-normal">
                  Try your luck to win coupons & exclusive rewards.
                </p>

                {/* The Wheel Container */}
                <div className="relative w-36 h-36 flex items-center justify-center my-2">
                  {/* Pin / Indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-foreground z-30" />
                  
                  {/* Rotating Wheel */}
                  <motion.div
                    animate={{ rotate: wheelRotation }}
                    transition={{ duration: 3, ease: [0.15, 0.85, 0.35, 1] }}
                    className="w-full h-full rounded-full border-[3px] border-foreground relative overflow-hidden bg-background shadow-md shadow-foreground/5"
                  >
                    {/* Slices representation using simple SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Slices lines */}
                      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="1.5" />
                      
                      {/* Slices text values (abbreviated) */}
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(22.5 50 50)">10%</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(67.5 50 50)">Free</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(112.5 50 50)">Try Again</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(157.5 50 50)">50% OFF</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(202.5 50 50)">20%</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(247.5 50 50)">Gift</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(292.5 50 50)">15%</text>
                      <text x="50" y="20" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" transform="rotate(337.5 50 50)">Thanks</text>
                    </svg>

                    {/* Central pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-foreground border-2 border-background flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-background" />
                    </div>
                  </motion.div>
                </div>

                {/* Prize notification */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={stageProgress > 0.6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.5 }}
                  className="mt-3 text-xs font-bold"
                >
                  🎉 Won: 50% OFF!
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ========================================================================= */}
          {/* STAGE 6: SDK SUCCESS SCREEN */}
          {/* ========================================================================= */}
          <AnimatePresence>
            {stage === 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-foreground text-background z-20 p-5 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 animate-pulse" />
                    <span className="font-bold text-sm">SDK CONNECTED</span>
                  </div>
                  
                  <div className="h-px bg-background/20 my-2" />

                  <div className="space-y-2.5 font-mono text-[9px] opacity-80">
                    <div className="flex justify-between">
                      <span>status:</span>
                      <span className="font-semibold bg-background text-foreground px-1.5 py-0.25 rounded">active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ping:</span>
                      <span>145ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span>synced:</span>
                      <span>3 campaigns</span>
                    </div>
                    <div className="flex justify-between">
                      <span>runtime:</span>
                      <span>Flutter Native</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[10px] opacity-70">
                    <RotateCw className="h-3 w-3 animate-spin" />
                    <span>Listening for dynamic events...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic Tooltip Nudge placed on the outer screen area so it is never clipped */}
          <AnimatePresence>
            {stage === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                className="absolute top-[106px] left-[12px] bg-foreground text-background text-[9px] font-bold py-1.5 px-3 rounded-lg shadow-xl z-20"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.25))" }}
              >
                {/* Arrow pointing up directly at the first story avatar */}
                <div className="absolute -top-1 left-[24px] w-2 h-2 bg-foreground rotate-45" />
                <span className="relative z-10 flex items-center gap-1.5 select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-background animate-ping" />
                  <span>Tooltip Nudge: Live Story</span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
      
      {/* Home button indicator at bottom of mockup */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-foreground rounded-full z-20 pointer-events-none" />
    </div>
  );
}
