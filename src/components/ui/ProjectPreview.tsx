import { cn } from "@/lib/utils";
import type { ProjectSlug } from "@/types";
import {
  TrendingUp,
  Cpu,
  Sparkles,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  Check,
  Activity,
  Scan,
  Flame,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

/**
 * High-fidelity coded product previews for Expenzo, ShopHub, and FitBuddy.
 * Designed with authentic dark product aesthetic, crisp typography,
 * genuine technical metadata, and glowing accent highlights.
 */

function WindowHeader({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0c0c10]/90 px-3.5 py-2.5 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f56]/80 transition-opacity hover:opacity-100" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]/80 transition-opacity hover:opacity-100" />
          <span className="size-2.5 rounded-full bg-[#27c93f]/80 transition-opacity hover:opacity-100" />
        </div>
        <span className="ml-2 font-mono text-[10px] tracking-wide text-zinc-400 sm:text-[11px]">
          {title}
        </span>
      </div>
      {badge && (
        <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-medium text-[#8fb2ff]">
          <span className="size-1 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
      )}
    </div>
  );
}

function ExpenzoPreview() {
  const bars = [
    { label: "Jan", val: 42, active: false },
    { label: "Feb", val: 68, active: false },
    { label: "Mar", val: 52, active: false },
    { label: "Apr", val: 84, active: true },
    { label: "May", val: 60, active: false },
    { label: "Jun", val: 74, active: false },
    { label: "Jul", val: 48, active: false },
    { label: "Aug", val: 92, active: true },
    { label: "Sep", val: 64, active: false },
    { label: "Oct", val: 58, active: false },
  ];

  const transactions = [
    { title: "AWS Cloud Infrastructure", cat: "DevOps", amount: "₹ 3,420.00", date: "Today, 14:20" },
    { title: "GitHub Enterprise Copilot", cat: "Tools", amount: "₹ 1,580.00", date: "Yesterday" },
    { title: "Zepto Quick Commerce", cat: "Essentials", amount: "₹ 485.50", date: "07 Oct" },
  ];

  return (
    <div className="flex h-full flex-col bg-[#09090d] text-zinc-200">
      <WindowHeader title="expenzo.dashboard.internal/v1" badge="LIVE METRICS" />
      
      <div className="flex flex-1 flex-col gap-3 p-3.5 sm:p-4">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                Total Spend
              </span>
              <TrendingUp className="size-3 text-emerald-400" />
            </div>
            <p className="mt-1 font-mono text-sm font-semibold tracking-tight text-white sm:text-base">
              ₹ 15,420.00
            </p>
            <span className="mt-0.5 inline-block text-[9px] text-emerald-400">
              +12.4% vs last mo
            </span>
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                AI Categorized
              </span>
              <Cpu className="size-3 text-accent" />
            </div>
            <p className="mt-1 font-mono text-sm font-semibold tracking-tight text-white sm:text-base">
              94.2%
            </p>
            <span className="mt-0.5 inline-block text-[9px] text-zinc-400">
              OCR & Auto-Tag
            </span>
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-zinc-900/60 p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
                Active Workflows
              </span>
              <Activity className="size-3 text-blue-400" />
            </div>
            <p className="mt-1 font-mono text-sm font-semibold tracking-tight text-white sm:text-base">
              14 n8n nodes
            </p>
            <span className="mt-0.5 inline-block text-[9px] text-accent">
              CI/CD Dockerized
            </span>
          </div>
        </div>

        {/* Chart & AI Insights Row */}
        <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
          {/* Bar Chart Container */}
          <div className="col-span-3 rounded-lg border border-white/[0.08] bg-zinc-900/50 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                Monthly Breakdown (INR)
              </span>
              <span className="font-mono text-[9px] text-accent">2026 YTD</span>
            </div>
            
            <div className="mt-3 flex h-20 items-end justify-between gap-1 sm:h-24 sm:gap-1.5">
              {bars.map((b, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    style={{ height: `${b.val}%` }}
                    className={cn(
                      "w-full rounded-sm transition-all duration-300",
                      b.active
                        ? "bg-accent shadow-[0_0_12px_rgba(61,123,255,0.6)]"
                        : "bg-white/[0.12] hover:bg-white/[0.22]"
                    )}
                  />
                  <span className="font-mono text-[7px] text-zinc-400 sm:text-[8px]">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights & OCR Status */}
          <div className="col-span-2 flex flex-col justify-between rounded-lg border border-accent/30 bg-accent/[0.07] p-3">
            <div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="size-3 text-accent" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#8fb2ff]">
                  AI Insight
                </span>
              </div>
              <p className="mt-2 text-[10px] leading-relaxed text-zinc-300 sm:text-[11px]">
                Detected recurring bill pattern for AWS Cloud. Recommended automated tag <span className="font-mono text-accent">[Tax Deductible]</span>.
              </p>
            </div>
            <div className="mt-2 rounded border border-accent/20 bg-black/40 px-2 py-1 text-[9px] font-mono text-zinc-400">
              OCR accuracy: <span className="text-emerald-400">98.6%</span>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="rounded-lg border border-white/[0.08] bg-zinc-900/40 p-2.5 sm:p-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 sm:text-[10px]">
              Recent Automated Ingestion
            </span>
            <span className="font-mono text-[9px] text-zinc-400">MongoDB Synced</span>
          </div>
          <div className="mt-2 space-y-1.5">
            {transactions.map((t, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded border border-white/[0.04] bg-white/[0.02] px-2 py-1 text-[10px] sm:text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  <span className="font-medium text-white">{t.title}</span>
                  <span className="rounded bg-white/[0.08] px-1 py-0.2 font-mono text-[8px] text-zinc-400 sm:inline hidden">
                    {t.cat}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-medium text-zinc-200">{t.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopHubPreview() {
  return (
    <div className="flex h-full flex-col bg-[#09090d] text-zinc-200">
      <WindowHeader title="shophub.store/checkout" badge="RAZORPAY INTEGRATED" />

      <div className="grid flex-1 grid-cols-5 gap-3 p-3.5 sm:p-4">
        {/* Left Column: Cart & Product */}
        <div className="col-span-3 flex flex-col justify-between rounded-lg border border-white/[0.08] bg-zinc-900/50 p-3 sm:p-3.5">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                Cart Items (2)
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400">
                <ShieldCheck className="size-3" />
                Verified Merchant
              </span>
            </div>

            {/* Product Item 1 */}
            <div className="mt-3 flex items-center gap-3 rounded-lg border border-white/[0.06] bg-black/40 p-2.5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-zinc-800/80">
                <ShoppingBag className="size-5 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-white sm:text-xs">
                  Keychron Wireless Mechanical Keyboard
                </p>
                <div className="mt-0.5 flex items-center gap-2 font-mono text-[9px] text-zinc-400">
                  <span>Gateron Brown</span>
                  <span>·</span>
                  <span>RGB Backlit</span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold text-white sm:text-xs">
                ₹ 6,499.00
              </span>
            </div>

            {/* Product Item 2 */}
            <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/[0.06] bg-black/40 p-2.5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-zinc-800/80">
                <Cpu className="size-5 text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold text-white sm:text-xs">
                  Coiled Aviator Cable (Carbon Black)
                </p>
                <div className="mt-0.5 flex items-center gap-2 font-mono text-[9px] text-zinc-400">
                  <span>Type-C USB</span>
                  <span>·</span>
                  <span>Double-sleeved</span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold text-white sm:text-xs">
                ₹ 1,299.00
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-2 text-[10px] text-zinc-400">
            <span>Authentication: <span className="font-mono text-zinc-200">JWT Token Auth</span></span>
            <span className="text-accent">Invoice: jsPDF Auto-gen</span>
          </div>
        </div>

        {/* Right Column: Order Summary & Pay */}
        <div className="col-span-2 flex flex-col justify-between rounded-lg border border-white/[0.08] bg-zinc-900/60 p-3 sm:p-3.5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
              Order Summary
            </span>

            <div className="mt-3 space-y-2 text-[10px] sm:text-[11px]">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="font-mono text-zinc-200">₹ 7,798.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span className="font-mono text-emerald-400">FREE</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>GST (18%)</span>
                <span className="font-mono text-zinc-200">₹ 1,403.64</span>
              </div>
              <div className="border-t border-white/[0.08] pt-2 flex justify-between font-medium text-white">
                <span>Total Due</span>
                <span className="font-mono text-sm font-bold text-accent sm:text-base">
                  ₹ 9,201.64
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-accent px-3 text-[11px] font-semibold text-white shadow-[0_0_15px_rgba(61,123,255,0.4)] transition-all">
              <CreditCard className="size-3.5" />
              Pay via Razorpay
            </div>
            <p className="mt-1.5 text-center font-mono text-[8px] text-zinc-400">
              256-bit SSL encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FitBuddyPreview() {
  return (
    <div className="flex h-full flex-col bg-[#09090d] text-zinc-200">
      <WindowHeader title="fitbuddy.app/vision-ai" badge="TENSORFLOW.JS ~85% ACCURACY" />

      <div className="grid flex-1 grid-cols-5 gap-3 p-3.5 sm:p-4">
        {/* Left Column: Simulated Camera / Vision UI */}
        <div className="relative col-span-3 flex flex-col justify-between overflow-hidden rounded-lg border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-black p-3">
          {/* Subtle Grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3d7bff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

          {/* Vision Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 rounded bg-black/60 px-2 py-0.5 font-mono text-[9px] text-amber-400 backdrop-blur-sm">
              <Scan className="size-3 animate-pulse" />
              LIVE INFERENCE
            </span>
            <span className="font-mono text-[9px] text-zinc-400">FPS: 48 (WebGL)</span>
          </div>

          {/* Central Target Bounding Box */}
          <div className="relative z-10 my-2 mx-auto flex w-full max-w-[220px] flex-col items-center justify-center rounded-lg border border-dashed border-amber-400/80 bg-amber-400/[0.04] p-3 backdrop-blur-[2px]">
            <div className="absolute -top-2 left-2 rounded bg-amber-400 px-1.5 py-0.2 font-mono text-[8px] font-bold text-black uppercase">
              Target: Healthy Bowl
            </div>
            <p className="text-center font-mono text-xs font-semibold text-white">
              Mediterranean Quinoa Salad
            </p>
            <p className="mt-1 font-mono text-[9px] text-amber-300">
              Confidence Score: 87.4%
            </p>
          </div>

          {/* Vision Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/[0.08] pt-2 text-[9px] text-zinc-400">
            <span>Model: MobileNet V2 TFJS</span>
            <span className="text-emerald-400">API Ninjas Verified</span>
          </div>
        </div>

        {/* Right Column: Macro Breakdown & Nutrition */}
        <div className="col-span-2 flex flex-col justify-between rounded-lg border border-white/[0.08] bg-zinc-900/60 p-3 sm:p-3.5">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                Nutrition Data
              </span>
              <Flame className="size-3 text-amber-400" />
            </div>

            <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
              <div className="flex items-center justify-between rounded border border-white/[0.04] bg-white/[0.02] p-1.5">
                <span className="text-zinc-400">Calories</span>
                <span className="font-bold text-amber-400">385 kcal</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.04] bg-white/[0.02] p-1.5">
                <span className="text-zinc-400">Protein</span>
                <span className="font-bold text-emerald-400">18.5 g</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.04] bg-white/[0.02] p-1.5">
                <span className="text-zinc-400">Carbs</span>
                <span className="font-bold text-blue-400">42.0 g</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.04] bg-white/[0.02] p-1.5">
                <span className="text-zinc-400">Healthy Fats</span>
                <span className="font-bold text-purple-400">14.2 g</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 rounded border border-white/[0.06] bg-black/40 p-2">
            <span className="font-mono text-[9px] text-zinc-400 uppercase">Suggested Workout</span>
            <p className="mt-0.5 text-[10px] font-medium text-white truncate">
              30m HIIT / Core Cardio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const previews: Record<ProjectSlug, () => React.JSX.Element> = {
  expenzo: ExpenzoPreview,
  shophub: ShopHubPreview,
  fitbuddy: FitBuddyPreview,
};

const labels: Record<ProjectSlug, string> = {
  expenzo: "Expenzo AI expense dashboard with OCR scanning, live spending charts, and automation metrics",
  shophub: "ShopHub full-stack ecommerce interface with cart items, Razorpay order checkout, and invoice generation",
  fitbuddy: "FitBuddy browser-based AI vision interface with real-time food recognition, macro breakdown, and workout recommendations",
};

export function ProjectPreview({ slug, className }: { slug: ProjectSlug; className?: string }) {
  const Preview = previews[slug];
  return (
    <div
      role="img"
      aria-label={labels[slug]}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#09090d] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]",
        "transition-all duration-300 group-hover/preview:border-accent/40 group-hover/preview:shadow-[0_15px_40px_-10px_rgba(61,123,255,0.25)]",
        className
      )}
    >
      <div className="aspect-[16/10] w-full origin-center transition-[transform,filter] duration-[400ms] ease-[var(--ease-premium)] group-hover/preview:scale-[1.02]">
        <Preview />
      </div>
    </div>
  );
}
