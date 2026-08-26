import { Star } from "@phosphor-icons/react/dist/ssr";
import { REVIEWS, type Review } from "@/lib/content";
import { Reveal } from "./Reveal";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[300px] shrink-0 rounded-2xl border border-line bg-white p-5 md:w-[340px]">
      <div className="flex items-center gap-1" aria-label="별점 5점 만점에 5점">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} weight="fill" className="size-4 text-brand-600" aria-hidden />
        ))}
      </div>
      <h3 className="mt-3 font-bold">{review.title}</h3>
      <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-ink-soft">
        {review.body}
      </p>
      <p className="mt-4 text-xs font-medium text-ink-faint">
        {review.name} · {review.type}
      </p>
    </article>
  );
}

function MarqueeRow({ reviews, reverse }: { reviews: Review[]; reverse?: boolean }) {
  // 트랙을 2배로 복제해 -50% 이동 시 이음새 없이 반복
  const doubled = [...reviews, ...reviews];
  return (
    <div className="marquee-row overflow-hidden" role="presentation">
      <div
        className={`marquee-track flex w-max gap-4 ${reverse ? "reverse" : ""}`}
        style={{ "--marquee-duration": reverse ? "72s" : "58s" } as React.CSSProperties}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  const half = Math.ceil(REVIEWS.length / 2);
  return (
    <section id="reviews" className="overflow-hidden border-y border-line bg-paper-tint py-16 md:py-24">
      <Reveal className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          &ldquo;우리 집이랑 상황이 비슷한데?&rdquo;
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          90건이 넘는 실고객 후기가 증명하는 섬세함. 비슷한 상황의 후기를 찾아보세요.
        </p>
      </Reveal>
      <div className="mt-10 space-y-4">
        <MarqueeRow reviews={REVIEWS.slice(0, half)} />
        <MarqueeRow reviews={REVIEWS.slice(half)} reverse />
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-ink-faint md:px-6">
        * 본 후기는 리브랜딩 전 상호 GS이사몰 기준이며, 이사짐캐리의 팀·서비스와 동일합니다.
      </p>
    </section>
  );
}
