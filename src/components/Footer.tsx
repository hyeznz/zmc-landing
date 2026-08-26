import { COMPANY, CONTACT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper pb-28 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <p className="text-lg font-extrabold tracking-tight">
          이사짐<span className="text-brand-600">캐리</span>
        </p>
        <dl className="mt-4 space-y-1 text-xs leading-relaxed text-ink-faint">
          <div>
            상호명: {COMPANY.name} | 대표: {COMPANY.ceo} | 연락처: {CONTACT.tel} |
            이메일: {CONTACT.email}
          </div>
          <div>주소: {COMPANY.address}</div>
          <div>
            사업자등록번호: {COMPANY.bizNumber} | 개인정보관리책임자:{" "}
            {COMPANY.privacyOfficer}
          </div>
          <div>
            통신판매업신고번호: {COMPANY.mailOrderNumber} | 화물자동차운송사업허가증:{" "}
            {COMPANY.freightLicense}
          </div>
        </dl>
        <p className="mt-6 text-xs text-ink-faint">
          © 2026. {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
