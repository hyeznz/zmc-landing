import Image from "next/image";
import { asset } from "@/lib/asset";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:px-6 md:pt-20 md:pb-24">
      <Reveal>
        <p className="mb-4 inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          9월·10월 성수기 잔여 슬롯 3팀 내외, 선착순 마감 중
        </p>
        <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight md:text-5xl lg:text-[3.4rem]">
          가장 <span className="text-brand-600">&lsquo;평온한&rsquo;</span>
          <br />
          이삿날을 위한
          <br />
          단 하나의 솔루션
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
          가장 싼 곳이 아니라, 가장 안심되는 곳.
          <br />
          추가 비용 0원, 고정팀 책임제, 파손 은폐 ZERO.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#quote"
            className="rounded-full bg-brand-600 px-7 py-3.5 text-base font-bold text-brand-950 shadow-lg shadow-brand-900/20 transition-transform hover:bg-brand-700 hover:text-white active:scale-[0.98]"
          >
            무료 견적 접수
          </a>
          <a
            href="#system"
            className="flex items-center gap-1.5 rounded-full border border-line bg-white px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink-faint active:scale-[0.98]"
          >
            안심 시스템 보기
            <CaretDown className="size-4" aria-hidden />
          </a>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="relative">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src={asset("/images/hero.webp")}
            alt="제복을 입은 이사짐캐리 팀원들이 가구를 조심스럽게 포장하는 모습"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <figure className="absolute -bottom-5 left-4 right-4 rounded-xl border border-line bg-white/95 p-4 shadow-xl shadow-brand-950/5 backdrop-blur md:-left-8 md:right-auto md:max-w-xs">
          <blockquote className="text-sm leading-snug font-medium">
            &ldquo;침대 파손을 스티커로 가리는 이사, 더 이상 당하지 마세요.&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-xs text-ink-faint">
            대표 김현규 · 현장 경력 16년
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
