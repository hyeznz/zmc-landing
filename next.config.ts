import type { NextConfig } from "next";

// GitHub Pages 배포 시(Actions 환경) 프로젝트 경로(/zmc-landing) 하위로 서빙됨
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPages ? "/zmc-landing" : undefined,
  images: {
    // 정적 export에는 이미지 최적화 서버가 없음
    unoptimized: true,
  },
};

export default nextConfig;
