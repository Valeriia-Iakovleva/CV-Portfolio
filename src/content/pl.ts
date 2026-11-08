import type { PortfolioContent } from "./types";
import { profile } from "./profile";

export default {
  title: `${profile.name} — CV i portfolio`,
  description:
    "Valeriia Iakovleva: Data Maintenance Specialist, absolwentka informatyki. Doświadczenie zawodowe, automatyzacja procesów i projekty w toku.",
  languageNavigation: "Wybierz język",
  introductionLabel: "CV i portfolio",
  location: "Warszawa, Polska",
  headline: "Zrozumieć biznes. Usprawnić codzienną pracę.",
  introduction:
    "Pracuję z danymi biznesowymi, procesami i automatyzacją w Dentons. Lubię rozumieć, jak wygląda codzienna praca, szukać możliwości jej usprawnienia i przekładać tę wiedzę na przydatne narzędzia.",
  githubLabel: "Profil na GitHubie",
  focusTitle: "Kierunek rozwoju",
  focus:
    "Rozwijam się od operacji na danych i automatyzacji w kierunku inżynierii rozwiązań cyfrowych, łącząc wykształcenie informatyczne ze zrozumieniem potrzeb biznesu.",
  about: [
    "Moje doświadczenie łączy pracę z danymi finansowymi i biznesowymi z usprawnianiem procesów. Współpracuję z międzynarodowymi zespołami, analizuję problemy i pomagam przekładać złożone procesy na jasne, powtarzalne działania.",
    "Interesuje mnie cały proces: od zrozumienia potrzeby biznesowej przez budowę i testowanie rozwiązania po dokumentację i wsparcie użytkowników. W dłuższej perspektywie chcę rozwijać się w kierunku architektury rozwiązań.",
  ],
  nav: {
    experience: "Doświadczenie",
    projects: "Projekty",
    about: "O mnie",
    contact: "Kontakt",
  },
  ui: {
    skip: "Przejdź do treści",
    explore: "Zobacz moje projekty",
    readCV: "Poznaj doświadczenie",
    print: "Drukuj / zapisz jako PDF",
    present: "obecnie",
    current: "Obecne stanowisko",
    experienceIntro:
      "Stanowiska i obowiązki, które ukształtowały moje podejście do rozwiązywania problemów.",
    experienceTitle: "Doświadczenie zawodowe",
    educationTitle: "Wykształcenie",
    skillsTitle: "Narzędzia i mocne strony",
    languagesTitle: "Języki",
    aboutTitle: "Kilka słów o mnie",
    projectsTitle: "Wybrane projekty",
    projectsIntro:
      "Praktyczne projekty: problem, mój wkład i aktualny rezultat.",
    completed: "Wdrożony",
    inProgress: "W toku",
    completedGroup: "Zrealizowane projekty",
    inProgressGroup: "Projekty w toku",
    details: "Poznaj projekt",
    problem: "Problem",
    contribution: "Mój wkład",
    outcome: "Rezultat / następny krok",
    scope: "Zakres",
    viewSource: "Zobacz kod",
    viewLive: "Zobacz stronę",
    viewPR: "Scalony pull request",
    duration: "Staż",
    contactTitle: "Porozmawiajmy.",
    contactText: "O moim doświadczeniu, projektach i rozwiązaniach cyfrowych.",
    footer: "Osobiste CV i portfolio",
    statusNote: "",
    ongoingWebsite: "Opublikowana podstawa · rozwijam CV i portfolio",
  },
  experience: {
    epam: {
      summary:
        "Staż w rozwoju backendu, skoncentrowany na migracji aplikacji z .NET Framework do .NET Core.",
      bullets: [
        "Uczestniczyłam w przepisywaniu istniejącej aplikacji w ramach migracji z .NET Framework do .NET Core.",
        "Pracowałam na podstawie zgłoszeń w Jira/Asana, ze szczególnym naciskiem na wymagania techniczne.",
      ],
      note: "Przybliżony początek: wrzesień 2021. Staż zakończył się 22 lutego 2022.",
    },
    dentons: {
      summary:
        "Praca z danymi biznesowymi i klientowskimi, automatyzacja procesów oraz wsparcie zespołów w międzynarodowej kancelarii.",
      note: "Awansowałam na stanowisko Specialist; podany okres zatrudnienia obejmuje również poprzednią rolę Junior.",
      bullets: [
        "Utrzymuję i weryfikuję dane biznesowe, analizuję niespójności i współpracuję z interesariuszami przy rozwiązywaniu problemów operacyjnych.",
        "Buduję i testuję przepływy Power Automate, łącząc raporty z dodatkowymi danymi z Excela.",
        "Wspieram wdrożenie 3E poprzez instrukcje procesowe, dokumentację i praktyczne narzędzia.",
        "Tworzę rejestry i dokumentację, szkolę współpracowników i wspieram wdrażanie nowych sposobów pracy.",
      ],
    },
    pontera: {
      summary:
        "Operacje na danych finansowych dla klientów działających na rynku amerykańskim.",
      bullets: [
        "Weryfikowałam wrażliwe dane finansowe i realizowałam zadania zgodnie z terminami raportowymi oraz wymaganiami jakościowymi.",
        "Analizowałam błędy i porządkowałam niekompletne lub niespójne rekordy w starszych bazach danych.",
        "Tworzyłam skrypty do przetwarzania danych i współpracowałam z Finance Operations oraz Customer Support przy usprawnianiu procesów.",
      ],
    },
    worknest: {
      summary:
        "Utrzymanie danych i koordynacja zadań w międzynarodowym zespole zdalnym.",
      bullets: [
        "Przetwarzałam i sprawdzałam dane operacyjne w Excelu, Google Sheets i systemach wewnętrznych.",
        "Korzystałam z narzędzi do zarządzania zadaniami i dokumentacją, porządkując codzienną pracę i aktualizacje projektów.",
        "Zbierałam informacje do raportów operacyjnych, dbając o jakość w procesach opartych na KPI.",
      ],
    },
  },
  education: {
    degree: "Studia pierwszego stopnia na kierunku informatyka",
    track: "Ścieżka: sztuczna inteligencja",
    topics:
      "Projektowanie baz danych, SQL, programowanie, aplikacje internetowe, analiza danych, algorytmy i systemy inteligentne.",
  },
  skills: {
    automation: {
      title: "Automatyzacja i raportowanie",
      description:
        "Przepływy pracy, raporty, narzędzia arkuszowe i uporządkowane rejestry operacyjne.",
    },
    data: {
      title: "Dane i programowanie",
      description:
        "Przetwarzanie danych, skrypty w Pythonie i R, podstawy SQL oraz automatyzacja arkuszy z użyciem TypeScript, Office Scripts, VBA i Power Query.",
    },
    collaboration: {
      title: "Biznes i współpraca",
      description:
        "Zrozumienie wymagań, usprawnianie procesów, dokumentowanie decyzji i wsparcie użytkowników.",
    },
  },
  spokenLanguages: {
    en: {
      name: "Angielski",
      level: "Swobodna komunikacja zawodowa · B2+",
    },
    pl: {
      name: "Polski",
      level: "B2 w teście poziomującym · komunikacja w pracy",
    },
    uk: {
      name: "Ukraiński",
      level: "Ojczysty",
    },
    ru: {
      name: "Rosyjski",
      level: "Ojczysty",
    },
  },
  projects: {
    "daily-report": {
      title: "Narzędzie do raportowania i obsługi Master File",
      context: "Projekt zawodowy · Dentons",
      summary:
        "Narzędzie operacyjne inspirowane dashboardem Jira, łączące raportowanie dzienne, dzielenie Master File i obsługę wyjątków przy ograniczonym zestawie narzędzi.",
      problem:
        "Zespół potrzebował przejrzystego obrazu codziennej pracy i indywidualnych wyjątków. Dostępne narzędzia były ograniczone, a interesariusze wymagali bardzo prostej obsługi.",
      contribution: [
        "Zaprojektowałam i wdrożyłam jeden proces obejmujący raportowanie dzienne i dzielenie Master File, a nie dwa osobne projekty.",
        "Połączyłam dane z Power BI i raportów stronicowanych z informacjami z Excela, notatkami i wyjątkami przez Power Automate.",
        "Dostosowałam podejście inspirowane dashboardem do dozwolonych narzędzi i ścisłych wymagań dotyczących prostoty.",
        "Przygotowałam instrukcje i wspierałam korzystanie z narzędzia w codziennej pracy.",
      ],
      outcome:
        "Rozwiązanie wdrożone do pracy zespołu: bardziej spójne raportowanie i mniej powtarzalnego przygotowania. Nie podaję niezweryfikowanych wyników liczbowych.",
      limitation:
        "Ogólny opis projektu zawodowego. Nie publikuję danych pracodawcy, kodu wewnętrznego, szczegółów systemów ani poufnych instrukcji.",
    },
    "follow-up": {
      title: "Automatyzacja przypomnień e-mail",
      context: "Projekt zawodowy · Dentons",
      summary:
        "Rozwijany proces przypomnień: zaprojektowana macierz decyzji oraz trwające prace nad ekstrakcją danych do logów i wizualizacją aktualnego statusu.",
      problem:
        "Proces powinien ułatwiać śledzenie oczekującej korespondencji, zapobiegając błędnym, powielonym lub niezamierzonym wiadomościom do kluczowych interesariuszy.",
      contribution: [
        "Zaprojektowałam macierz decyzji dotyczących dalszego kontaktu.",
        "Projektuję listę danych do ekstrakcji na potrzeby logowania i wizualizacji aktualnego statusu.",
        "Kończę przepływ Power Automate i analizuję problem wyszukiwania użytkowników po imieniu i nazwisku.",
        "Określiłam poprawne ustalanie odbiorców i zapobieganie niezamierzonym lub powielonym wiadomościom jako wymagania przed wdrożeniem.",
      ],
      outcome:
        "Projekt w toku. Obecne prace obejmują ekstrakcję i logowanie danych, wizualizację statusu, ukończenie przepływu oraz niezawodne wyszukiwanie odbiorców.",
      limitation:
        "Nie przedstawiam projektu jako gotowego do automatycznej wysyłki produkcyjnej. Walidacja odbiorców i ochrona przed niezamierzonymi wiadomościami wymagają sprawdzenia przed wdrożeniem.",
    },
    portfolio: {
      title: "To CV i portfolio",
      context: "Projekt osobisty",
      summary:
        "Wielojęzyczna strona z moim doświadczeniem i projektami, budowana krok po kroku w Astro i TypeScript.",
      problem:
        "Chciałam stworzyć osobistą stronę CV, którą łatwo utrzymać w języku angielskim, polskim i ukraińskim.",
      contribution: [
        "Wybrałam technologie, kierunek wizualny, strukturę treści i podejście do trzech wersji językowych.",
        "Rozwijam stronę ze wsparciem Codex, wykorzystując wspólne szablony, typowane treści i zwykły CSS.",
        "Opublikowałam wprowadzenie przez GitHub Actions i GitHub Pages; teraz rozbudowuję CV i opisy projektów.",
      ],
      outcome:
        "Wielojęzyczne wprowadzenie jest opublikowane. Ta wersja dodaje doświadczenie i opisy projektów do przeglądu.",
      limitation:
        "Projekt w toku. Kod i treści powstają ze wsparciem AI i są weryfikowane w trakcie rozwoju strony.",
    },
  },
} satisfies PortfolioContent;
