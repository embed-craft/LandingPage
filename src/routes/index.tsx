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
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import bottomsheetGif from "@/assets/bottomsheet.gif";
import storiesGif from "@/assets/stories.gif";

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

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-7 w-7 rounded-md bg-foreground flex items-center justify-center">
        <Square className="h-3.5 w-3.5 text-background" strokeWidth={2} fill="currentColor" />
      </div>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        EmbedCraft
      </span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/70 px-4 py-2.5 backdrop-blur-xl">
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
    <section className="relative px-4 pt-16 pb-12 sm:pt-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-neutral-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            V2.0 is Live: FloaterRenderV2
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-foreground leading-[0.95]"
        >
          Bypass the App Store.
          <br />
          <span className="text-neutral-400">Inject UI in Real-Time.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed"
        >
          The 100% native Flutter SDK that lets you deploy stories, nudges, and banners
          with 145ms latency. Zero app updates required.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-neutral-800 transition-colors"
          >
            Start Building <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
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
        <div className="relative rounded-3xl border border-border bg-secondary/40 p-3 sm:p-5">
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
                className={`rounded-lg px-3 py-2 text-xs ${
                  i === 1 ? "bg-foreground text-background" : "text-neutral-600 hover:bg-secondary"
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

function SocialProof() {
  const logos = ["Northwind", "Acme", "Lumen", "Quantic", "Helix", "Vertex"];
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-neutral-500">
          Trusted by forward-thinking consumer apps.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-lg font-semibold tracking-tight text-neutral-400 hover:text-neutral-700 transition-colors">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
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
        eyebrow="Platform"
        title="Everything you need. Nothing you don't."
        sub="A composable runtime for shipping native UI without shipping binaries."
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
                className={`aspect-square rounded-sm ${
                  [3, 7, 9, 14, 18, 22, 25, 29, 31].includes(i)
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
            Marketers ship. Engineers sleep.
          </h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Drag, drop, target, schedule. A visual builder your growth team will actually use.
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
            Ready to make your<br />Flutter app dynamic?
          </h2>
          <p className="mt-5 text-neutral-400 max-w-lg mx-auto">
            Join the next generation of consumer apps shipping UI without shipping binaries.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-neutral-200 transition-colors">
              Get your API Key <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-background hover:bg-neutral-900 transition-colors">
              Talk to Sales
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
        sub="Bottom sheets, modals, PiP, scratch cards, stories, banners, and more — powered by the in_app_ninja runtime."
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
    { t: "Bottom Sheets & Modals", d: "Configurable height, drag-to-dismiss, blur backdrops." },
    { t: "PiP Widgets", d: "Persistent floating widgets that survive route changes." },
    { t: "Scratch Cards", d: "Gamified rewards with native Scratcher rendering." },
    { t: "Stories", d: "Tap-to-skip, progress bars, video & image segments." },
    { t: "In-line Banners", d: "Visibility-detected impressions with auto-rotation." },
    { t: "Local Persistence", d: "SQLite + SharedPreferences for offline campaigns." },
    { t: "Targeting & Triggers", d: "Audience rules, screen events, and time-based triggers." },
  ];
  return (
    <section className="px-4 py-24">
      <SectionHeader
        eyebrow="Capabilities"
        title="A complete engagement runtime."
        sub="Built on battle-tested Flutter primitives — http, sqflite, rxdart, visibility_detector, video_player and more."
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

function Founders() {
  const team = [
    { name: "Nitin Sharma", role: "Founder & CEO", initials: "NS" },
    { name: "Aaryan Upadhyay", role: "Co-founder & CTO", initials: "AU" },
  ];
  return (
    <section className="px-4 py-24">
      <SectionHeader
        eyebrow="Team"
        title="Built by shipping engineers."
        sub="The minds behind EmbedCraft, on a mission to free product teams from the app store release cycle."
      />
      <div className="mx-auto mt-12 max-w-3xl grid sm:grid-cols-2 gap-4">
        {team.map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-card p-6 card-hover flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center text-base font-semibold tracking-tight">
              {p.initials}
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">{p.name}</div>
              <div className="text-sm text-neutral-500">{p.role}</div>
            </div>
            <div className="flex gap-1.5 text-neutral-400">
              <a href="#" aria-label="LinkedIn" className="p-1.5 rounded-md hover:bg-secondary hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="p-1.5 rounded-md hover:bg-secondary hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="GitHub" className="p-1.5 rounded-md hover:bg-secondary hover:text-foreground transition-colors">
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
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
          <div className="text-xs text-neutral-500">© 2026 EmbedCraft, Inc.</div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <div>
            Founded by <span className="text-foreground font-medium">Nitin Sharma</span> · Co-founded by <span className="text-foreground font-medium">Aaryan Upadhyay</span>
          </div>
          <a href="mailto:contactembedcraft@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span>contactembedcraft@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Bento />
      <Showcase />
      <Capabilities />
      <DevExperience />
      <Founders />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
