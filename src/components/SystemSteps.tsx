import { SYSTEM_STEPS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function SystemSteps() {
  return (
    <section id="system" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          이사짐캐리만의 &lsquo;안심 시스템&rsquo; 3단계
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          이사짐캐리는 무리한 이사를 하지 않습니다. 당일 저녁 바로 일상생활이 가능한
          집이 우리의 기준입니다.
        </p>
      </Reveal>
      <ol className="mt-12 space-y-0">
        {SYSTEM_STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <li className="grid gap-3 border-t border-line py-8 md:grid-cols-[100px_1fr_1.2fr] md:gap-8 md:py-10">
              <span className="text-4xl font-extrabold text-brand-600 tabular-nums md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl leading-snug font-bold md:text-2xl">{step.title}</h3>
              <p className="leading-relaxed text-ink-soft">{step.desc}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
