import type { NextConfig } from "next";

// GitHub Pages 배포 시(Actions 환경) 프로젝트 경로(/zmc-landing) 하위로 서빙됨
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPages ? "/zmc-landing" : undefined,
  env: {
    // unoptimized next/image는 basePath를 src에 붙이지 않으므로 직접 프리픽스
    NEXT_PUBLIC_BASE_PATH: isPages ? "/zmc-landing" : "",
  },
  images: {
    // 정적 export에는 이미지 최적화 서버가 없음
    unoptimized: true,
  },
};

export default nextConfig;
