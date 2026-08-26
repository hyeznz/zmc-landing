import { STATS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          숫자와 데이터로 증명하는 신뢰
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div>
              <p className="text-4xl font-extrabold tracking-tight text-brand-600 md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 font-semibold">{s.label}</p>
              <p className="mt-0.5 text-sm text-ink-faint">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <figure className="mt-14 border-l-4 border-brand-600 pl-5 md:pl-7">
          <blockquote className="max-w-2xl text-lg leading-relaxed font-medium md:text-xl">
            &ldquo;매번 이사업체 고르다 지쳤는데, 이제는 이사짐캐리 번호 하나만
            저장해둡니다. 정리까지 완벽해서 제가 할 게 없었어요.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-ink-faint">
            박OO 고객님 · 재이용 고객
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
