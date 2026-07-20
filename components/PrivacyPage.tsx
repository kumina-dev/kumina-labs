import {
  SiteFooter,
  SiteHeader,
} from "@/components/SiteChrome";
import { siteConfig, type Locale } from "@/lib/site";

const privacyContent = {
  en: {
    eyebrow: "Kumina Labs",
    title: "Privacy notice",
    updated: "Last updated 20 July 2026",
    sections: [
      {
        title: "Who controls the data",
        paragraphs: [
          "Ville Syrjälä, operating the Kumina Labs website, controls the personal information submitted through the website.",
        ],
      },
      {
        title: "Website enquiries",
        paragraphs: [
          "The contact form collects your name, email address, optional business name and current website or social profile, plus the message you submit. This information is used to respond to your enquiry, understand the requested work and take steps you request before a possible project begins.",
          "Submitting the form does not add you to a mailing list or automated sales sequence.",
        ],
      },
      {
        title:
          "Why the information is processed",
        paragraphs: [
          "Website enquiries are processed to take steps at your request before a possible contract and, where necessary, for the legitimate interest of answering enquiries and managing potential client relationships. Paper waitlist information and product updates are processed on the basis of the consent you give by choosing to join the waitlist. You can withdraw that consent at any time by email without affecting earlier processing.",
        ],
      },
      {
        title: "Paper waitlist",
        paragraphs: [
          "The Paper waitlist collects your email address, testing preference and any optional details you provide about your current tool or problems with it. This information is used to manage early access, understand who Paper may help, invite suitable testers and send relevant product updates.",
        ],
      },
      {
        title: "Service providers",
        paragraphs: [
          "Supabase stores contact enquiries and Paper waitlist submissions. Resend delivers contact-form notifications to Kumina Labs. Vercel hosts and delivers the website and may process standard request and operational data required to provide it. These providers process data under their own service and privacy terms.",
          "Depending on the provider configuration, personal information may be processed outside the European Economic Area. Where this happens, the provider's applicable transfer safeguards, such as an adequacy decision or standard contractual clauses, are used. Personal information is not sold.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "If an enquiry does not become a client relationship, it is deleted no later than 24 months after the last communication. If work begins, relevant information may be retained for the client relationship and for any longer period required by accounting or other law.",
          "Paper waitlist information is kept while Paper is being developed and for no more than 24 months after your last waitlist interaction, unless you withdraw consent sooner. Essential hosting and security records follow the service providers' documented retention periods.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on the circumstances, you may request access to, correction of, deletion of, restriction of or portability of your personal information, or object to processing based on legitimate interests. You may withdraw waitlist consent at any time. Send the request from the email address connected to the information so ownership can be verified where necessary.",
          "You may also lodge a complaint with the Finnish Office of the Data Protection Ombudsman at tietosuoja.fi if you believe your personal information has been processed unlawfully.",
        ],
      },
      {
        title: "Other details",
        paragraphs: [
          "The information comes directly from you, apart from ordinary technical request data generated when the website is used. The required contact fields are needed to reply to an enquiry, and the required waitlist fields are needed to manage the waitlist. Kumina Labs does not use this information for automated decision-making or profiling and does not set non-essential advertising or analytics cookies on this version of the website.",
        ],
      },
    ],
    contactTitle: "Privacy contact",
  },
  fi: {
    eyebrow: "Kumina Labs",
    title: "Tietosuojaseloste",
    updated: "Päivitetty 20.7.2026",
    sections: [
      {
        title: "Rekisterinpitäjä",
        paragraphs: [
          "Kumina Labs -sivustoa ylläpitävä Ville Syrjälä toimii sivuston kautta toimitettujen henkilötietojen rekisterinpitäjänä.",
        ],
      },
      {
        title:
          "Verkkosivuihin liittyvät yhteydenotot",
        paragraphs: [
          "Yhteydenottolomakkeella kerätään nimi, sähköpostiosoite, valinnainen yrityksen nimi ja nykyinen verkkosivu tai someprofiili sekä lähettämäsi viesti. Tietoja käytetään yhteydenottoon vastaamiseen, pyydetyn työn ymmärtämiseen ja mahdolliseen projektiin liittyvien, pyytämiesi ennakkotoimien tekemiseen.",
          "Lomakkeen lähettäminen ei lisää sinua postituslistalle tai automaattiseen myyntiviestintään.",
        ],
      },
      {
        title: "Käsittelyn oikeusperuste",
        paragraphs: [
          "Verkkosivuihin liittyviä yhteydenottoja käsitellään, jotta pyyntösi mukaisiin toimiin voidaan ryhtyä ennen mahdollista sopimusta, sekä tarvittaessa oikeutetun edun perusteella yhteydenottoihin vastaamista ja mahdollisten asiakassuhteiden hoitamista varten. Paperin odotuslistan tietoja ja tuotepäivityksiä käsitellään odotuslistalle liittyessäsi antamasi suostumuksen perusteella. Voit peruuttaa suostumuksen milloin tahansa sähköpostilla ilman, että peruutus vaikuttaa aiempaan käsittelyyn.",
        ],
      },
      {
        title: "Paperin odotuslista",
        paragraphs: [
          "Paperin odotuslistalla kerätään sähköpostiosoite, testaushalukkuus sekä mahdolliset vapaaehtoiset tiedot nykyisestä työkalusta ja sen ongelmista. Tietoja käytetään varhaisen pääsyn hallintaan, Paperin mahdollisten käyttäjien tarpeiden ymmärtämiseen, testaajien kutsumiseen ja olennaisten tuotepäivitysten lähettämiseen.",
        ],
      },
      {
        title: "Palveluntarjoajat",
        paragraphs: [
          "Supabase tallentaa yhteydenotot ja Paperin odotuslistan tiedot. Resend toimittaa yhteydenottolomakkeen ilmoitukset Kumina Labsille. Vercel ylläpitää ja jakelee sivustoa sekä voi käsitellä palvelun tuottamiseen tarvittavia tavallisia pyyntö- ja käyttötietoja. Palveluntarjoajat käsittelevät tietoja omien palvelu- ja tietosuojiehtojensa mukaisesti.",
          "Palveluntarjoajan asetuksista riippuen henkilötietoja voidaan käsitellä Euroopan talousalueen ulkopuolella. Tällöin käytetään palveluntarjoajan soveltamia siirtosuojia, kuten tietosuojan riittävyyttä koskevaa päätöstä tai vakiolausekkeita. Henkilötietoja ei myydä.",
        ],
      },
      {
        title: "Säilytysaika",
        paragraphs: [
          "Jos yhteydenotto ei johda asiakassuhteeseen, tiedot poistetaan viimeistään 24 kuukauden kuluttua viimeisestä yhteydenpidosta. Jos työ alkaa, olennaisia tietoja voidaan säilyttää asiakassuhteen ajan ja pidempään silloin, kun kirjanpito- tai muu laki sitä edellyttää.",
          "Paperin odotuslistan tietoja säilytetään tuotteen kehityksen ajan ja enintään 24 kuukautta viimeisestä odotuslistaan liittyvästä yhteydenpidosta, ellei suostumusta peruuteta aiemmin. Välttämättömiin ylläpito- ja tietoturvalokeihin sovelletaan palveluntarjoajien ilmoittamia säilytysaikoja.",
        ],
      },
      {
        title: "Oikeutesi",
        paragraphs: [
          "Tilanteesta riippuen voit pyytää henkilötietojesi tarkastamista, korjaamista, poistamista, käsittelyn rajoittamista tai siirtämistä sekä vastustaa oikeutettuun etuun perustuvaa käsittelyä. Voit peruuttaa odotuslistaa koskevan suostumuksen milloin tahansa. Lähetä pyyntö tietoihin liitetystä sähköpostiosoitteesta, jotta omistajuus voidaan tarvittaessa varmistaa.",
          "Voit myös tehdä valituksen Suomen tietosuojavaltuutetun toimistolle osoitteessa tietosuoja.fi, jos katsot, että henkilötietojasi on käsitelty lainvastaisesti.",
        ],
      },
      {
        title: "Muut tiedot",
        paragraphs: [
          "Tiedot saadaan suoraan sinulta lukuun ottamatta sivuston käytöstä syntyviä tavallisia teknisiä pyyntötietoja. Yhteydenottolomakkeen pakolliset tiedot tarvitaan vastaamiseen ja odotuslistan pakolliset tiedot sen hallintaan. Kumina Labs ei käytä tietoja automaattiseen päätöksentekoon tai profilointiin eikä aseta tässä sivustoversiossa ei-välttämättömiä mainonta- tai analytiikkaevästeitä.",
        ],
      },
    ],
    contactTitle:
      "Tietosuojaan liittyvä yhteys",
  },
} as const;

export function PrivacyPage({
  locale,
}: {
  locale: Locale;
}) {
  const copy = privacyContent[locale];

  const subject = encodeURIComponent(
    locale === "en"
      ? "Privacy request"
      : "Tietosuojapyyntö"
  );

  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <SiteHeader
        locale={locale}
        page="legal"
      />

      <article className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <header className="border-b border-white/10 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-strong) sm:text-sm">
            {copy.eyebrow}
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-5 text-sm text-(--muted)">
            {copy.updated}
          </p>
        </header>

        <div className="space-y-12 py-12">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-base leading-8 text-(--muted) sm:text-lg">
                {section.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </section>
          ))}

          <section className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.035em]">
              {copy.contactTitle}
            </h2>

            <a
              href={`mailto:${siteConfig.contactEmail}?subject=${subject}`}
              className="mt-4 block break-all text-lg font-semibold text-(--accent-strong) underline decoration-(--accent)/35 underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>

            <a
              href={
                locale === "en"
                  ? "https://tietosuoja.fi/en/home"
                  : "https://tietosuoja.fi/etusivu"
              }
              className="mt-4 inline-block text-sm text-(--muted) underline decoration-white/20 underline-offset-4 transition hover:text-(--foreground)"
            >
              {locale === "en"
                ? "Finnish Office of the Data Protection Ombudsman"
                : "Tietosuojavaltuutetun toimisto"}
            </a>
          </section>
        </div>
      </article>

      <SiteFooter locale={locale} />
    </main>
  );
}
