import { ImageResponse } from "next/og";

// Apple touch icon — larger "A" monogram with the brand amber accent.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121110",
          color: "#d9a45b",
          fontSize: 120,
          fontWeight: 700,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
