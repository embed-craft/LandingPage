import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Zap,
  WifiOff,
  MousePointerClick,
  ShieldCheck,
  Store,
  Send,
  Layers,
  Boxes,
  Square,
  Mail,
  Sparkles,
  PlayCircle,
  Smartphone,
  Bell,
  Image as ImageIcon,
  Target,
  BarChart3,
  Gamepad2,
  Gift,
  LayoutDashboard,
  Megaphone,
  GitBranch,
  Users,
  FileText,
  Palette,
  Trophy,
  MonitorPlay,
  Code2,
  Settings,
  Sun,
  Moon,
} from "lucide-react";
import bottomsheetGif from "@/assets/bottomsheet.gif";
import storiesGif from "@/assets/stories.gif";
import embedCraftLogo from "@/assets/logo.png";
import onboardingImg from "@/assets/onboarding.avif";
import adoptionImg from "@/assets/adoption.avif";
import conversionImg from "@/assets/conversion.avif";
import gamificationImg from "@/assets/gamification.avif";
import gdprBadge from "@/assets/gdpr-badge.svg";
import soc2Badge from "@/assets/soc2-badge.png";
import isoBadge from "@/assets/iso-badge.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const countUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur-xl transition-all hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
      ) : (
        <Sun className="h-5 w-5 text-neutral-400" />
      )}
    </button>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img src={embedCraftLogo} alt="EmbedCraft" className="h-full w-full object-contain dark:invert" />
      </div>
      <span className="font-bold text-3xl tracking-tightest leading-none">EmbedCraft</span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-2xl border-2 border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl">
          <Logo />
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border px-1.5 py-1.5">
            {[
              { label: "Features", href: "#features" },
              { label: "Integrations", href: "#integrations" },
              { label: "Docs", href: "https://docs.embedcraft.com/" },
              { label: "Pricing", href: "#pricing" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="px-3 py-1 text-sm text-neutral-600 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              className="hidden sm:inline-flex px-3 py-1.5 text-sm text-neutral-700 hover:text-foreground transition-colors"
              href="https://dashboard.embedcraft.com"
              target="_blank"
              rel="noreferrer"
            >
              Log in
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-neutral-800 transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-4 pt-4 pb-12 sm:pt-6">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto max-w-5xl text-center"
      >

        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-col items-center mb-16"
        >
          <div className="h-48 w-48 flex items-center justify-center animate-float mb-8">
            <img src={embedCraftLogo} alt="EmbedCraft" className="h-full w-full object-contain dark:invert" />
          </div>
          <div className="font-bold text-5xl tracking-tightest mb-6 text-foreground">EmbedCraft</div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[1.1] text-foreground">
            Tailored app <span className="text-neutral-400">experiences</span> in minutes.
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed"
        >
          Launch nudges, stories, gamification, and rich in-app widgets directly inside
          your Flutter app. No code changes. No app store reviews. 145ms latency.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-neutral-800 transition-colors"
          >
            Get a Demo <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href="https://docs.embedcraft.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Read Documentation
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <div className="relative rounded-3xl border-2 border-border bg-secondary/40 p-3 sm:p-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background bg-grid">
            <DashboardMockup />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative h-[420px] sm:h-[520px] p-6 sm:p-10">
      {/* Dashboard panel */}
      <div className="absolute inset-6 sm:inset-10 rounded-xl border border-border bg-background shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <div className="ml-3 text-xs text-neutral-500">embedcraft.app/console</div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-5">
          <div className="col-span-3 space-y-2">
            {["Campaigns", "Stories", "Nudges", "Audiences", "Analytics"].map((s, i) => (
              <div
                key={s}
                className={`rounded-lg px-3 py-2 text-xs ${i === 1 ? "bg-foreground text-background" : "text-neutral-600 hover:bg-secondary"
                  }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="col-span-9 space-y-3">
            <div className="flex gap-3">
              {["Active", "145ms", "+24%"].map((v, i) => (
                <div key={i} className="flex-1 rounded-lg border border-border p-3">
                  <div className="text-[10px] uppercase tracking-wide text-neutral-500">
                    {["Status", "Latency", "Engagement"][i]}
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">{v}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="text-xs font-medium text-neutral-700 mb-3">Live Injections</div>
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 35, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-neutral-200 hover:bg-foreground transition-colors"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <div className="absolute right-4 bottom-4 sm:right-12 sm:bottom-8 w-40 sm:w-52 h-72 sm:h-96 rounded-[2rem] border-[6px] border-foreground bg-background shadow-2xl rotate-3">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-foreground rounded-full" />
        <div className="p-3 pt-8 space-y-2">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-12 w-12 rounded-full border-2 ${i === 0 ? "border-foreground" : "border-neutral-300"}`} />
            ))}
          </div>
          <div className="rounded-lg border border-border bg-secondary p-2.5">
            <div className="text-[10px] font-semibold">🎉 New feature live</div>
            <div className="text-[8px] text-neutral-500 mt-0.5">Tap to explore</div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-neutral-100 rounded" />
            <div className="h-2 w-3/4 bg-neutral-100 rounded" />
            <div className="h-2 w-2/3 bg-neutral-100 rounded" />
          </div>
          <div className="rounded-lg border border-foreground bg-foreground text-background p-2 text-[9px] text-center font-medium">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}



function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto max-w-3xl text-center"
    >
      <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
        {eyebrow}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} className="mt-4 text-neutral-600">
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

function Bento() {
  return (
    <section id="features" className="px-4 py-24">
      <SectionHeader
        eyebrow="In-App Experiences"
        title="Everything you need. Nothing you don't."
        sub="The highest-converting surface in your product, fully owned by your growth team."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Card 1 - large */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 group rounded-2xl border border-border bg-card p-8 card-hover"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Send className="h-4 w-4" strokeWidth={1.5} />
            ZERO-UPDATE AGILITY
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Publish UI in seconds. Not weeks.
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Hot-swap stories, nudges, and banners straight to production. Skip the review queue entirely.
          </p>

          <div className="mt-8 relative h-56 rounded-xl border border-border bg-secondary/40 bg-grid overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-8">
              <div className="rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium shadow-sm">
                <div className="text-neutral-500 text-[10px] uppercase tracking-wide">Console</div>
                <div className="mt-1 inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Publish v2.4.1
                </div>
              </div>
              <div className="flex-1 mx-4 relative h-px bg-foreground">
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" strokeWidth={1.5} />
              </div>
              <div className="rounded-xl border border-border bg-background px-4 py-3 text-xs">
                <div className="text-neutral-500 text-[10px] uppercase tracking-wide">Device</div>
                <div className="mt-1 font-medium">Live in 145ms</div>
              </div>
            </div>
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] backdrop-blur">
              <Store className="h-3 w-3 text-neutral-400" strokeWidth={1.5} />
              <span className="line-through text-neutral-400">App Store Review</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 card-hover flex flex-col">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Zap className="h-4 w-4" strokeWidth={1.5} />
            LATENCY
          </div>
          <div className="mt-auto">
            <div className="text-7xl font-semibold tracking-tighter text-foreground">
              145<span className="text-3xl text-neutral-400">ms</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Pure Dart rendering engine. No webview, no JS bridge.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 card-hover">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <WifiOff className="h-4 w-4" strokeWidth={1.5} />
            OFFLINE-FIRST
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight">
            Local SQLite matrix sync.
          </h3>
          <div className="mt-6 grid grid-cols-6 gap-1.5">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${[3, 7, 9, 14, 18, 22, 25, 29, 31].includes(i)
                    ? "bg-foreground"
                    : "bg-neutral-200"
                  }`}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">Sync deltas only. Reconnect & resume.</p>
        </motion.div>

        {/* Card 4 - large */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 rounded-2xl border border-border bg-card p-8 card-hover"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <MousePointerClick className="h-4 w-4" strokeWidth={1.5} />
            NO-CODE AUTONOMY
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            Your growth team ships. No dev cycles.
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Drag, drop, target, schedule. A visual campaign builder that lets you create native experiences without writing code.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-4 bg-grid">
            <div className="grid grid-cols-12 gap-2 h-44">
              <div className="col-span-3 space-y-2">
                {[Layers, Boxes, Square, MousePointerClick].map((Ic, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5 text-xs">
                    <Ic className="h-3.5 w-3.5 text-neutral-500" strokeWidth={1.5} />
                    <span className="text-neutral-600">{["Story", "Banner", "Nudge", "Modal"][i]}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-9 rounded-md border border-dashed border-neutral-300 bg-background p-3 relative">
                <div className="absolute top-3 right-3 text-[10px] text-neutral-400">Canvas</div>
                <div className="space-y-2 mt-4">
                  <div className="h-8 w-full rounded border border-border bg-secondary" />
                  <div className="flex gap-2">
                    <div className="h-16 w-16 rounded border-2 border-foreground bg-background" />
                    <div className="flex-1 space-y-1.5 pt-1">
                      <div className="h-2 w-3/4 bg-neutral-200 rounded" />
                      <div className="h-2 w-1/2 bg-neutral-200 rounded" />
                      <div className="h-6 w-20 mt-2 rounded bg-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bonus row */}
        <motion.div variants={fadeUp} className="md:col-span-3 rounded-2xl border border-border bg-card p-8 card-hover">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, t: "Enterprise-grade Security", d: "SOC 2, GDPR & HIPAA aligned. End-to-end encrypted payloads." },
              { icon: Layers, t: "Native Components", d: "Renders to actual Flutter widgets. Pixel-identical to your app." },
              { icon: Boxes, t: "Composable SDK", d: "3 lines of code. Tree-shakeable. Under 80kb compressed." },
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-9 w-9 shrink-0 rounded-lg border border-border flex items-center justify-center bg-background">
                  <f.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-medium text-foreground">{f.t}</div>
                  <p className="mt-1 text-sm text-neutral-600">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function DevExperience() {
  return (
    <section id="docs" className="px-4 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-neutral-950 text-neutral-100 p-8 sm:p-14 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Developer Experience
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
              Built by developers.<br />Integrate in 3 lines.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-neutral-400 max-w-md">
              First-class Flutter support. Type-safe APIs. Zero configuration. Ship your
              integration before standup.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex gap-3">
              <a href="https://docs.embedcraft.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors">
                View Docs <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a href="https://pub.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-900 transition-colors">
                pub.dev
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <span className="h-3 w-3 rounded-full bg-neutral-700" />
              <div className="ml-3 text-xs text-neutral-500 font-mono">main.dart</div>
            </div>
            <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto">
              <span className="text-neutral-500">// 1. Import</span>{"\n"}
              <span className="text-neutral-300">import</span> <span className="text-neutral-100">'package:embedcraft/embedcraft.dart'</span><span className="text-neutral-500">;</span>{"\n\n"}
              <span className="text-neutral-500">// 2. Initialize</span>{"\n"}
              <span className="text-neutral-300">await</span> <span className="text-white">EmbedCraft</span><span className="text-neutral-500">.</span><span className="text-neutral-200">initialize</span><span className="text-neutral-500">(</span>{"\n"}
              {"  "}<span className="text-neutral-400">apiKey</span><span className="text-neutral-500">:</span> <span className="text-neutral-100">"YOUR_KEY"</span><span className="text-neutral-500">,</span>{"\n"}
              <span className="text-neutral-500">);</span>{"\n\n"}
              <span className="text-neutral-500">// 3. Attach</span>{"\n"}
              <span className="text-white">EmbedCraft</span><span className="text-neutral-500">.</span><span className="text-neutral-200">attachToRouter</span><span className="text-neutral-500">(</span><span className="text-neutral-300">navigatorKey</span><span className="text-neutral-500">);</span>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ icon: Icon, eyebrow, title, desc, bullets, index }: {
  icon: React.ElementType; eyebrow: string; title: string; desc: string; bullets: string[]; index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerSlow}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${isEven ? "" : "lg:direction-rtl"}`}
    >
      <motion.div variants={isEven ? slideInLeft : slideInRight} className={`${isEven ? "" : "lg:order-2"}`}>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-neutral-500 uppercase tracking-[0.15em] mb-4">
          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
          {eyebrow}
        </div>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">{title}</h3>
        <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">{desc}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-neutral-600">
              <div className="mt-1 h-5 w-5 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Zap className="h-3 w-3 text-foreground" strokeWidth={2} />
              </div>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={isEven ? slideInRight : slideInLeft} className={`${isEven ? "" : "lg:order-1"}`}>
        <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 card-hover overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-foreground rounded-r-full" />
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-foreground text-background">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="text-lg font-semibold text-foreground">{eyebrow}</div>
          </div>
          <div className="space-y-3">
            {bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary px-4 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <div className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                <span className="text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlatformDeepDive() {
  const features = [
    {
      icon: Megaphone,
      eyebrow: "Campaign Builder",
      title: "Build campaigns visually. Ship without code.",
      desc: "A drag-and-drop visual editor that lets your growth team design, target, and schedule native in-app experiences — bottom sheets, modals, banners, and more — without a single line of code.",
      bullets: [
        "Visual drag-and-drop campaign editor with live preview",
        "Schedule campaigns with start/end dates and time zones",
        "Target by segment, screen, event, or user property",
        "A/B test multiple variants with auto-winner selection",
        "Campaign templates for instant launch",
      ],
    },
    {
      icon: Target,
      eyebrow: "Audience Segments",
      title: "Reach the right users at the right moment.",
      desc: "Create dynamic audience segments based on user properties, behavioral events, and real-time conditions. No SQL, no data team needed.",
      bullets: [
        "Build segments with AND/OR rule combinators",
        "Filter by user properties, events, and session data",
        "Real-time segment evaluation on the device",
        "Pre-built segment templates for common patterns",
        "Export and sync segments across campaigns",
      ],
    },
    {
      icon: GitBranch,
      eyebrow: "User Flows",
      title: "Orchestrate multi-step journeys.",
      desc: "Design branching user flows that guide users through onboarding, feature discovery, and conversion funnels with conditional logic and delay steps.",
      bullets: [
        "Visual flow builder with drag-and-drop nodes",
        "Branch on events, properties, or time delays",
        "Trigger nudges, emails, or webhooks at each step",
        "Measure funnel conversion at every stage",
        "Clone and iterate flows without starting from scratch",
      ],
    },
    {
      icon: Gamepad2,
      eyebrow: "Gamification Engine",
      title: "Turn engagement into a game worth playing.",
      desc: "Scratch cards, spin-the-wheel, streaks, milestone challenges, and quiz modules that drive habit formation and reward-based retention loops.",
      bullets: [
        "Spin the wheel with configurable segments and odds",
        "Scratch cards with custom reveal animations",
        "Daily streaks with milestone reward tiers",
        "Challenge campaigns with leaderboard rankings",
        "Quiz modules with instant reward distribution",
      ],
    },
    {
      icon: BarChart3,
      eyebrow: "Real-Time Analytics",
      title: "Measure everything. Guess nothing.",
      desc: "Live dashboards with impressions, clicks, conversions, and revenue attribution tied directly to each campaign. Know what's working in real time.",
      bullets: [
        "Real-time impression and click tracking",
        "Funnel analysis with step-by-step drop-off",
        "Campaign comparison with side-by-side metrics",
        "Revenue attribution per campaign and variant",
        "Custom date ranges and exportable reports",
      ],
    },
    {
      icon: Bell,
      eyebrow: "Event Tracking",
      title: "Capture every signal. Miss nothing.",
      desc: "Track screen views, button taps, form submissions, and custom events with a lightweight SDK. Use events to trigger campaigns and build segments.",
      bullets: [
        "Auto-track screen views and navigation events",
        "Custom event logging with typed properties",
        "Event timeline per user with full history",
        "Use events as campaign triggers in real-time",
        "Debug console for live event inspection",
      ],
    },
    {
      icon: Trophy,
      eyebrow: "Rewards & Coupons",
      title: "Incentivize action with real rewards.",
      desc: "Configure reward tiers, generate unique coupon codes, and distribute them through gamification modules. Track redemption rates and manage inventory.",
      bullets: [
        "Auto-generate unique coupon codes at scale",
        "Reward tiers with configurable win probabilities",
        "Track coupon claims and redemption rates",
        "Integrate rewards with scratch cards and spin wheel",
        "Expiry management and inventory controls",
      ],
    },
    {
      icon: Palette,
      eyebrow: "Asset Library",
      title: "All your creative assets in one place.",
      desc: "Upload, organize, and reuse images, icons, and media files across campaigns. Centralized asset management that keeps your team moving fast.",
      bullets: [
        "Drag-and-drop upload with auto-optimization",
        "Organize assets with folders and tags",
        "Search and filter across all uploaded media",
        "CDN-powered delivery for instant load times",
        "Reuse assets across multiple campaigns",
      ],
    },
    {
      icon: MonitorPlay,
      eyebrow: "Page Builder",
      title: "Create landing pages inside your app.",
      desc: "Build rich in-app pages with a visual editor — webviews, deep links, and custom content that lives inside your app without app store updates.",
      bullets: [
        "WYSIWYG editor for in-app landing pages",
        "Embed videos, images, and interactive elements",
        "Deep link to any screen in your app",
        "Track page views and engagement metrics",
        "Version control with publish/draft states",
      ],
    },
    {
      icon: Code2,
      eyebrow: "API & Developer SDK",
      title: "Built for developers. Loved by product teams.",
      desc: "A clean REST API and lightweight Flutter SDK with offline-first architecture, delta sync, and comprehensive documentation for rapid integration.",
      bullets: [
        "Flutter SDK with 3-line initialization",
        "REST API with full CRUD for all entities",
        "Offline-first with SQLite persistence",
        "Webhook callbacks for real-time event forwarding",
        "Comprehensive API docs with code examples",
      ],
    },
  ];

  return (
    <section className="px-4 py-24">
      <SectionHeader
        eyebrow="Platform Deep Dive"
        title="10 powerful modules. One unified platform."
        sub="Every tool your growth team needs to create, target, gamify, and measure native in-app experiences."
      />
      <div className="mx-auto mt-16 max-w-6xl space-y-20">
        {features.map((f, i) => (
          <FeatureRow key={f.eyebrow} {...f} index={i} />
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { label: "Onboarding & Activation", img: onboardingImg, desc: "Get users to their first value moment, fast, with guided tours, spotlights, and checklists that turn sign-ups into activated users." },
    { label: "Cross-Sell & Upsell", img: adoptionImg, desc: "Surface the right product to the right user at the right moment. In the app, not in an email they'll ignore." },
    { label: "Conversion & Monetization", img: conversionImg, desc: "Remove friction at every paywall and decision point. Contextual nudges that convert hesitation into action." },
    { label: "Gamification & Retention", img: gamificationImg, desc: "Make your app worth coming back to. Streaks, rewards, and challenges that turn casual users into daily actives." },
  ];
  return (
    <section className="px-4 py-24 bg-secondary/30 border-y border-border">
      <SectionHeader
        eyebrow="Use Cases"
        title="From first open to loyal power user."
        sub="Built for every stage of the user lifecycle."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {cases.map((c) => (
          <motion.div
            key={c.label}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-4 card-hover overflow-hidden"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/60">
              <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="px-1 pt-3 pb-1">
              <div className="text-sm font-medium text-foreground">{c.label}</div>
              <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function TrustStats() {
  const stats = [
    { value: "145ms", label: "P99 latency" },
    { value: "99.9%", label: "Platform uptime" },
    { value: "10K+", label: "Experiences created" },
    { value: "24/7", label: "Support coverage" },
  ];
  return (
    <section className="px-4 py-24">
      <SectionHeader
        eyebrow="Trust & Security"
        title="Enterprise-grade from day one."
      />
      <div className="mx-auto mt-10 max-w-3xl flex items-center justify-center gap-8 sm:gap-12">
        <img src={gdprBadge} alt="GDPR Compliant" className="h-12 sm:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        <img src={soc2Badge} alt="SOC 2 Certified" className="h-12 sm:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        <img src={isoBadge} alt="ISO 27001 Certified" className="h-12 sm:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto mt-14 max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 text-center card-hover"
          >
            <div className="text-4xl font-semibold tracking-tighter text-foreground">{s.value}</div>
            <div className="mt-2 text-sm text-neutral-500">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl rounded-3xl bg-foreground text-background p-12 sm:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="relative">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tighter">
            Ready to launch native<br />in-app experiences?
          </h2>
          <p className="mt-5 text-neutral-400 max-w-lg mx-auto">
            Ship nudges, stories, gamification, and widgets — without waiting for app store reviews.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-neutral-200 transition-colors">
              Get a Demo <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a href="https://docs.embedcraft.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-background hover:bg-neutral-900 transition-colors">
              Read the Docs
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Showcase() {
  const items = [
    { label: "Bottom Sheets", icon: Smartphone, src: bottomsheetGif, kind: "img" as const, desc: "Native modals & PiP widgets, scratch cards, & nudges." },
    { label: "Stories", icon: ImageIcon, src: storiesGif, kind: "img" as const, desc: "Instagram-style stories with deep links & analytics." },
    { label: "Animated Nudges", icon: Bell, src: "/media/nudges.mp4", kind: "vid" as const, desc: "Lottie-grade animations rendered natively in Flutter." },
    { label: "In-line Widgets", icon: Layers, src: "/media/widgets.mp4", kind: "vid" as const, desc: "Drop dynamic banners and carousels into any screen." },
  ];
  return (
    <section id="integrations" className="px-4 py-24 bg-secondary/30 border-y border-border">
      <SectionHeader
        eyebrow="Showcase"
        title="Every surface, fully native."
        sub="Bottom sheets, modals, scratch cards, stories, banners, and more — rendered as real Flutter widgets."
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {items.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-card p-3 card-hover overflow-hidden"
          >
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-950">
              {item.kind === "img" ? (
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="px-2 pt-3 pb-1">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <item.icon className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
                {item.label}
              </div>
              <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { t: "Campaign Builder", d: "Visual drag-and-drop editor for creating native in-app experiences." },
    { t: "Gamification", d: "Scratch cards, spin-the-wheel, streaks, and milestone rewards." },
    { t: "Audience Segments", d: "Target users by behavior, properties, events, and custom rules." },
    { t: "Event Tracking", d: "Track screen views, taps, and custom events with real-time analytics." },
    { t: "Stories & Nudges", d: "Full-screen stories and contextual nudges with deep-link actions." },
    { t: "A/B Experimentation", d: "Test variants, measure impact, and auto-deploy winners." },
    { t: "Rewards Engine", d: "Configure reward tiers, coupons, and gamified incentive flows." },
    { t: "Offline-First SDK", d: "SQLite sync with delta updates. Works without connectivity." },
  ];
  return (
    <section className="px-4 py-24">
      <SectionHeader
        eyebrow="Capabilities"
        title="A complete engagement runtime."
        sub="Everything from campaign creation to analytics, built for Flutter apps."
      />
      <div className="mx-auto mt-12 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-3">
        {caps.map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-card p-5 card-hover">
            <Sparkles className="h-4 w-4 text-neutral-400" strokeWidth={1.5} />
            <div className="mt-3 text-sm font-medium text-foreground">{c.t}</div>
            <div className="mt-1 text-xs text-neutral-500 leading-relaxed">{c.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Book a Demo
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground">
              Let's make your app dynamic.
            </h2>
            <p className="mt-4 text-neutral-600 max-w-md">
              Reach out for a personalized walkthrough, pricing, or technical deep-dive.
              We typically reply within 24 hours.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:contactembedcraft@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:border-foreground transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-neutral-500">Email us</div>
                  <div className="text-sm font-medium text-foreground">contactembedcraft@gmail.com</div>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
              </a>
              <a
                href="#docs"
                className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:border-foreground transition-colors"
              >
                <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center">
                  <PlayCircle className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-neutral-500">Or self-serve</div>
                  <div className="text-sm font-medium text-foreground">Read the documentation</div>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Demo request — ${fd.get("company") || fd.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${fd.get("name")}\nCompany: ${fd.get("company")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`,
              );
              window.location.href = `mailto:contactembedcraft@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="rounded-2xl border border-border bg-background p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-neutral-600">Name</span>
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-neutral-600">Company</span>
                <input
                  name="company"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Acme Inc."
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-medium text-neutral-600">Work email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="jane@acme.com"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-neutral-600">What are you building?</span>
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell us about your app and what you'd like to ship."
              />
            </label>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-neutral-800 transition-colors"
            >
              Send request <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <p className="text-[11px] text-neutral-500 text-center">
              Sends to contactembedcraft@gmail.com via your mail client.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto max-w-6xl flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#integrations" className="hover:text-foreground">Showcase</a>
            <a href="https://docs.embedcraft.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">Docs</a>
            <a href="mailto:contactembedcraft@gmail.com" className="hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <div>© 2026 EmbedCraft, Inc. All rights reserved.</div>
          <a href="mailto:contactembedcraft@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span>contactembedcraft@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function TechEdge() {
  const specs = [
    { title: "Offline-First", desc: "Local SQLite + SharedPreferences persistence. Campaigns work even without a connection." },
    { title: "Delta Sync", desc: "Only fetch what changed. Minimal payload sizes and lightning-fast updates." },
    { title: "Native Rendering", desc: "Zero webviews. Campaigns are rendered as 100% native Flutter widgets." },
    { title: "Ultra-Low Latency", desc: "Average 145ms from event trigger to UI reveal. Built for high-frequency apps." },
  ];
  return (
    <section className="px-4 py-24 bg-foreground text-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs uppercase tracking-[0.3em] opacity-50 font-semibold mb-3">The Technical Edge</div>
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tightest leading-none">Built for the<br/>modern stack.</h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {specs.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-xl font-bold mb-4">{s.title}</div>
              <p className="text-background/60 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-32 border-t border-border">
      <SectionHeader
        eyebrow="Pricing"
        title="Coming Soon"
        sub="Choose the plan that fits your growth stage."
      />
      <div className="mx-auto mt-16 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border-2 border-foreground bg-foreground p-12 text-center text-background relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-bl-xl">
            Coming Soon
          </div>
          <h3 className="text-3xl font-bold">Early Access</h3>
          <p className="mt-4 text-background/60">We're currently in private beta, working with a handful of high-growth apps.</p>
          <div className="mt-8 text-6xl font-bold tracking-tighter">$0</div>
          <p className="text-sm opacity-50 uppercase tracking-widest mt-2">During Beta Phase</p>
          <ul className="mt-10 space-y-4 text-left max-w-xs mx-auto">
            <li className="flex items-center gap-3">
              <Zap className="h-4 w-4" />
              <span>Unlimited Campaigns</span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="h-4 w-4" />
              <span>Full Analytics Suite</span>
            </li>
            <li className="flex items-center gap-3">
              <Zap className="h-4 w-4" />
              <span>Enterprise Support</span>
            </li>
          </ul>
          <a href="#contact" className="mt-12 block w-full rounded-xl bg-background py-4 text-sm font-bold text-foreground hover:bg-neutral-200 transition-colors">
            Get Early Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Bento />
      <PlatformDeepDive />
      <Showcase />
      <UseCases />
      <TechEdge />
      <Capabilities />
      <Pricing />
      <TrustStats />
      <DevExperience />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
