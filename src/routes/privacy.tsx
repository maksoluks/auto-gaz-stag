import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — STAG Mechanika Rogowski" },
      { name: "description", content: "Polityka prywatności oraz informacja RODO dla klientów warsztatu STAG Mechanika Rogowski w Jastkowie." },
      { property: "og:title", content: "Polityka prywatności — STAG Mechanika Rogowski" },
      { property: "og:description", content: "Polityka prywatności i RODO." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-sm text-primary hover:underline">
          {t("privacy.back")}
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{t("privacy.title")}</h1>

        <div className="prose prose-neutral mt-8 max-w-none space-y-5 text-foreground/90 dark:prose-invert">
          {lang === "pl" ? <PrivacyPL /> : <PrivacyEN />}
        </div>
      </main>
    </div>
  );
}

function PrivacyPL() {
  return (
    <>
      <h2 className="text-xl font-semibold">1. Administrator Danych Osobowych</h2>
      <p>
        Administratorem Państwa danych osobowych jest firma Auto Gaz Adam Rogowski z siedzibą w
        Snopków 56A, 21-002 Jastków Poland Kontakt z Administratorem jest możliwy pod adresem e-mail: adam.rogowski.net@gmail.com lub numerem telefonu: 609258834.
      </p>
      <h2 className="text-xl font-semibold">2. Cele i podstawy prawne przetwarzania</h2>
      <p>
        Państwa dane będą przetwarzane w celu:
      </p>
      <p>
      realizacji usługi serwisowej, montażu instalacji LPG oraz wystawienia niezbędnej dokumentacji (podstawa: art. 6 ust. 1 lit. b RODO – wykonanie umowy);
      </p>
      <p>
      wypełnienia obowiązków prawnych ciążących na Administratorze, np. wystawiania faktur i przechowywania dokumentacji księgowej (podstawa: art. 6 ust. 1 lit. c RODO);
      </p>
      <p>
      ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami (podstawa: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes).
      </p>
      <h2 className="text-xl font-semibold">3. Okres przechowywania danych</h2>
      <p>
        Dane będą przechowywane przez okres niezbędny do realizacji usługi, a po 
        jej zakończeniu przez czas wymagany przepisami prawa podatkowego (5 lat) 
        lub do upływu terminu przedawnienia ewentualnych roszczeń.
      </p>
      <h2 className="text-xl font-semibold">4. Odbiorcy danych</h2>
      <p>
        Odbiorcami Państwa danych mogą być podmioty uprawnione do uzyskania danych 
        na podstawie przepisów prawa, biura rachunkowe, firmy kurierskie oraz dostawcy 
        oprogramowania technicznego niezbędnego do obsługi instalacji gazowych.
      </p>
      <h2 className="text-xl font-semibold">5. Prawa osoby, której dane dotyczą</h2>
      <p>
      Przysługuje Państwu prawo do:
      </p>
      <p>dostępu do swoich danych oraz otrzymania ich kopii;</p>
      <p>usunięcia danych lub ograniczenia ich przetwarzania;</p>
      <p>wniesienia sprzeciwu wobec przetwarzania;</p>
      <p>wniesienia skargi do Organu Nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.</p>
      <h2 className="text-xl font-semibold">6. Pliki cookies</h2>
      <p>
        Strona internetowa wykorzystuje wyłącznie pliki cookies niezbędne do działania (preferencje
        języka i motywu) oraz osadzony serwis Google Maps. Nie używamy plików cookies do profilowania
        marketingowego.
      </p>
      <h2 className="text-xl font-semibold">7. Dobrowolność podania danych</h2>
      <p> Podanie danych osobowych (takich jak imię, nazwisko, numer rejestracyjny pojazdu, numer telefonu) jest dobrowolne, ale niezbędne do przyjęcia pojazdu do serwisu i wykonania usługi.</p>
    </>
  );
}

 

function PrivacyEN() {
  return (
    <>
      <h2 className="text-xl font-semibold">1. Data Controller</h2>
      <p>
        The controller of your personal data is Auto Gaz Adam Rogowski, based in Snopków 56A, 21-002 Jastków Poland contact with Administrator is available: e-mail: adam.rogowski.net@gmail.com or  +48 609258834.
      </p>
      <h2 className="text-xl font-semibold">2. Purposes and Legal Bases for Processing</h2>
      <p>
        Your data will be processed for the purpose of:
      </p>
      <p>
        providing service maintenance, LPG installation, and issuing the necessary documentation (legal basis: Art. 6(1)(b) GDPR – performance of a contract);
      </p>
      <p>
        complying with legal obligations binding the Controller, such as issuing invoices and retaining accounting documentation (legal basis: Art. 6(1)(c) GDPR);
      </p>
      <p>
        establishing, exercising, or defending potential legal claims (legal basis: Art. 6(1)(f) GDPR – legitimate interest).
      </p>
      <h2 className="text-xl font-semibold">3. Data Retention Period</h2>
      <p>
        Data will be stored for the period necessary to perform the service, and after
        its completion, for the period required by tax law (5 years)
        or until the expiration of the statute of limitations for potential claims.
      </p>
      <h2 className="text-xl font-semibold">4. Data Recipients</h2>
      <p>
        Recipients of your data may include entities authorized to obtain data
        under applicable law, accounting firms, courier companies, and technical
        software providers necessary to service gas installations.
      </p>
      <h2 className="text-xl font-semibold">5. Data Subject Rights</h2>
      <p>
        You have the right to:
      </p>
      <p>access your personal data and receive a copy of it;</p>
      <p>request erasure of data or restriction of processing;</p>
      <p>object to data processing;</p>
      <p>lodge a complaint with the Supervisory Authority – President of the Personal Data Protection Office.</p>
      <h2 className="text-xl font-semibold">6. Cookies</h2>
      <p>
        The website uses only strictly necessary cookies (language and theme preferences)
        and an embedded Google Maps service. We do not use cookies for marketing profiling.
      </p>
      <h2 className="text-xl font-semibold">7. Voluntariness of Providing Data</h2>
      <p> Providing personal data (such as name, vehicle registration number, phone number) is voluntary, but necessary to accept the vehicle into the service shop and perform the service.</p>
    </>
  );
}
