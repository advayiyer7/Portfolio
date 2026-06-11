import { ImageResponse } from "next/og";
import { site, hero } from "@/lib/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#06070D",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(91,140,255,0.18), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.16), transparent 45%)",
          color: "#E7EBF4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#4DE0F0",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 99,
              backgroundColor: "#4DE0F0",
              boxShadow: "0 0 24px 4px #4DE0F0",
            }}
          />
          CE &amp; CS @ USC
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: -3,
            marginTop: 28,
            lineHeight: 1.02,
          }}
        >
          {site.name}
        </div>

        <div style={{ display: "flex", fontSize: 40, color: "#8A93A8", marginTop: 24, maxWidth: 920 }}>
          {hero.headline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            height: 5,
            width: 360,
            borderRadius: 99,
            background: "linear-gradient(90deg,#4DE0F0,#5B8CFF,#8B5CF6)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
