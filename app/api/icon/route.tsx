import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 38,
        background: "#e5a64d",
        color: "#1b1206",
        fontFamily: "Arial, sans-serif",
        fontSize: 112,
        fontWeight: 800,
        letterSpacing: "-0.08em",
      }}
    >
      K
    </div>,
    {
      width: 180,
      height: 180,
      headers: {
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800",
      },
    }
  );
}
