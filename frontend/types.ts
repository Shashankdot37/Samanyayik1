

export type Language = 'en' | 'np';

export interface ContentText {
  heroTitle: string;
  heroSubtitle: string;
  heroContext: string;
  bookAppointment: string;
  contactUs: string;
  calculator: string;
  introTitle: string;
  introText: string;
  whyUsTitle: string;
  achievementsTitle: string;
  practiceAreaTitle: string;
  testimonialsTitle: string;
  ctaTitle: string;
  ctaText: string;
  learnMore: string;
  close: string;
  aboutUsTitle: string;
  ourMissionTitle: string;
  ourTeamTitle: string;
  newsTitle: string;
  newsSubtitle: string;
  readMore: string;
  catNews: string;
  catLegal: string;
  catBlog: string;
  faqTitle: string;
  faqSubtitle: string;
  searchPlaceholder: string;
  noticesTitle: string;
  noticesSubtitle: string;
  viewDetails: string;
  researchTitle: string;
  researchSubtitle: string;
  download: string;
  visitLink: string;
  resources: string;
  // New Additions
  needUrgentHelp: string;
  ourCommitment: string;
  joinMission: string;
  viewAllAchievements: string;
  viewAllProjects: string;
  exploreServices: string;
  caseTitleLabel: string;
  challengeLabel: string;
  actionLabel: string;
  outcomeLabel: string;
  clientLabel: string;
  footerRights: string;
  quickLinks: string;
  contactInfo: string;
  followUs: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  mailingAddress: string;
  disclaimerTerms: string;
  readFullDisclaimer: string;
  sendMessage: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  subject: string;
  message: string;
  sendBtn: string;
  agreeTerms: string;
  iUnderstand: string;
  messageSent: string;
  thankYouMessage: string;
  sendAnother: string;
  // Calculator
  calcTitle: string;
  calcSubtitle: string;
  claimAmount: string;
  calculateBtn: string;
  totalFeePayable: string;
  calculationDetails: string;
  slabRange: string;
  rate: string;
  fee: string;
  total: string;
  aiAssistant: string;
  askAiPlaceholder: string;
  reset: string;
  // Navigation
  navHome: string;
  navAbout: string;
  navPractice: string;
  navContact: string;
  navNews: string;
  navNotices: string;
  navResearch: string;
  navFAQ: string;
  // CTA & Misc
  casesWon: string;
  confidentialConsultation: string;
  expertStrategy: string;
  // Research Filters
  filterAll: string;
  filterPDF: string;
  filterDOCX: string;
  filterLink: string;
  // Brand
  firmName: string;
  // Booking Wizard
  bookTitle: string;
  bookSubtitle: string;
  stepDate: string;
  stepTime: string;
  stepDetails: string;
  selectDate: string;
  selectTime: string;
  personalDetails: string;
  yourIssue: string;
  addressType: string;
  mapSelect: string;
  voiceMessage: string;
  voiceMessageHint: string;
  recordBtn: string;
  recording: string;
  humanVerify: string;
  requiredFields: string;
  submitBooking: string;
  prevStep: string;
  nextStep: string;
  bookingSuccess: string;
}

export interface AchievementCase {
  id: number;
  title: string;
  caseTitle: string;
  challenge: string;
  action: string;
  outcome: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
}

// Deprecated generic Achievement interface, replaced by AchievementCase
export interface Achievement {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface ServiceSubItem {
  id: string;
  title: string;
  description: string; // Short description for card
  fullContent: string; // Detailed content for modal
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string; // Top level description
  subServices: ServiceSubItem[];
}

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  workingArea: string;
  phoneNumber: string;
  email: string;
  image: string;
}


export type NewsCategory = 'News' | 'Legal Commentary' | 'Blog';

export interface NewsItem {
  id: number;
  category: NewsCategory;
  title: string;
  description: string;
  fullContent?: string; // HTML or text content for Modal
  externalUrl?: string; // URL for external News
  author: string;
  date: string;
  image: string;
}

export type FAQCategory =
  | 'General'
  | 'Legal Services'
  | 'Rights & Advocacy'
  | 'Research & Policy'
  | 'Accessibility'
  | 'Labor Law'
  | 'Privacy & Ethics';

export interface FAQItem {
  id: number;
  category: FAQCategory;
  question: string;
  answer: string;
}

export type NoticeCategory = 'All' | 'General' | 'Vacancy' | 'Court Holiday' | 'Press Release';

export interface NoticeItem {
  id: number;
  category: Exclude<NoticeCategory, 'All'>;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML supported
  isUrgent?: boolean;
}

export type FileType = 'PDF' | 'DOCX' | 'LINK';

export interface Publication {
  id: number;
  title: string;
  author: string;
  date: string;
  type: FileType;
  url: string; // In a real app, this would be the file path
  description: string;
  size?: string;
}

export interface WhyUsFeature {
  iconName: 'ShieldCheck' | 'Scale' | 'Clock' | 'Users';
  title: string;
  desc: string;
}

export interface StrapiImage {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  } | null;
}

// Helper for mapped data that might have API specific fields
export interface APINoticeItem extends NoticeItem {
  // Add any specific API fields if different
}

// Basic Strapi Logic for Rich Text
interface StrapiTextBlock {
  type: string;
  children: { type: string; text: string }[];
}

export interface StrapiNewsItem {
  id: number;
  documentId: string;
  category: NewsCategory;
  date: string;
  slug: string;
  title_en: string;
  description_en: string;
  author_en: string;
  content_en: StrapiTextBlock[];
  title_np: string;
  description_np: string;
  author_np: string;
  content_np: StrapiTextBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiNoticeItem {
  id: number;
  documentId: string;
  category: Exclude<NoticeCategory, 'All'>;
  date: string;
  isUrgent: boolean;
  slug: string;
  title_en: string;
  excerpt_en: string;
  content_en: StrapiTextBlock[];
  title_np: string;
  excerpt_np: string;
  content_np: StrapiTextBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiAchievement {
  id: number;
  documentId: string;
  title_en: string;
  title_np: string;
  case_title_en: string;
  case_title_np: string;
  challenge_en: StrapiTextBlock[];
  challenge_np: StrapiTextBlock[];
  action_en: StrapiTextBlock[];
  action_np: StrapiTextBlock[];
  outcome_en: StrapiTextBlock[];
  outcome_np: StrapiTextBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiPublication {
  id: number;
  documentId: string;
  title_en: string;
  title_np: string;
  author_en: string;
  author_np: string;
  description_en: string;
  description_np: string;
  date: string;
  type: string; // "pdf" | "link" | etc from API
  external_url: string | null;
  size: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface APINewsItem extends Omit<NewsItem, 'image'> {
  image: string | StrapiImage;
}

export interface StrapiTestimonial {
  id: number;
  documentId: string;
  name_en: string;
  name_np: string;
  role_en: string;
  role_np: string;
  testimonial_en: StrapiTextBlock[];
  testimonial_np: StrapiTextBlock[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiProject {
  id: number;
  documentId: string;
  title_en: string;
  title_np: string;
  client_en: string;
  client_np: string;
  description_en: string;
  description_np: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
