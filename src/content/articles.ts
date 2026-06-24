/**
 * Articles archive — written by Naren. Links out to the original source (we
 * never republish full text).
 *
 * Loaded from research across his bylined contributor columns. These are the
 * HIGH-CONFIDENCE sources (Medical Economics, DentistryIQ, and his own ekwa.com
 * reprints). URLs are real; spot-check byline/date on each page before treating
 * a date as final — dates left blank were not captured. The medium-confidence
 * Oral Health Group set (~36 more) is held back pending a byline spot-check.
 */
export type ArticleType = "by" | "featuring" | "guest";

export type Article = {
  id: string;
  title: string;
  publication: string;
  url: string;
  date?: string; // ISO; optional — omitted when unknown
  type: ArticleType;
};

export const articleTypeLabels: Record<ArticleType, string> = {
  by: "Written by Naren",
  featuring: "Featuring Naren",
  guest: "Guest contribution",
};

export const articles: Article[] = [
  // ---- Medical Economics ----
  { id: "me-1", type: "by", publication: "Medical Economics", title: "Digital Marketing Strategies for Physicians", url: "https://www.medicaleconomics.com/view/digital-marketing-strategies-for-physicians" },
  { id: "me-2", type: "by", publication: "Medical Economics", title: "Maintaining Brand Awareness for Physicians and Medical Practices", url: "https://www.medicaleconomics.com/view/maintaining-brand-awareness-for-physicians-and-medical-practices" },
  { id: "me-3", type: "by", publication: "Medical Economics", title: "Twitter Marketing for Physicians: Seven Effective Strategies to Gain More Followers", url: "https://www.medicaleconomics.com/view/twitter-marketing-for-physicians-seven-effective-strategies-to-gain-more-followers" },
  { id: "me-4", type: "by", publication: "Medical Economics", title: "Cost-Effective Marketing Ideas for a Medical Practice", url: "https://www.medicaleconomics.com/view/cost-effective-marketing-ideas-for-a-medical-practice" },
  { id: "me-5", type: "by", publication: "Medical Economics", title: "Three Content Marketing Steps to Achieving Success for Medical Practices", url: "https://www.medicaleconomics.com/view/three-content-marketing-steps-to-achieving-success-for-medical-practices" },
  { id: "me-6", type: "by", publication: "Medical Economics", title: "Why Medical Websites Are Losing Search Rankings & What Can Be Done", url: "https://www.medicaleconomics.com/view/why-medical-websites-are-losing-search-rankings-what-can-be-done" },
  { id: "me-7", type: "by", publication: "Medical Economics", title: "Going Digital: The Essential Guide to Getting Started in Telemedicine", url: "https://www.medicaleconomics.com/view/going-digital-the-essential-guide-to-getting-started-in-telemedicine" },
  { id: "me-8", type: "by", publication: "Medical Economics", title: "12 Tips for Successful Email Marketing for Doctors", url: "https://www.medicaleconomics.com/view/12-tips-for-successful-email-marketing-for-doctors" },
  { id: "me-9", type: "by", publication: "Medical Economics", title: "Improve Your Marketing ROI", url: "https://www.medicaleconomics.com/view/improve-your-marketing-roi" },
  { id: "me-10", type: "by", publication: "Medical Economics", title: "How to Repurpose Your Content for a Targeted Response", url: "https://www.medicaleconomics.com/view/how-to-repurpose-your-content-for-a-targeted-response" },
  { id: "me-11", type: "by", publication: "Medical Economics", title: "How to Use Online Patient Reviews to Improve the Prospects of Your Medical Practice", url: "https://www.medicaleconomics.com/view/how-to-use-online-patient-reviews-to-improve-the-prospects-of-your-medical-practice" },
  { id: "me-12", type: "by", publication: "Medical Economics", title: "The Doctor's Guide to HIPAA Compliant Marketing", url: "https://www.medicaleconomics.com/view/the-doctors-guide-to-hipaa-compliant-marketing" },
  { id: "me-13", type: "by", publication: "Medical Economics", title: "6 Medical Website Marketing Mistakes to Look Out For", url: "https://www.medicaleconomics.com/view/6-medical-website-marketing-mistakes-to-look-out-for" },
  { id: "me-14", type: "by", publication: "Medical Economics", title: "How Your Medical Website Can Dominate Local Search Results", url: "https://www.medicaleconomics.com/view/how-your-medical-website-can-dominate-local-search-results" },
  { id: "me-15", type: "by", publication: "Medical Economics", title: "Three Innovative Tools to Increase Your Website Traffic", url: "https://www.medicaleconomics.com/view/three-innovative-tools-to-increase-your-website-traffic" },
  { id: "me-16", type: "by", publication: "Medical Economics", title: "Content Creation in the Age of COVID-19", url: "https://www.medicaleconomics.com/view/content-creation-in-the-age-of-covid-19" },
  { id: "me-17", type: "by", publication: "Medical Economics", title: "Turning Marketing Challenges Into Opportunities", url: "https://www.medicaleconomics.com/view/turning-marketing-challenges-into-opportunities" },
  { id: "me-18", type: "by", publication: "Medical Economics", title: "Top Social Media Marketing Trends for Your Digital Marketing Strategy", url: "https://www.medicaleconomics.com/view/top-social-media-marketing-trends-for-your-digital-marketing-strategy" },
  { id: "me-19", type: "by", publication: "Medical Economics", title: "How to Increase Patient Relationships Through Newsletters", url: "https://www.medicaleconomics.com/view/newsletter-tips-for-physicians" },

  // ---- DentistryIQ (author archive: dentistryiq.com/.../contact/14033969/naren-arulrajah) ----
  { id: "diq-1", type: "by", publication: "DentistryIQ", title: "5 ways to build a strong online presence for your dental practice brand", url: "https://www.dentistryiq.com/practice-management/marketing/article/14033968/5-ways-to-build-a-strong-online-presence-for-your-dental-practice-brand" },
  { id: "diq-2", type: "by", publication: "DentistryIQ", title: "Focus on local SEO or you'll miss opportunities for your dental practice", url: "https://www.dentistryiq.com/practice-management/marketing/article/14180296/focus-on-local-seo-or-youll-miss-opportunities-for-your-dental-practice" },
  { id: "diq-3", type: "by", publication: "DentistryIQ", title: "3 digital marketing myths dentists need to stop believing", url: "https://www.dentistryiq.com/practice-management/marketing/article/14075224/3-digital-marketing-myths-dentists-need-to-stop-believing" },
  { id: "diq-4", type: "by", publication: "DentistryIQ", title: "3 important dental marketing trends for 2019", url: "https://www.dentistryiq.com/practice-management/marketing/article/16363571/3-important-dental-marketing-trends-for-2019", date: "2019-01-01" },
  { id: "diq-5", type: "by", publication: "DentistryIQ", title: "Top 3 strategies for increasing dental patient retention", url: "https://www.dentistryiq.com/practice-management/patient-relationships/article/16367932/top-3-strategies-for-increasing-dental-patient-retention" },
  { id: "diq-6", type: "by", publication: "DentistryIQ", title: "6 dental practice internet marketing strategies to double your traffic", url: "https://www.dentistryiq.com/practice-management/marketing/article/16354546/6-dental-practice-internet-marketing-strategies-to-double-your-traffic" },
  { id: "diq-7", type: "by", publication: "DentistryIQ", title: "Top dental marketing trends dentists need to know about", url: "https://www.dentistryiq.com/practice-management/marketing/article/14036452/top-dental-marketing-trends-dentists-need-to-know-about" },
  { id: "diq-8", type: "by", publication: "DentistryIQ", title: "USP: What is it and why is it crucial to your dental marketing?", url: "https://www.dentistryiq.com/practice-management/marketing/article/16367600/usp-what-is-it-and-why-is-it-crucial-to-your-dental-marketing" },
  { id: "diq-9", type: "by", publication: "DentistryIQ", title: "5 simple steps to keep angry dental patients from ruining your reputation online", url: "https://www.dentistryiq.com/practice-management/marketing/article/16360070/5-simple-steps-to-keep-angry-dental-patients-from-ruining-your-reputation-online" },
  { id: "diq-10", type: "by", publication: "DentistryIQ", title: "3 tips to double your online dental reviews", url: "https://www.dentistryiq.com/practice-management/marketing/article/14211572/3-tips-to-double-your-online-dental-reviews" },
  { id: "diq-11", type: "by", publication: "DentistryIQ", title: "How dentists can market to the growing senior population", url: "https://www.dentistryiq.com/practice-management/marketing/article/16367440/how-dentists-can-market-to-the-growing-senior-population" },

  // ---- ekwa.com reprints (his own bylined Oral Health / Modern Aesthetics columns, hosted as PDFs) ----
  { id: "ek-1", type: "by", publication: "Ekwa Marketing", title: "Guide to Content Marketing", url: "https://www.ekwa.com/wp-content/uploads/2025/03/OH1021-2.pdf", date: "2021-10-01" },
  { id: "ek-2", type: "by", publication: "Ekwa Marketing", title: "Is Your Website Mobile Responsive?", url: "https://www.ekwa.com/wp-content/uploads/2025/03/Is-Your-Website-Mobile-Responsive.pdf", date: "2015-06-01" },
  { id: "ek-3", type: "by", publication: "Ekwa Marketing", title: "Optimizing Your Instagram Strategy", url: "https://www.ekwa.com/wp-content/uploads/2025/03/OHGF0622.pdf", date: "2022-06-03" },
  { id: "ek-4", type: "by", publication: "Ekwa Marketing", title: "How to Write an Effective Blog (While You're Busy Being a DC)", url: "https://www.ekwa.com/wp-content/uploads/2025/03/how-to-write-an-effective-blog.pdf", date: "2015-03-01" },
  { id: "ek-5", type: "by", publication: "Ekwa Marketing", title: "How Mobile Friendly Is Your Dental Website?", url: "https://www.ekwa.com/wp-content/uploads/2025/03/oral-health-11-2019.pdf", date: "2019-11-25" },
  { id: "ek-6", type: "by", publication: "Ekwa Marketing", title: "Your First Dental Marketing Plan: How to Get the Word Out", url: "https://www.ekwa.com/wp-content/uploads/2025/03/oral-health-9-2019.pdf", date: "2019-09-01" },
  { id: "ek-7", type: "by", publication: "Ekwa Marketing", title: "Ways to Make Your Dental Online Content More Shareable", url: "https://www.ekwa.com/wp-content/uploads/2025/03/Ways-to-Make-your-Dental-Online-Content-More-Shareable.pdf" },
  { id: "ek-8", type: "by", publication: "Ekwa Marketing", title: "Three Innovative Tools to Increase Your Dental Website Traffic", url: "https://www.ekwa.com/wp-content/uploads/2025/03/dmd-three-innovative-tools-to-increase-your-dental-website-traffic.pdf" },
  { id: "ek-9", type: "by", publication: "Ekwa Marketing", title: "Marketing for Aesthetic Practices (Modern Aesthetics column)", url: "https://www.ekwa.com/wp-content/uploads/2025/03/MA0223.pdf", date: "2023-01-01" },
  { id: "ek-10", type: "by", publication: "Ekwa Marketing", title: "Video Marketing for Your Dental Practice", url: "https://www.ekwa.com/wp-content/uploads/2025/03/OHF0721.pdf", date: "2021-07-01" },

  // ---- Oral Health Group (multi-author site — titles match Naren's byline pattern;
  //      spot-check each page before relying on it as definitively his) ----
  { id: "ohg-1", type: "by", publication: "Oral Health Group", title: "Marketing in a post-CDCP era", url: "https://www.oralhealthgroup.com/features/marketing-in-a-post-cdcp-era/", date: "2025-01-01" },
  { id: "ohg-2", type: "by", publication: "Oral Health Group", title: "Seven Signs Your Dental Website is Outdated (and Five Redesign Pitfalls to Avoid)", url: "https://www.oralhealthgroup.com/blogs/seven-signs-your-dental-website-is-outdated-and-five-redesign-pitfalls-to-avoid/" },
  { id: "ohg-3", type: "by", publication: "Oral Health Group", title: "Six Things Dentists Get Wrong About Digital Marketing", url: "https://www.oralhealthgroup.com/blogs/six-things-dentists-get-wrong-about-digital-marketing/" },
  { id: "ohg-4", type: "by", publication: "Oral Health Group", title: "Don't Be So Serious: Tips for Using Humour in Dental Marketing", url: "https://www.oralhealthgroup.com/blogs/dont-be-so-serious-tips-for-using-humour-in-dental-marketing/" },
  { id: "ohg-5", type: "by", publication: "Oral Health Group", title: "It's Not Just About New Patients: Tips for Increasing Retention", url: "https://www.oralhealthgroup.com/features/its-not-just-about-new-patients-tips-for-increasing-retention-2/" },
  { id: "ohg-6", type: "by", publication: "Oral Health Group", title: "Position Yourself As A Dental Expert And Improve Patient Engagement", url: "https://www.oralhealthgroup.com/features/ways-to-position-yourself-as-a-dental-expert-and-improve-patient-engagement" },
  { id: "ohg-7", type: "by", publication: "Oral Health Group", title: "How to Establish Your Thought Leadership Through Guest-Posting", url: "https://www.oralhealthgroup.com/blogs/how-to-establish-your-thought-leadership-through-guest-posting/" },
  { id: "ohg-8", type: "by", publication: "Oral Health Group", title: "Create Thought Leadership in Dentistry", url: "https://www.oralhealthgroup.com/blogs/create-thought-leadership-dentistry/" },
  { id: "ohg-9", type: "by", publication: "Oral Health Group", title: "Five Surprising Truths About Dental Marketing", url: "https://www.oralhealthgroup.com/features/five-surprising-truths-about-dental-marketing/" },
  { id: "ohg-10", type: "by", publication: "Oral Health Group", title: "Understanding and Optimizing the Dental Marketing Funnel", url: "https://www.oralhealthgroup.com/features/understanding-and-optimizing-the-dental-marketing-funnel/" },
  { id: "ohg-11", type: "by", publication: "Oral Health Group", title: "Marketing Your Dental Practice Without Breaking the Bank", url: "https://www.oralhealthgroup.com/features/marketing-your-dental-practice-without-breaking-the-bank/" },
  { id: "ohg-12", type: "by", publication: "Oral Health Group", title: "Five Ways to Promote Your Dental Practice Without Breaking the Bank", url: "https://www.oralhealthgroup.com/blogs/five-ways-promote-dental-practice-without-breaking-bank/" },
  { id: "ohg-13", type: "by", publication: "Oral Health Group", title: "The Two-part Formula for Successful Dental Marketing", url: "https://www.oralhealthgroup.com/features/the-two-part-formula-for-successful-dental-marketing/" },
  { id: "ohg-14", type: "by", publication: "Oral Health Group", title: "Marketing Tips for Attracting High-Value Dental Patients", url: "https://www.oralhealthgroup.com/blogs/marketing-tips-for-attracting-high-value-dental-patients/" },
  { id: "ohg-15", type: "by", publication: "Oral Health Group", title: "How are you promoting your dental team online?", url: "https://www.oralhealthgroup.com/features/how-are-you-promoting-your-dental-team-online/" },
  { id: "ohg-16", type: "by", publication: "Oral Health Group", title: "Increasing Your Dental Marketing ROI", url: "https://www.oralhealthgroup.com/features/increasing-your-dental-marketing-roi/" },
  { id: "ohg-17", type: "by", publication: "Oral Health Group", title: "6 Digital Marketing Strategies to Win More Patients for Your Dental Practice", url: "https://oralhealthgroup.com/blogs/6-digital-marketing-strategies-win-patients-dental-practice" },
  { id: "ohg-18", type: "by", publication: "Oral Health Group", title: "The World is in a State of Flux. Is Your Website Traffic, Too?", url: "https://www.oralhealthgroup.com/features/the-world-is-in-a-state-of-flux-is-your-website-traffic-too/" },
  { id: "ohg-19", type: "by", publication: "Oral Health Group", title: "Does Your Dental Marketing Team Need a Social Media Content Calendar?", url: "https://www.oralhealthgroup.com/features/does-your-dental-marketing-team-need-a-social-media-content-calendar/" },
  { id: "ohg-20", type: "by", publication: "Oral Health Group", title: "UX: What is it and Why is it Important to Your Dental Website?", url: "https://www.oralhealthgroup.com/blogs/ux-what-is-it-and-why-is-it-important-to-your-dental-website/" },
  { id: "ohg-21", type: "by", publication: "Oral Health Group", title: "Why TikTok Matters and How You Can Use It To Promote Your Dental Practice", url: "https://www.oralhealthgroup.com/blogs/why-tiktok-matters-and-how-you-can-use-it-to-promote-your-dental-practice/" },
  { id: "ohg-22", type: "by", publication: "Oral Health Group", title: "What is NAP Consistency, and Why Does it Matter to Your Dental Practice?", url: "https://www.oralhealthgroup.com/features/what-is-nap-consistency-and-why-does-it-matter-to-your-dental-practice/" },
  { id: "ohg-23", type: "by", publication: "Oral Health Group", title: "Is it Time to Give Up on Social Media for Your Dental Practice?", url: "https://www.oralhealthgroup.com/features/is-it-time-to-give-up-on-social-media-for-your-dental-practice/" },
  { id: "ohg-24", type: "by", publication: "Oral Health Group", title: "Social Media Engagement: Metrics That Matter", url: "https://www.oralhealthgroup.com/blogs/social-media-engagement-metrics-that-matter/" },
  { id: "ohg-25", type: "by", publication: "Oral Health Group", title: "How (and When) to Write a Press Release for Your Dental Practice", url: "https://www.oralhealthgroup.com/features/how-and-when-to-write-a-press-release-for-your-dental-practice/" },
  { id: "ohg-26", type: "by", publication: "Oral Health Group", title: "How To Gain Favorable Online Reviews For Your Dental Practice", url: "https://www.oralhealthgroup.com/features/ethical-ways-to-gain-favorable-online-reviews-for-your-dental-practice/" },
  { id: "ohg-27", type: "by", publication: "Oral Health Group", title: "Google Search Quality Raters Guidelines: What They Mean to Your Dental Practice", url: "https://www.oralhealthgroup.com/features/google-search-quality-raters-guidelines-recent-updates-and-what-they-mean-to-your-dental-practice/" },
  { id: "ohg-28", type: "by", publication: "Oral Health Group", title: "SEO Tips for Holistic Dental Practices", url: "https://www.oralhealthgroup.com/features/seo-tips-for-holistic-dental-practices/" },
  { id: "ohg-29", type: "by", publication: "Oral Health Group", title: "Dentist's Guide to Online Reputation Repair", url: "https://www.oralhealthgroup.com/features/dentists-guide-to-online-reputation-repair/" },
  { id: "ohg-30", type: "by", publication: "Oral Health Group", title: "Three stats every dentist needs to know about Google reviews", url: "https://www.oralhealthgroup.com/features/three-stats-every-dentist-needs-to-know-about-google-reviews/" },
  { id: "ohg-31", type: "by", publication: "Oral Health Group", title: "Integrate SEO and PR to Increase your Patient Reach", url: "https://www.oralhealthgroup.com/blogs/integrate-seo-pr-increase-patient-reach/" },
  { id: "ohg-32", type: "by", publication: "Oral Health Group", title: "What Is The Google 3-Pack, And How Can Your Dental Office Get There?", url: "https://oralhealthgroup.com/blogs/what-is-the-google-3-pack-and-how-can-your-dental-practice-get-there" },
  { id: "ohg-33", type: "by", publication: "Oral Health Group", title: "How to Improve the Conversion Rates of your Dental Website", url: "https://www.oralhealthgroup.com/blogs/improve-conversion-rates-dental-website/" },
  { id: "ohg-34", type: "by", publication: "Oral Health Group", title: "Top Social Platforms for Dental Marketing", url: "https://www.oralhealthgroup.com/blogs/top-social-platforms-for-dental-marketing/" },
  { id: "ohg-35", type: "by", publication: "Oral Health Group", title: "3 Steps to Generate Leads for Your Dental Practice Through Content Marketing", url: "https://www.oralhealthgroup.com/blogs/3-steps-generate-leads-dental-practice-content-marketing/" },
  { id: "ohg-36", type: "by", publication: "Oral Health Group", title: "6 figures every dental clinic needs to know to boost digital marketing performance", url: "https://www.oralhealthgroup.com/features/6-figures-every-dental-clinic-needs-to-know-to-boost-digital-marketing-performance/" },
];
