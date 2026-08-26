import {
  MapPinArea,
  Truck,
  Armchair,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { PROCESS } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = [MapPinArea, Truck, Armchair, SealCheck];

export function Process() {
  return (
    <section className="border-y border-line bg-paper-tint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            이사 당일, 이렇게 진행됩니다
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.08} className="relative">
                <div className="h-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-brand-600 text-brand-950">
                    <Icon weight="duotone" className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div
                    className="absolute top-6 left-14 hidden h-px w-[calc(100%-3.5rem)] bg-line lg:block"
                    aria-hidden
                  />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
