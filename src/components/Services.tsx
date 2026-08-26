import Image from "next/image";
import { Package, Warehouse, Buildings, Check } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, EXTRA_PLANS } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = [Package, Warehouse, Buildings];

export function Services() {
  const [packing, storage, office] = SERVICES;
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          상황에 꼭 맞는 이사 서비스
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          포장부터 보관, 기업 이전까지. 모든 서비스는 방문 견적 후 맞춤 설계됩니다.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-5 md:grid-rows-2">
        {/* 포장 이사: 이미지 포함 대형 셀 */}
        <Reveal className="md:col-span-3 md:row-span-2">
          <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative aspect-[16/9] md:min-h-56 md:flex-1">
              <Image
                src="/images/interior.webp"
                alt="이사 완료 후 완벽하게 정리된 집 안 전경"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-center gap-3">
                <Package weight="duotone" className="size-7 text-brand-600" aria-hidden />
                <h3 className="text-xl font-bold">{packing.title}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {packing.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-ink-soft">
                    <Check weight="bold" className="mt-1 size-4 shrink-0 text-brand-600" aria-hidden />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
        {/* 보관 / 사무실 */}
        {[storage, office].map((svc, i) => {
          const Icon = ICONS[i + 1];
          return (
            <Reveal key={svc.title} delay={0.08 * (i + 1)} className="md:col-span-2">
              <article className="h-full rounded-2xl border border-line bg-white p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <Icon weight="duotone" className="size-7 text-brand-600" aria-hidden />
                  <h3 className="text-xl font-bold">{svc.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-ink-soft">
                      <Check weight="bold" className="mt-1 size-4 shrink-0 text-brand-600" aria-hidden />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.15}>
        <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          <span className="font-semibold text-ink">그 외 맞춤 플랜</span>
          {EXTRA_PLANS.map((p) => (
            <span key={p} className="rounded-full border border-line bg-white px-3 py-1">
              {p}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
