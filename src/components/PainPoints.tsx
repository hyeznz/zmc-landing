import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { PAIN_POINTS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function PainPoints() {
  return (
    <section className="border-y border-line bg-paper-tint">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            혹시 지난 이사 때
            <br className="md:hidden" /> 이런 일을 겪지는 않으셨나요?
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-5">
                <XCircle weight="fill" className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                <p className="leading-relaxed text-ink-soft">&ldquo;{p}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 max-w-2xl">
            <p className="text-xl leading-snug font-bold md:text-2xl">
              문제는 당신의 선택이 아니라,
              <br />
              이사업계의 부조리한 시스템입니다.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              기존의 저가 경쟁 시스템은 빠른 회전율을 위해 숙련되지 않은 인원을 투입하고,
              사고를 은폐하며, 당일 추가 요금으로 손실을 메꿉니다. 이제는 도구가 아니라
              사람과 시스템을 바꿔야 합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
