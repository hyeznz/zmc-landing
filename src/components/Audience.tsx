import { CheckCircle, Prohibit } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const FIT = [
  "지난 이사에서 파손, 추가요금 등으로 트라우마가 있으신 분",
  "고가 가구, 애장품이 많아 섬세한 손길이 필수적인 분",
  "이사 당일 감독하느라 에너지를 쓰고 싶지 않은 분",
];

const NOT_FIT = [
  "오직 '최저가'만이 유일한 선택 기준이신 분",
  "작업자를 인격적으로 존중해 주지 않으시는 분",
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          이런 분들만 신청해 주세요
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          최저가 업체를 찾으신다면 저희는 정답이 아닐 수 있습니다. 하지만 이번 이사는
          절대 망치면 안 된다고 생각하신다면, 이사짐캐리가 유일한 대안입니다.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        <Reveal>
          <ul className="space-y-4">
            {FIT.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle weight="fill" className="mt-0.5 size-6 shrink-0 text-brand-600" aria-hidden />
                <span className="leading-relaxed font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-line bg-paper-tint p-6">
            <p className="text-sm font-semibold text-ink-faint">
              죄송하지만 이런 분들은 정중히 사양합니다
            </p>
            <ul className="mt-4 space-y-3">
              {NOT_FIT.map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink-soft">
                  <Prohibit weight="bold" className="mt-0.5 size-5 shrink-0 text-ink-faint" aria-hidden />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
