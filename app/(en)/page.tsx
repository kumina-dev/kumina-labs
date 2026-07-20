import { StudioPage } from "@/components/StudioPage";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Kumina Labs designs and builds clear, fast websites for small businesses that need an online home they actually control.";

export const metadata = createPageMetadata({
  locale: "en",
  title: "Custom websites for small businesses",
  description,
});

export default function HomePage() {
  return <StudioPage locale="en" />;
}
