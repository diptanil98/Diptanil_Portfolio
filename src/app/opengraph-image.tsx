import { ImageResponse } from "next/og";

export const alt = "Diptanil Sarkar — Full-Stack Developer";
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
          justifyContent: "space-between",
          background: "#0a0a0c",
          color: "#ededee",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, color: "#8f8f99" }}>DIPTANIL SARKAR</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>Full-Stack Developer</div>
          <div style={{ fontSize: 32, color: "#8f8f99", marginTop: 16 }}>React · Node.js · TypeScript · AI</div>
        </div>
        <div style={{ width: 96, height: 4, background: "#3d7bff" }} />
      </div>
    ),
    size,
  );
}
