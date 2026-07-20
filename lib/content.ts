export const chromeContent = {
  en: {
    studioNavigation: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Paper", href: "/paper" },
      { label: "About", href: "#about" },
    ],
    paperNavigation: [
      { label: "Overview", href: "#overview" },
      { label: "Principles", href: "#principles" },
      { label: "Waitlist", href: "#waitlist" },
    ],
    studioCta: "Start a conversation",
    paperCta: "Join waitlist",
    languageLabel: "Suomeksi",
    languageCode: "FI",
    footerLine: "Independent web studio and product lab in Finland.",
    privacy: "Privacy",
    services: "Website services",
    product: "Paper",
  },
  fi: {
    studioNavigation: [
      { label: "Palvelut", href: "#services" },
      { label: "Prosessi", href: "#process" },
      { label: "Paper", href: "/fi/paper" },
      { label: "Tekijä", href: "#about" },
    ],
    paperNavigation: [
      { label: "Yleiskuva", href: "#overview" },
      { label: "Periaatteet", href: "#principles" },
      { label: "Odotuslista", href: "#waitlist" },
    ],
    studioCta: "Ota yhteyttä",
    paperCta: "Liity odotuslistalle",
    languageLabel: "In English",
    languageCode: "EN",
    footerLine: "Itsenäinen verkkostudio ja tuotelaboratorio Suomessa.",
    privacy: "Tietosuoja",
    services: "Verkkosivupalvelut",
    product: "Paper",
  },
} as const;

export const studioContent = {
  en: {
    hero: {
      eyebrow: "Independent web studio · Finland",
      title: "A proper website for businesses that have outgrown",
      accent: "social media.",
      description:
        "Kumina Labs designs and builds clear, fast websites for small businesses that need an online home they actually control.",
      primaryCta: "Tell me about your website",
      secondaryCta: "See what is included",
      points: ["Custom design", "Mobile-ready", "Built around your business"],
    },
    preview: {
      label: "Example website",
      business: "Your business",
      navigation: ["Services", "About", "Contact"],
      eyebrow: "Clear. Credible. Yours.",
      title: "Make it easy to understand why customers should choose you.",
      body: "A focused website gives your business one reliable place for its story, services and contact details.",
      cta: "Get in touch",
      status: "Designed for every screen",
    },
    services: {
      eyebrow: "Website service",
      title: "Not another template with your logo dropped into it.",
      description:
        "The website starts with what your customers need to understand and do. The design follows the business instead of forcing the business into a generic layout.",
      cards: [
        {
          number: "01",
          title: "Clear positioning",
          description:
            "Structure and messaging that explain what you offer, who it is for and what the visitor should do next.",
        },
        {
          number: "02",
          title: "Custom visual direction",
          description:
            "A design shaped around your business rather than a recycled theme wearing different colours.",
        },
        {
          number: "03",
          title: "Built for every screen",
          description:
            "Responsive layouts that remain usable and convincing from a small phone to a large desktop.",
        },
        {
          number: "04",
          title: "A solid technical base",
          description:
            "Fast pages, accessible interactions and the technical foundations search engines expect.",
        },
      ],
    },
    fit: {
      eyebrow: "Who it is for",
      title: "Useful when Instagram is currently doing the job of a website.",
      description:
        "The first offer is deliberately narrow: focused websites for small businesses that need a more credible and controllable presence online.",
      items: [
        "You do not have a website yet.",
        "A Facebook or Instagram profile is acting as your homepage.",
        "Your current site is outdated, unclear or painful to use.",
        "Customers struggle to find your services, details or next step.",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Four steps. No agency obstacle course.",
      description:
        "You stay involved where decisions matter. The rest is handled without turning the project into a weekly meeting subscription.",
      steps: [
        {
          number: "01",
          title: "Understand",
          description:
            "We define the business, audience, current problem and the one job the website must do well.",
        },
        {
          number: "02",
          title: "Shape",
          description:
            "I create the structure, content direction and visual approach before burying anything in code.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "The approved direction becomes a responsive, accessible and maintainable website.",
        },
        {
          number: "04",
          title: "Launch",
          description:
            "The final site is checked, connected to its domain and released with the practical handover covered.",
        },
      ],
    },
    delivery: {
      eyebrow: "The first service",
      title: "One focused website, built end to end.",
      description:
        "The exact scope and price are agreed before work begins, so there are no surprise fees assembled from meetings and add-ons.",
      includedTitle: "A typical project can include",
      included: [
        "A custom visual direction",
        "Responsive page and section design",
        "Clear service and contact paths",
        "Performance, accessibility and technical SEO foundations",
        "Deployment and domain setup",
        "A practical handover after launch",
      ],
      note: "The scope stays small enough to finish properly and specific enough to be useful.",
    },
    paper: {
      eyebrow: "Product work",
      title: "Paper is where Kumina Labs builds for itself.",
      description:
        "Paper is a private, fast, offline-first writing and notes tool. It is also a concrete example of the focused products Kumina Labs creates.",
      tagline: "Write quickly. Find it later. Own your data.",
      cta: "Explore Paper",
      status: "Early product · Waitlist open",
    },
    about: {
      eyebrow: "About",
      title: "Small studio. Direct responsibility.",
      description:
        "Kumina Labs is an independent software studio run by Ville Syrjälä in Finland. I design and build focused websites and software products without passing the work through layers of account managers or departments.",
      points: [
        "You speak directly with the person designing and building the work.",
        "The project is scoped before it expands into nonsense.",
        "The result is built to serve the business, not a portfolio trend.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me what your business needs online.",
      description:
        "A polished brief is not required. Explain what the business does, what you use now and what should work better. I will reply directly by email.",
      emailLabel: "Prefer plain email?",
      responseNote: "No mailing list. No sales automation. Just an actual reply.",
    },
  },
  fi: {
    hero: {
      eyebrow: "Itsenäinen verkkostudio · Suomi",
      title: "Kunnolliset verkkosivut yrityksille, joille pelkkä",
      accent: "someprofiili ei enää riitä.",
      description:
        "Kumina Labs suunnittelee ja toteuttaa selkeitä, nopeita verkkosivuja pienyrityksille, jotka tarvitsevat verkkoon oman, hallittavan kotipaikan.",
      primaryCta: "Kerro sivustotarpeestasi",
      secondaryCta: "Katso mitä palveluun kuuluu",
      points: [
        "Yksilöllinen suunnittelu",
        "Toimii mobiilissa",
        "Rakennettu yrityksesi ympärille",
      ],
    },
    preview: {
      label: "Esimerkkisivusto",
      business: "Sinun yrityksesi",
      navigation: ["Palvelut", "Yritys", "Yhteys"],
      eyebrow: "Selkeä. Uskottava. Oma.",
      title:
        "Tee asiakkaalle helpoksi ymmärtää, miksi hänen kannattaa valita sinut.",
      body: "Selkeä verkkosivusto kokoaa yrityksesi tarinan, palvelut ja yhteystiedot yhteen luotettavaan paikkaan.",
      cta: "Ota yhteyttä",
      status: "Suunniteltu jokaiselle näytölle",
    },
    services: {
      eyebrow: "Verkkosivupalvelu",
      title: "Ei taas yhtä valmispohjaa, johon logo vain pudotetaan.",
      description:
        "Sivusto lähtee siitä, mitä asiakkaidesi pitää ymmärtää ja tehdä. Ulkoasu mukautuu yritykseesi sen sijaan, että yritys pakotettaisiin yleiseen pohjaan.",
      cards: [
        {
          number: "01",
          title: "Selkeä asema",
          description:
            "Rakenne ja sisältö kertovat mitä tarjoat, kenelle se on tarkoitettu ja mitä kävijän kannattaa tehdä seuraavaksi.",
        },
        {
          number: "02",
          title: "Yksilöllinen ilme",
          description:
            "Yrityksesi ympärille suunniteltu ulkoasu, ei kierrätetty teema uusilla väreillä.",
        },
        {
          number: "03",
          title: "Toimii jokaisella näytöllä",
          description:
            "Responsiivinen sivusto pysyy käytettävänä ja vakuuttavana pienestä puhelimesta suureen näyttöön.",
        },
        {
          number: "04",
          title: "Kestävä tekninen pohja",
          description:
            "Nopeat sivut, saavutettavat toiminnot ja hakukoneiden odottamat tekniset perusteet.",
        },
      ],
    },
    fit: {
      eyebrow: "Kenelle palvelu sopii",
      title: "Kun Instagram hoitaa tällä hetkellä verkkosivujen virkaa.",
      description:
        "Ensimmäinen palvelu on tarkoituksella rajattu: selkeät verkkosivut pienyrityksille, jotka tarvitsevat uskottavamman ja hallittavamman näkyvyyden verkossa.",
      items: [
        "Yritykselläsi ei ole vielä verkkosivuja.",
        "Facebook- tai Instagram-profiili toimii käytännössä etusivuna.",
        "Nykyinen sivusto on vanhentunut, epäselvä tai hankala käyttää.",
        "Asiakkaiden on vaikea löytää palveluita, tietoja tai seuraavaa askelta.",
      ],
    },
    process: {
      eyebrow: "Prosessi",
      title: "Neljä vaihetta. Ei toimistomaista esterataa.",
      description:
        "Olet mukana päätöksissä, joilla on merkitystä. Muu hoituu ilman, että projektista tehdään viikoittaisten palaverien kestotilaus.",
      steps: [
        {
          number: "01",
          title: "Ymmärrä",
          description:
            "Määrittelemme yrityksen, asiakkaat, nykyisen ongelman ja sivuston tärkeimmän tehtävän.",
        },
        {
          number: "02",
          title: "Muotoile",
          description:
            "Suunnittelen rakenteen, sisältösuunnan ja visuaalisen ilmeen ennen kuin mitään haudataan koodiin.",
        },
        {
          number: "03",
          title: "Toteuta",
          description:
            "Hyväksytystä suunnasta rakennetaan responsiivinen, saavutettava ja ylläpidettävä sivusto.",
        },
        {
          number: "04",
          title: "Julkaise",
          description:
            "Valmis sivusto tarkistetaan, yhdistetään verkkotunnukseen ja julkaistaan selkeän luovutuksen kanssa.",
        },
      ],
    },
    delivery: {
      eyebrow: "Ensimmäinen palvelu",
      title: "Yksi keskittynyt verkkosivusto alusta loppuun.",
      description:
        "Tarkka laajuus ja hinta sovitaan ennen työn alkua, joten laskuun ei ilmesty yllätyksiä palavereista tai lisätöistä.",
      includedTitle: "Tyypilliseen projektiin voi kuulua",
      included: [
        "Yksilöllinen visuaalinen suunta",
        "Responsiivinen sivu- ja osiorakenne",
        "Selkeät reitit palveluihin ja yhteydenottoon",
        "Suorituskyvyn, saavutettavuuden ja teknisen hakukoneoptimoinnin perusteet",
        "Julkaisu ja verkkotunnuksen käyttöönotto",
        "Käytännöllinen luovutus julkaisun jälkeen",
      ],
      note: "Laajuus pidetään riittävän pienenä, jotta työ valmistuu kunnolla, ja riittävän tarkkana, jotta siitä on hyötyä.",
    },
    paper: {
      eyebrow: "Oma tuote",
      title: "Paper on Kumina Labsin oma tuoteprojekti.",
      description:
        "Paper on yksityinen, nopea ja offline-first-kirjoitus- ja muistiinpanotyökalu. Se on myös konkreettinen esimerkki Kumina Labsin kehittämistä rajatuista tuotteista.",
      tagline: "Kirjoita nopeasti. Löydä myöhemmin. Omista tietosi.",
      cta: "Tutustu Paperiin",
      status: "Varhainen tuote · Odotuslista avoinna",
    },
    about: {
      eyebrow: "Tekijä",
      title: "Pieni studio. Suora vastuu.",
      description:
        "Kumina Labs on Ville Syrjälän Suomessa pyörittämä itsenäinen ohjelmistostudio. Suunnittelen ja toteutan selkeitä verkkosivuja ja ohjelmistotuotteita ilman tilinhoitajien tai osastojen välikerroksia.",
      points: [
        "Keskustelet suoraan työn suunnittelevan ja toteuttavan henkilön kanssa.",
        "Projekti rajataan ennen kuin se leviää järjettömyyksiin.",
        "Lopputulos palvelee yritystä, ei portfolion hetkellistä trendiä.",
      ],
    },
    contact: {
      eyebrow: "Yhteys",
      title: "Kerro, mitä yrityksesi tarvitsee verkossa.",
      description:
        "Viimeisteltyä briiffiä ei tarvita. Kerro mitä yritys tekee, mitä käytätte nyt ja minkä pitäisi toimia paremmin. Vastaan henkilökohtaisesti sähköpostilla.",
      emailLabel: "Lähetätkö mieluummin tavallisen sähköpostin?",
      responseNote:
        "Ei postituslistaa tai myyntiautomaatiota. Vain oikea vastaus.",
    },
  },
} as const;

export const contactFormContent = {
  en: {
    name: "Your name",
    namePlaceholder: "Name",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    businessName: "Business name",
    businessNamePlaceholder: "Optional",
    currentWebsite: "Current website or social profile",
    currentWebsitePlaceholder: "Optional URL",
    message: "What do you need?",
    messagePlaceholder:
      "What does the business do, what is not working now, and what would you like the website to achieve?",
    required: "Required",
    submit: "Send enquiry",
    submitting: "Sending...",
    success: "Your enquiry was sent. I will reply directly by email.",
    privacyPrefix:
      "Your details are used only to respond to this enquiry. Read the",
    privacyLink: "privacy notice",
    validation: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      businessName: "Business name is too long.",
      currentWebsite: "Website address is too long.",
      message: "Please explain briefly what you need.",
      generic:
        "Could not send the enquiry. Please email me directly instead.",
    },
  },
  fi: {
    name: "Nimesi",
    namePlaceholder: "Nimi",
    email: "Sähköpostiosoite",
    emailPlaceholder: "sinä@esimerkki.fi",
    businessName: "Yrityksen nimi",
    businessNamePlaceholder: "Valinnainen",
    currentWebsite: "Nykyinen verkkosivu tai someprofiili",
    currentWebsitePlaceholder: "Valinnainen URL-osoite",
    message: "Mitä tarvitset?",
    messagePlaceholder:
      "Mitä yritys tekee, mikä ei nyt toimi ja mitä haluaisit verkkosivuston saavuttavan?",
    required: "Pakollinen",
    submit: "Lähetä yhteydenotto",
    submitting: "Lähetetään...",
    success:
      "Yhteydenottosi lähetettiin. Vastaan henkilökohtaisesti sähköpostilla.",
    privacyPrefix:
      "Tietojasi käytetään vain tähän yhteydenottoon vastaamiseen. Lue",
    privacyLink: "tietosuojaseloste",
    validation: {
      name: "Kirjoita nimesi.",
      email: "Kirjoita kelvollinen sähköpostiosoite.",
      businessName: "Yrityksen nimi on liian pitkä.",
      currentWebsite: "Verkko-osoite on liian pitkä.",
      message: "Kerro lyhyesti, mitä tarvitset.",
      generic:
        "Yhteydenoton lähetys epäonnistui. Lähetä sähköposti suoraan.",
    },
  },
} as const;

export const paperContent = {
  en: {
    hero: {
      eyebrow: "Paper · A Kumina Labs product",
      title: "A calmer place to write things down.",
      description:
        "Paper is a private, fast, offline-first writing and notes tool for drafts, thoughts, ideas and anything you want to find later.",
      primaryCta: "Join the Paper waitlist",
      secondaryCta: "See what Paper is",
      note: "No workspace bloat. No account-first flow. No giant platform promise.",
    },
    overview: {
      eyebrow: "Paper",
      title: "Write quickly. Find it later. Own your data.",
      description:
        "Paper is intentionally small. The first version should prove whether people want a fast, local-first place to write, search and export their work.",
      features: [
        {
          title: "Start writing immediately",
          description:
            "Create a new paper and start typing without setup, templates or workspace noise.",
        },
        {
          title: "Saved locally first",
          description:
            "Paper is designed around local-first storage, so writing stays fast and available offline.",
        },
        {
          title: "Find notes later",
          description:
            "Search across titles and body text so old ideas, drafts and notes stay useful.",
        },
        {
          title: "Export your work",
          description:
            "Keep ownership of your writing with simple export formats such as Markdown and plain text.",
        },
      ],
    },
    principles: {
      eyebrow: "Product principles",
      title: "Small on purpose.",
      description:
        "Paper earns features only when they help people write quickly, find things later or keep control of their data.",
      currentTitle: "What Paper is for",
      current: [
        "Fast capture before the thought disappears.",
        "Offline-first by default.",
        "Searchable notes without workspace complexity.",
        "Plain export so users keep control.",
      ],
      delayedTitle: "Delayed for now",
      delayed: [
        "Accounts",
        "Billing",
        "Team workspaces",
        "AI writing",
        "Public sharing",
        "Plugin systems",
        "Complex sync",
        "Enterprise features",
      ],
    },
    waitlist: {
      eyebrow: "Waitlist",
      title: "Help shape the first version of Paper.",
      description:
        "The next goal is finding a small group of people who actually want a quieter writing tool and are willing to test an early version.",
      testersTitle: "Good early testers probably:",
      testers: [
        "Write notes, drafts or ideas often.",
        "Feel slowed down by heavy workspace apps.",
        "Care about keeping access to their own writing.",
        "Would rather test a focused tool than a huge platform.",
      ],
    },
    mockup: {
      saved: "Saved",
      new: "New",
      offline: "Offline",
      draft: "Draft",
      title: "A quieter place to write",
      body: "Start with a blank paper. No workspace setup. No account wall. Just a fast place to get the thought down.",
      ruleLabel: "Product rule",
      rule: "Write. Find. Own.",
      search: "Search",
      notes: [
        ["Launch notes", "Yesterday"],
        ["Draft: calm writing", "Edited now"],
        ["Ideas to revisit", "Local note"],
        ["Export checklist", "Markdown"],
      ],
      actions: ["Fast", "Search", "Export"],
    },
  },
  fi: {
    hero: {
      eyebrow: "Paper · Kumina Labsin tuote",
      title: "Rauhallisempi paikka kirjoittaa asiat muistiin.",
      description:
        "Paper on yksityinen, nopea ja offline-first-kirjoitus- ja muistiinpanotyökalu luonnoksille, ajatuksille, ideoille ja kaikelle, minkä haluat löytää myöhemmin.",
      primaryCta: "Liity Paperin odotuslistalle",
      secondaryCta: "Katso mikä Paper on",
      note: "Ei työtilahässäkkää. Ei pakollista tiliä. Ei lupausta valtavasta alustasta.",
    },
    overview: {
      eyebrow: "Paper",
      title: "Kirjoita nopeasti. Löydä myöhemmin. Omista tietosi.",
      description:
        "Paper on tarkoituksella pieni. Ensimmäisen version tehtävä on selvittää, haluavatko ihmiset nopean, ensisijaisesti paikallisesti toimivan paikan tekstin kirjoittamiseen, löytämiseen ja viemiseen.",
      features: [
        {
          title: "Aloita kirjoittaminen heti",
          description:
            "Luo uusi paperi ja aloita ilman asetuksia, valmispohjia tai työtilojen hälyä.",
        },
        {
          title: "Tallennetaan ensin laitteelle",
          description:
            "Paper suunnitellaan local-first-periaatteella: kirjoittaminen pysyy nopeana ja toimii myös ilman verkkoyhteyttä.",
        },
        {
          title: "Löydä muistiinpanot myöhemmin",
          description:
            "Hae otsikoista ja tekstisisällöstä, jotta vanhat ideat, luonnokset ja muistiinpanot pysyvät hyödyllisinä.",
        },
        {
          title: "Vie omat tekstisi",
          description:
            "Säilytä omistajuus kirjoituksiisi yksinkertaisilla vientimuodoilla, kuten Markdownilla ja tavallisella tekstillä.",
        },
      ],
    },
    principles: {
      eyebrow: "Tuoteperiaatteet",
      title: "Tarkoituksella pieni.",
      description:
        "Paper saa ominaisuuksia vain, kun ne auttavat kirjoittamaan nopeasti, löytämään asiat myöhemmin tai pitämään omat tiedot hallinnassa.",
      currentTitle: "Mihin Paper on tarkoitettu",
      current: [
        "Ajatuksen nopea tallennus ennen kuin se katoaa.",
        "Offline-first oletuksena.",
        "Haettavat muistiinpanot ilman työtilojen monimutkaisuutta.",
        "Selkeä vienti, jotta käyttäjä säilyttää hallinnan.",
      ],
      delayedTitle: "Siirretty myöhemmäksi",
      delayed: [
        "Käyttäjätilit",
        "Maksaminen",
        "Tiimityötilat",
        "Tekoälykirjoittaminen",
        "Julkinen jakaminen",
        "Lisäosajärjestelmät",
        "Monimutkainen synkronointi",
        "Yritystason ominaisuudet",
      ],
    },
    waitlist: {
      eyebrow: "Odotuslista",
      title: "Auta muovaamaan Paperin ensimmäistä versiota.",
      description:
        "Seuraava tavoite on löytää pieni joukko ihmisiä, jotka oikeasti haluavat rauhallisemman kirjoitustyökalun ja ovat valmiita testaamaan varhaista versiota.",
      testersTitle: "Hyvä varhainen testaaja todennäköisesti:",
      testers: [
        "Kirjoittaa usein muistiinpanoja, luonnoksia tai ideoita.",
        "Kokee raskaat työtilasovellukset hitaiksi.",
        "Haluaa säilyttää pääsyn omiin kirjoituksiinsa.",
        "Testaa mieluummin rajattua työkalua kuin valtavaa alustaa.",
      ],
    },
    mockup: {
      saved: "Tallennettu",
      new: "Uusi",
      offline: "Ei verkkoa",
      draft: "Luonnos",
      title: "Kirjoita rauhassa",
      body: "Aloita tyhjältä paperilta. Ei työtiloja tai tilipakkoa — vain nopea paikka ajatuksille.",
      ruleLabel: "Tuotesääntö",
      rule: "Kirjoita. Löydä. Omista.",
      search: "Haku",
      notes: [
        ["Julkaisumuistiinpanot", "Eilen"],
        ["Luonnos: Rauhallinen luonnos", "Muokattu nyt"],
        ["Ideat myöhemmäksi", "Paikallinen"],
        ["Vientilista", "Markdown"],
      ],
      actions: ["Nopea", "Haku", "Vienti"],
    },
  },
} as const;

export const waitlistFormContent = {
  en: {
    email: "Email address",
    currentTool: "What do you use now?",
    currentToolPlaceholder: "Apple Notes, Notion, Obsidian...",
    pain: "What feels annoying or slow about your current setup?",
    painPlaceholder: "Optional, but this is the most useful feedback.",
    testerIntent: "Would you be open to testing an early version?",
    testerLabels: [
      "Yes, I'd like to test it",
      "Maybe, send me updates first",
      "Not right now",
    ],
    submit: "Join the Paper waitlist",
    submitting: "Joining...",
    success: "You're on the list. Thanks for helping shape Paper.",
    required: "Required",
    requiredNote:
      "Required. No account. No workspace. Just early access and useful feedback.",
    privacyPrefix:
      "See how Kumina Labs handles your waitlist information in the",
    privacyLink: "privacy notice",
    errors: {
      email: "Please enter a valid email address.",
      currentTool: "Current tool is too long.",
      pain: "Feedback is too long.",
      testerIntent:
        "Please choose whether you're open to testing Paper.",
      generic: "Could not submit the form. Please try again.",
    },
  },
  fi: {
    email: "Sähköpostiosoite",
    currentTool: "Mitä käytät nyt?",
    currentToolPlaceholder: "Apple Notes, Notion, Obsidian...",
    pain: "Mikä nykyisessä ratkaisussasi tuntuu hankalalta tai hitaalta?",
    painPlaceholder: "Valinnainen, mutta tämä on hyödyllisin palaute.",
    testerIntent: "Voisitko testata varhaista versiota?",
    testerLabels: [
      "Kyllä, haluaisin testata",
      "Ehkä, lähetä ensin päivityksiä",
      "En juuri nyt",
    ],
    submit: "Liity Paperin odotuslistalle",
    submitting: "Liitytään...",
    success:
      "Olet odotuslistalla. Kiitos, että autat muovaamaan Paperia.",
    required: "Pakollinen",
    requiredNote:
      "Pakollinen. Ei käyttäjätiliä tai työtilaa. Vain varhainen pääsy ja hyödyllinen palaute.",
    privacyPrefix:
      "Katso, miten Kumina Labs käsittelee odotuslistan tietoja",
    privacyLink: "tietosuojaselosteesta",
    errors: {
      email: "Kirjoita kelvollinen sähköpostiosoite.",
      currentTool: "Nykyisen työkalun nimi on liian pitkä.",
      pain: "Palaute on liian pitkä.",
      testerIntent: "Valitse, haluaisitko testata Paperia.",
      generic: "Lomakkeen lähetys epäonnistui. Yritä uudelleen.",
    },
  },
} as const;
