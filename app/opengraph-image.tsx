import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Auto-generated Open Graph image for social sharing */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background:
              "radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafafa",
            }}
          >
            {siteConfig.name}
            <span style={{ color: "#8b5cf6" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
            }}
          >
            {siteConfig.role}
          </div>
          <div
            style={{
              marginTop: 24,
              padding: "12px 32px",
              borderRadius: 8,
              background: "#8b5cf6",
              color: "#fff",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Node.js · React · PostgreSQL
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
