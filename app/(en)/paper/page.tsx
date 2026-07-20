import { PaperPage } from "@/components/PaperPage";
import {
  createPageMetadata,
} from "@/lib/metadata";

const description =
  "Paper is a private, fast, offline-first writing and notes tool from Kumina Labs.";

export const metadata = createPageMetadata({
  locale: "en",
  path: "/paper",
  title: "Paper — A calmer place to write",
  description,
  paper: true,
});

export default function EnglishPaperPage() {
  return <PaperPage locale="en" />;
}
