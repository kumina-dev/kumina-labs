import {
  PrivacyPage,
} from "@/components/PrivacyPage";
import {
  createPageMetadata,
} from "@/lib/metadata";

export const metadata = createPageMetadata({
  locale: "en",
  path: "/privacy",
  title: "Privacy notice",
  description:
    "How Kumina Labs handles website enquiries and Paper waitlist information.",
});

export default function EnglishPrivacyPage() {
  return <PrivacyPage locale="en" />;
}
