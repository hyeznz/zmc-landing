import { Phone, Gift, Sparkle, Headset } from "@phosphor-icons/react/dist/ssr";
import { CONTACT } from "@/lib/content";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: Sparkle,
    title: "프리미엄 정리 서비스",
    desc: "당일 저녁 바로 생활 가능한 배치와 정돈까지",
  },
  {
    icon: Gift,
    title: "현장 계약 즉시 할인",
    desc: "견적 자리에서 바로 계약 시 즉시 할인 혜택 제공",
  },
  {
    icon: Headset,
    title: "24시간 해피콜 대응",
    desc: "이사 후 불편사항 발생 시 24시간 이내 해피콜",
  },
];

export function QuoteCta() {
  return (
    <section id="quote" className="border-t border-line bg-brand-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <h2 className="max-w-2xl text-3xl leading-tight font-extrabold tracking-tight md:text-4xl">
            망설임은 소중한 이삿날을
            <br />
            망칠 뿐입니다
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/70">
            무료 체험 기회는 없지만, 실패 없는 이사는 약속드립니다. 고정팀 체제라 하루
            소화 건수가 한정적입니다. 지금 신청하시면 아래 혜택을 드립니다.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <b.icon weight="duotone" className="size-7 text-brand-100" aria-hidden />
                <h3 className="mt-3 font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={CONTACT.telHref}
              className="flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-lg font-extrabold text-brand-950 transition-transform hover:bg-brand-50 active:scale-[0.98]"
            >
              <Phone weight="fill" className="size-5" aria-hidden />
              {CONTACT.tel} 무료 견적 접수
            </a>
            <p className="text-sm text-white/50">
              방문 견적 신청 30초, 손 없는 날·주말은 2달 전 마감
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
