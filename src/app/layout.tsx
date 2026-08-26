import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "이사짐캐리 | 안심포장이사·보관이사·사무실이사 전문",
  description:
    "가장 평온한 이삿날을 위한 단 하나의 솔루션. 대표 직접 방문 견적, 당일 추가 비용 0원, 고정팀 책임제. 무료 방문 견적 1688-5461",
  openGraph: {
    title: "이사짐캐리 | 안심포장이사·보관이사·사무실이사 전문",
    description:
      "대표 직접 방문 견적, 당일 추가 비용 0원, 고정팀 책임제. 무료 방문 견적 1688-5461",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
