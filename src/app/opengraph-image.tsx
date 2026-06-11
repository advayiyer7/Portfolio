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
          backgroundColor: "#121110",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(217,164,91,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(168,127,72,0.10), transparent 45%)",
          color: "#EAE6DD",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#D9A45B",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#D9A45B",
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

        <div style={{ display: "flex", fontSize: 40, color: "#A09885", marginTop: 24, maxWidth: 920 }}>
          {hero.headline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            height: 5,
            width: 360,
            borderRadius: 99,
            background: "linear-gradient(90deg,#D9A45B,#A87F48)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
