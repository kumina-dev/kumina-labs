import {
  PrivacyPage,
} from "@/components/PrivacyPage";
import {
  createPageMetadata,
} from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "fi",
  path: "/privacy",
  title: "Tietosuojaseloste",
  description:
    "Miten Kumina Labs käsittelee verkkosivujen yhteydenottoja ja Paperin odotuslistan tietoja.",
});

export default function FinnishPrivacyPage() {
  return <PrivacyPage locale="fi" />;
}
