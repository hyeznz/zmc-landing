import { Phone } from "@phosphor-icons/react/dist/ssr";
import { CONTACT } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          이사짐<span className="text-brand-600">캐리</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <a href="#services" className="transition-colors hover:text-ink">
            서비스
          </a>
          <a href="#system" className="transition-colors hover:text-ink">
            안심 시스템
          </a>
          <a href="#reviews" className="transition-colors hover:text-ink">
            고객 후기
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            자주 묻는 질문
          </a>
        </nav>
        <a
          href={CONTACT.telHref}
          className="flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-700 hover:text-white active:scale-[0.98]"
        >
          <Phone weight="fill" className="size-4" aria-hidden />
          {CONTACT.tel}
        </a>
      </div>
    </header>
  );
}
