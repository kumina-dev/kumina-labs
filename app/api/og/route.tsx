import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  request: Request
) {
  const locale =
    new URL(request.url).searchParams.get(
      "locale"
    ) === "fi"
      ? "fi"
      : "en";

  const copy =
    locale === "fi"
      ? {
          eyebrow:
            "Itsenäinen verkkostudio · Suomi",
          title:
            "Kunnolliset verkkosivut yrityksille, joille pelkkä someprofiili ei enää riitä.",
          details:
            "Yksilöllinen suunnittelu · Toimii mobiilissa · Rakennettu yrityksesi ympärille",
        }
      : {
          eyebrow:
            "Independent web studio · Finland",
          title:
            "Proper websites for businesses that have outgrown social media.",
          details:
            "Custom design · Mobile-ready · Built around your business",
        };

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0b0906",
        color: "#f7efe2",
        fontFamily: "Arial, sans-serif",
        padding: "58px 64px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: 999,
          right: -120,
          top: -180,
          background:
            "rgba(229,166,77,0.2)",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          opacity: 0.22,
          backgroundImage:
            "linear-gradient(rgba(247,239,226,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(247,239,226,0.12) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 17,
              background: "#e5a64d",
              color: "#1b1206",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            K
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Kumina Labs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 950,
          }}
        >
          <div
            style={{
              color: "#ffc66f",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {copy.eyebrow}
          </div>

          <div
            style={{
              marginTop: 20,
              fontSize: 66,
              lineHeight: 1.02,
              fontWeight: 750,
              letterSpacing: "-0.055em",
            }}
          >
            {copy.title}
          </div>

          <div
            style={{
              marginTop: 24,
              color: "#b7ac9c",
              fontSize: 25,
            }}
          >
            {copy.details}
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800",
      },
    }
  );
}
