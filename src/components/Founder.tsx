import Image from "next/image";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section className="border-y border-line bg-brand-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-6 md:py-24">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={asset("/images/detail.webp")}
              alt="전문 포장재로 이중 삼중 래핑된 가구"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="order-1 md:order-2">
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight md:text-4xl">
            &ldquo;저는 이사업계의 부조리를
            <br />
            바로잡고 싶었습니다.&rdquo;
          </h2>
          <p className="mt-3 font-semibold text-brand-100">
            16년 경력, 한국체육대학교 출신의 대표가 직접 뜁니다.
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-white/75">
            <p>
              사실 저도 현장에서 수많은 부조리를 목격했습니다. 웃돈 요구, 파손 은폐.
              &lsquo;내가 내 물건이라도 이렇게 다룰까?&rsquo;라는 의문이 지금의
              이사짐캐리를 만들었습니다.
            </p>
            <p>
              저희는 한체대 출신의 강인한 체력과 규율을 바탕으로,{" "}
              <strong className="font-bold text-white">
                견적 낸 사람이 당일 현장까지 책임지는 1팀 구조
              </strong>
              를 고집합니다. 제가 직접 가지 못하는 현장은 아예 예약을 받지 않습니다.
            </p>
            <p>
              단순히 짐을 옮기는 작업이 아닙니다. 이사 온 첫날, 피로 대신 설렘을 느끼며
              바로 잠자리에 들 수 있는 환경을 만드는 것이 우리의 목표입니다.
            </p>
          </div>
          <p className="mt-6 text-sm font-medium text-white/50">이사짐캐리 대표 김현규</p>
        </Reveal>
      </div>
    </section>
  );
}
