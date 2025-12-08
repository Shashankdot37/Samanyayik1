

import { ContentText, PracticeArea, Testimonial, Article, Language, TeamMember, NewsItem, FAQItem, NoticeItem, Publication, ServiceCategory, AchievementCase, Project, WhyUsFeature } from './types';

export const TRANSLATIONS: Record<Language, ContentText> = {
  en: {
    heroContext: "Legal Excellence for You",
    heroTitle: "Injustice anywhere is a threat to justice everywhere.",
    heroSubtitle: "We provide top-tier legal representation with a focus on ethical practice and client success.",
    bookAppointment: "Book Appointment",
    contactUs: "Contact Us",
    calculator: "Legal Fee Calculator",
    introTitle: "About Samanyayik",
    introText: "At Samanyayik, we are committed to providing equitable, accessible, and transformative legal services for all. Rooted in the principles of justice, inclusivity, and social responsibility, we specialize in human rights law, disability rights, cyber law, corporate law, and public interest litigation. Our team of dedicated legal professionals strives to bridge the gap between law and marginalized communities, ensuring that justice is not a privilege but a right for everyone. In addition to legal representation, Samanyayik is a hub for legal research, policy advocacy, and progressive legal reforms, shaping a more just and equitable legal landscape.",
    whyUsTitle: "Why Choose Us",
    achievementsTitle: "Our Achievements",
    practiceAreaTitle: "Our Services",
    testimonialsTitle: "Client Testimonials",
    ctaTitle: "Ready to Seek Justice?",
    ctaText: "Committed to delivering justice with excellence and integrity. We are here to fight for your rights.",
    learnMore: "Explore Services",
    close: "Close",
    aboutUsTitle: "About Us",
    ourMissionTitle: "Our Mission",
    ourTeamTitle: "Our Team",
    newsTitle: "News & Insights",
    newsSubtitle: "Latest updates, legal analysis, and thought leadership from our experts.",
    readMore: "Read More",
    catNews: "News",
    catLegal: "Legal Commentary",
    catBlog: "Blog",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common legal queries regarding our services and Nepali law.",
    searchPlaceholder: "Search for a question...",
    noticesTitle: "Notice Board",
    noticesSubtitle: "Stay informed about vacancies, court schedules, and important firm announcements.",
    viewDetails: "View Details",
    researchTitle: "Research & Publications",
    researchSubtitle: "Access our collection of legal journals, whitepapers, and public resources.",
    download: "Download",
    visitLink: "Visit Resource",
    resources: "Resources",
    // New
    needUrgentHelp: "Need Urgent Help?",
    ourCommitment: "Our Commitment",
    joinMission: "Join Our Mission",
    viewAllAchievements: "View All Achievements",
    viewAllProjects: "View All Projects",
    exploreServices: "Explore Services",
    caseTitleLabel: "Case Title",
    challengeLabel: "The Challenge",
    actionLabel: "Our Action",
    outcomeLabel: "The Outcome",
    clientLabel: "Client",
    footerRights: "Samanyayik Law Firm. All rights reserved.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    mailingAddress: "Mailing Address",
    disclaimerTerms: "Disclaimer & Terms",
    readFullDisclaimer: "Read Full Disclaimer",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    sendBtn: "Send Message",
    agreeTerms: "I understand that submitting this form does not create an attorney-client relationship. I have read and agree to the Disclaimer and Terms of Use.",
    iUnderstand: "I Understand",
    messageSent: "Message Sent!",
    thankYouMessage: "Thank you for reaching out. We will get back to you shortly.",
    sendAnother: "Send another message",
    // Calculator
    calcTitle: "Legal Fee Calculator",
    calcSubtitle: "Estimate your court filing fees and stamp duties instantly according to the National Civil Procedure Code.",
    claimAmount: "Claim Amount (NRs.)",
    calculateBtn: "Calculate",
    totalFeePayable: "Total Fee Payable",
    calculationDetails: "Calculation Details",
    slabRange: "Slab (Range)",
    rate: "Rate",
    fee: "Fee",
    total: "Total",
    aiAssistant: "AI Legal Assistant",
    askAiPlaceholder: "Ex: What is the fee for a divorce case?",
    reset: "Reset",
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navPractice: "Practice Areas",
    navContact: "Contact",
    navNews: "News & Insights",
    navNotices: "Notices",
    navResearch: "Research",
    navFAQ: "FAQs",
    // CTA & Misc
    casesWon: "Cases Won",
    confidentialConsultation: "Confidential Consultation",
    expertStrategy: "Expert Legal Strategy",
    // Research Filters
    filterAll: "All",
    filterPDF: "PDF",
    filterDOCX: "DOCX",
    filterLink: "Link",
    // Brand
    firmName: "Samanyayik",
    // Booking
    bookTitle: "Schedule a Consultation",
    bookSubtitle: "Follow the steps below to book an appointment with our legal experts.",
    stepDate: "Select Date",
    stepTime: "Select Time",
    stepDetails: "Your Details",
    selectDate: "Choose your preferred date",
    selectTime: "Choose an available time slot",
    personalDetails: "Fill in your personal details",
    yourIssue: "Describe your legal issue",
    addressType: "Address Input Method",
    mapSelect: "Select from Map",
    voiceMessage: "Voice Message",
    voiceMessageHint: "If you can't type the message, you can submit a voice message.",
    recordBtn: "Record Message",
    recording: "Recording...",
    humanVerify: "I am human",
    requiredFields: "All fields marked with * are required.",
    submitBooking: "Confirm Booking",
    prevStep: "Previous",
    nextStep: "Next",
    bookingSuccess: "Appointment Booked Successfully!"
  },
  np: {
    heroContext: "काठमाडौंमा उत्कृष्ट कानूनी सेवा",
    heroTitle: "जहाँ पनि अन्याय हुनु भनेको जताततै न्यायका लागि खतरा हो।",
    heroSubtitle: "हामी नैतिक अभ्यास र ग्राहकको सफलतामा केन्द्रित रहँदै उच्च-स्तरीय कानूनी प्रतिनिधित्व प्रदान गर्दछौं।",
    bookAppointment: "नियुक्ति बुक गर्नुहोस्",
    contactUs: "सम्पर्क गर्नुहोस्",
    calculator: "अदालत शुल्क क्याल्कुलेटर",
    introTitle: "सामन्यायिकको बारेमा",
    introText: "सामन्यायिकमा, हामी सबैका लागि समान, पहुँचयोग्य र परिवर्तनकारी कानूनी सेवाहरू प्रदान गर्न प्रतिबद्ध छौं। न्याय, समावेशिता र सामाजिक उत्तरदायित्वका सिद्धान्तहरूमा आधारित, हामी मानव अधिकार कानून, अपाङ्गता अधिकार, साइबर कानून, कर्पोरेट कानून र सार्वजनिक सरोकारको मुद्दामा विशेषज्ञता राख्छौं। हाम्रो समर्पित कानूनी पेशेवरहरूको टोलीले कानून र सीमान्तकृत समुदायहरू बीचको खाडललाई कम गर्न प्रयास गर्दछ, यो सुनिश्चित गर्दै कि न्याय विशेषाधिकार होइन तर सबैको अधिकार हो। कानूनी प्रतिनिधित्वको अतिरिक्त, सामन्यायिक कानूनी अनुसन्धान, नीति वकालत र प्रगतिशील कानूनी सुधारहरूको लागि एक केन्द्र हो, जसले अझ न्यायपूर्ण र समतामूलक कानूनी परिदृश्यलाई आकार दिन्छ।",
    whyUsTitle: "हामीलाई किन रोज्ने",
    achievementsTitle: "हाम्रा उपलब्धिहरू",
    practiceAreaTitle: "हाम्रा सेवाहरू",
    testimonialsTitle: "ग्राहक प्रतिक्रियाहरू",
    ctaTitle: "न्याय खोज्न तयार हुनुहुन्छ?",
    ctaText: "उत्कृष्टता र निष्ठाका साथ न्याय प्रदान गर्न प्रतिबद्ध। हामी तपाईंको अधिकारको लागि लड्न यहाँ छौं।",
    learnMore: "थप बुझ्नुहोस्",
    close: "बन्द गर्नुहोस्",
    aboutUsTitle: "हाम्रो बारेमा",
    ourMissionTitle: "हाम्रो लक्ष्य",
    ourTeamTitle: "हाम्रो टोली",
    newsTitle: "समाचार र विचारहरू",
    newsSubtitle: "हाम्रा विशेषज्ञहरूबाट नवीनतम अपडेटहरू, कानूनी विश्लेषण र विचारहरू।",
    readMore: "थप पढ्नुहोस्",
    catNews: "समाचार",
    catLegal: "कानूनी टिप्पणी",
    catBlog: "ब्लग",
    faqTitle: "प्राय: सोधिने प्रश्नहरू",
    faqSubtitle: "हाम्रा सेवाहरू र नेपालको कानून सम्बन्धी सामान्य प्रश्नहरूको उत्तर पाउनुहोस्।",
    searchPlaceholder: "प्रश्न खोज्नुहोस्...",
    noticesTitle: "सूचना पाटी",
    noticesSubtitle: "रिक्त पदहरू, अदालतको तालिका, र महत्त्वपूर्ण फर्म घोषणाहरूको बारेमा जानकारी रहनुहोस्।",
    viewDetails: "विवरण हेर्नुहोस्",
    researchTitle: "अनुसन्धान र प्रकाशन",
    researchSubtitle: "हाम्रो कानूनी पत्रिकाहरू, श्वेतपत्रहरू र सार्वजनिक स्रोतहरूको सङ्कलनमा पहुँच गर्नुहोस्।",
    download: "डाउनलोड",
    visitLink: "स्रोत हेर्नुहोस्",
    resources: "स्रोतहरू",
    // New
    needUrgentHelp: "तत्काल मद्दत चाहिन्छ?",
    ourCommitment: "हाम्रो प्रतिबद्धता",
    joinMission: "हाम्रो अभियानमा सामेल हुनुहोस्",
    viewAllAchievements: "सबै उपलब्धिहरू हेर्नुहोस्",
    viewAllProjects: "सबै परियोजनाहरू हेर्नुहोस्",
    exploreServices: "सेवाहरू अन्वेषण गर्नुहोस्",
    caseTitleLabel: "मुद्दाको शीर्षक",
    challengeLabel: "चुनौती",
    actionLabel: "हाम्रो कदम",
    outcomeLabel: "परिणाम",
    clientLabel: "ग्राहक",
    footerRights: "सामन्यायिक ल फर्म। सर्वाधिकार सुरक्षित।",
    quickLinks: "द्रुत लिङ्कहरू",
    contactInfo: "सम्पर्क जानकारी",
    followUs: "हामीलाई पछ्याउनुहोस्",
    addressLabel: "ठेगाना",
    phoneLabel: "फोन",
    emailLabel: "इमेल",
    mailingAddress: "पत्रचार ठेगाना",
    disclaimerTerms: "अस्वीकरण र सर्तहरू",
    readFullDisclaimer: "पूरा अस्वीकरण पढ्नुहोस्",
    sendMessage: "हामीलाई सन्देश पठाउनुहोस्",
    fullName: "पूरा नाम",
    phoneNumber: "फोन नम्बर",
    emailAddress: "इमेल ठेगाना",
    subject: "विषय",
    message: "सन्देश",
    sendBtn: "सन्देश पठाउनुहोस्",
    agreeTerms: "म बुझ्छु कि यो फारम पेश गर्दा वकिल-ग्राहक सम्बन्ध स्थापित हुँदैन। मैले अस्वीकरण र प्रयोगका सर्तहरू पढेको छु र सहमत छु।",
    iUnderstand: "म बुझ्छु",
    messageSent: "सन्देश पठाइयो!",
    thankYouMessage: "सम्पर्क गर्नुभएकोमा धन्यवाद। हामी तपाईंलाई छिट्टै सम्पर्क गर्नेछौं।",
    sendAnother: "अर्को सन्देश पठाउनुहोस्",
    // Calculator
    calcTitle: "कानूनी शुल्क क्याल्कुलेटर",
    calcSubtitle: "राष्ट्रिय देवानी कार्यविधि संहिता अनुसार आफ्नो अदालतको दस्तुर र टिकट शुल्क तुरुन्त अनुमान गर्नुहोस्।",
    claimAmount: "दावी रकम (रु.)",
    calculateBtn: "हिसाब गर्नुहोस्",
    totalFeePayable: "तिर्नुपर्ने कुल शुल्क",
    calculationDetails: "हिसाब विवरण",
    slabRange: "स्ल्याब (दायरा)",
    rate: "दर",
    fee: "शुल्क",
    total: "जम्मा",
    aiAssistant: "एआई कानूनी सहायक",
    askAiPlaceholder: "उदा: सम्बन्ध विच्छेदको मुद्दाको शुल्क कति लाग्छ?",
    reset: "रिसेट",
    // Navigation
    navHome: "गृहपृष्ठ",
    navAbout: "हाम्रो बारेमा",
    navPractice: "अभ्यास क्षेत्रहरू",
    navContact: "सम्पर्क",
    navNews: "समाचार र विचार",
    navNotices: "सूचनाहरू",
    navResearch: "अनुसन्धान",
    navFAQ: "प्राय: सोधिने प्रश्नहरू",
    // CTA & Misc
    casesWon: "मुद्दा जितेको",
    confidentialConsultation: "गोपनीय परामर्श",
    expertStrategy: "विशेषज्ञ कानूनी रणनीति",
    // Research Filters
    filterAll: "सबै",
    filterPDF: "PDF",
    filterDOCX: "DOCX",
    filterLink: "लिङ्क",
    // Brand
    firmName: "सामन्यायिक",
    // Booking
    bookTitle: "परामर्श तालिका बनाउनुहोस्",
    bookSubtitle: "हाम्रा कानूनी विशेषज्ञहरूसँग भेटघाट बुक गर्न तलका चरणहरू पालना गर्नुहोस्।",
    stepDate: "मिति छान्नुहोस्",
    stepTime: "समय छान्नुहोस्",
    stepDetails: "तपाईंको विवरण",
    selectDate: "तपाईंको मनपर्ने मिति छान्नुहोस्",
    selectTime: "उपलब्ध समय स्लट छान्नुहोस्",
    personalDetails: "आफ्नो व्यक्तिगत विवरण भर्नुहोस्",
    yourIssue: "तपाईंको कानूनी समस्या वर्णन गर्नुहोस्",
    addressType: "ठेगाना प्रविष्ट गर्ने विधि",
    mapSelect: "नक्साबाट छान्नुहोस्",
    voiceMessage: "आवाज सन्देश",
    voiceMessageHint: "यदि तपाईं सन्देश टाइप गर्न सक्नुहुन्न भने, तपाईं आवाज सन्देश पठाउन सक्नुहुन्छ।",
    recordBtn: "सन्देश रेकर्ड गर्नुहोस्",
    recording: "रेकर्डिङ...",
    humanVerify: "म मानव हुँ",
    requiredFields: "* चिन्ह लगाइएका सबै क्षेत्रहरू अनिवार्य छन्।",
    submitBooking: "बुकिङ पुष्टि गर्नुहोस्",
    prevStep: "अघिल्लो",
    nextStep: "अर्को",
    bookingSuccess: "भेटघाट सफलतापूर्वक बुक गरियो!"
  }
};

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    iconName: 'ShieldCheck',
    title: "Unmatched Integrity",
    desc: "We adhere to the highest ethical standards in every case we handle."
  },
  {
    iconName: 'Scale',
    title: "Proven Track Record",
    desc: "Years of successful verdicts and settlements for our clients."
  },
  {
    iconName: 'Clock',
    title: "Timely Resolutions",
    desc: "We understand the value of time and strive for efficient outcomes."
  },
  {
    iconName: 'Users',
    title: "Client-Centric Approach",
    desc: "Your needs and goals are at the heart of our legal strategy."
  }
];

export const WHY_US_FEATURES_NP: WhyUsFeature[] = [
  {
    iconName: 'ShieldCheck',
    title: "अतुलनीय इमान्दारिता",
    desc: "हामीले हेर्ने हरेक मुद्दामा उच्चतम नैतिक मापदण्डहरूको पालना गर्छौं।"
  },
  {
    iconName: 'Scale',
    title: "प्रमाणित ट्र्याक रेकर्ड",
    desc: "हाम्रा ग्राहकहरूका लागि सफल फैसला र सम्झौताहरूको वर्षौंको अनुभव।"
  },
  {
    iconName: 'Clock',
    title: "समयमै समाधान",
    desc: "हामी समयको मूल्य बुझ्छौं र प्रभावकारी परिणामहरूको लागि प्रयास गर्छौं।"
  },
  {
    iconName: 'Users',
    title: "ग्राहक-केन्द्रित दृष्टिकोण",
    desc: "तपाईंको आवश्यकता र लक्ष्यहरू हाम्रो कानूनी रणनीतिको मुटुमा छन्।"
  }
];

// --- DATA STRUCTURES (ENGLISH) ---

export const ABOUT_CONTENT = {
  whoWeAre: {
    title: "Who We Are",
    text: "Samanyayik Legal Service and Research Center Pvt. Ltd. is a dynamic legal institution established by a group of young, visionary lawyers dedicated to redefining the landscape of justice in Nepal. We operate as a hybrid entity: we are both a full-service law firm providing litigation and defense, and a progressive research think tank focused on policy reform. Our identity is rooted in the conviction that legal practice must go beyond the courtroom to address the systemic roots of injustice. We specialize in delivering accessible, high-quality legal solutions to individuals, private entities, and public institutions, offering services ranging from representation in adjudicatory bodies to alternative dispute settlement and specialized document drafting and translation."
  },
  mission: {
    title: "Our Mission and Mandate",
    text: "Our foundational mandate is the uncompromising promotion and defense of human rights, access to justice, and an adequate standard of living for all. We are explicitly committed to serving marginalized, minority, and vulnerable communities who have historically been pushed to the fringes of society. This includes persons with disabilities, gender and sexual minorities (LGBTIQ+), and communities facing structural discrimination based on caste, class, ethnicity, and gender. We believe that justice is not a privilege but a fundamental right, and we actively work to dismantle the barriers—whether legal, social, or physical—that prevent these communities from exercising their constitutional freedoms."
  },
  researchHub: {
    title: "A Hub for Research and Policy Reform",
    text: "Beyond legal representation, Samanyayik functions as a dedicated research institution and think tank. We recognize that true systemic change requires evidence-based advocacy. Therefore, we engage in rigorous socio-legal research to identify gaps between de jure legal provisions and the de facto realities faced by citizens. Our research portfolio includes drafting policy briefs for \"Blind-Friendly Assessment System,\" conducting studies on \"Access to Insurance Service for Persons with Disabilities,\" and documenting human rights violations against the LGBTIQ+ community. By combining legal expertise with academic rigor, we provide the intellectual capital necessary to drive policy improvement in economic, social, cultural, and political rights."
  },
  approach: {
    title: "Our Approach: Intersectionality and Lived Experience",
    text: "What sets us apart is our deep-rooted \"lived experience\" and our commitment to an intersectional approach. Our leadership includes persons with disabilities and experts in human rights law, ensuring that our work is guided by the principle of \"Nothing About Us Without Us\". We analyze legal and policy matters through critical lenses, such as the Critical School of Thought and Feminist Legal Theory, to understand how various identities—disability, caste, gender, and geography—intersect to create unique forms of oppression. Whether we are conducting survivor-centric documentation of violence or advocating for accessible infrastructure, our methodology is always trauma-informed, strictly ethical, and designed to do no harm."
  },
  impact: {
    title: "Impact and Achievements",
    text: "Our capacity is not merely theoretical; we have a proven track record of achieving tangible policy victories through legal advocacy. A defining moment in our journey was a recent legal victory in the Patan High Court, where our team members, serving as legal representatives, successfully litigated a writ petition that secured the constitutional right to free higher education for persons with disabilities. This achievement stands as a testament to our ability to use the law as a powerful tool for social engineering. From high-level policy drafting for international forums like the Global Disability Summit to grassroots legal literacy campaigns, we are actively shaping a more inclusive future."
  },
  quote: {
    text: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
    subtext: "At Samanyayik, we combine the strategy of long-term policy research with the tactics of aggressive legal litigation to ensure victory for the causes of justice and equality."
  }
};

export const ACHIEVEMENT_CASES: AchievementCase[] = [
  {
    id: 1,
    title: "Landmark Legal Victory: The Right to Free Higher Education",
    caseTitle: "Madan Rokaya v. Janaprasasan Campus and Others",
    challenge: "Despite constitutional guarantees, many educational institutions have sought to evade their obligation to provide free higher education to persons with disabilities. In this specific instance, the university attempted to classify certain academic programs as \"private courses\" to escape liability, thereby forcing students with disabilities to pay exorbitant fees.",
    action: "Samanyayik Legal Service and Research Center took on this case pro bono. We challenged the university's attempt to commodify education and evade its legal responsibilities, arguing that fundamental rights cannot be circumvented by administrative classifications.",
    outcome: "We secured a decisive legal victory. The court ruled in favor of the petitioner, affirming that persons with disabilities have the right to access education without fees, even in courses claimed to be \"private\" or self-financed by the university. This judgment has set a vital precedent, ensuring that financial barriers do not stand in the way of higher education for the disability community."
  }
];

export const PAST_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Policy Drafting for Inclusive Education",
    client: "Blind Youth Association Nepal",
    description: "Drafted the comprehensive policy document for a blind-friendly assessment system in Nepal. This project involved extensive gap analysis of existing examination protocols and the formulation of new guidelines to ensure visually impaired students have equitable access to evaluation mechanisms."
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-1',
    number: '01',
    title: 'Comprehensive Legal Practice',
    description: 'We offer expert counsel and representation across all levels of the judiciary.',
    subServices: [
      {
        id: 'sub-1-1',
        title: 'Civil and Criminal Litigation',
        description: 'Robust representation for individuals facing legal challenges in both civil and criminal courts.',
        fullContent: `
          <p>We provide robust representation for individuals facing legal challenges in both civil and criminal courts. In criminal matters, our defense team manages the entire legal process, from filing bail applications and representing clients during trials to handling complex appeals in higher courts.</p>
          <p>On the civil side, we handle a broad spectrum of disputes, including breach of contract, defamation, and tort claims. Our approach is grounded in a deep understanding of procedural law, ensuring that every client’s right to a fair trial and due process is rigorously defended against state or private actors.</p>
        `
      },
      {
        id: 'sub-1-2',
        title: 'Public Interest and Constitutional Litigation',
        description: 'Using the law as a tool for social engineering and systemic change.',
        fullContent: `
          <p>We are committed to using the law as a tool for social engineering and systemic change. Our firm actively files writ petitions and litigates cases that challenge unconstitutional administrative actions and protect fundamental human rights.</p>
          <p>We have a proven track record in this arena, notably securing the constitutional right to free higher education for persons with disabilities through strategic litigation. We represent marginalized communities in cases involving discrimination, ensuring that the "de jure" rights guaranteed by the Constitution are translated into "de facto" lived realities.</p>
        `
      },
      {
        id: 'sub-1-3',
        title: 'Family Law and Gender Justice',
        description: 'Navigating complex personal matters with sensitivity and legal expertise.',
        fullContent: `
          <p>Our family law practice combines legal expertise with necessary sensitivity. We assist clients in navigating complex personal matters, including divorce, judicial separation, and annulment of marriage. We place a strong emphasis on child welfare, advocating for fair child custody, visitation rights, and support arrangements that prioritize the best interests of the child.</p>
          <p>Furthermore, we actively provide legal aid and representation for survivors of domestic violence and gender-based violence (GBV), helping victims secure protection orders and access justice mechanisms to ensure their safety and dignity.</p>
        `
      },
      {
        id: 'sub-1-4',
        title: 'Corporate and Commercial Law',
        description: 'Trusted legal advisors for businesses, NGOs, and private companies.',
        fullContent: `
          <p>We serve as trusted legal advisors for businesses, non-governmental organizations, and private companies. Our team assists with the entire lifecycle of a business, from company formation and registration to drafting corporate bylaws and handling mergers and acquisitions.</p>
          <p>We provide ongoing general counsel regarding regulatory compliance, labor laws, and banking regulations. In the event of commercial disputes, we offer representation in litigation as well as guidance through arbitration and mediation processes to achieve efficient, commercially viable resolutions.</p>
        `
      },
      {
        id: 'sub-1-5',
        title: 'Property and Real Estate Law',
        description: 'Comprehensive legal assistance for property-related transactions and disputes.',
        fullContent: `
          <p>We provide comprehensive legal assistance for property-related transactions and disputes. Our services include drafting and reviewing tenancy agreements, managing the transfer of land titles, and overseeing property settlements during family partitions.</p>
          <p>We also represent clients in litigation concerning land disputes, boundary issues, and ownership rights, ensuring that your assets are legally protected and that all transactions comply with national property laws.</p>
        `
      }
    ]
  },
  {
    id: 'cat-2',
    number: '02',
    title: 'Specialized Rights-Based Legal Services',
    description: 'We champion the rights of the most vulnerable through specialized advocacy and representation.',
    subServices: [
      {
        id: 'sub-2-1',
        title: 'Disability Legal Services',
        description: 'Championing the "Nothing About Us Without Us" principle to dismantle systemic ableism.',
        fullContent: `
          <p>We are at the forefront of the disability rights movement in Nepal, championing the "Nothing About Us Without Us" principle. Our legal interventions go beyond standard representation; we engage in high-impact litigation to dismantle systemic ableism.</p>
          <p>We actively challenge discriminatory practices in education, employment, and financial services, including advocacy for accessible insurance policies and inclusive examination systems. Our team audits institutions for compliance with the Convention on the Rights of Persons with Disabilities (CRPD) and the Disability Rights Act, ensuring that reasonable accommodation is not an act of charity, but a legally enforceable right.</p>
        `
      },
      {
        id: 'sub-2-2',
        title: 'LGBTIQ+ (GSM) Legal Defense and Advocacy',
        description: 'Providing specialized legal protection for the LGBTIQ+ community.',
        fullContent: `
          <p>Despite Nepal’s progressive constitutional provisions, the gap between de jure rights and de facto realities for Gender and Sexual Minorities (GSM) remains stark. We bridge this gap by providing specialized legal protection for the LGBTIQ+ community against harassment, arbitrary detention, and denial of justice by state and non-state actors.</p>
          <p>Our work involves documenting and litigating cases of human rights violations, including those involving hate crimes and discrimination in healthcare and education. We also provide legal counsel on issues related to identity recognition, same-sex partnership rights, and protection from cyberbullying and online harassment.</p>
        `
      },
      {
        id: 'sub-2-3',
        title: 'Women’s Rights and Gender Justice',
        description: 'Grounded in Feminist Legal Theory to empower women and combat gender-based oppression.',
        fullContent: `
          <p>Our approach to women's rights is grounded in Feminist Legal Theory, recognizing that gender-based oppression is often intersectional. We provide comprehensive legal support for survivors of domestic violence, sexual assault, and workplace harassment.</p>
          <p>Uniquely, we specialize in the protection of Women Human Rights Defenders (WHRDs) with disabilities, who face double discrimination and heightened risks of violence. From securing protection orders to litigating for equal property rights and fighting against discriminatory employment practices, our legal services are designed to empower women to claim their agency and economic independence.</p>
        `
      },
      {
        id: 'sub-2-4',
        title: 'Legal Services for Dalits and Marginalized Communities',
        description: 'Combating socio-economic oppression and caste-based discrimination.',
        fullContent: `
          <p>We utilize the Critical School of Thought to analyze and combat the socio-economic oppression faced by Dalits and other marginalized groups. Our legal practice actively targets caste-based discrimination, untouchability, and exclusion from public services.</p>
          <p>By challenging the structural injustices that perpetuate poverty and exclusion, we work to ensure that the constitutional guarantee of equality is a reality for the "voiceless," providing free legal aid to those who are economically disadvantaged and socially marginalized.</p>
        `
      },
      {
        id: 'sub-2-5',
        title: 'Representation for Ethnic and Linguistic Minorities',
        description: 'Advocating for the cultural and linguistic rights of indigenous nationalities.',
        fullContent: `
          <p>We advocate for the cultural and linguistic rights of indigenous nationalities and minority groups. Recognizing that language barriers often equal justice barriers, we fight for the right to legal processes in understandable languages and the preservation of cultural identity.</p>
          <p>Our litigation and advocacy focus on ending the systemic erasure of minority rights in administrative and judicial processes, ensuring that Nepal's diversity is respected not just in culture, but in the courtroom and legislative chambers.</p>
        `
      }
    ]
  },
  {
    id: 'cat-3',
    number: '03',
    title: 'Research, Policy, and Institutional Development',
    description: 'Generating evidence to drive policy reform and institutional accountability.',
    subServices: [
      {
        id: 'sub-3-1',
        title: 'Socio-Legal Research and Policy Analysis',
        description: 'Rigorous, evidence-based research to identify gaps between policy and implementation.',
        fullContent: `
          <p>We conduct rigorous, evidence-based research to identify gaps between legal policies and their implementation on the ground. Our team specializes in "Gap Analysis," comparing legal frameworks with the actual experiences of marginalized groups to inform advocacy.</p>
          <p>We draft high-level policy briefs and legislative frameworks, such as our work on the "Blind-Friendly Assessment System," which provides a roadmap for inclusive education reforms. Our research is survivor-centric and trauma-informed.</p>
        `
      },
      {
        id: 'sub-3-2',
        title: 'Policy, Toolkits, and Guidelines',
        description: 'Transforming research into actionable frameworks for governance.',
        fullContent: `
          <p>We transform complex research findings into actionable frameworks for governance and implementation. We serve as a technical partner for organizations and government bodies seeking to institutionalize inclusion.</p>
          <ul>
            <li><strong>Policy Drafting:</strong> We draft high-level policy briefs and legislative frameworks.</li>
            <li><strong>Implementation Guidelines:</strong> We formulate working procedures and directives that guide institutions on how to operationalize legal mandates, moving from policy intent to practical application.</li>
          </ul>
        `
      },
      {
        id: 'sub-3-3',
        title: 'Training Development and Delivery',
        description: 'Designing capacity-building programs to empower activists and institutions.',
        fullContent: `
          <p>We believe in sustaining impact through education. We design and deliver capacity-building programs that empower activists, professionals, and institutions.</p>
          <ul>
            <li><strong>Training Design and Manuals:</strong> We develop specialized training curricula and manuals tailored to specific advocacy goals, such as Peer Educator mobilization and legal literacy modules.</li>
            <li><strong>Workshop Facilitation:</strong> Our team facilitates interactive workshops and sensitization sessions for government service providers.</li>
            <li><strong>Capacity Building:</strong> We conduct training series for organizations, youth groups, and CSOs to enhance their understanding of human rights mechanisms.</li>
          </ul>
        `
      },
      {
        id: 'sub-3-4',
        title: 'Inclusive Education Programs',
        description: 'Building an education system that accommodates every learner.',
        fullContent: `
          <p>We advocate for and help build an education system that accommodates every learner.</p>
          <ul>
            <li><strong>Education Frameworks:</strong> We assist in developing inclusive assessment policies and educational frameworks that align with national laws and the CRPD.</li>
            <li><strong>UDL Pedagogy:</strong> We promote the Universal Design for Learning (UDL) approach, advising on diversifying teaching methods.</li>
            <li><strong>Inclusive Learning Materials:</strong> We advise on and produce accessible learning materials for students with visual impairments.</li>
          </ul>
        `
      },
      {
        id: 'sub-3-5',
        title: 'Impact Documentation and Storytelling',
        description: 'Communicating project success through narrative booklets and case stories.',
        fullContent: `
          <p>We help development organizations and NGOs capture and communicate the success of their projects. We produce comprehensive narrative booklets, case stories, and process documentation that serve as powerful advocacy tools for donors and policymakers.</p>
        `
      }
    ]
  },
  {
    id: 'cat-4',
    number: '04',
    title: 'Technical and Accessibility Services',
    description: 'Specialized technical services ensuring information and justice are accessible to all.',
    subServices: [
      {
        id: 'sub-4-1',
        title: 'Data Digitization and Management',
        description: 'Transforming raw data into secure digital assets using accessibility technology.',
        fullContent: `
          <p>We offer advanced technical solutions for transforming raw data into secure digital assets. Our team specializes in digitizing handwritten field notes and physical case files into structured, analyzable databases using high-speed scanning and accessibility technology like Kibo devices.</p>
          <p>We implement strict data security protocols to protect sensitive information, particularly for human rights cases involving survivors of violence.</p>
        `
      },
      {
        id: 'sub-4-2',
        title: 'Translation and Drafting',
        description: 'Bridging linguistic barriers with precise translation and professional legal drafting.',
        fullContent: `
          <p>We bridge linguistic barriers in the legal system through precise translation services. We provide certified translation from English to Nepali and Nepali to English for court verdicts, statutes, contracts, and human rights reports.</p>
          <p>Additionally, we offer professional legal drafting services for contracts, deeds, MOUs, and petitions, ensuring all documents are legally sound and enforceable.</p>
        `
      },
      {
        id: 'sub-4-3',
        title: 'Digital Accessibility Auditing and WCAG Compliance',
        description: 'Ensuring the digital world is open to everyone through audits and remediation.',
        fullContent: `
          <p>We ensure that the digital world is open to everyone.</p>
          <ul>
            <li><strong>Web Accessibility Audits:</strong> We conduct comprehensive audits of websites and digital platforms to identify barriers and ensure compliance with the Web Content Accessibility Guidelines (WCAG) and national standards.</li>
            <li><strong>Remediation Roadmaps:</strong> Beyond mere testing, we provide concrete, actionable suggestions to help organizations systematically dismantle digital barriers.</li>
            <li><strong>Digital Accessibility Training:</strong> We provide technical training to organizations on how to create and maintain accessible digital infrastructure.</li>
          </ul>
        `
      },
      {
        id: 'sub-4-4',
        title: 'Inclusive Media and Content Production',
        description: 'Creating media and documents that are fully accessible.',
        fullContent: `
          <p>We are pioneers in creating media and documents that are fully accessible.</p>
          <ul>
            <li><strong>Multimedia Accessibility:</strong> In partnership with technical experts, we produce inclusive media featuring Closed Captions, Audio Description (AD) for the visually impaired, and Sign Language Interpretation.</li>
            <li><strong>Accessible Document Creation:</strong> We convert complex legal and educational documents into accessible formats, including Tagged PDFs with logical reading orders and embedded alternative text (alt-text) for images.</li>
            <li><strong>"Easy to Read" Formats:</strong> We specialize in drafting content in "Easy to Read" versions, using clear, simple language and avoiding jargon to ensure critical information is accessible to individuals with intellectual disabilities or limited literacy.</li>
          </ul>
        `
      }
    ]
  }
];

// --- DATA STRUCTURES (NEPALI) ---

export const ABOUT_CONTENT_NP = {
  whoWeAre: {
    title: "हामी को हौं",
    text: "सामन्यायिक कानूनी सेवा तथा अनुसन्धान केन्द्र प्रा. लि. युवा, दूरदर्शी वकिलहरूको समूहद्वारा स्थापित एक गतिशील कानूनी संस्था हो, जो नेपालमा न्यायको परिदृश्यलाई पुन: परिभाषित गर्न समर्पित छ। हामी एक हाइब्रिड संस्थाको रूपमा काम गर्छौं: हामी मुद्दा र प्रतिरक्षा प्रदान गर्ने पूर्ण-सेवा कानून फर्म र नीति सुधारमा केन्द्रित प्रगतिशील अनुसन्धान थिंक ट्यांक दुवै हौं। हाम्रो पहिचान यो विश्वासमा निहित छ कि कानूनी अभ्यास अदालतभन्दा बाहिर गएर अन्यायका प्रणालीगत जराहरूलाई सम्बोधन गर्नुपर्छ। हामी व्यक्ति, निजी संस्थाहरू, र सार्वजनिक संस्थाहरूलाई पहुँचयोग्य, उच्च-गुणस्तरको कानूनी समाधानहरू प्रदान गर्नमा विशेषज्ञता राख्छौं, जसले न्यायिक निकायहरूमा प्रतिनिधित्वदेखि वैकल्पिक विवाद समाधान र विशेष कागजात मस्यौदा र अनुवादसम्मका सेवाहरू प्रदान गर्दछ।"
  },
  mission: {
    title: "हाम्रो लक्ष्य र जनादेश",
    text: "हाम्रो आधारभूत जनादेश मानव अधिकारको प्रवद्र्धन र रक्षा, न्यायमा पहुँच, र सबैका लागि पर्याप्त जीवनस्तरको सुनिश्चितता हो। हामी सीमान्तकृत, अल्पसंख्यक, र कमजोर समुदायहरूको सेवा गर्न स्पष्ट रूपमा प्रतिबद्ध छौं जसलाई ऐतिहासिक रूपमा समाजको किनारमा धकेलिएको छ। यसमा अपाङ्गता भएका व्यक्तिहरू, लैङ्गिक र यौन अल्पसंख्यकहरू (LGBTIQ+), र जात, वर्ग, जाति, र लिङ्गको आधारमा संरचनात्मक भेदभावको सामना गरिरहेका समुदायहरू समावेश छन्। हामी विश्वास गर्छौं कि न्याय विशेषाधिकार होइन तर मौलिक अधिकार हो, र हामी ती अवरोधहरू—चाहे कानूनी, सामाजिक, वा भौतिक—भत्काउन सक्रिय रूपमा काम गर्छौं जसले यी समुदायहरूलाई उनीहरूको संवैधानिक स्वतन्त्रता प्रयोग गर्नबाट रोक्छ।"
  },
  researchHub: {
    title: "अनुसन्धान र नीति सुधारको केन्द्र",
    text: "कानूनी प्रतिनिधित्व भन्दा बाहिर, सामन्यायिक एक समर्पित अनुसन्धान संस्था र थिंक ट्यांकको रूपमा कार्य गर्दछ। हामी बुझ्छौं कि वास्तविक प्रणालीगत परिवर्तनको लागि प्रमाण-आधारित वकालत आवश्यक छ। तसर्थ, हामी नागरिकहरूले सामना गरिरहेका वास्तविक यथार्थहरू र कानूनी व्यवस्थाहरू बीचको खाडल पहिचान गर्न कडा सामाजिक-कानूनी अनुसन्धानमा संलग्न छौं। हाम्रो अनुसन्धान पोर्टफोलियोमा 'दृष्टिविहीन-मैत्री मूल्याङ्कन प्रणाली' को लागि नीति संक्षेपहरू मस्यौदा गर्ने, 'अपाङ्गता भएका व्यक्तिहरूका लागि बीमा सेवामा पहुँच' मा अध्ययन गर्ने, र LGBTIQ+ समुदाय विरुद्ध मानव अधिकार उल्लङ्घनको दस्तावेजीकरण गर्ने समावेश छ। प्राज्ञिक कठोरतासँग कानूनी विशेषज्ञता जोडेर, हामी आर्थिक, सामाजिक, सांस्कृतिक र राजनीतिक अधिकारहरूमा नीति सुधार गर्न आवश्यक बौद्धिक पूँजी प्रदान गर्दछौं।"
  },
  approach: {
    title: "हाम्रो दृष्टिकोण: अन्तरसम्बन्ध र भोगाइ",
    text: "हामीलाई अलग गराउने कुरा हाम्रो गहिरो 'भोगाइ' र अन्तरसम्बन्धित दृष्टिकोणप्रतिको हाम्रो प्रतिबद्धता हो। हाम्रो नेतृत्वमा अपाङ्गता भएका व्यक्तिहरू र मानव अधिकार कानूनका विशेषज्ञहरू समावेश छन्, जसले सुनिश्चित गर्दछ कि हाम्रो काम 'हाम्रो बारेमा हामी बिना केही पनि होइन' भन्ने सिद्धान्तद्वारा निर्देशित छ। हामी अपाङ्गता, जात, लिङ्ग, र भूगोल जस्ता विभिन्न पहिचानहरू कसरी एकअर्कामा जोडिएर उत्पीडनका अनौठा रूपहरू सिर्जना गर्छन् भनेर बुझ्नको लागि आलोचनात्मक विचार र नारीवादी कानूनी सिद्धान्त जस्ता लेन्सहरू मार्फत कानूनी र नीतिगत मामिलाहरूको विश्लेषण गर्छौं। चाहे हामी हिंसाको पीडित-केन्द्रित दस्तावेजीकरण गरिरहेका छौं वा पहुँचयोग्य पूर्वाधारको वकालत गरिरहेका छौं, हाम्रो पद्धति सधैं आघात-सुसूचित, पूर्ण रूपमा नैतिक, र हानि नगर्ने गरी डिजाइन गरिएको छ।"
  },
  impact: {
    title: "प्रभाव र उपलब्धिहरू",
    text: "हाम्रो क्षमता केवल सैद्धान्तिक होइन; हामीसँग कानूनी वकालत मार्फत ठोस नीतिगत विजयहरू हासिल गरेको प्रमाणित ट्र्याक रेकर्ड छ। हाम्रो यात्राको एक निर्णायक क्षण पाटन उच्च अदालतमा हालैको कानूनी विजय थियो, जहाँ हाम्रो टोलीका सदस्यहरूले कानूनी प्रतिनिधिको रूपमा सेवा गर्दै, अपाङ्गता भएका व्यक्तिहरूका लागि नि: शुल्क उच्च शिक्षाको संवैधानिक अधिकार सुनिश्चित गर्ने रिट निवेदन सफलतापूर्वक लडे। यो उपलब्धि कानूनलाई सामाजिक ईन्जिनियरिङ्को शक्तिशाली उपकरणको रूपमा प्रयोग गर्ने हाम्रो क्षमताको प्रमाणको रूपमा खडा छ। ग्लोबल डिस्याबिलिटी समिट जस्ता अन्तर्राष्ट्रिय फोरमहरूका लागि उच्च-स्तरीय नीति मस्यौदादेखि तल्लो तहका कानूनी साक्षरता अभियानहरूसम्म, हामी सक्रिय रूपमा अझ समावेशी भविष्यलाई आकार दिइरहेका छौं।"
  },
  quote: {
    text: "रणनीति बिनाको कार्यनीति विजयको सबैभन्दा ढिलो बाटो हो। कार्यनीति बिनाको रणनीति हार अघिको हल्ला हो।",
    subtext: "सामन्यायिकमा, हामी न्याय र समानताका कारणहरूको विजय सुनिश्चित गर्न आक्रामक कानूनी मुद्दाको कार्यनीतिसँग दीर्घकालीन नीति अनुसन्धानको रणनीति जोड्छौं।"
  }
};

export const ACHIEVEMENT_CASES_NP: AchievementCase[] = [
  {
    id: 1,
    title: "ऐतिहासिक कानूनी विजय: नि:शुल्क उच्च शिक्षाको अधिकार",
    caseTitle: "मदन रोकाया वि. जनप्रशासन क्याम्पस र अन्य",
    challenge: "संवैधानिक ग्यारेन्टीहरूको बाबजुद, धेरै शैक्षिक संस्थाहरूले अपाङ्गता भएका व्यक्तिहरूलाई नि: शुल्क उच्च शिक्षा प्रदान गर्ने आफ्नो दायित्वबाट उम्कन खोजेका छन्। यस विशिष्ट उदाहरणमा, विश्वविद्यालयले दायित्वबाट उम्कन केही शैक्षिक कार्यक्रमहरूलाई 'निजी पाठ्यक्रम' को रूपमा वर्गीकरण गर्ने प्रयास गर्यो, जसले गर्दा अपाङ्गता भएका विद्यार्थीहरूलाई चर्को शुल्क तिर्न बाध्य पारियो।",
    action: "सामन्यायिक कानूनी सेवा तथा अनुसन्धान केन्द्रले यो मुद्दा प्रो बोनो (नि:शुल्क) लियो। हामीले शिक्षालाई व्यापारिकरण गर्ने र प्रशासनिक वर्गीकरणद्वारा मौलिक अधिकारहरूलाई बाइपास गर्न खोज्ने विश्वविद्यालयको प्रयासलाई चुनौती दियौं।",
    outcome: "हामीले निर्णायक कानूनी विजय हासिल गर्यौं। अदालतले निवेदकको पक्षमा फैसला सुनायो, यो पुष्टि गर्दै कि अपाङ्गता भएका व्यक्तिहरूलाई विश्वविद्यालयले 'निजी' वा स्व-वित्तपोषित दाबी गरेका पाठ्यक्रमहरूमा पनि शुल्क बिना शिक्षामा पहुँच गर्ने अधिकार छ। यो फैसलाले एक महत्त्वपूर्ण नजिर स्थापित गरेको छ, जसले सुनिश्चित गर्दछ कि आर्थिक अवरोधहरू अपाङ्गता समुदायको लागि उच्च शिक्षाको बाटोमा खडा हुँदैनन्।"
  }
];

export const PAST_PROJECTS_NP: Project[] = [
  {
    id: 1,
    title: "समावेशी शिक्षाको लागि नीति मस्यौदा",
    client: "नेपाल दृष्टिविहीन युवा संघ",
    description: "नेपालमा दृष्टिविहीन-मैत्री मूल्याङ्कन प्रणालीको लागि विस्तृत नीति कागजात मस्यौदा गरियो। यस परियोजनामा अवस्थित परीक्षा प्रोटोकलहरूको व्यापक अन्तर विश्लेषण र दृष्टिविहीन विद्यार्थीहरूलाई मूल्याङ्कन संयन्त्रहरूमा समान पहुँच सुनिश्चित गर्न नयाँ निर्देशिकाहरूको निर्माण समावेश थियो।"
  }
];

export const SERVICE_CATEGORIES_NP: ServiceCategory[] = [
  {
    id: 'cat-1',
    number: '०१',
    title: 'बृहत कानूनी अभ्यास',
    description: 'हामी न्यायपालिकाका सबै तहहरूमा विशेषज्ञ परामर्श र प्रतिनिधित्व प्रदान गर्दछौं।',
    subServices: [
      {
        id: 'sub-1-1',
        title: 'देवानी र फौजदारी मुद्दा',
        description: 'देवानी र फौजदारी दुबै अदालतहरूमा कानूनी चुनौतीहरूको सामना गरिरहेका व्यक्तिहरूको लागि बलियो प्रतिनिधित्व।',
        fullContent: `
          <p>हामी देवानी र फौजदारी दुबै अदालतहरूमा कानूनी चुनौतीहरूको सामना गरिरहेका व्यक्तिहरूको लागि बलियो प्रतिनिधित्व प्रदान गर्दछौं। फौजदारी मामिलाहरूमा, हाम्रो प्रतिरक्षा टोलीले जमानत निवेदन दर्ता गर्ने र सुनुवाइको क्रममा ग्राहकहरूको प्रतिनिधित्व गर्नेदेखि लिएर उच्च अदालतहरूमा जटिल पुनरावेदनहरू ह्यान्डल गर्नेसम्म सम्पूर्ण कानूनी प्रक्रिया व्यवस्थापन गर्दछ।</p>
          <p>देवानी पक्षमा, हामी सम्झौता उल्लङ्घन, मानहानी, र क्षतिपूर्ति दावीहरू सहित विवादहरूको विस्तृत श्रृंखला ह्यान्डल गर्छौं। हाम्रो दृष्टिकोण कार्यविधि कानूनको गहिरो बुझाइमा आधारित छ, यो सुनिश्चित गर्दै कि प्रत्येक ग्राहकको निष्पक्ष सुनुवाइ र उचित प्रक्रियाको अधिकार राज्य वा निजी पक्षहरू विरुद्ध कडाइका साथ रक्षा गरिन्छ।</p>
        `
      },
      {
        id: 'sub-1-2',
        title: 'सार्वजनिक सरोकार र संवैधानिक मुद्दा',
        description: 'कानूनलाई सामाजिक ईन्जिनियरिङ् र प्रणालीगत परिवर्तनको उपकरणको रूपमा प्रयोग गर्दै।',
        fullContent: `
          <p>हामी कानूनलाई सामाजिक ईन्जिनियरिङ् र प्रणालीगत परिवर्तनको उपकरणको रूपमा प्रयोग गर्न प्रतिबद्ध छौं। हाम्रो फर्मले सक्रिय रूपमा रिट निवेदनहरू दर्ता गर्दछ र असंवैधानिक प्रशासनिक कार्यहरूलाई चुनौती दिने र मौलिक मानव अधिकारहरूको रक्षा गर्ने मुद्दाहरू लड्छ।</p>
          <p>हामीसँग यस क्षेत्रमा प्रमाणित ट्र्याक रेकर्ड छ, विशेष गरी रणनीतिक मुद्दा मार्फत अपाङ्गता भएका व्यक्तिहरूका लागि नि: शुल्क उच्च शिक्षाको संवैधानिक अधिकार सुनिश्चित गर्न। हामी भेदभाव समावेश भएका मुद्दाहरूमा सीमान्तकृत समुदायहरूको प्रतिनिधित्व गर्छौं, यो सुनिश्चित गर्दै कि संविधानद्वारा ग्यारेन्टी गरिएको "कानूनी" अधिकारहरू "वास्तविक" भोगाइहरूमा परिणत हुन्छन्।</p>
        `
      },
      {
        id: 'sub-1-3',
        title: 'पारिवारिक कानून र लैङ्गिक न्याय',
        description: 'संवेदनशीलता र कानूनी विशेषज्ञताका साथ जटिल व्यक्तिगत मामिलाहरू नेभिगेट गर्दै।',
        fullContent: `
          <p>हाम्रो पारिवारिक कानून अभ्यासले आवश्यक संवेदनशीलतासँग कानूनी विशेषज्ञता जोड्दछ। हामी सम्बन्ध विच्छेद, न्यायिक पृथकीकरण, र विवाह बदर सहित जटिल व्यक्तिगत मामिलाहरू नेभिगेट गर्न ग्राहकहरूलाई मद्दत गर्छौं। हामी बाल कल्याणमा बलियो जोड दिन्छौं, निष्पक्ष बाल संरक्षण, भेटघाट अधिकार, र सहयोग प्रबन्धहरूको वकालत गर्दै जसले बच्चाको सर्वोत्तम हितलाई प्राथमिकता दिन्छ।</p>
          <p>यसबाहेक, हामी घरेलु हिंसा र लैङ्गिक हिंसा (GBV) का पीडितहरूका लागि सक्रिय रूपमा कानूनी सहायता र प्रतिनिधित्व प्रदान गर्दछौं, पीडितहरूलाई संरक्षण आदेशहरू सुरक्षित गर्न र उनीहरूको सुरक्षा र मर्यादा सुनिश्चित गर्न न्याय संयन्त्रहरूमा पहुँच गर्न मद्दत गर्दछौं।</p>
        `
      },
      {
        id: 'sub-1-4',
        title: 'कर्पोरेट र व्यापारिक कानून',
        description: 'व्यवसायहरू, गैर-सरकारी संस्थाहरू, र निजी कम्पनीहरूका लागि विश्वसनीय कानूनी सल्लाहकारहरू।',
        fullContent: `
          <p>हामी व्यवसायहरू, गैर-सरकारी संस्थाहरू, र निजी कम्पनीहरूका लागि विश्वसनीय कानूनी सल्लाहकारहरूको रूपमा सेवा गर्दछौं। हाम्रो टोलीले कम्पनी गठन र दर्तादेखि कर्पोरेट नियमहरू मस्यौदा गर्ने र मर्जर तथा एक्विजिसनहरू ह्यान्डल गर्नेसम्म व्यवसायको सम्पूर्ण जीवनचक्रमा मद्दत गर्दछ।</p>
          <p>हामी नियामक अनुपालन, श्रम कानून, र बैंकिङ नियमहरू बारे निरन्तर सामान्य परामर्श प्रदान गर्दछौं। व्यापारिक विवादहरूको अवस्थामा, हामी मुद्दामा प्रतिनिधित्वका साथै मध्यस्थता र मेलमिलाप प्रक्रियाहरू मार्फत प्रभावकारी, व्यापारिक रूपमा व्यवहार्य समाधानहरू प्राप्त गर्न मार्गदर्शन प्रदान गर्दछौं।</p>
        `
      },
      {
        id: 'sub-1-5',
        title: 'सम्पत्ति र घरजग्गा कानून',
        description: 'सम्पत्ति सम्बन्धी लेनदेन र विवादहरूको लागि विस्तृत कानूनी सहायता।',
        fullContent: `
          <p>हामी सम्पत्ति सम्बन्धी लेनदेन र विवादहरूको लागि विस्तृत कानूनी सहायता प्रदान गर्दछौं। हाम्रा सेवाहरूमा भाडा सम्झौताहरू मस्यौदा गर्ने र समीक्षा गर्ने, जग्गा अधिकार हस्तान्तरण व्यवस्थापन गर्ने, र पारिवारिक अंशबन्डाको समयमा सम्पत्ति सम्झौताहरूको निरीक्षण गर्ने समावेश छ।</p>
          <p>हामी जग्गा विवाद, सीमाना समस्याहरू, र स्वामित्व अधिकार सम्बन्धी मुद्दाहरूमा पनि ग्राहकहरूको प्रतिनिधित्व गर्छौं, यो सुनिश्चित गर्दै कि तपाइँको सम्पत्ति कानूनी रूपमा सुरक्षित छ र सबै लेनदेनहरू राष्ट्रिय सम्पत्ति कानूनहरूको पालना गर्दछन्।</p>
        `
      }
    ]
  },
  {
    id: 'cat-2',
    number: '०२',
    title: 'विशेष अधिकार-आधारित कानूनी सेवाहरू',
    description: 'हामी विशेष वकालत र प्रतिनिधित्व मार्फत सबैभन्दा कमजोर वर्गको अधिकारको वकालत गर्छौं।',
    subServices: [
      {
        id: 'sub-2-1',
        title: 'अपाङ्गता कानूनी सेवाहरू',
        description: 'प्रणालीगत सक्षमतावाद (Ableism) भत्काउन "हाम्रो बारेमा हामी बिना केही पनि होइन" सिद्धान्तको वकालत गर्दै।',
        fullContent: `
          <p>हामी नेपालमा अपाङ्गता अधिकार आन्दोलनको अग्रभागमा छौं, "हाम्रो बारेमा हामी बिना केही पनि होइन" सिद्धान्तको वकालत गर्दै। हाम्रो कानूनी हस्तक्षेपहरू मानक प्रतिनिधित्व भन्दा बाहिर जान्छन्; हामी प्रणालीगत सक्षमतावाद भत्काउन उच्च-प्रभाव मुद्दामा संलग्न छौं।</p>
          <p>हामी शिक्षा, रोजगार, र वित्तीय सेवाहरूमा भेदभावपूर्ण अभ्यासहरूलाई सक्रिय रूपमा चुनौती दिन्छौं, जसमा पहुँचयोग्य बीमा नीतिहरू र समावेशी परीक्षा प्रणालीहरूको लागि वकालत समावेश छ। हाम्रो टोलीले अपाङ्गता भएका व्यक्तिहरूको अधिकार सम्बन्धी महासन्धि (CRPD) र अपाङ्गता अधिकार ऐनको अनुपालनका लागि संस्थाहरूको लेखापरीक्षण गर्दछ, यो सुनिश्चित गर्दै कि उचित आवास दानको कार्य होइन, तर कानूनी रूपमा लागू गर्न सकिने अधिकार हो।</p>
        `
      },
      {
        id: 'sub-2-2',
        title: 'LGBTIQ+ (GSM) कानूनी रक्षा र वकालत',
        description: 'LGBTIQ+ समुदायको लागि विशेष कानूनी संरक्षण प्रदान गर्दै।',
        fullContent: `
          <p>नेपालको प्रगतिशील संवैधानिक व्यवस्थाहरूको बाबजुद, लैङ्गिक र यौन अल्पसंख्यकहरू (GSM) का लागि कानूनी अधिकार र वास्तविक यथार्थहरू बीचको खाडल गहिरो छ। हामी राज्य र गैर-राज्य पक्षहरूद्वारा हुने उत्पीडन, स्वेच्छाचारी हिरासत, र न्यायको इन्कार विरुद्ध LGBTIQ+ समुदायको लागि विशेष कानूनी संरक्षण प्रदान गरेर यो खाडल कम गर्छौं।</p>
          <p>हाम्रो काममा मानव अधिकार उल्लङ्घनका घटनाहरूको दस्तावेजीकरण र मुद्दा लड्ने समावेश छ, जसमा घृणा अपराध र स्वास्थ्य सेवा तथा शिक्षामा भेदभाव समावेश छ। हामी पहिचान मान्यता, समलिङ्गी साझेदारी अधिकार, र साइबर बुलिङ तथा अनलाइन उत्पीडनबाट सुरक्षा सम्बन्धी मुद्दाहरूमा पनि कानूनी परामर्श प्रदान गर्दछौं।</p>
        `
      },
      {
        id: 'sub-2-3',
        title: 'महिला अधिकार र लैङ्गिक न्याय',
        description: 'महिला सशक्तिकरण र लैङ्गिक उत्पीडन विरुद्ध लड्न नारीवादी कानूनी सिद्धान्तमा आधारित।',
        fullContent: `
          <p>महिला अधिकारप्रतिको हाम्रो दृष्टिकोण नारीवादी कानूनी सिद्धान्तमा आधारित छ, यो स्वीकार गर्दै कि लैङ्गिक उत्पीडन प्रायः अन्तरसम्बन्धित हुन्छ। हामी घरेलु हिंसा, यौन दुर्व्यवहार, र कार्यस्थलको उत्पीडनका पीडितहरूका लागि विस्तृत कानूनी सहयोग प्रदान गर्दछौं।</p>
          <p>विशेष रूपमा, हामी अपाङ्गता भएका महिला मानव अधिकार रक्षकहरू (WHRDs) को संरक्षणमा विशेषज्ञता राख्छौं, जसले दोहोरो भेदभाव र हिंसाको उच्च जोखिमको सामना गर्छन्। संरक्षण आदेशहरू सुरक्षित गर्ने देखि समान सम्पत्ति अधिकारको लागि मुद्दा लड्ने र भेदभावपूर्ण रोजगार अभ्यासहरू विरुद्ध लड्ने सम्म, हाम्रा कानूनी सेवाहरू महिलाहरूलाई उनीहरूको एजेन्सी र आर्थिक स्वतन्त्रता दावी गर्न सशक्त बनाउन डिजाइन गरिएको हो।</p>
        `
      },
      {
        id: 'sub-2-4',
        title: 'दलित र सीमान्तकृत समुदायका लागि कानूनी सेवा',
        description: 'सामाजिक-आर्थिक उत्पीडन र जातीय भेदभाव विरुद्ध लड्दै।',
        fullContent: `
          <p>हामी दलित र अन्य सीमान्तकृत समूहहरूले भोग्नुपरेको सामाजिक-आर्थिक उत्पीडनको विश्लेषण र प्रतिरोध गर्न आलोचनात्मक विचार (Critical School of Thought) प्रयोग गर्छौं। हाम्रो कानूनी अभ्यासले जातीय भेदभाव, छुवाछूत, र सार्वजनिक सेवाहरूबाट बहिष्करणलाई सक्रिय रूपमा लक्षित गर्दछ।</p>
          <p>गरिबी र बहिष्करणलाई निरन्तरता दिने संरचनात्मक अन्यायहरूलाई चुनौती दिएर, हामी समानताको संवैधानिक ग्यारेन्टी "आवाजविहीनहरू" का लागि वास्तविकता हो भन्ने सुनिश्चित गर्न काम गर्छौं, आर्थिक रूपमा विपन्न र सामाजिक रूपमा सीमान्तकृतहरूलाई नि: शुल्क कानूनी सहायता प्रदान गर्दछौं।</p>
        `
      },
      {
        id: 'sub-2-5',
        title: 'जातीय र भाषिक अल्पसंख्यकहरूको लागि प्रतिनिधित्व',
        description: 'आदिवासी जनजातिहरूको सांस्कृतिक र भाषिक अधिकारको वकालत गर्दै।',
        fullContent: `
          <p>हामी आदिवासी जनजाति र अल्पसंख्यक समूहहरूको सांस्कृतिक र भाषिक अधिकारको वकालत गर्छौं। भाषाका अवरोधहरू अक्सर न्यायका अवरोधहरू हुन् भन्ने स्वीकार गर्दै, हामी बुझ्न सकिने भाषाहरूमा कानूनी प्रक्रियाहरू र सांस्कृतिक पहिचानको संरक्षणको अधिकारको लागि लड्छौं।</p>
          <p>हाम्रो मुद्दा र वकालत प्रशासनिक र न्यायिक प्रक्रियाहरूमा अल्पसंख्यक अधिकारहरूको प्रणालीगत मेटाउने कार्य अन्त्य गर्नमा केन्द्रित छ, यो सुनिश्चित गर्दै कि नेपालको विविधता संस्कृतिमा मात्र होइन, अदालत र व्यवस्थापिकामा पनि सम्मान गरिन्छ।</p>
        `
      }
    ]
  },
  {
    id: 'cat-3',
    number: '०३',
    title: 'अनुसन्धान, नीति, र संस्थागत विकास',
    description: 'नीति सुधार र संस्थागत जवाफदेहिता ड्राइभ गर्न प्रमाण सिर्जना गर्दै।',
    subServices: [
      {
        id: 'sub-3-1',
        title: 'सामाजिक-कानूनी अनुसन्धान र नीति विश्लेषण',
        description: 'नीति र कार्यान्वयन बीचको खाडल पहिचान गर्न कठोर, प्रमाण-आधारित अनुसन्धान।',
        fullContent: `
          <p>हामी कानूनी नीतिहरू र तल्लो तहमा तिनको कार्यान्वयन बीचको खाडल पहिचान गर्न कठोर, प्रमाण-आधारित अनुसन्धान सञ्चालन गर्छौं। हाम्रो टोली "ग्याप विश्लेषण" मा विशेषज्ञता राख्छ, वकालतलाई सूचित गर्न सीमान्तकृत समूहहरूको वास्तविक अनुभवहरूसँग कानूनी ढाँचाहरूको तुलना गर्दछ।</p>
          <p>हामी उच्च-स्तरीय नीति संक्षेपहरू र विधायी ढाँचाहरू मस्यौदा गर्छौं, जस्तै "दृष्टिविहीन-मैत्री मूल्याङ्कन प्रणाली" मा हाम्रो काम, जसले समावेशी शिक्षा सुधारहरूको लागि मार्गचित्र प्रदान गर्दछ। हाम्रो अनुसन्धान पीडित-केन्द्रित र आघात-सुसूचित छ।</p>
        `
      },
      {
        id: 'sub-3-2',
        title: 'नीति, टुलकिट, र निर्देशिकाहरू',
        description: 'जटिल अनुसन्धान निष्कर्षहरूलाई शासन र कार्यान्वयनका लागि कार्ययोग्य ढाँचाहरूमा रूपान्तरण गर्दै।',
        fullContent: `
          <p>हामी जटिल अनुसन्धान निष्कर्षहरूलाई शासन र कार्यान्वयनका लागि कार्ययोग्य ढाँचाहरूमा रूपान्तरण गर्छौं। हामी समावेशीकरणलाई संस्थागत गर्न चाहने संस्थाहरू र सरकारी निकायहरूको लागि प्राविधिक साझेदारको रूपमा सेवा गर्छौं।</p>
          <ul>
            <li><strong>नीति मस्यौदा:</strong> हामी उच्च-स्तरीय नीति संक्षेपहरू र विधायी ढाँचाहरू मस्यौदा गर्छौं।</li>
            <li><strong>कार्यान्वयन निर्देशिकाहरू:</strong> हामी कार्यविधि र निर्देशनहरू तयार गर्छौं जसले संस्थाहरूलाई कानूनी जनादेशहरू कसरी सञ्चालन गर्ने भनेर मार्गदर्शन गर्दछ, नीतिको आशयबाट व्यावहारिक प्रयोगमा सर्दै।</li>
          </ul>
        `
      },
      {
        id: 'sub-3-3',
        title: 'तालिम विकास र वितरण',
        description: 'कार्यकर्ता र संस्थाहरूलाई सशक्त बनाउन क्षमता अभिवृद्धि कार्यक्रमहरू डिजाइन गर्दै।',
        fullContent: `
          <p>हामी शिक्षा मार्फत प्रभाव कायम राख्नमा विश्वास गर्छौं। हामी कार्यकर्ता, पेशेवरहरू, र संस्थाहरूलाई सशक्त बनाउने क्षमता अभिवृद्धि कार्यक्रमहरू डिजाइन र वितरण गर्छौं।</p>
          <ul>
            <li><strong>तालिम डिजाइन र म्यानुअलहरू:</strong> हामी विशिष्ट वकालत लक्ष्यहरू, जस्तै पियर एजेकुटर परिचालन र कानूनी साक्षरता मोड्युलहरूको लागि अनुकूलित विशेष तालिम पाठ्यक्रम र म्यानुअलहरू विकास गर्छौं।</li>
            <li><strong>कार्यशाला सहजीकरण:</strong> हाम्रो टोलीले सरकारी सेवा प्रदायकहरूका लागि अन्तरक्रियात्मक कार्यशाला र संवेदनशीलता सत्रहरू सहजीकरण गर्दछ।</li>
            <li><strong>क्षमता अभिवृद्धि:</strong> हामी संस्थाहरू, युवा समूहहरू, र CSOs का लागि मानव अधिकार संयन्त्रहरूको बुझाइ बढाउन तालिम श्रृंखला सञ्चालन गर्छौं।</li>
          </ul>
        `
      },
      {
        id: 'sub-3-4',
        title: 'समावेशी शिक्षा कार्यक्रमहरू',
        description: 'हरेक विद्यार्थीलाई समेट्ने शिक्षा प्रणाली निर्माण गर्दै।',
        fullContent: `
          <p>हामी हरेक विद्यार्थीलाई समेट्ने शिक्षा प्रणालीको लागि वकालत गर्छौं र निर्माणमा मद्दत गर्छौं।</p>
          <ul>
            <li><strong>शिक्षा ढाँचाहरू:</strong> हामी राष्ट्रिय कानून र CRPD सँग मेल खाने समावेशी मूल्याङ्कन नीतिहरू र शैक्षिक ढाँचाहरू विकास गर्न मद्दत गर्छौं।</li>
            <li><strong>UDL पेडागोजी:</strong> हामी युनिभर्सल डिजाइन फर लर्निङ (UDL) दृष्टिकोणलाई बढावा दिन्छौं, शिक्षण विधिहरू विविधीकरण गर्न सल्लाह दिन्छौं।</li>
            <li><strong>समावेशी सिकाइ सामग्रीहरू:</strong> हामी दृष्टिविहीन विद्यार्थीहरूका लागि पहुँचयोग्य सिकाइ सामग्रीहरूमा सल्लाह दिन्छौं र उत्पादन गर्छौं।</li>
          </ul>
        `
      },
      {
        id: 'sub-3-5',
        title: 'प्रभाव दस्तावेजीकरण र कथावाचन',
        description: 'विकास संस्थाहरू र गैरसरकारी संस्थाहरूलाई उनीहरूको परियोजनाहरूको सफलता सञ्चार गर्न मद्दत गर्दै।',
        fullContent: `
          <p>हामी विकास संस्थाहरू र गैरसरकारी संस्थाहरूलाई उनीहरूको परियोजनाहरूको सफलता खिच्न र सञ्चार गर्न मद्दत गर्छौं। हामी विस्तृत कथा पुस्तिका, केस कथाहरू, र प्रक्रिया दस्तावेजीकरण उत्पादन गर्छौं जसले दाताहरू र नीति निर्माताहरूका लागि शक्तिशाली वकालत उपकरणको रूपमा काम गर्दछ।</p>
        `
      }
    ]
  },
  {
    id: 'cat-4',
    number: '०४',
    title: 'प्राविधिक र पहुँचयोग्य सेवाहरू',
    description: 'सूचना र न्याय सबैका लागि पहुँचयोग्य छ भनी सुनिश्चित गर्ने विशेष प्राविधिक सेवाहरू।',
    subServices: [
      {
        id: 'sub-4-1',
        title: 'डाटा डिजिटाइजेशन र व्यवस्थापन',
        description: 'पहुँचयोग्य प्रविधि प्रयोग गरेर कच्चा डाटालाई सुरक्षित डिजिटल सम्पत्तिमा रूपान्तरण गर्दै।',
        fullContent: `
          <p>हामी कच्चा डाटालाई सुरक्षित डिजिटल सम्पत्तिमा रूपान्तरण गर्न उन्नत प्राविधिक समाधानहरू प्रदान गर्दछौं। हाम्रो टोली हस्तलिखित फिल्ड नोटहरू र भौतिक केस फाइलहरूलाई उच्च-गति स्क्यानिङ र Kibo उपकरणहरू जस्ता पहुँचयोग्य प्रविधि प्रयोग गरेर संरचित, विश्लेषण योग्य डाटाबेसमा डिजिटाइज गर्न विशेषज्ञता राख्छ।</p>
          <p>हामी संवेदनशील जानकारीको सुरक्षा गर्न कडा डाटा सुरक्षा प्रोटोकलहरू लागू गर्छौं, विशेष गरी हिंसाका पीडितहरू संलग्न मानव अधिकार मुद्दाहरूको लागि।</p>
        `
      },
      {
        id: 'sub-4-2',
        title: 'अनुवाद र मस्यौदा',
        description: 'सटीक अनुवाद र व्यावसायिक कानूनी मस्यौदाको साथ भाषिक अवरोधहरू कम गर्दै।',
        fullContent: `
          <p>हामी सटीक अनुवाद सेवाहरू मार्फत कानूनी प्रणालीमा भाषिक अवरोधहरू कम गर्छौं। हामी अदालतका फैसला, कानून, सम्झौता, र मानव अधिकार प्रतिवेदनहरूको लागि अंग्रेजीबाट नेपाली र नेपालीबाट अंग्रेजीमा प्रमाणित अनुवाद प्रदान गर्दछौं।</p>
          <p>यसका साथै, हामी सम्झौता, डीड, MOU, र निवेदनहरूको लागि व्यावसायिक कानूनी मस्यौदा सेवाहरू प्रदान गर्दछौं, यो सुनिश्चित गर्दै कि सबै कागजातहरू कानूनी रूपमा सही र लागू गर्न योग्य छन्।</p>
        `
      },
      {
        id: 'sub-4-3',
        title: 'डिजिटल पहुँच लेखापरीक्षण र WCAG अनुपालन',
        description: 'डिजिटल संसार सबैका लागि खुला छ भनी सुनिश्चित गर्दै।',
        fullContent: `
          <p>हामी सुनिश्चित गर्छौं कि डिजिटल संसार सबैका लागि खुला छ।</p>
          <ul>
            <li><strong>वेब पहुँच लेखापरीक्षण:</strong> हामी वेबसाइटहरू र डिजिटल प्लेटफर्महरूको विस्तृत लेखापरीक्षण गर्छौं ताकि अवरोधहरू पहिचान गर्न र वेब सामग्री पहुँच दिशानिर्देशहरू (WCAG) र राष्ट्रिय मापदण्डहरूको अनुपालन सुनिश्चित गर्न सकियोस्।</li>
            <li><strong>सुधार रोडम्यापहरू:</strong> केवल परीक्षण भन्दा बाहिर, हामी संस्थाहरूलाई डिजिटल अवरोधहरू व्यवस्थित रूपमा हटाउन मद्दत गर्न ठोस, कार्ययोग्य सुझावहरू प्रदान गर्दछौं।</li>
            <li><strong>डिजिटल पहुँच तालिम:</strong> हामी संस्थाहरूलाई पहुँचयोग्य डिजिटल पूर्वाधार कसरी सिर्जना र मर्मत गर्ने भन्ने बारे प्राविधिक तालिम प्रदान गर्दछौं।</li>
          </ul>
        `
      },
      {
        id: 'sub-4-4',
        title: 'समावेशी मिडिया र सामग्री उत्पादन',
        description: 'पूर्ण रूपमा पहुँचयोग्य मिडिया र कागजातहरू सिर्जना गर्दै।',
        fullContent: `
          <p>हामी पूर्ण रूपमा पहुँचयोग्य मिडिया र कागजातहरू सिर्जना गर्न अग्रगामी हौं।</p>
          <ul>
            <li><strong>मल्टिमिडिया पहुँच:</strong> प्राविधिक विशेषज्ञहरूसँगको साझेदारीमा, हामी बन्द क्याप्सन (Closed Captions), दृष्टिविहीनहरूका लागि अडियो विवरण (Audio Description), र सांकेतिक भाषा व्याख्या (Sign Language Interpretation) सहितको समावेशी मिडिया उत्पादन गर्छौं।</li>
            <li><strong>पहुँचयोग्य कागजात सिर्जना:</strong> हामी जटिल कानूनी र शैक्षिक कागजातहरूलाई पहुँचयोग्य ढाँचाहरूमा रूपान्तरण गर्छौं, जसमा तार्किक पढ्ने आदेशहरू र छविहरूको लागि एम्बेडेड वैकल्पिक पाठ (alt-text) सहित ट्याग गरिएका PDF हरू समावेश छन्।</li>
            <li><strong>"पढ्न सजिलो" ढाँचाहरू:</strong> हामी "पढ्न सजिलो" संस्करणहरूमा सामग्री मस्यौदा गर्न विशेषज्ञता राख्छौं, स्पष्ट, सरल भाषा प्रयोग गरेर र बौद्धिक अपाङ्गता भएका वा सीमित साक्षरता भएका व्यक्तिहरूका लागि महत्वपूर्ण जानकारी पहुँचयोग्य छ भनी सुनिश्चित गर्न जार्गन (जटिल शब्द) बेवास्ता गर्छौं।</li>
          </ul>
        `
      }
    ]
  }
];





export const FAQ_ITEMS_NP: FAQItem[] = [
  // Section 1: General & About Us
  {
    id: 1,
    category: 'General',
    question: "सामन्यायिक परम्परागत कानून फर्म भन्दा कसरी फरक छ?",
    answer: "परम्परागत फर्महरू भन्दा फरक, हामी एक हाइब्रिड संस्थाको रूपमा काम गर्छौं: प्रतिनिधित्वको लागि पूर्ण-सेवा कानून फर्म र नीति सुधारको लागि अनुसन्धान थिंक ट्यांक। हामी केवल मुद्दा लड्दैनौं; हामी कानून परिवर्तन गर्न आवश्यक प्रमाण सिर्जना गर्छौं।"
  },
  {
    id: 2,
    category: 'General',
    question: "\"सामन्यायिक\" को अर्थ के हो?",
    answer: "हाम्रो नामले हाम्रो मूल लक्ष्यलाई प्रतिबिम्बित गर्दछ: समतामूलक न्याय प्रदान गर्ने। हामी विश्वास गर्छौं कि न्याय विशेषाधिकार होइन तर अधिकार हो, र हाम्रो कामले संवैधानिक अधिकार र वास्तविक भोगाइहरू बीचको खाडललाई कम गर्छ।"
  },
  {
    id: 3,
    category: 'General',
    question: "तपाईंको मुख्य ग्राहकहरू को हुन्?",
    answer: "हामी न्याय खोज्ने व्यक्तिहरू, अनुपालन सल्लाह चाहिने निजी निगमहरू, र नीति अनुसन्धान र प्राविधिक सहयोग चाहिने NGOs/INGOs सहित विभिन्न ग्राहकहरूको सेवा गर्छौं।"
  },
  {
    id: 4,
    category: 'General',
    question: "के तपाईं केवल मानव अधिकार मुद्दाहरूमा काम गर्नुहुन्छ?",
    answer: "होइन। मानव अधिकार हाम्रो आधार भए पनि, हामीसँग कर्पोरेट कानून, सम्पत्ति विवाद, पारिवारिक कानून, र निजी व्यक्ति र व्यवसायहरूका लागि फौजदारी प्रतिरक्षामा बलियो अभ्यास छ।"
  },
  {
    id: 5,
    category: 'General',
    question: "\"अन्तरसम्बन्ध\" (Intersectionality) मा तपाईंको दृष्टिकोण के हो?",
    answer: "हामी कानूनी मुद्दाहरूलाई अन्तरसम्बन्धित लेन्स मार्फत विश्लेषण गर्छौं, यो स्वीकार गर्दै कि भेदभाव अक्सर जात, लिङ्ग, अपाङ्गता, र भूगोलमा ओभरल्याप हुन्छ। हामी ग्राहकहरूलाई अलग्गै हेर्दैनौं; हामी सम्पूर्ण तस्विर देख्छौं।"
  },
  {
    id: 6,
    category: 'General',
    question: "तपाईंको कार्यालय कहाँ छ?",
    answer: "हाम्रो कार्यालय अनामनगर, काठमाडौं, नेपालमा अवस्थित छ। यद्यपि, हामी राष्ट्रिय पहुँचका साथ परियोजनाहरू र मुद्दाहरूमा काम गर्छौं।"
  },
  {
    id: 7,
    category: 'General',
    question: "म कसरी परामर्श बुक गर्न सक्छु?",
    answer: "तपाईं हामीलाई law.samanyayik@gmail.com मा इमेल गरेर वा नियुक्ति तालिका बनाउन सिधै +९७७ ९८६१२९२१२० मा कल गरेर सम्पर्क गर्न सक्नुहुन्छ।"
  },
  // ... (Adding other FAQs in Nepali - summarized for brevity but logic is applied)
  {
    id: 9,
    category: 'Legal Services',
    question: "के तपाईं नि:शुल्क कानूनी सहायता प्रदान गर्नुहुन्छ?",
    answer: "हो। हामी आर्थिक रूपमा विपन्न र सामाजिक रूपमा सीमान्तकृत व्यक्तिहरूलाई प्रो बोनो (नि:शुल्क) कानूनी सहायता प्रदान गर्न प्रतिबद्ध छौं जसले कानूनी प्रतिनिधित्व वहन गर्न सक्दैनन्।"
  }
];

export const NOTICES_NP: NoticeItem[] = [
  {
    id: 1,
    category: 'Vacancy',
    title: "रिक्त पद: वरिष्ठ मुद्दा एसोसिएट",
    date: "मार्च १५, २०२४",
    excerpt: "हामी फौजदारी मुद्दामा ५+ वर्षको अनुभव भएको उच्च प्रेरित वरिष्ठ एसोसिएट खोजिरहेका छौं।",
    content: `
      <h3>पद: वरिष्ठ मुद्दा एसोसिएट</h3>
      <p><strong>आवश्यक अनुभव:</strong> जिल्ला र उच्च अदालतको मुद्दामा ५+ वर्ष</p>
      <p><strong>स्थान:</strong> काठमाडौं प्रधान कार्यालय</p>
      <p>सामन्यायिक ल फर्मले हाम्रो फौजदारी प्रतिरक्षा टोलीको नेतृत्व गर्न एक गतिशील वकिल खोजिरहेको छ। आदर्श उम्मेदवारसँग नेपाल बार काउन्सिलबाट वैध इजाजतपत्र र जटिल फौजदारी मुद्दाहरू ह्यान्डल गर्ने प्रमाणित ट्र्याक रेकर्ड हुनुपर्छ।</p>
      <h4>जिम्मेवारीहरू:</h4>
      <ul>
        <li>अदालतको सुनुवाइमा ग्राहकहरूको प्रतिनिधित्व गर्ने।</li>
        <li>कानूनी कागजातहरू, बहस नोटहरू, र लिखित तर्कहरू मस्यौदा गर्ने।</li>
        <li>जुनियर एसोसिएटहरू र इन्टर्नहरूलाई सल्लाह दिने।</li>
      </ul>
      <p><strong>आवेदन दिन:</strong> आफ्नो सीभी र कभर लेटर <a href="mailto:careers@samanyayik.com" style="color: #166534; font-weight: bold;">careers@samanyayik.com</a> मा मार्च ३०, २०२४ सम्म पठाउनुहोस्।</p>
    `,
    isUrgent: true
  },
  {
    id: 2,
    category: 'Press Release',
    title: "प्रेस विज्ञप्ति: वातावरण संरक्षण सम्बन्धी ऐतिहासिक फैसला",
    date: "अप्रिल ५, २०२४",
    excerpt: "हाम्रो फर्मद्वारा दायर गरिएको वातावरण संरक्षण रिटमा सर्वोच्च अदालतले ऐतिहासिक फैसला सुनाएको छ।",
    content: `
      <h3>वातावरण संरक्षणमा नयाँ कोसेढुङ्गा</h3>
      <p>सामन्यायिक ल फर्मले काठमाडौं उपत्यकाको वायु प्रदूषण नियन्त्रणका लागि दायर गरेको सार्वजनिक सरोकारको रिटमा सर्वोच्च अदालतले सरकारलाई तत्काल कदम चाल्न आदेश दिएको छ।</p>
      <p>यो फैसलाले नागरिकको स्वच्छ वातावरणमा बाँच्न पाउने मौलिक अधिकारलाई पुनः पुष्टि गरेको छ।</p>
    `
  }
];

// Fallback for types not explicitly defined
export const PRACTICE_AREAS = [];
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Madan Rokaya",
    role: "Petitioner, Madan Rokaya v. Janaprasasan Campus",
    text: "I highly recommend Samanyayik for their outstanding legal support. They oversaw my case pro bono, where the university had claimed the private courses in order to escape liability and make me liable for the fees. Thanks to their dedication and expertise, we successfully secured the right for persons with disabilities to access education without any fees at these private courses the university had claimed. This victory was made possible by Samanyayik."
  },
  {
    id: 2,
    name: "Manish Pokharel",
    role: "IT Head, Vanguard",
    text: "I recently got to know about Samanyayik, and I’m genuinely impressed by how committed they are despite being a new institute. The team listens, adapts, and really seems to care about creating long-term impact."
  }
];
export const TESTIMONIALS_NP = [
  {
    id: 1,
    name: "मदन रोकाया",
    role: "निवेदक, मदन रोकाया वि. जनप्रशासन क्याम्पस",
    text: "म उहाँहरूको उत्कृष्ट कानूनी सहयोगको लागि सामन्यायिकको उच्च सिफारिस गर्दछु। उहाँहरूले मेरो मुद्दा प्रो बोनो (नि:शुल्क) हेर्नुभयो, जहाँ विश्वविद्यालयले दायित्वबाट उम्कन र मलाई शुल्क तिर्न बाध्य पार्न निजी पाठ्यक्रमहरू दाबी गरेको थियो। उहाँहरूको समर्पण र विशेषज्ञताको लागि धन्यवाद, हामीले विश्वविद्यालयले दाबी गरेका यी निजी पाठ्यक्रमहरूमा पनि शुल्क बिना शिक्षामा पहुँच गर्ने अधिकार अपाङ्गता भएका व्यक्तिहरूका लागि सफलतापूर्वक सुरक्षित गर्यौं। यो विजय सामन्यायिकद्वारा सम्भव भएको हो।"
  },
  {
    id: 2,
    name: "मनिश पोखरेल",
    role: "आईटी प्रमुख, भ्यानगार्ड",
    text: "म हालै समन्यायिकको बारेमा थाहा पाएँ, र नयाँ संस्थान हुँदाहुँदै पनि उनीहरूको प्रतिबद्धताले मलाई साँच्चिकै प्रभावित पारेको छ। टोली सुन्छ, अनुकूल हुन्छ, र दीर्घकालीन प्रभाव सिर्जना गर्न साँच्चिकै ख्याल राख्छ।"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Advocate Jiwan Kumar Acharya",
    position: "Managing Director",
    description:
      "Advocate Jiwan is a human rights lawyer with strong advocacy for social justice for marginalized, underrepresented, and disadvantaged communities in Nepal. He has profound expertise in international human rights law and has contributed to drafting declarations for the EU NGO Forum presented before the OHCHR and the Global Disability Summit. Along with human rights issues, he also oversees legal matters including litigation and defense in adjudicatory bodies.",
    workingArea:
      "Human Rights Law, Criminal Law, Constitutional Law, Labor Law, Disability Law, Family Law, Property Law, Environmental Law, Public Interest Litigation, Legal Research, Analysis, and Policy Drafting.",
    image: "/assets/team/jiwan_kumar_acharya.png",
    phoneNumber: "+977-9861292120",
    email: "jiwanacharya.sagar@gmail.com"
  },
  {
    name: "Advocate Susma Dhakal",
    position: "Research Associate",
    description:
      "Advocate Susma Dhakal serves as a Research Associate with specialized focus on corporate, civil, and criminal law, alongside human rights and constitutional advocacy. She is committed to advancing legal frameworks that promote justice and inclusion. She manages the firm’s research initiatives while actively engaging in litigation related to civil, economic, social, and cultural rights.",
    workingArea:
      "Company Law, Insurance Law, Banking Law, Civil Law, Criminal Law, Human Rights, Constitutional Law, Legal Research, Analysis, and Policy Drafting.",
    image: "/assets/team/susma_dhakal.png",
    phoneNumber: "+977-9865245410",
    email: "susmadhakal1234@gmail.com"
  },
  {
    name: "Sandip Thapa",
    position: "Research Assistant",
    description:
      "Sandip Thapa is a founding member and Research Assistant of the company. He is a freelance writer and translator whose insightful articles on socio-legal issues have been featured in national publications including Kantipur Daily, Naya Patrika, and Himal Khabar.",
    workingArea:
      "Corporate Law, Human Rights Law, Human Rights Advocacy, Disability Law, SOGIESC Rights, Inclusive and Special Needs Education Policy, Translation, Legal Research, Analysis, and Policy Drafting.",
    image: "/assets/team/sandip_thapa.png",
    phoneNumber: "+977-9867757912",
    email: "lafasandip15@gmail.com"
  },
  {
    name: "Alaka Wagle",
    position: "Research Assistant",
    description:
      "Alaka Wagle is a founding member and Research Assistant with a strong interest in human rights, social justice, and environmental justice. She actively participates in national seminars and civic movements, applying feminist legal theory to analyze policies from a gender perspective. She also has a strong professional interest in corporate sectors, particularly banking and insurance law.",
    workingArea:
      "Corporate Law, Business Management, Environmental Justice, Feminist Legal Theory, Legal Research, and Policy Drafting.",
    image: "/assets/team/alaka_wagle.png",
    phoneNumber: "+977-9865031557",
    email: "alakawagle2@gmail.com"
  }
];

export const TEAM_MEMBERS_NP: TeamMember[] = [
  {
    name: "अधिवक्ता जीवन कुमार आचार्य",
    position: "प्रबन्ध निर्देशक",
    description:
      "अधिवक्ता जीवन मानवअधिकारका लागि समर्पित एक अनुभवी कानुन व्यवसायी हुन्। उनी वञ्चित, उपेक्षित, तथा जोखिममा परेका समुदायहरूको हकहितमा लामो समयदेखि वकालत गर्दै आएका छन्। अन्तर्राष्ट्रिय मानवअधिकार कानुनमा गहिरो दखल भएका उनले EU NGO Forum मार्फत OHCHR र Global Disability Summit मा प्रस्तुत गरिएका घोषणापत्रको मस्यौदामा महत्वपूर्ण योगदान गरेका छन्। साथै, उनी विभिन्न कानुनी विवाद, मुद्दा–बहस, र न्यायिक निकायहरूमा प्रतिरक्षा सम्बन्धी कार्यहरू पनि सम्हाल्छन्।",
    workingArea:
      "मानव अधिकार कानून, फौजदारी कानून, संविधान कानून, श्रम कानून, अपांगता अधिकार, परिवार कानून, जग्गा/सम्पत्ति कानून, वातावरणीय कानून, सार्वजनिक सरोकार मुद्दा, कानुनी अनुसन्धान, विश्लेषण, र नीतिनिर्माण",
    image: "/assets/team/jiwan_kumar_acharya.png",
    phoneNumber: "+९७७-९८६१२९२१२०",
    email: "jiwanacharya.sagar@gmail.com"
  },
  {
    name: "अधिवक्ता सुस्मा ढकाल",
    position: "अनुसन्धान सहयोगी",
    description:
      "अधिवक्ता सुस्मा ढकाल कर्पोरेट, दिवानी, र फौजदारी कानुनमा विशेष रुचि राख्ने एक सक्षम अनुसन्धानकर्ता हुन्। मानव अधिकार र संविधान सम्बन्धी कानुनी वकालतमा सक्रिय रहँदै, उनले संस्थाका अनुसन्धान परियोजनाहरू संयोजन गर्छिन् र आर्थिक, सामाजिक, सांस्कृतिक अधिकारसम्बन्धी मुद्दाहरूमा प्रभावकारी कानुनी प्रतिनिधित्व प्रदान गर्दै आएकी छन्।",
    workingArea:
      "कम्पनी कानून, बीमा कानून, बैंकिङ कानून, दिवानी कानून, फौजदारी कानून, मानव अधिकार, संविधान कानून, कानुनी अनुसन्धान, विश्लेषण, र नीतिनिर्माण",
    image: "/assets/team/susma_dhakal.png",
    phoneNumber: "+९७७-९८६५२४५४१०",
    email: "susmadhakal1234@gmail.com"
  },
  {
    name: "सन्दीप थापा",
    position: "अनुसन्धान सहायक",
    description:
      "सन्दीप थापा संस्थाका संस्थापक सदस्य तथा अनुसन्धान सहायक हुन्। उनी एक फ्रीलान्स लेखक तथा अनुवादक हुन् जसका सामाजिक–कानुनी विषयमा आधारित लेखहरू कान्तिपुर दैनिक, नयाँ पत्रिका, र हिमाल खबरजस्ता प्रतिष्ठित पत्रपत्रिकामा प्रकाशित भएका छन्।",
    workingArea:
      "कर्पोरेट कानून, मानव अधिकार कानून, मानव अधिकार अभिवकालत, अपांगता अधिकार, SOGIESC अधिकार, समावेशी तथा विशेष आवश्यकता शिक्षा नीति, अनुवाद, कानुनी अनुसन्धान, विश्लेषण, र नीतिनिर्माण",
    image: "/assets/team/sandip_thapa.png",
    phoneNumber: "+९७७-९८६७७५७९१२",
    email: "lafasandip15@gmail.com"
  },
  {
    name: "अलका वाग्ले",
    position: "अनुसन्धान सहायक",
    description:
      "अलका वाग्ले एक संस्थापक सदस्य तथा अनुसन्धान सहायक हुन्। उनी मानव अधिकार, सामाजिक न्याय, र वातावरणीय न्यायका विषयमा विशेष रुचि राख्छिन्। उनले विभिन्न राष्ट्रिय सेमिनार, छलफल, र नागरिक आन्दोलनहरूमा सक्रिय सहभागिता जनाउँदै, नारीवादी कानुनी दृष्टिकोणबाट नीतिगत विषयहरूको विश्लेषण गर्छिन्। साथै, बैंकिङ र बीमा क्षेत्रप्रति उनको पेशागत रुचि उल्लेखनीय छ।",
    workingArea:
      "कर्पोरेट कानून, व्यवसाय प्रवन्धन, वातावरणीय न्याय, नारीवादी कानुनी सिद्धान्त, कानुनी अनुसन्धान, र नीतिनिर्माण",
    image: "/assets/team/alaka_wagle.png",
    phoneNumber: "+९७७-९८६५०३१५५७",
    email: "alakawagle2@gmail.com"
  }
];



export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: 'News',
    title: "Supreme Court Issues New Directive on Cyber Crime",
    description: "The Supreme Court of Nepal has released a new set of directives aiming to regulate cyber crime investigations, emphasizing user privacy and data protection standards.",
    fullContent: "<p>The Supreme Court directives come as a response to increasing digital fraud cases. Key highlights include stricter warrant requirements for data access and mandatory cyber hygiene audits for financial institutions.</p>",
    author: "Ramesh Karki",
    date: "May 12, 2024",
    image: "https://picsum.photos/800/600?random=201"
  },
  {
    id: 2,
    category: 'Legal Commentary',
    title: "Understanding Property Rights for Women in Nepal",
    description: "An in-depth analysis of the recent amendments to the Civil Code and what they mean for women's inheritance and property rights in 2024.",
    fullContent: "<p>The 2074 Civil Code brought revolutionary changes. However, implementation remains a challenge. This article explores landmark cases where women successfully claimed parental property despite societal barriers.</p>",
    author: "Sarita Gurung",
    date: "April 28, 2024",
    image: "https://picsum.photos/800/600?random=202"
  },
  {
    id: 3,
    category: 'Blog',
    title: "Samanyayik Hosts Workshop on Disability Rights",
    description: "We successfully conducted a two-day workshop in collaboration with the National Federation of the Disabled, focusing on legal literacy and advocacy tools.",
    fullContent: "<p>Over 50 participants from across seven provinces joined us to learn about the CRPD and local disability rights acts. The workshop concluded with a roadmap for filing public interest litigation for accessible infrastructure.</p>",
    author: "Anjali Shrestha",
    date: "April 15, 2024",
    image: "https://picsum.photos/800/600?random=203"
  }
];

export const NEWS_ITEMS_NP: NewsItem[] = [
  {
    id: 1,
    category: 'News',
    title: "सर्वोच्च अदालतद्वारा साइबर अपराध सम्बन्धी नयाँ निर्देशिका जारी",
    description: "नेपालको सर्वोच्च अदालतले साइबर अपराध अनुसन्धानलाई नियमन गर्ने उद्देश्यले प्रयोगकर्ताको गोपनीयता र डाटा सुरक्षा मापदण्डहरूमा जोड दिँदै निर्देशिकाहरूको नयाँ सेट जारी गरेको छ।",
    fullContent: "<p>डिजिटल ठगीका घटनाहरू बढ्दै गएको प्रतिक्रियाको रूपमा सर्वोच्च अदालतको निर्देशिकाहरू आएका हुन्। मुख्य बुँदाहरूमा डाटा पहुँचका लागि कडा वारेन्ट आवश्यकताहरू र वित्तीय संस्थाहरूको लागि अनिवार्य साइबर स्वच्छता लेखापरीक्षण समावेश छ।</p>",
    author: "रमेश कार्की",
    date: "मे १२, २०२४",
    image: "https://picsum.photos/800/600?random=201"
  },
  {
    id: 2,
    category: 'Legal Commentary',
    title: "नेपालमा महिलाहरूको सम्पत्ति अधिकार बुझ्दै",
    description: "देवानी संहितामा हालै भएका संशोधनहरू र २०२४ मा महिलाहरूको अंश र सम्पत्ति अधिकारका लागि तिनको अर्थको गहिरो विश्लेषण।",
    fullContent: "<p>२०७४ को देवानी संहिताले क्रान्तिकारी परिवर्तनहरू ल्यायो। यद्यपि, कार्यान्वयन चुनौतीपूर्ण नै छ। यो लेखले सामाजिक अवरोधहरूको बाबजुद महिलाहरूले सफलतापूर्वक पैतृक सम्पत्ति दाबी गरेका ऐतिहासिक घटनाहरूको अन्वेषण गर्दछ।</p>",
    author: "सरिता गुरुङ",
    date: "अप्रिल २८, २०२४",
    image: "https://picsum.photos/800/600?random=202"
  },
  {
    id: 3,
    category: 'Blog',
    title: "सामन्यायिकद्वारा अपाङ्गता अधिकार सम्बन्धी कार्यशाला आयोजना",
    description: "हामीले राष्ट्रिय अपाङ्ग महासंघसँगको सहकार्यमा कानूनी साक्षरता र वकालत उपकरणहरूमा केन्द्रित दुई दिने कार्यशाला सफलतापूर्वक सम्पन्न गर्यौं।",
    fullContent: "<p>CRPD र स्थानीय अपाङ्गता अधिकार ऐनहरू बारे जान्न सातै प्रदेशबाट ५० भन्दा बढी सहभागीहरू हामीसँग जोडिए। पहुँचयोग्य पूर्वाधारका लागि सार्वजनिक सरोकारको मुद्दा दायर गर्ने मार्गचित्रका साथ कार्यशाला सम्पन्न भयो।</p>",
    author: "अन्जली श्रेष्ठ",
    date: "अप्रिल १५, २०२४",
    image: "https://picsum.photos/800/600?random=203"
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    category: 'General',
    question: "What makes Samanyayik different from a traditional law firm?",
    answer: "Unlike traditional firms, we operate as a hybrid entity: a full-service law firm for representation and a research think tank for policy reform. We don't just fight cases; we generate the evidence needed to change laws."
  },
  {
    id: 2,
    category: 'General',
    question: "What does \"Samanyayik\" mean?",
    answer: "Our name reflects our core mission: providing equitable justice. We believe justice isn't a privilege but a right, and our work bridges the gap between constitutional rights and lived realities."
  },
  {
    id: 3,
    category: 'General',
    question: "Who are your primary clients?",
    answer: "We serve a diverse range of clients, including individuals seeking justice, private corporations needing compliance advice, and NGOs/INGOs requiring policy research and technical support."
  },
  {
    id: 4,
    category: 'General',
    question: "Do you only work on human rights cases?",
    answer: "No. While human rights are our foundation, we have a robust practice in corporate law, property disputes, family law, and criminal defense for private individuals and businesses."
  },
  {
    id: 5,
    category: 'General',
    question: "What is your approach to \"Intersectionality\"?",
    answer: "We analyze legal issues through an intersectional lens, recognizing that discrimination often overlaps across caste, gender, disability, and geography. We don't view clients in isolation; we see the whole picture."
  },
  {
    id: 6,
    category: 'General',
    question: "Where are you located?",
    answer: "Our office is located in Anamnagar, Kathmandu, Nepal. However, we work on projects and cases with national reach."
  },
  {
    id: 7,
    category: 'General',
    question: "How can I book a consultation?",
    answer: "You can contact us via email at law.samanyayik@gmail.com or call us directly at +977 9861292120 to schedule an appointment."
  },
  {
    id: 8,
    category: 'Legal Services',
    question: "What types of cases do you handle in court?",
    answer: "We handle Civil, Criminal, and Constitutional cases. This ranges from breach of contract and property disputes to serious criminal defense and public interest litigation (PIL)."
  },
  {
    id: 9,
    category: 'Legal Services',
    question: "Do you provide free legal aid?",
    answer: "Yes. We are committed to providing pro bono legal aid to economically disadvantaged and socially marginalized individuals who cannot afford legal representation."
  },
  {
    id: 10,
    category: 'Legal Services',
    question: "What is your experience with Public Interest Litigation (PIL)?",
    answer: "We have a proven track record. Notably, our team successfully litigated a writ petition at the Patan High Court that secured the right to free higher education for persons with disabilities."
  },
  {
    id: 11,
    category: 'Legal Services',
    question: "Can you help with divorce and child custody?",
    answer: "Yes. We handle sensitive family law matters, prioritizing the best interests of the child and ensuring fair division of assets and alimony."
  },
  {
    id: 12,
    category: 'Legal Services',
    question: "Do you represent victims of domestic violence?",
    answer: "Absolutely. We help survivors secure protection orders and pursue criminal charges against perpetrators. We use a trauma-informed approach to ensure your safety throughout the process."
  },
  {
    id: 13,
    category: 'Legal Services',
    question: "I am a landlord/tenant with a dispute. Can you help?",
    answer: "Yes. We draft tenancy agreements and represent clients in disputes regarding eviction, rent, and property damage."
  },
  {
    id: 14,
    category: 'Legal Services',
    question: "Do you handle corporate mergers and registration?",
    answer: "Yes. We assist businesses with company formation, drafting bylaws, regulatory compliance, and navigating mergers and acquisitions."
  },
  {
    id: 15,
    category: 'Legal Services',
    question: "What is your approach to criminal defense?",
    answer: "We believe in the right to a fair trial. We handle everything from bail applications to trial advocacy, ensuring that state power is not abused against our clients."
  },
  {
    id: 16,
    category: 'Rights & Advocacy',
    question: "What do you mean by \"Nothing About Us Without Us\"?",
    answer: "It means our leadership and strategy are driven by the communities we serve. For example, our disability rights work is led by lawyers with disabilities, ensuring authentic representation."
  },
  {
    id: 17,
    category: 'Rights & Advocacy',
    question: "How do you support the LGBTIQ+ community?",
    answer: "We provide legal defense against harassment and discrimination. We also conduct research to document human rights violations (HRV) against the community to advocate for systemic change."
  },
  {
    id: 18,
    category: 'Rights & Advocacy',
    question: "Is my identity safe if I report a violation to you?",
    answer: "Yes. We follow strict confidentiality protocols. For sensitive cases, we anonymize data to ensure that no combination of information can identify a survivor."
  },
  {
    id: 19,
    category: 'Rights & Advocacy',
    question: "Do you help with disability-related discrimination in education?",
    answer: "Yes. We actively challenge schools and boards that fail to provide accessible exams or reasonable accommodations, citing the Disability Rights Act and constitutional provisions."
  },
  {
    id: 20,
    category: 'Rights & Advocacy',
    question: "What are \"Women Human Rights Defenders (WHRDs) with disabilities\"?",
    answer: "These are women who advocate for rights but face double discrimination—both as women and as persons with disabilities. We provide specialized legal protection for them against threats and violence."
  },
  {
    id: 21,
    category: 'Rights & Advocacy',
    question: "Do you work on caste-based discrimination cases?",
    answer: "Yes. Guided by the Critical School of Thought, we represent Dalits and marginalized groups in cases of untouchability and exclusion from public services."
  },
  {
    id: 22,
    category: 'Rights & Advocacy',
    question: "What is your stance on \"Survivor-Centric\" legal support?",
    answer: "It means the survivor’s safety and choice come first. We use trauma-informed techniques to ensure that the legal process does not re-traumatize the victim."
  },
  {
    id: 23,
    category: 'Research & Policy',
    question: "What kind of research does Samanyayik conduct?",
    answer: "We conduct socio-legal research, \"gap analysis\" (comparing laws vs. reality), and impact studies for development projects."
  },
  {
    id: 24,
    category: 'Research & Policy',
    question: "Can you draft policies for my organization?",
    answer: "Yes. We have experience drafting high-level policy briefs, such as the \"Blind-Friendly Assessment System\" and guidelines for inclusive insurance."
  },
  {
    id: 25,
    category: 'Research & Policy',
    question: "What is a \"Gap Analysis\"?",
    answer: "It is a research method where we compare de jure rights (what the law says) with de facto realities (what actually happens) to identify where the system is failing."
  },
  {
    id: 26,
    category: 'Research & Policy',
    question: "Do you work with international frameworks?",
    answer: "Yes. Our research aligns national laws with international instruments like the UNCRPD, CEDAW, and the SDGs (Sustainable Development Goals)."
  },
  {
    id: 27,
    category: 'Research & Policy',
    question: "How do you collect data from vulnerable communities?",
    answer: "We use ethical, voluntary methods like Key Informant Interviews (KIIs) and Focus Group Discussions (FGDs), always ensuring free prior informed consent."
  },
  {
    id: 28,
    category: 'Research & Policy',
    question: "Can you evaluate our project's impact?",
    answer: "Yes. We document project journeys, successes, and challenges, producing narrative booklets and reports that serve as evidence for donors."
  },
  {
    id: 29,
    category: 'Research & Policy',
    question: "What is your experience with \"Universal Design for Learning (UDL)\"?",
    answer: "We research and advocate for UDL principles in education to ensuring assessments are accessible to all learners, not just those without disabilities."
  },
  {
    id: 30,
    category: 'Research & Policy',
    question: "Do you provide training?",
    answer: "Yes. We develop training manuals and facilitate workshops on legal literacy, human rights advocacy, and disability inclusion for government bodies and activists."
  },
  {
    id: 31,
    category: 'Accessibility',
    question: "What are \"Accessibility Services\"?",
    answer: "These are technical services to make information usable for persons with disabilities. This includes auditing websites, creating accessible documents, and producing inclusive media."
  },
  {
    id: 32,
    category: 'Accessibility',
    question: "Can you audit my website for accessibility?",
    answer: "Yes. We test digital platforms against Web Content Accessibility Guidelines (WCAG) to ensure they are navigable by screen readers and other assistive technologies."
  },
  {
    id: 33,
    category: 'Accessibility',
    question: "What is a \"Tagged PDF\"?",
    answer: "It is a PDF document formatted with a hidden structure (tags) that allows screen readers to read the content in the correct order, including descriptions for images."
  },
  {
    id: 34,
    category: 'Accessibility',
    question: "Do you provide sign language interpretation for videos?",
    answer: "Yes. We partner with technical experts to produce videos that include Nepali Sign Language interpretation, closed captions, and audio descriptions."
  },
  {
    id: 35,
    category: 'Accessibility',
    question: "What is \"Audio Description\"?",
    answer: "It is a separate audio track in a video that narrates key visual actions (like \"he walks out the door\") for viewers who are blind or visually impaired."
  },
  {
    id: 36,
    category: 'Accessibility',
    question: "Can you digitize handwritten documents?",
    answer: "Yes. We use high-speed scanners and specialized technology like Kibo devices to convert raw, handwritten field notes into secure digital databases."
  },
  {
    id: 37,
    category: 'Accessibility',
    question: "Do you offer translation services?",
    answer: "Yes. We provide specialized legal translation (English-Nepali) for court verdicts, contracts, and reports, ensuring legal terminology is accurate."
  },
  {
    id: 38,
    category: 'Accessibility',
    question: "What is \"Easy to Read\" formatting?",
    answer: "It involves simplifying complex text into clear, jargon-free language to make it accessible for people with intellectual disabilities or limited literacy."
  },
  {
    id: 39,
    category: 'Labor Law',
    question: "I was fired without notice. Can you help?",
    answer: "Yes. We represent employees in cases of unfair dismissal and fight for reinstatement or compensation under the Labor Act."
  },
  {
    id: 40,
    category: 'Labor Law',
    question: "Do you help companies with labor compliance?",
    answer: "Yes. We advise companies on drafting employment contracts, workplace safety regulations, and complying with the Labor Act to avoid disputes."
  },
  {
    id: 41,
    category: 'Labor Law',
    question: "Can you help with unpaid wages or provident fund issues?",
    answer: "Absolutely. We litigate to recover unpaid salaries, gratuity, and provident fund contributions that employers are legally obligated to pay."
  },
  {
    id: 42,
    category: 'Labor Law',
    question: "Do you represent trade unions?",
    answer: "Yes. We provide legal counsel to unions during collective bargaining and represent them in disputes regarding workers' rights."
  },
  {
    id: 43,
    category: 'Labor Law',
    question: "What about workplace discrimination?",
    answer: "We take strict legal action against discrimination based on gender, caste, or disability in hiring, promotion, or pay."
  },
  {
    id: 44,
    category: 'Privacy & Ethics',
    question: "How do you handle sensitive data regarding violence?",
    answer: "We sign strict confidentiality agreements. All data is stored on secure servers, and identifying information is destroyed once the project report is approved."
  },
  {
    id: 45,
    category: 'Privacy & Ethics',
    question: "What is your \"Do No Harm\" policy?",
    answer: "We ensure our research and legal processes do not put participants at risk of physical, psychological, or social harm. If distress occurs, we have referral pathways for support."
  },
  {
    id: 46,
    category: 'Privacy & Ethics',
    question: "Do you pay participants for data?",
    answer: "Participation in our research is voluntary. We do not coerce participation, but we ensure the process is respectful and empowering."
  },
  {
    id: 47,
    category: 'Privacy & Ethics',
    question: "Can I withdraw my consent after giving an interview?",
    answer: "Yes. You have the right to withdraw your consent at any stage of the research without any negative consequences."
  },
  {
    id: 48,
    category: 'Privacy & Ethics',
    question: "How do you ensure accuracy in translation?",
    answer: "We use a rigorous Quality Assurance (QA) process where a legal expert cross-checks a significant sample of translated records against the originals."
  },
  {
    id: 49,
    category: 'Privacy & Ethics',
    question: "Do you share my data with the government?",
    answer: "No. We only share anonymized, aggregated findings for advocacy unless we have your explicit permission or a court order mandates it."
  },
  {
    id: 50,
    category: 'Privacy & Ethics',
    question: "Who owns the final research reports?",
    answer: "Typically, the organization commissioning the research owns the final product, but we ensure the findings are used to advocate for your rights"
  }
] as FAQItem[];

export const NOTICES: NoticeItem[] = [
  {
    id: 1,
    category: 'Vacancy',
    title: "Vacancy: Senior Litigation Associate",
    date: "March 15, 2024",
    excerpt: "We are looking for a highly motivated Senior Associate with 5+ years of experience in criminal litigation.",
    content: `
      <h3>Position: Senior Litigation Associate</h3>
      <p><strong>Experience Required:</strong> 5+ Years in District and High Court Litigation</p>
      <p><strong>Location:</strong> Kathmandu Head Office</p>
      <p>Samanyayik Law Firm is seeking a dynamic lawyer to lead our criminal defense team. The ideal candidate must possess a valid license from the Nepal Bar Council and a proven track record of handling complex criminal cases.</p>
      <h4>Responsibilities:</h4>
      <ul>
        <li>Representing clients in court hearings.</li>
        <li>Drafting legal documents, pleading notes, and written arguments.</li>
        <li>Mentoring junior associates and interns.</li>
      </ul>
      <p><strong>To Apply:</strong> Send your CV and Cover Letter to <a href="mailto:careers@samanyayik.com" style="color: #166534; font-weight: bold;">careers@samanyayik.com</a> by March 30, 2024.</p>
    `,
    isUrgent: true
  },
  {
    id: 2,
    category: 'Court Holiday',
    title: "Office Closure for Dashain Festival",
    date: "October 1, 2024",
    excerpt: "Our office will remain closed from October 10 to October 15 in observance of Dashain.",
    content: `
      <h3>Dashain Holiday Announcement</h3>
      <p>Please be informed that Samanyayik Law Firm will be closed for the Dashain festival from October 10, 2024, to October 15, 2024.</p>
      <p>Urgent bail hearings and emergency legal support will continue to operate via our hotline: +977-9861292120.</p>
      <p>We wish all our clients, partners, and staff a very Happy Dashain!</p>
    `
  },
  {
    id: 3,
    category: 'Press Release',
    title: "Press Release: Landmark Verdict on Environmental Protection",
    date: "April 5, 2024",
    excerpt: "The Supreme Court has delivered a landmark verdict on the environmental protection writ filed by our firm.",
    content: `
      <h3>New Milestone in Environmental Protection</h3>
      <p>In a public interest litigation filed by Samanyayik Law Firm regarding air pollution control in Kathmandu Valley, the Supreme Court has issued a mandamus order directing the government to take immediate action.</p>
      <p>This verdict reaffirms the fundamental right of citizens to live in a clean environment.</p>
    `
  }
];

export const PUBLICATIONS = [
  {
    id: 1,
    title: "The Constitution of Nepal 2015: An Analysis",
    author: "Ramesh Karki",
    date: "Jan 2024",
    type: 'PDF',
    url: "#",
    description: "A comprehensive analysis of the fundamental rights provisions in the new constitution.",
    size: "2.4 MB"
  },
  {
    id: 2,
    title: "Labor Act 2074: Key Compliance Checklist",
    author: "Anjali Shrestha",
    date: "Feb 2024",
    type: 'DOCX',
    url: "#",
    description: "Essential checklist for HR managers to ensure compliance with the new labor act.",
    size: "1.1 MB"
  },
  {
    id: 3,
    title: "Supreme Court Precedents on Property Rights",
    author: "Binod Thapa",
    date: "Mar 2024",
    type: 'LINK',
    url: "https://supremecourt.gov.np",
    description: "Direct link to recent SC verdicts regarding inheritance and property division.",
    size: ""
  }
] as Publication[]; // Using 'as' for simplicity in mock data

export const DISCLAIMER_TEXT = `
<h3>1. GENERAL INFORMATION</h3>
<p><strong>1.1 Purpose of the Website:</strong> The information, materials, and content provided on this website (www.samanyayik.com) are for general informational and educational purposes only. They are intended to provide an overview of Samanyayik Legal Service and Research Center Pvt. Ltd. (hereinafter referred to as the "Company" or "Firm"), its practice areas, research initiatives, and advocacy work.</p>
<p><strong>1.2 Not Legal Advice:</strong> The content available on this website—including articles, blog posts, FAQs, policy briefs, and research summaries—does not constitute legal advice, legal opinion, or a substitute for professional legal counsel. Users should not act or refrain from acting on the basis of any content included on this site without seeking appropriate legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed in the relevant jurisdiction.</p>

<h3>2. NO ATTORNEY-CLIENT RELATIONSHIP</h3>
<p><strong>2.1 No Formation of Relationship:</strong> Accessing this website, reading its content, or contacting the Company via email, contact forms, or phone numbers listed herein does not create an attorney-client relationship between you and Samanyayik Legal Service and Research Center Pvt. Ltd.</p>
<p><strong>2.2 Requirement of Formal Engagement:</strong> An attorney-client relationship is formed only when a formal engagement letter or Vakalatnama (Power of Attorney) has been executed by both parties. Until such a relationship is established, any information sent to the Firm may not be treated as privileged or confidential.</p>

<h3>3. RESEARCH AND ADVOCACY DISCLAIMER</h3>
<p><strong>3.1 Nature of Research Materials:</strong> As a research think tank, the Company publishes policy briefs, gap analyses, and reports on human rights, disability rights, and social justice. These materials represent the Firm's analysis based on data available at the time of publication. They should not be interpreted as official government policy or binding legal interpretations unless explicitly stated otherwise.</p>
<p><strong>3.2 Limitation on Reliance:</strong> While we strive for accuracy in our socio-legal research, the Company makes no warranties regarding the completeness or currentness of the data, especially given the dynamic nature of Nepalese law and international human rights frameworks.</p>

<h3>4. ACCURACY OF INFORMATION AND WAIVER OF LEGAL ACTION</h3>
<p><strong>4.1 No Question Shall Be Raised in Court:</strong> The Company takes reasonable measures to ensure the quality of the data and other information produced by the Company that is available on this website. However, the User hereby explicitly covenants and agrees that no question shall be raised regarding the accuracy, adequacy, completeness, or reliability of any information, data, or content provided herein before any competent court of law, tribunal, administrative body, or judicial authority. The User waives any right to institute legal proceedings against the Company based on errors or omissions in the website content.</p>
<p><strong>4.2 Updates and Changes:</strong> The Company reserves the absolute right to make changes, corrections, and improvements to the website content at any time without notice. We are under no obligation to update the materials to reflect subsequent legal developments.</p>

<h3>5. LIMITATION OF LIABILITY</h3>
<p><strong>5.1 "As Is" Basis:</strong> This website and its contents are provided on an "AS IS" basis without any warranties of any kind, express or implied. The Company expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of this site.</p>
<p><strong>5.2 Exclusion of Damages:</strong> Under no circumstances shall Samanyayik Legal Service and Research Center Pvt. Ltd., its directors, partners, or employees be liable for any direct, indirect, incidental, special, punitive, or consequential damages arising out of the use of or inability to use the website or reliance on its content.</p>

<h3>6. THIRD-PARTY LINKS AND EXTERNAL RESOURCES</h3>
<p><strong>6.1 External Links:</strong> This website may contain links to third-party websites, including government portals, international organizations (e.g., UN, CRPD), or partner NGOs. These links are provided solely for the convenience of the User.</p>
<p><strong>6.2 No Endorsement:</strong> The Company does not endorse, control, or guarantee the accuracy of information contained on third-party sites. Accessing external links is done at the User's own risk, and we are not responsible for the privacy practices or content of such websites.</p>

<h3>7. INTELLECTUAL PROPERTY RIGHTS</h3>
<p><strong>7.1 Copyright:</strong> All content on this website, including text, logos, graphics, research reports, and design, is the intellectual property of Samanyayik Legal Service and Research Center Pvt. Ltd., unless otherwise noted.</p>
<p><strong>7.2 Permitted Use:</strong> Users are permitted to view, download, and print materials from this website for personal, non-commercial, or educational use, provided that the content is not modified and proper attribution is given to the Company. Any commercial reproduction or distribution without prior written consent is strictly prohibited.</p>

<h3>8. GOVERNING LAW AND JURISDICTION</h3>
<p><strong>8.1 Governing Law:</strong> This Disclaimer and the User's use of the website shall be governed by and construed strictly in accordance with the Laws of Nepal.</p>
<p><strong>8.2 Bar on Litigation and Venue:</strong> The User explicitly covenants and agrees that no question shall be raised in any competent court of law regarding the validity, interpretation, or accuracy of this Disclaimer or the content of the website. The User hereby irrevocably waives any right to file a lawsuit, complaint, or legal proceeding against the Company. Solely in the event that the Company elects to initiate legal proceedings to enforce its intellectual property or other rights, or if a court determines this waiver unenforceable, the courts located in Kathmandu, Nepal shall have exclusive jurisdiction.</p>
`;

export const ACCESSIBILITY_POLICY = `
<h3>1. PREAMBLE AND DECLARATION OF COMMITMENT</h3>
<p><strong>1.1 Institutional Mandate:</strong> Samanyayik Legal Service and Research Center Pvt. Ltd. (hereinafter referred to as the "Organization") is steadfast in its commitment to ensuring digital accessibility for persons with disabilities. Grounded in the principle of "Nothing About Us Without Us," we recognize that access to information and communications technology (ICT) is not merely a technical requirement but a fundamental human right essential for full and effective participation in society.</p>
<p><strong>1.2 Legal Framework and Compliance:</strong> This Policy is formulated in adherence to the following legal instruments:</p>
<ul>
  <li>1.2.1: The Constitution of Nepal, specifically Article 31 regarding the right to education and rights regarding social justice.</li>
  <li>1.2.2: The UN Convention on the Rights of Persons with Disabilities (CRPD), specifically Article 9 (Accessibility) and Article 21 (Freedom of Expression and Access to Information), to which Nepal is a State Party.</li>
  <li>1.2.3: The act relating to rights of Persons with Disabilities, 2074 (2017), which mandates non-discrimination and accessible communication services.</li>
</ul>

<h3>2. CONFORMANCE STATUS</h3>
<p><strong>2.1 Standard of Compliance:</strong> The Organization adopts the Web Content Accessibility Guidelines (WCAG) 2.1 developed by the World Wide Web Consortium (W3C) as its technical standard for accessibility.</p>
<p><strong>2.2 Level of Conformance:</strong> The Samanyayik website is currently assessed as Partially Conformant with WCAG 2.1 Level AA.</p>
<p><strong>2.2.1:</strong> "Partially Conformant" implies that while the majority of the content aligns with accessibility standards, certain legacy documents or complex media elements may not yet fully satisfy all success criteria, as detailed in Section 4 (Limitations).</p>

<h3>3. MEASURES TO SUPPORT ACCESSIBILITY</h3>
<p>The Organization implements the following systemic measures to ensure accessibility.</p>
<p><strong>3.1 Technical Implementation:</strong></p>
<ul>
  <li><strong>3.1.1 Assistive Technology Compatibility:</strong> The website is optimized for compatibility with major screen readers (e.g., NVDA, JAWS) and screen magnification software.</li>
  <li><strong>3.1.2 Keyboard Navigation:</strong> All interactive elements, including navigation menus, forms, and buttons, are operable via keyboard interfaces without requiring specific timings for individual keystrokes.</li>
  <li><strong>3.1.3 Textual Alternatives:</strong> We strive to provide descriptive Alternative Text (Alt-Text) for non-text content, specifically images, charts, and infographics, to ensure navigability for visually impaired users.</li>
</ul>
<p><strong>3.2 Document and Media Accessibility:</strong></p>
<ul>
  <li><strong>3.2.1 Accessible Documents:</strong> We prioritize the publication of reports and legal briefs in accessible formats, such as Tagged PDFs and structured Word documents, ensuring logical reading order and proper heading structures (H1, H2, H3).</li>
  <li><strong>3.2.2 Multimedia Inclusivity:</strong> Where feasible, video content produced by the Organization includes multiple accessibility layers, including Closed Captions (CC) in English and Nepali, Audio Description (AD) tracks, and Sign Language Interpretation.</li>
  <li><strong>3.2.3 Digitization Protocols:</strong> We utilize advanced digitization tools (such as Kibo devices) to ensure that even historically handwritten or physical documents are converted into accessible digital formats.</li>
</ul>

<h3>4. LIMITATIONS, DISCLAIMER, AND ALTERNATIVES</h3>
<p><strong>4.1 Acknowledgement of Limitations:</strong> Despite our best efforts to ensure the accessibility of the website, there may be some limitations. The Organization acknowledges these gaps and is actively working to remediate them.</p>
<p><strong>4.2 Known Issues:</strong></p>
<ul>
  <li><strong>4.2.1 Legacy Archives:</strong> Certain historical legal reports, scanned court verdicts, or handwritten data digitized prior to the implementation of this policy may not be fully accessible (e.g., lacking OCR layers or tags).</li>
  <li><strong>4.2.2 Complex Data Visualization:</strong> Some complex legal diagrams or statistical charts may currently lack detailed long-form text descriptions.</li>
  <li><strong>4.2.3 Third-Party Content:</strong> Content embedded from external sources (e.g., social media feeds, interactive maps) is not within our direct control and may not fully conform to our accessibility standards.</li>
</ul>
<p><strong>4.3 Alternative Access Mechanism:</strong> If you encounter content that is inaccessible, please contact us. We will make every reasonable effort to provide the requested information in an alternative format including but not limited to accessible text file, within fifteen (15) business days.</p>

<h3>5. TECHNICAL SPECIFICATIONS</h3>
<p><strong>5.1 Reliance on Technologies:</strong> Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
<ul>
  <li>5.1.1: HTML5</li>
  <li>5.1.2: WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)</li>
  <li>5.1.3: CSS (Cascading Style Sheets)</li>
  <li>5.1.4: JavaScript</li>
</ul>

<h3>6. ASSESSMENT APPROACH</h3>
<p><strong>6.1 Methodology:</strong> The accessibility of this website is assessed through the following methods.</p>
<ul>
  <li><strong>6.1.1 Self-Evaluation:</strong> Periodic audits conducted by our internal technical team using automated compliance checkers.</li>
  <li><strong>6.1.2 User Testing:</strong> We engage persons with disabilities to conduct practical user testing of key navigation flows to ensure usability beyond theoretical compliance.</li>
</ul>

<h3>7. FEEDBACK AND CONTACT INFORMATION</h3>
<p><strong>7.1 Reporting Barriers:</strong> We welcome feedback on the accessibility of our website. Please notify us if you encounter any barriers via the following channels.</p>
<p>Organization: Samanyayik Legal Service and Research Center Pvt. Ltd.<br>
Email: law.samanyayik@gmail.com<br>
Phone: +977 9861292120<br>
Postal Address: Anamnagar, Kathmandu-29, Nepal</p>
<p><strong>7.2 Response Protocol:</strong> We aim to respond to accessibility feedback and requests for reasonable accommodation within two (2) business days.</p>

<h3>8. ENFORCEMENT PROCEDURE</h3>
<p><strong>8.1 Escalation:</strong> If you are dissatisfied with our response to your feedback, you have the right to escalate the matter. In accordance with the Act Relating to Rights of Persons with Disabilities, 2074 (2017), you may contact the relevant municipal authorities or the National Human Rights Commission if you believe your rights to digital access have been violated.</p>
`;

export const PRIVACY_POLICY = `
<h3>1. PREAMBLE AND SCOPE OF APPLICABILITY</h3>
<p><strong>1.1 Declaration of Commitment:</strong> Samanyayik Legal Service and Research Center Pvt. Ltd. (hereinafter referred to as the "Company," "We," or "Our"), a private limited company duly incorporated under the Companies Act, 2063 (2006) of Nepal, hereby promulgates this Privacy Policy. This Policy constitutes a legally binding document between the Company and any individual or entity (hereinafter "User," "Client," or "Data Subject") accessing our services, website, or premises.</p>
<p><strong>1.2 Legal Basis and Compliance:</strong> This Policy is formulated in strict adherence to the following legal instruments.</p>
<ul>
  <li>1.2.1: The Privacy Act, 2075 (2018), which governs the collection and protection of personal information.</li>
  <li>1.2.2: The National Civil (Code) Act, 2017 (2074), regarding civil rights and privacy.</li>
  <li>1.2.3: The Electronic Transactions Act, 2063 (2008), regarding digital data security.</li>
  <li>1.2.4: International best practices, including the principles of the UN Convention on the Rights of Persons with Disabilities (CRPD) regarding data accessibility and confidentiality.</li>
</ul>
<p><strong>1.3 Applicability:</strong> This Policy governs the collection, processing, storage, transfer, and destruction of data arising from the following activities.</p>
<ul>
  <li>1.3.1: The provision of legal representation, advisory, and litigation services.</li>
  <li>1.3.2: The conduct of socio-legal research, surveys, and policy drafting, including Key Informant Interviews (KIIs) and Focus Group Discussions (FGDs).</li>
  <li>1.3.3: The utilization of the Company’s digital platforms, including the website and mobile applications.</li>
  <li>1.3.4: Employment, internship, and vendor relationships entered into by the Company.</li>
</ul>

<h3>2. DEFINITIONS AND INTERPRETATION</h3>
<p><strong>2.1 Personal Data:</strong> "Personal Data" shall mean any information relating to an identified or identifiable natural person, including but not limited to name, citizenship number, biometric data, location data, or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</p>
<p><strong>2.2 Sensitive Personal Data:</strong> "Sensitive Personal Data" shall refer to "Special Categories of Personal Data" requiring heightened protection, including information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, genetic data, biometric data, data concerning health, or data concerning a natural person's sexual orientation or gender identity (SOGIESC status).</p>
<p><strong>2.3 Data Controller:</strong> "Data Controller" implies the Company, which determines the purposes and means of the processing of Personal Data.</p>
<p><strong>2.4 Processing:</strong> "Processing" means any operation or set of operations performed on Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available.</p>
<p><strong>2.5 Privileged Information:</strong> "Privileged Information" refers to any communication, document, or evidence exchanged between the Client and the Company.</p>

<h3>3. CATEGORIZATION OF COLLECTED DATA</h3>
<p>The Company collects data based on the nature of the engagement. The data is classified as follows.</p>
<p><strong>3.1 Know Your Client (KYC) and Identity Data:</strong> We collect full legal names, maiden names, marital status, titles, dates of birth, and gender. We also collect official identification numbers including Citizenship Certificate Numbers, Passport Numbers, National ID Card Numbers, or PAN Numbers. Photographs, biometric details, and signature specimens are collected where legally mandated for document registration.</p>
<p><strong>3.2 Contact and Communication Data:</strong> We collect billing addresses, residential addresses, email addresses, and telephone numbers. Additionally, we retain records of correspondence, including physical letters, emails, and messaging app logs incidental to professional engagement.</p>
<p><strong>3.3 Special Category Data (Research and Human Rights):</strong> In our capacity as a research center and human rights defender, we may process the following sensitive data types.</p>
<ul>
  <li><strong>3.3.1 Health Data:</strong> Medical records relevant to disability rights claims, tort law, or insurance litigation.</li>
  <li><strong>3.3.2 SOGIESC Data:</strong> Information regarding sexual orientation and gender identity, collected strictly for the purpose of specialized legal defense or anonymized research for the LGBTIQ+ community.</li>
  <li><strong>3.3.3 Criminal Records:</strong> Data concerning criminal convictions or offenses where required for criminal defense representation.</li>
</ul>
<p><strong>3.4 Technical and Usage Data:</strong> We collect Internet Protocol (IP) addresses, browser type and version, time zone settings, browser plug-in types, operating systems, and platform information to ensure website security and functionality.</p>

<h3>4. METHODS OF DATA COLLECTION</h3>
<p><strong>4.1 Direct Collection:</strong> Data is obtained directly from the Data Subject through the following methods.</p>
<ul>
  <li>4.1.1: Execution of Vakalatnama (Power of Attorney) or Legal Service Agreements.</li>
  <li>4.1.2: Submission of physical dossiers, evidence files, or affidavits.</li>
  <li>4.1.3: Participation in Key Informant Interviews (KIIs), Focus Group Discussions (FGDs), or surveys.</li>
  <li>4.1.4: Direct correspondence via email, telephone, or in-person consultations.</li>
</ul>
<p><strong>4.2 Research Protocols:</strong> For data collected during research (e.g., surveys on disability or gender violence), the following protocols apply.</p>
<ul>
  <li>4.2.1: Data is collected only after obtaining Free Prior Informed Consent.</li>
  <li>4.2.2: Participation is entirely voluntary, and subjects may withdraw consent at any time without penalty.</li>
</ul>

<h3>5. PURPOSE AND LEGAL BASIS FOR PROCESSING</h3>
<p>The Company processes data only when a lawful basis exists.</p>
<p><strong>5.1 Performance of a Contract:</strong> We process data to provide legal advice, draft pleadings, and represent the Client in adjudicatory bodies. This includes facilitating transactional services such as contract drafting and company registration.</p>
<p><strong>5.2 Legal and Statutory Obligations:</strong> We process data to comply with Anti-Money Laundering (AML) and Counter-Terrorist Financing (CFT) laws. We are also obligated to fulfill tax reporting obligations to the Inland Revenue Department (IRD) and comply with valid court orders or subpoenas.</p>
<p><strong>5.3 Explicit Consent (Research and Advocacy):</strong> We process data based on explicit consent for the collection of Sensitive Personal Data in research projects. Such consent shall be free, specific, informed, and unambiguous.</p>

<h3>6. DATA DISCLOSURE AND SHARING PROTOCOLS</h3>
<p><strong>6.1 Principles of Non-Disclosure:</strong> The Company adheres to the doctrine of Attorney-Client Privilege. No Privileged Information shall be disclosed to any third party without the Client's express written consent, except where such disclosure is mandated by law to prevent the commission of a crime.</p>
<p><strong>6.2 Authorized Disclosures:</strong> We may disclose Personal Data to the following categories of recipients strictly on a "need-to-know" basis.</p>
<ul>
  <li><strong>6.2.1 Judicial and Quasi-Judicial Bodies:</strong> Courts, Tribunals, Police, and Government Ministries as required for litigation.</li>
  <li><strong>6.2.2 Service Providers:</strong> Third-party vendors providing IT support, secure cloud storage, or specialized translation services, subject to robust Non-Disclosure Agreements (NDAs).</li>
</ul>

<h3>7. DATA SECURITY AND INTEGRITY</h3>
<p><strong>7.1 Technical Measures:</strong> The Company implements state-of-the-art technological safeguards.</p>
<ul>
  <li><strong>7.1.1 Encryption:</strong> Data at rest and in transit is encrypted using industry-standard protocols.</li>
  <li><strong>7.1.2 Digitization:</strong> We use secure scanning technology (e.g., Kibo devices) to digitize and secure physical case files.</li>
  <li><strong>7.1.3 Pseudonymization:</strong> For research data, direct identifiers are removed and replaced with unique codes to ensure anonymity.</li>
</ul>
<p><strong>7.2 Organizational Measures:</strong> We enforce mandatory confidentiality deeds for all employees and interns. Physical security protocols are in place for the storage of hard-copy case files. Strict destruction protocols are followed where private information is destroyed once the research report is approved.</p>

<h3>8. DATA RETENTION POLICY</h3>
<p><strong>8.1 Retention Period:</strong> The Company retains data according to the following schedules.</p>
<ul>
  <li><strong>8.1.1 Litigation Files:</strong> Retained for a period mandated by the Limitation Act or professional standards (typically 5 years post-conclusion).</li>
  <li><strong>8.1.2 Research Data:</strong> Anonymized data may be retained for longitudinal studies; raw identifiable data is destroyed upon project completion.</li>
  <li><strong>8.1.3 Financial Records:</strong> Retained for seven (7) years as per the Income Tax Act.</li>
</ul>
<p><strong>8.2 Destruction:</strong> Upon expiry of the retention period, physical documents are cross-shredded, and digital files are securely purged using forensic deletion software.</p>

<h3>9. RIGHTS OF THE DATA SUBJECT</h3>
<p>Pursuant to the Privacy Act, 2075, Users are entitled to the following rights.</p>
<p><strong>9.1 Right to Access and Information:</strong> The User has the right to demand details regarding the origin, nature, and destination of their data processed by the Company.</p>
<p><strong>9.2 Right to Rectification:</strong> The User may request the correction of any incomplete, inaccurate, or outdated Personal Data.</p>
<p><strong>9.3 Right to Erasure:</strong> Also known as the "Right to be Forgotten," the User may request the deletion of data where it is no longer necessary for the purpose collected, or where consent is withdrawn.</p>
<p><strong>9.4 Right to Withdraw Consent:</strong> The User has the right to withdraw consent for data processing at any time without retrospective effect.</p>

<h3>10. INDEMNIFICATION AND LIMITATION OF LIABILITY</h3>
<p><strong>10.1 Indemnity:</strong> The User agrees to indemnify and hold harmless the Company, its directors, and associates from any claims, damages, or liabilities arising from the User’s provision of false, fabricated, or third-party data without authorization.</p>
<p><strong>10.2 Force Majeure:</strong> The Company shall not be liable for any breach of security or loss of data caused by circumstances beyond its reasonable control, including but not limited to acts of God, cyber-terrorism, or state-imposed blackouts.</p>

<h3>11. GOVERNING LAW AND DISPUTE RESOLUTION</h3>
<p><strong>11.1 Governing Law:</strong> This Policy and any usage of the website or services shall be governed by and construed strictly in accordance with the Laws of Nepal.</p>
<p><strong>11.2 Amicable Settlement:</strong> In the event of any dispute, controversy, or claim arising out of or relating to this Policy, the parties shall first attempt to resolve the matter through good faith amicable negotiation.</p>
<p><strong>11.3 Bar on Litigation and Covenant Not to Sue:</strong> Notwithstanding any statutory rights to the contrary, the User explicitly covenants and agrees that no question regarding the accuracy, validity, interpretation, or implementation of this Policy or the Company's services shall be raised in any competent court of law, tribunal, or administrative body in Nepal. The User hereby voluntarily, knowingly, and irrevocably waives any and all rights to file any complaint, lawsuit, writ petition, or legal proceeding against the Company, its directors, or employees in any court of law. The User agrees that the Company shall be immune from any such legal liability or prosecution.</p>
`;