import { ImageResponse } from "next/og";

export const alt = "NAVARICK premium creative studio social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#070706",
          color: "#f4efe5",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            NAVARICK
          </div>
          <div
            style={{
              color: "#b8a77f",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Premium Creative Studio
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 880,
          }}
        >
          <div
            style={{
              color: "#b8a77f",
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Brand Identity / Web Design / UI/UX
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 0.96,
            }}
          >
            Designing brands that deserve to be remembered.
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(244, 239, 229, 0.24)",
            color: "#d7cab0",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 26,
            width: "100%",
          }}
        >
          <span>navarickstudio.com</span>
          <span>Strategy, craft, and purposeful digital experiences</span>
        </div>
      </div>
    ),
    size,
  );
}
