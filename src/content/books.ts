/**
 * Books authored by Naren Arulrajah (with Vikas Vij on the "Game Over" series).
 * Most recent first. All titles below are real, verifiable listings.
 *
 * Covers: drop images into /public/books/ and set `cover` to show them; until
 * then the page renders a tasteful spine placeholder.
 *
 * NOTE: the owner believes there are 7+ books. Public listings confirm the 6
 * below. The "Game Over" series was published per profession, so additional
 * editions (e.g. chiropractor, veterinary) may exist — add any the owner
 * confirms from the Amazon author shelf:
 * https://www.amazon.com/Books-Naren-Arulrajah/s?rh=n:283155,p_27:Naren%2BArulrajah
 */
export type Book = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  cover?: string; // path under /public/books/
  links: { label: string; href: string }[];
};

const AMAZON_AUTHOR =
  "https://www.amazon.com/Books-Naren-Arulrajah/s?rh=n:283155,p_27:Naren%2BArulrajah";

export const books: Book[] = [
  {
    id: "game-over-physician",
    title: "Game Over: A Physician's Guide to Google Domination!",
    subtitle: "Online marketing for medical practices",
    description:
      "The physician's edition of Naren's Google-domination playbook — simple, effective SEO and online-marketing strategies to win top search rankings and attract more patients.",
    year: "2016",
    cover: "/books/physician.jpg",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/Game-Over-Physicians-Google-Domination/dp/1523881062" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
  {
    id: "game-over-medspa",
    title: "Game Over: A Med Spa Owner's Guide to Google Domination!",
    subtitle: "Online marketing for med spas",
    description:
      "The med spa edition — how aesthetic practice owners can dominate local search, build trust online, and turn searches into booked treatments.",
    year: "2016",
    cover: "/books/medspa.jpg",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/Game-Over-Owners-Google-Domination/dp/1530121213" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
  {
    id: "game-over-lawyer",
    title: "Game Over: A Lawyer's Guide to Google Domination!",
    subtitle: "Online marketing for law firms",
    description:
      "The legal edition — a practical guide for attorneys who want to own the top of Google and become the obvious choice in their market.",
    year: "2016",
    cover: "/books/lawyer.jpg",
    links: [
      { label: "Amazon", href: "https://www.allbookstores.com/Game-Over-Lawyer-Guide-Google/9781530627882" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
  {
    id: "game-over-dentist",
    title: "Game Over: A Dentist's Guide to Google Domination!",
    subtitle: "Win the top of search",
    description:
      "The book that started the series. Naren's strategy for dentists who want to own the top of Google, dominate local search, and become the obvious choice for new patients.",
    year: "2015",
    cover: "/books/dentist.jpg",
    links: [
      { label: "Google Books", href: "https://books.google.com/books/about/Game_Over_a_Dentist_s_Guide_to_Google_Do.html?id=wCkmjwEACAAJ" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
  {
    id: "eight-more-steps",
    title: "Eight More Steps Guaranteed to Grow Your Dental Practice Online",
    subtitle: "The sequel to 8 Steps",
    description:
      "The follow-up to his bestselling first book — eight more proven moves to grow a dental practice online, with deeper tactics for visibility, conversion, and reputation.",
    year: "2014",
    cover: "/books/eight-more-steps.jpg",
    links: [
      { label: "Goodreads", href: "https://www.goodreads.com/book/show/43264182-eight-more-steps-guaranteed-to-grow-your-dental-practice-online" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
  {
    id: "8-steps",
    title: "8 Steps Every Dentist Should Take to Dominate Their Market Online!",
    subtitle: "An anthology from Ekwa Marketing",
    description:
      "Naren's first book, written with Vikas Vij. It distills Ekwa Marketing's experience into eight practical steps a dentist can take to get found, get chosen, and grow — covering websites, SEO, reviews, and patient acquisition.",
    year: "2013",
    cover: "/books/8-steps.jpg",
    links: [
      { label: "Amazon", href: "https://www.amazon.com/Dentist-Should-Dominate-Market-Online/dp/1490303383" },
      { label: "All books on Amazon", href: AMAZON_AUTHOR },
    ],
  },
];
