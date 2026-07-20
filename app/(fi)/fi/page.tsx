import { StudioPage } from "@/components/StudioPage";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Kumina Labs suunnittelee ja toteuttaa selkeitä, nopeita verkkosivuja pienyrityksille, jotka tarvitsevat verkkoon oman kotipaikan.";

export const metadata = createPageMetadata({
  locale: "fi",
  title: "Yksilölliset verkkosivut pienyrityksille",
  description,
});

export default function FinnishHomePage() {
  return <StudioPage locale="fi" />;
}
