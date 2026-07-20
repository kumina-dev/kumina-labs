import { PaperPage } from "@/components/PaperPage";
import {
  createPageMetadata,
} from "@/lib/metadata";

const description =
  "Paper on Kumina Labsin yksityinen, nopea ja offline-first-kirjoitus- ja muistiinpanotyökalu.";

export const metadata = createPageMetadata({
  locale: "fi",
  path: "/paper",
  title:
    "Paper — Rauhallisempi paikka kirjoittaa",
  description,
  paper: true,
});

export default function FinnishPaperPage() {
  return <PaperPage locale="fi" />;
}
