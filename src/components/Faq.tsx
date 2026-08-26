import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { FAQ } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            자주 묻는 질문
          </h2>
        </Reveal>
        <div className="mt-8">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <details className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <CaretDown
                    className="size-5 shrink-0 text-ink-faint transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
