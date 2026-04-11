(function () {
  const cfg = window.SITE_CONFIG || {};
  const t = {
    en: {
      menu: "Menu",
      home: "Home",
      about: "About",
      academics: "Academics",
      admissions: "Admissions",
      facilities: "Facilities",
      staff: "Staff",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
      usefulLinks: "Useful Links",
      contactHeading: "Contact",
      whatsapp: "WhatsApp",
      chatAdmissions: "Chat with Admissions",
      whatsappTeam: "WhatsApp Team",
      whatsappAdmissions: "WhatsApp Admissions",
      admissionsPageTitle: "Admissions",
      admissionsPageSubtitle:
        "Fill out the form below to submit your admission inquiry",
      submitInquiry: "Submit Inquiry",
      contactPageTitle: "Contact Us",
      contactPageSubtitle: "Reach out to us with your questions and feedback",
      sendMessage: "Send Message",
      aboutPageTitle: "About",
      aboutPageSubtitle: "25+ years of quality education in Gaujariya, Khatima — Nursery to Class XII under the Uttarakhand Board.",
      mottoEyebrow: "Our Motto",
      mottoCaption: "The guiding principle behind everything we do — open doors for every student, and raise the bar for each one.",
      academicsPageTitle: "Academics",
      academicsPageSubtitle: "Nursery to Class XII under the Uttarakhand Board (UBSE). NCERT-based curriculum taught in both English and Hindi medium, with Arts and Science streams in the Senior Wing.",
      facilitiesPageTitle: "Facilities",
      facilitiesPageSubtitle: "Well-equipped classrooms, science and computer labs, library, sports ground, and assembly hall on our Gaujariya campus.",
      galleryPageTitle: "Gallery",
      galleryPageSubtitle:
        "A glimpse of campus life — classrooms, events, sports, and cultural programs at Kheema Bisht Inter College.",
      newsPageTitle: "News & Notices",
      newsPageSubtitle: "Latest announcements, events, and notices from Kheema Bisht Inter College.",
      loadingNotices: "Loading latest notices...",
      openNewsManager: "Open News Manager",
      whyChooseUs: "Why Choose Us",
      whyChooseSub:
        "Focused academics, strong co-curriculars, and a supportive learning environment.",
      principalMessage: "Principal's Message",
      admissionsHelpdesk: "Admissions Helpdesk",
      startAdmissionInquiry: "Start Admission Inquiry",
      parentTestimonials: "Parent Testimonials",
      applyNow: "Apply Now",
      successTitle: "Admission Inquiry Submitted",
      successSubtitle:
        "Thank you for your interest. Our admissions team will contact you soon.",
      backHome: "Back to Home",
      viewAdmissions: "View Admissions",
      aboutMissionHeading: "Our Mission",
      aboutMissionPara: "To nurture knowledge, character, and confidence.",
      aboutVisionHeading: "Our Vision",
      aboutVisionPara: "To prepare responsible and future-ready citizens.",
      aboutValuesHeading: "Our Values",
      aboutValuesPara: "Integrity, discipline, empathy, and excellence.",
      academicsPrePrimaryTitle: "Primary Wing",
      academicsPrePrimaryPara: "Conceptual learning for foundational years.",
      academicsMiddleTitle: "Middle Wing",
      academicsMiddlePara: "Skill building and exploratory learning.",
      academicsSecondaryTitle: "Senior Wing",
      academicsSecondaryPara: "Board prep and career guidance programs.",
      facilitiesLabTitle: "Science Labs",
      facilitiesLabDesc: "Physics, chemistry, and biology labs.",
      facilitiesLibraryTitle: "Library",
      facilitiesLibraryDesc: "Rich reading resources and digital references.",
      facilitiesSportsTitle: "Sports Ground",
      facilitiesSportsDesc: "Physical training and team sports programs.",
      aboutStoryPara1: "Kheema Bisht Inter College was established in the year 2000 in Gaujariya, Khatima, Udham Singh Nagar, Uttarakhand. For over 25 years, the college has been committed to providing quality education to students from Nursery through Class XII in the Terai region of Uttarakhand.",
      aboutStoryPara2: "Affiliated to the Uttarakhand Board of School Education (UBSE), the college follows an NCERT-based curriculum and offers instruction in both English and Hindi medium. Over the years it has grown from a small institution into a trusted name in education, known for its dedicated faculty, disciplined environment, and focus on overall student development.",
      aboutStoryPara3: "Named after Shri Kheema Bisht, the college carries forward a legacy of service to education and community upliftment in the Khatima region.",
      aboutMissionHeading: "Our Mission",
      aboutMissionPara: "To provide accessible, quality education that builds strong academic foundations, develops moral character, and prepares students to contribute meaningfully to society. We aim to create a learning environment where every student, regardless of background, can discover and develop their potential.",
      aboutVisionHeading: "Our Vision",
      aboutVisionPara: "To be a leading educational institution in the Khatima region that nurtures confident, responsible, and skilled young citizens who are prepared for higher education, professional life, and active participation in building a better India.",
      aboutValuesHeading: "Our Values",
      aboutValuesPara: "<strong>Discipline</strong> — Building self-control and responsibility.<br /><strong>Integrity</strong> — Honesty in thought and action.<br /><strong>Respect</strong> — For teachers, peers, and community.<br /><strong>Hard Work</strong> — Consistent effort toward excellence.<br /><strong>Compassion</strong> — Caring for fellow students and society.",
      aboutPrincipalMessageHeading: "Principal's Message",
      aboutPrincipalPara1: "\"At Kheema Bisht Inter College, we believe that education is not just about textbooks and exams — it is about shaping character, building confidence, and preparing young minds for the challenges and opportunities ahead.\"",
      aboutPrincipalPara2: "\"Our teachers work with dedication to ensure that every student receives individual attention and guidance. We encourage our students to aim high, work hard, and always maintain the values of honesty and respect.\"",
      aboutPrincipalPara3: "\"I invite parents and students to visit our campus, meet our faculty, and experience the learning environment we have built over the past 25 years.\"",
      aboutKeyFactsHeading: "Key Facts",
      aboutEstablishedTitle: "Established",
      aboutEstablishedPara: "Year 2000 — serving students and families in Gaujariya, Khatima for over 25 years.",
      aboutAffiliationTitle: "Affiliation",
      aboutAffiliationPara: "Uttarakhand Board of School Education (UBSE), Government of Uttarakhand. NCERT-based curriculum offered in both English and Hindi medium.",
      aboutClassesTitle: "Classes",
      aboutClassesPara: "Nursery to Class XII — complete schooling from early childhood through senior secondary under one roof.",
      academicsOverviewHeading: "Academic Overview",
      academicsOverviewPara: "Kheema Bisht Inter College follows the Uttarakhand Board of School Education (UBSE) curriculum. We provide complete schooling from Nursery through Class XII, with Science and Arts streams available at the senior secondary level. Our teaching approach emphasizes conceptual clarity, regular assessment, and individual attention to help every student perform their best in board examinations.",
      academicsPrePrimaryTitle: "Pre-Primary (Nursery – KG)",
      academicsPrePrimaryPara: "Play-based learning that builds early literacy, numeracy, and social skills. Activities include storytelling, drawing, rhymes, and basic motor skill development in a safe and caring environment.",
      academicsPrimaryTitle: "Primary (Class I – V)",
      academicsPrimaryPara: "Foundation years covering Hindi, English, Mathematics, Environmental Studies (EVS), and General Knowledge. Focus on reading fluency, writing skills, and building curiosity through hands-on learning.",
      academicsMiddleTitle: "Middle School (Class VI – VIII)",
      academicsMiddlePara: "Expanded curriculum with Hindi, English, Mathematics, Science, Social Science, Sanskrit, and Computer Awareness. Students develop analytical thinking, project work skills, and participate in co-curricular activities.",
      academicsSecondaryTitle: "Secondary (Class IX – X)",
      academicsSecondaryPara: "Board preparation begins with focused study in Hindi, English, Mathematics, Science, and Social Science as per UBSE syllabus. Regular tests, revision sessions, and practice papers prepare students for the Class X board examination.",
      academicsScienceStreamTitle: "Senior Secondary — Science (XI – XII)",
      academicsScienceStreamPara: "Science stream with Physics, Chemistry, Biology, and Mathematics. Students are prepared for UBSE board exams as well as competitive entrance examinations for engineering, medical, and other professional courses.",
      academicsArtsStreamTitle: "Senior Secondary — Arts (XI – XII)",
      academicsArtsStreamPara: "Arts/Humanities stream with subjects including Hindi, English, History, Geography, Political Science, and Economics. Prepares students for higher education in humanities, law, civil services, and teaching.",
      academicsBeyondHeading: "Beyond Academics",
      academicsBeyondPara: "In addition to classroom teaching, we encourage students to participate in sports competitions, cultural events, debates, essay writing, and community activities. Annual functions, sports day, and inter-school competitions are regular features of our academic calendar.",
      facilitiesClassroomsTitle: "Spacious Classrooms",
      facilitiesClassroomsDesc: "Well-ventilated, naturally lit classrooms with proper seating, blackboards, and a comfortable learning environment for all age groups from Nursery to Class XII.",
      facilitiesLabTitle: "Science Laboratory",
      facilitiesLabDesc: "Equipped lab for Physics, Chemistry, and Biology practicals. Students conduct hands-on experiments as part of the UBSE curriculum, building practical understanding of scientific concepts.",
      facilitiesComputerLabTitle: "Computer Lab",
      facilitiesComputerLabDesc: "Dedicated computer room with desktops for students to learn basic computing, typing, and digital literacy. Internet access is available for educational purposes.",
      facilitiesLibraryTitle: "Library",
      facilitiesLibraryDesc: "A growing collection of textbooks, reference books, Hindi and English literature, magazines, and newspapers. Open during school hours for students and faculty.",
      facilitiesSportsTitle: "Sports Ground",
      facilitiesSportsDesc: "Open playground for cricket, football, kho-kho, kabaddi, and athletics. Regular physical training sessions and annual sports day encourage fitness and team spirit.",
      facilitiesAssemblyTitle: "Assembly Hall",
      facilitiesAssemblyDesc: "Multi-purpose hall used for morning assembly, cultural events, annual function, parent-teacher meetings, and guest lectures. Equipped with sound system and seating arrangements.",
      faq: "FAQ",
      faqPageTitle: "Frequently Asked Questions",
      faqPageSubtitle: "Quick answers to the most common questions parents ask before joining Kheema Bisht Inter College.",
      breadcrumbHome: "Home",
      skipToContent: "Skip to main content",
      results: "Results",
      fees: "Fees",
      explore: "Explore",
      followUs: "Follow Us",
      followUsSub: "Stay connected and see what's happening on campus every week.",
      allRightsReserved: "All rights reserved.",
      heroAdmBadge: "Admissions Open 2026-27",
      heroHeading: "Build Future-Ready Learners at",
      heroPara: "Modern academics, caring faculty, safe campus, and balanced development in sports, arts, and values — for every child from Nursery through Class XII.",
      heroApplyBtn: "Apply / Enquire",
      heroVisitBtn: "Visit Campus",
      quickInfo: "Quick Information",
      infoClasses: "Classes:",
      infoBoard: "Board:",
      infoEmail: "Email:",
      infoPhone: "Phone:",
      statStudents: "Students",
      statFaculty: "Faculty Members",
      statYears: "Years of Excellence",
      nurseryEyebrow: "Early Years at KBIC",
      nurseryHeading: "Where Learning Begins with Play",
      nurseryPara: "Our nursery wing is built around how young children actually learn — through colour, movement, and discovery. Dedicated classrooms with wall-mounted learning aids, a \"Learn With Fun\" outdoor play zone with slides, trampolines, tunnels, and see-saws, and teachers trained in early childhood education.",
      nurserySafe: "Safe, joyful, and designed for the very first years of school life.",
      nurseryGalleryBtn: "See More in Gallery",
      whySetsApartEyebrow: "What Sets Us Apart",
      smartClassTitle: "Hi-Tech Smart Classrooms",
      smartClassPara: "Every classroom equipped with projectors, TV screens, proper ventilation and 24/7 lights and fans — thanks to full solar power, learning never stops for a power cut.",
      nurseryToXIITitle: "Nursery to Class 12 — All Streams",
      nurseryToXIIPara: "A complete path from nursery to senior secondary, with Science (PCM & PCB) and Arts streams in Class 11 & 12, plus free after-school coaching for Class 10 and 12 board students.",
      safetyFirstTitle: "Safety First, Always",
      safetyFirstPara: "100+ CCTV cameras with audio on campus, 11 vehicles with female conductors and onboard cameras, secure boundary wall, RO drinking water, and fire safety across every building.",
      campusTourBtn: "See the Full Campus Tour",
      acadExcEyebrow: "Academic Excellence",
      acadExcHeading: "Among the Top 25 in the Uttarakhand Board — Year After Year.",
      acadExcPara: "Our students have consistently placed in the state top 25 merit list of the Uttarakhand Board every single year.",
      highestScore: "Highest Score",
      placements: "Placements",
      inStateTop25: "In State Top 25, Last 3 Years",
      everyYear: "Every Year",
      withoutException: "Without Exception, HS & Inter Both",
      ddupAward: "Pt. Deen Dayal Upadhyay Award",
      ddupAwardSub: "State Academic Excellence — Multiple Times",
      highSchoolX: "High School (Class X)",
      ukBoardMerit: "UK Board Merit",
      intermediateXII: "Intermediate (Class XII)",
      inState: "in State",
      blockTopper: "Block Topper",
      seeFullResults: "See Full Results & Merit List",
      principalWelcome: "Welcome to",
      principalPara1: "We focus on building strong academic foundations, ethical values, and leadership habits so every learner is prepared for real-world challenges.",
      principalPara2: "Our faculty and school community work closely with parents to create a safe and inspiring environment where students can thrive.",
      principal: "Principal",
      helpdeskPara: "Have questions about age criteria, required documents, transport routes, or fees? Connect with our team instantly.",
      testimonialEyebrow: "In Their Own Words",
      testimonialSub: "What families associated with our school say about their experience.",
      testimonial1: "The teachers are attentive and communication is very clear. My child has grown in confidence and discipline.",
      testimonial1Author: "Parent of Class VI Student",
      testimonial2: "Balanced focus on academics and activities. The school environment is safe and welcoming.",
      testimonial2Author: "Parent of Class III Student",
      testimonial3: "Excellent support during board preparation. Regular updates helped us stay aligned with progress.",
      testimonial3Author: "Parent of Class X Student",
      stickyAdmTitle: "Admissions 2026-27",
      stickyAdmSub: "Limited seats available",
      announce1: "Admissions open for session 2026-27",
      announce2: "Walk in any working day, 9 AM – 1 PM — no appointment needed",
      announce3: "Scholarship guidance desk now active",
      latestNotices: "Latest Notices",
      viewAllNotices: "View All",
      footerAffiliation: "Affiliated to the Uttarakhand Board of School Education (UBSE). NCERT-based curriculum offered in both English and Hindi medium, from Nursery to Class XII.",
      admProcessEyebrow: "How It Works",
      admProcessHeading: "Admission Process",
      admStep1Title: "Inquire",
      admStep1Desc: "Fill the form below or message us on WhatsApp.",
      admStep2Title: "Visit Campus",
      admStep2Desc: "Walk in any working day, 9 AM – 1 PM.",
      admStep3Title: "Submit Documents",
      admStep3Desc: "Bring required documents and complete registration.",
      admStep4Title: "Confirm Seat",
      admStep4Desc: "Pay the admission fee and your seat is secured.",
      admFormStudentName: "Student Name",
      admFormParentName: "Parent Name",
      admFormPhone: "Phone Number",
      admFormEmail: "Email Address",
      admFormClass: "Select Class",
      admFormMessage: "Message",
      admFormResponse: "Our admissions team will respond within 24 hours on school days.",
      admWhyHeading: "Why KBIC",
      contactAddress: "Address",
      contactEmail: "Email",
      contactPhone: "Phone",
      contactFormHeading: "Send a Message",
      contactFormName: "Your Name",
      contactFormEmail: "Your Email",
      contactFormPhone: "Phone Number",
      contactFormMsg: "Write your message",
      contactFormResponse: "We'll respond within 24 hours.",
      photosTab: "Photos",
      videosTab: "Videos",
      loadingPhotos: "Loading photos…",
      videoHighlightsEyebrow: "Video Highlights",
      videoHighlightsHeading: "Watch Campus Life in Motion",
      campusTourGroup: "Campus Tour",
      eventsFestivalsGroup: "Events & Festivals",
      sportsDayGroup: "Sports Day",
      facilitiesInsideEyebrow: "Inside the Campus",
      facilitiesInsideHeading: "Everything a Modern School Should Have — and Then Some.",
      facilitiesSafetyHeading: "Safety Isn't a Feature. It's the Foundation.",
      facilitiesCCTVStat: "CCTV Cameras",
      facilitiesSolarStat: "Solar Power",
      facilitiesBusesStat: "Buses & Vans",
      facilitiesFemCondStat: "Female Conductors",
      facilitiesSmartClassTitle: "Smart Classrooms",
      facilitiesSmartClassDesc: "Projector-equipped rooms with TV screens, proper ventilation, and 24/7 power backup through full solar installation.",
      facilitiesSolarTitle: "100% Solar Powered",
      facilitiesSolarDesc: "Complete solar power installation ensures uninterrupted classes, fans, lights, and projectors — even during power cuts.",
      facilitiesPlayZoneTitle: "Play Zone (Nursery)",
      facilitiesPlayZoneDesc: "Dedicated outdoor play area with slides, trampolines, tunnels, and see-saws for the youngest learners.",
      facilitiesCareStaffTitle: "Care & Cleaning Staff",
      facilitiesCareStaffDesc: "Dedicated ayahs for nursery children, sweepers for daily cleaning, and maintenance staff for hygienic campus upkeep.",
      resultsPageTitle: "Board Results & Merit List",
      resultsPageSubtitle: "Our students' achievements in the Uttarakhand Board examinations.",
      resultsHeroEyebrow: "Board Results",
      feesPageTitle: "Fee Structure",
      feesPageSubtitle: "Session 2026-27 fee details for all classes.",
      feeSchedule: "Fee Schedule",
      onlinePayment: "Online Payment Coming Soon",
      scholarshipGuidance: "Scholarship Guidance",
      staffPageTitle: "Our Teachers & Staff",
      staffPageSubtitle: "The dedicated team behind every student's success.",
      teachingFaculty: "Teaching Faculty",
      ourCommitment: "Our Commitment",
      faqStillQuestions: "Still have questions? Contact us",
      acadJourneyEyebrow: "The Academic Journey",
      acadJourneyHeading: "Every Stage. Every Year. Every Child Looked After.",
      acadSeniorSecEyebrow: "Senior Secondary - Class 11 & 12",
      acadSeniorSecHeading: "Choose Your Path. We'll Prepare You for It.",
      acadSeniorSecPara: "Two streams offered at the Intermediate level under the Uttarakhand Board.",
      acadPCMTitle: "Science — PCM",
      acadPCBTitle: "Science — PCB",
      acadArtsTitle: "Arts / Humanities",
      acadHowWeTeachEyebrow: "How We Teach",
      acadBilingualTitle: "Bilingual Medium",
      acadBilingualPara: "NCERT curriculum taught in both English and Hindi medium to ensure concept clarity.",
      acadExpTeachersTitle: "Experienced Teachers",
      acadExpTeachersPara: "Dedicated faculty with years of experience in UBSE board preparation and student mentoring.",
      acadBoardCoachTitle: "Board Exam Extra Classes",
      acadBoardCoachPara: "Free after-school coaching for Class 10 and 12 board students with practice papers and revision.",
      acadJourneyPara: "From playful nursery beginnings to board-ready seniors — a structured, caring path at every level.",
      acadHowWeTeachHeading: "Practical, Personal, and Proven.",
      acadHowWeTeachPara: "Our teaching approach blends traditional discipline with modern methods to ensure every student is confident and prepared.",
      acadPCMPara: "Physics, Chemistry, Mathematics — for engineering, technology, and competitive exams.",
      acadPCBPara: "Physics, Chemistry, Biology — for medical, paramedical, and life science careers.",
      acadArtsPara: "Hindi, English, History, Geography, Political Science, Economics — for humanities, law, civil services.",
      proceedPayment: "Proceed to Payment",
      acadApplyBtn: "Apply for Admission",
      acadExploreBtn: "Explore the Campus",
      acadTrustEyebrow: "These Classrooms Deliver",
      acadTrustHeading: "16 State Top-25 Placements. 4 Block Toppers. 97.6% Highest Score.",
      acadTrustSub: "3 consecutive years of Uttarakhand Board merit list appearances — High School and Intermediate both.",
      acadTrustBtn: "See Full Results & Merit List",
      successPara: "Your admission inquiry has been received. Our team will review it and get back to you within 24 hours on school working days.",
      transportHeading: "Safe & Supervised Transport",
      transportSub: "11 vehicles with GPS tracking, onboard cameras, and female conductors on every route."
    },
    hi: {
      menu: "मेन्यू",
      home: "होम",
      about: "हमारे बारे में",
      academics: "शैक्षणिक",
      admissions: "प्रवेश",
      facilities: "सुविधाएं",
      staff: "शिक्षकगण",
      gallery: "गैलरी",
      news: "समाचार",
      contact: "संपर्क",
      usefulLinks: "उपयोगी लिंक",
      contactHeading: "संपर्क",
      whatsapp: "व्हाट्सऐप",
      chatAdmissions: "प्रवेश सहायता चैट",
      whatsappTeam: "व्हाट्सऐप टीम",
      whatsappAdmissions: "व्हाट्सऐप प्रवेश सहायता",
      admissionsPageTitle: "प्रवेश",
      admissionsPageSubtitle:
        "अपनी प्रवेश पूछताछ जमा करने के लिए नीचे फ़ॉर्म भरें",
      submitInquiry: "पूछताछ भेजें",
      contactPageTitle: "संपर्क करें",
      contactPageSubtitle: "अपने प्रश्नों और सुझावों के लिए हमसे संपर्क करें",
      sendMessage: "संदेश भेजें",
      aboutPageTitle: "हमारे बारे में",
      aboutPageSubtitle: "गौजरिया, खटीमा में 25+ वर्षों से गुणवत्तापूर्ण शिक्षा — नर्सरी से कक्षा XII तक, उत्तराखंड बोर्ड से संबद्ध।",
      mottoEyebrow: "हमारा ध्येय",
      mottoCaption: "यही वह मार्गदर्शक सिद्धांत है जिस पर हम चलते हैं — हर छात्र के लिए द्वार खुले रखना, और हर एक से उत्कृष्टता की अपेक्षा रखना।",
      academicsPageTitle: "शैक्षणिक",
      academicsPageSubtitle: "उत्तराखंड बोर्ड (UBSE) से संबद्ध — नर्सरी से कक्षा XII तक। अंग्रेज़ी और हिंदी दोनों माध्यम में NCERT आधारित पाठ्यक्रम, सीनियर विंग में कला और विज्ञान स्ट्रीम।",
      facilitiesPageTitle: "सुविधाएं",
      facilitiesPageSubtitle: "गौजरिया परिसर में आधुनिक कक्षाएं, विज्ञान एवं कंप्यूटर लैब, पुस्तकालय, खेल मैदान और सभा भवन।",
      galleryPageTitle: "गैलरी",
      galleryPageSubtitle:
        "कैंपस जीवन की झलक — कक्षाएं, कार्यक्रम, खेल और सांस्कृतिक गतिविधियां खीमा बिष्ट इंटर कॉलेज में।",
      newsPageTitle: "समाचार और सूचनाएं",
      newsPageSubtitle: "खीमा बिष्ट इंटर कॉलेज की नवीनतम घोषणाएं, कार्यक्रम और सूचनाएं।",
      loadingNotices: "नवीनतम सूचनाएं लोड हो रही हैं...",
      openNewsManager: "न्यूज़ मैनेजर खोलें",
      whyChooseUs: "हमें क्यों चुनें",
      whyChooseSub:
        "केंद्रित अकादमिक, मजबूत सह-पाठ्यक्रम गतिविधियां और सहयोगी सीखने का वातावरण।",
      principalMessage: "प्रधानाचार्य का संदेश",
      admissionsHelpdesk: "प्रवेश सहायता डेस्क",
      startAdmissionInquiry: "प्रवेश पूछताछ शुरू करें",
      parentTestimonials: "अभिभावक प्रशंसापत्र",
      applyNow: "अभी आवेदन करें",
      successTitle: "प्रवेश पूछताछ सफलतापूर्वक भेजी गई",
      successSubtitle:
        "रुचि दिखाने के लिए धन्यवाद। हमारी प्रवेश टीम जल्द आपसे संपर्क करेगी।",
      backHome: "होम पर जाएं",
      viewAdmissions: "प्रवेश पेज देखें",
      aboutMissionHeading: "हमारा उद्देश्य",
      aboutMissionPara: "ज्ञान, चरित्र और आत्मविश्वास का पालन-पोषण करना।",
      aboutVisionHeading: "हमारा दृष्टिकोण",
      aboutVisionPara: "जिम्मेदार और भविष्य के लिए तैयार नागरिकों को तैयार करना।",
      aboutValuesHeading: "हमारे मूल्य",
      aboutValuesPara: "ईमानदारी, अनुशासन, सहानुभूति और उत्कृष्टता।",
      academicsPrePrimaryTitle: "प्राथमिक विंग",
      academicsPrePrimaryPara: "बुनियादी वर्षों के लिए अवधारणात्मक शिक्षा।",
      academicsMiddleTitle: "मध्य विंग",
      academicsMiddlePara: "कौशल निर्माण और अन्वेषणात्मक शिक्षा।",
      academicsSecondaryTitle: "सीनियर विंग",
      academicsSecondaryPara: "बोर्ड की तैयारी और कैरियर मार्गदर्शन कार्यक्रम।",
      facilitiesLabTitle: "विज्ञान प्रयोगशाला",
      facilitiesLabDesc: "भौतिकी, रसायन विज्ञान और जीव विज्ञान की प्रयोगशाला।",
      facilitiesLibraryTitle: "पुस्तकालय",
      facilitiesLibraryDesc: "समृद्ध पठन संसाधन और डिजिटल संदर्भ।",
      facilitiesSportsTitle: "खेल मैदान",
      facilitiesSportsDesc: "शारीरिक प्रशिक्षण और टीम खेल कार्यक्रम।",
      aboutStoryHeading: "हमारी कहानी",
      aboutStoryPara1: "खीमा बिष्ट इंटर कॉलेज की स्थापना वर्ष 2000 में गौजरिया, खटीमा, उधम सिंह नगर, उत्तराखंड में की गई थी। 25 वर्षों से अधिक समय से, यह कॉलेज नर्सरी से कक्षा XII तक उत्तराखंड के तराई क्षेत्र में छात्रों को गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध है।",
      aboutStoryPara2: "उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE) से संबद्ध, यह कॉलेज NCERT आधारित पाठ्यक्रम का पालन करता है और अंग्रेज़ी तथा हिंदी दोनों माध्यम में शिक्षा प्रदान करता है। वर्षों में यह एक छोटी संस्था से विकसित होकर शिक्षा के क्षेत्र में एक विश्वसनीय नाम बन गया है, जो अपने समर्पित संकाय, अनुशासित वातावरण और समग्र छात्र विकास पर ध्यान के लिए जाना जाता है।",
      aboutStoryPara3: "श्री खीमा बिष्ट के नाम पर, यह कॉलेज खटीमा क्षेत्र में शिक्षा और सामुदायिक उत्थान की सेवा की विरासत को आगे बढ़ाता है।",
      aboutMissionHeading: "हमारा उद्देश्य",
      aboutMissionPara: "सुलभ, गुणवत्तापूर्ण शिक्षा प्रदान करना जो मजबूत शैक्षणिक नींव बनाए, नैतिक चरित्र विकसित करे, और छात्रों को समाज में सार्थक योगदान देने के लिए तैयार करे। हमारा लक्ष्य एक सीखने का ऐसा वातावरण बनाना है जहाँ हर छात्र, भले ही उसकी पृष्ठभूमि कुछ भी हो, अपनी क्षमता को खोज और विकसित कर सके।",
      aboutVisionHeading: "हमारा दृष्टिकोण",
      aboutVisionPara: "खटीमा क्षेत्र में एक प्रमुख शैक्षणिक संस्थान होना जो आत्मविश्वासी, जिम्मेदार और कुशल नागरिकों का पालन-पोषण करे जो उच्च शिक्षा, व्यावसायिक जीवन और भारत को बेहतर बनाने में सक्रिय भागीदारी के लिए तैयार हों।",
      aboutValuesHeading: "हमारे मूल्य",
      aboutValuesPara: "<strong>अनुशासन</strong> — आत्म-नियंत्रण और जिम्मेदारी का निर्माण।<br /><strong>ईमानदारी</strong> — विचार और कार्य में सच्चाई।<br /><strong>सम्मान</strong> — शिक्षकों, साथियों और समुदाय के लिए।<br /><strong>कठोर परिश्रम</strong> — उत्कृष्टता की ओर निरंतर प्रयास।<br /><strong>करुणा</strong> — साथी छात्रों और समाज की देखभाल।",
      aboutPrincipalMessageHeading: "प्रधानाचार्य का संदेश",
      aboutPrincipalPara1: "\"खीमा बिष्ट इंटर कॉलेज में, हम मानते हैं कि शिक्षा केवल पाठ्यपुस्तकों और परीक्षाओं के बारे में नहीं है — यह चरित्र को आकार देना, आत्मविश्वास बनाना और युवा मस्तिष्क को आने वाली चुनौतियों और अवसरों के लिए तैयार करना है।\"",
      aboutPrincipalPara2: "\"हमारे शिक्षक सुनिश्चित करने के लिए समर्पण के साथ काम करते हैं कि हर छात्र को व्यक्तिगत ध्यान और मार्गदर्शन मिले। हम अपने छात्रों को उच्च लक्ष्य रखने, कठोर परिश्रम करने और हमेशा ईमानदारी और सम्मान के मूल्यों को बनाए रखने के लिए प्रोत्साहित करते हैं।\"",
      aboutPrincipalPara3: "\"मैं माता-पिता और छात्रों को आमंत्रित करता हूँ कि वे हमारे परिसर का दौरा करें, हमारे संकाय से मिलें, और पिछले 25 वर्षों में जो सीखने का वातावरण हमने बनाया है, उसका अनुभव करें।\"",
      aboutKeyFactsHeading: "महत्वपूर्ण तथ्य",
      aboutEstablishedTitle: "स्थापना",
      aboutEstablishedPara: "वर्ष 2000 — गौजरिया, खटीमा में 25 वर्षों से अधिक समय से छात्रों और परिवारों की सेवा कर रहा है।",
      aboutAffiliationTitle: "संबद्धता",
      aboutAffiliationPara: "उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE), उत्तराखंड सरकार। अंग्रेज़ी और हिंदी दोनों माध्यम में NCERT आधारित पाठ्यक्रम।",
      aboutClassesTitle: "कक्षाएँ",
      aboutClassesPara: "नर्सरी से कक्षा XII तक — एक ही छत के नीचे प्रारंभिक बचपन से माध्यमिक स्तर तक संपूर्ण शिक्षा।",
      academicsOverviewHeading: "शैक्षणिक अवलोकन",
      academicsOverviewPara: "खीमा बिष्ट इंटर कॉलेज उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE) के पाठ्यक्रम का अनुसरण करता है। हम नर्सरी से कक्षा XII तक संपूर्ण शिक्षा प्रदान करते हैं, माध्यमिक स्तर पर विज्ञान और कला संकाय उपलब्ध हैं। हमारी शिक्षण विधि संकल्पनात्मक स्पष्टता, नियमित मूल्यांकन और व्यक्तिगत ध्यान पर ध्यान केंद्रित करती है।",
      academicsPrePrimaryTitle: "पूर्व-प्राथमिक (नर्सरी – केजी)",
      academicsPrePrimaryPara: "खेल-आधारित शिक्षा जो प्रारंभिक साक्षरता, संख्या कौशल और सामाजिक कौशल विकसित करती है। गतिविधियों में कहानी कहना, ड्राइंग, तुकबंदी और बुनियादी मोटर कौशल विकास शामिल हैं।",
      academicsPrimaryTitle: "प्राथमिक (कक्षा I – V)",
      academicsPrimaryPara: "हिंदी, अंग्रेजी, गणित, पर्यावरण अध्ययन (EVS) और सामान्य ज्ञान को कवर करने वाले आधार वर्ष। पढ़ने की प्रवाहिता, लेखन कौशल और व्यावहारिक शिक्षा के माध्यम से जिज्ञासा बढ़ाने पर ध्यान।",
      academicsMiddleTitle: "माध्यमिक (कक्षा VI – VIII)",
      academicsMiddlePara: "हिंदी, अंग्रेजी, गणित, विज्ञान, सामाजिक विज्ञान, संस्कृत और कंप्यूटर जागरूकता के साथ विस्तारित पाठ्यक्रम। विश्लेषणात्मक सोच, परियोजना कार्य कौशल विकास और सह-पाठ्यक्रम गतिविधियों में भागीदारी।",
      academicsSecondaryTitle: "माध्यमिक (कक्षा IX – X)",
      academicsSecondaryPara: "UBSE पाठ्यक्रम के अनुसार हिंदी, अंग्रेजी, गणित, विज्ञान और सामाजिक विज्ञान में केंद्रित अध्ययन से बोर्ड की तैयारी शुरू होती है। नियमित परीक्षाएं, संशोधन सत्र और अभ्यास पत्र छात्रों को कक्षा X बोर्ड परीक्षा के लिए तैयार करते हैं।",
      academicsScienceStreamTitle: "वरिष्ठ माध्यमिक — विज्ञान संकाय (XI – XII)",
      academicsScienceStreamPara: "भौतिकी, रसायन विज्ञान, जीव विज्ञान और गणित के साथ विज्ञान संकाय। छात्र UBSE बोर्ड परीक्षाओं के साथ-साथ इंजीनियरिंग, चिकित्सा और अन्य व्यावसायिक पाठ्यक्रमों के प्रतिस्पर्धी प्रवेश परीक्षाओं के लिए तैयार होते हैं।",
      academicsArtsStreamTitle: "वरिष्ठ माध्यमिक — कला संकाय (XI – XII)",
      academicsArtsStreamPara: "हिंदी, अंग्रेजी, इतिहास, भूगोल, राजनीति विज्ञान और अर्थशास्त्र जैसे विषयों के साथ कला/मानविकी संकाय। मानविकी, कानून, लोक सेवा और शिक्षण में उच्च शिक्षा के लिए तैयारी।",
      academicsBeyondHeading: "शिक्षा के परे",
      academicsBeyondPara: "कक्षा शिक्षण के अलावा, हम छात्रों को खेल प्रतियोगिताओं, सांस्कृतिक कार्यक्रमों, बहसों, निबंध लेखन और सामुदायिक गतिविधियों में भाग लेने के लिए प्रोत्साहित करते हैं। वार्षिक कार्यक्रम, खेल दिवस और अंतर-स्कूल प्रतियोगिताएं हमारे शैक्षणिक कैलेंडर की नियमित विशेषताएं हैं।",
      facilitiesClassroomsTitle: "विशाल कक्षाएँ",
      facilitiesClassroomsDesc: "अच्छी तरह हवादार, प्राकृतिक प्रकाश वाली कक्षाएं जिनमें उचित बैठक, ब्लैकबोर्ड और नर्सरी से कक्षा XII तक सभी आयु समूहों के लिए आरामदायक सीखने का माहौल है।",
      facilitiesLabTitle: "विज्ञान प्रयोगशाला",
      facilitiesLabDesc: "भौतिकी, रसायन विज्ञान और जीव विज्ञान की प्रयोगशाला से सुसज्जित। छात्र UBSE पाठ्यक्रम के भाग के रूप में व्यावहारिक प्रयोग करते हैं, वैज्ञानिक अवधारणाओं की व्यावहारिक समझ बनाते हैं।",
      facilitiesComputerLabTitle: "कंप्यूटर लैब",
      facilitiesComputerLabDesc: "डेस्कटॉप के साथ समर्पित कंप्यूटर कक्ष जहाँ छात्र बुनियादी कंप्यूटिंग, टाइपिंग और डिजिटल साक्षरता सीखते हैं। शैक्षणिक उद्देश्यों के लिए इंटरनेट पहुंच उपलब्ध है।",
      facilitiesLibraryTitle: "पुस्तकालय",
      facilitiesLibraryDesc: "पाठ्यपुस्तकों, संदर्भ पुस्तकों, हिंदी और अंग्रेजी साहित्य, पत्रिकाओं और समाचारपत्रों का बढ़ता संग्रह। स्कूल के समय में छात्रों और संकाय के लिए खुला।",
      facilitiesSportsTitle: "खेल मैदान",
      facilitiesSportsDesc: "क्रिकेट, फुटबॉल, खो-खो, कबड्डी और एथलेटिक्स के लिए खुला खेल का मैदान। नियमित शारीरिक प्रशिक्षण सत्र और वार्षिक खेल दिवस स्वास्थ्य और टीम भावना को प्रोत्साहित करते हैं।",
      facilitiesAssemblyTitle: "सभागार",
      facilitiesAssemblyDesc: "बहु-उद्देश्यीय हॉल जिसका उपयोग प्रातः सभा, सांस्कृतिक कार्यक्रम, वार्षिकोत्सव, अभिभावक-शिक्षक बैठकें और अतिथि व्याख्यानों के लिए किया जाता है। ध्वनि प्रणाली और बैठने की व्यवस्था से सुसज्जित।",
      faq: "सामान्य प्रश्न",
      faqPageTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faqPageSubtitle: "खीमा बिष्ट इंटर कॉलेज में प्रवेश से पहले अभिभावकों द्वारा पूछे जाने वाले सबसे आम प्रश्नों के संक्षिप्त उत्तर।",
      breadcrumbHome: "होम",
      skipToContent: "मुख्य सामग्री पर जाएं",
      results: "परिणाम",
      fees: "शुल्क",
      explore: "एक्सप्लोर करें",
      followUs: "हमें फ़ॉलो करें",
      followUsSub: "हर हफ़्ते कैंपस में क्या हो रहा है, जुड़े रहें।",
      allRightsReserved: "सर्वाधिकार सुरक्षित।",
      heroAdmBadge: "प्रवेश खुला 2026-27",
      heroHeading: "भविष्य के लिए तैयार शिक्षार्थी बनाएं",
      heroPara: "आधुनिक शिक्षा, समर्पित शिक्षक, सुरक्षित कैंपस, और खेल, कला व संस्कारों में संतुलित विकास — नर्सरी से कक्षा XII तक हर बच्चे के लिए।",
      heroApplyBtn: "आवेदन / पूछताछ",
      heroVisitBtn: "कैंपस देखें",
      quickInfo: "त्वरित जानकारी",
      infoClasses: "कक्षाएँ:",
      infoBoard: "बोर्ड:",
      infoEmail: "ईमेल:",
      infoPhone: "फ़ोन:",
      statStudents: "छात्र",
      statFaculty: "शिक्षक",
      statYears: "उत्कृष्टता के वर्ष",
      nurseryEyebrow: "KBIC में प्रारंभिक वर्ष",
      nurseryHeading: "जहाँ सीखना खेल से शुरू होता है",
      nurseryPara: "हमारा नर्सरी विंग छोटे बच्चों की वास्तविक सीखने की प्रक्रिया पर आधारित है — रंग, गतिविधि और खोज के माध्यम से। दीवारों पर लगे शिक्षण सामग्री वाली कक्षाएं, स्लाइड, ट्रैम्पोलिन, सुरंग और झूलों वाला \"Learn With Fun\" आउटडोर प्ले ज़ोन, और बाल शिक्षा में प्रशिक्षित शिक्षक।",
      nurserySafe: "सुरक्षित, आनंदमय, और स्कूली जीवन के पहले वर्षों के लिए विशेष रूप से डिज़ाइन किया गया।",
      nurseryGalleryBtn: "गैलरी में और देखें",
      whySetsApartEyebrow: "हमें अलग क्या बनाता है",
      smartClassTitle: "हाई-टेक स्मार्ट कक्षाएं",
      smartClassPara: "हर कक्षा प्रोजेक्टर, टीवी स्क्रीन, उचित वेंटिलेशन और 24/7 लाइट-पंखों से सुसज्जित — पूर्ण सोलर पावर के कारण बिजली कटने पर भी पढ़ाई नहीं रुकती।",
      nurseryToXIITitle: "नर्सरी से कक्षा 12 — सभी स्ट्रीम",
      nurseryToXIIPara: "नर्सरी से सीनियर सेकेंडरी तक संपूर्ण शिक्षा, कक्षा 11-12 में विज्ञान (PCM और PCB) तथा कला स्ट्रीम, साथ ही कक्षा 10 और 12 के बोर्ड छात्रों के लिए मुफ्त कोचिंग।",
      safetyFirstTitle: "सुरक्षा सबसे पहले, हमेशा",
      safetyFirstPara: "कैंपस में ऑडियो सहित 100+ CCTV कैमरे, महिला कंडक्टर और ऑनबोर्ड कैमरे वाले 11 वाहन, सुरक्षित बाउंड्री वॉल, RO पेयजल, और हर भवन में अग्नि सुरक्षा।",
      campusTourBtn: "पूरा कैंपस टूर देखें",
      acadExcEyebrow: "शैक्षणिक उत्कृष्टता",
      acadExcHeading: "उत्तराखंड बोर्ड में टॉप 25 में — हर साल।",
      acadExcPara: "हमारे छात्रों ने हर साल उत्तराखंड बोर्ड की राज्य टॉप 25 मेरिट लिस्ट में स्थान बनाया है।",
      highestScore: "सर्वोच्च अंक",
      placements: "स्थान",
      inStateTop25: "राज्य टॉप 25 में, पिछले 3 वर्ष",
      everyYear: "हर साल",
      withoutException: "बिना किसी अपवाद, HS और इंटर दोनों",
      ddupAward: "पं. दीन दयाल उपाध्याय पुरस्कार",
      ddupAwardSub: "राज्य शैक्षणिक उत्कृष्टता — कई बार",
      highSchoolX: "हाई स्कूल (कक्षा X)",
      ukBoardMerit: "UK बोर्ड मेरिट",
      intermediateXII: "इंटरमीडिएट (कक्षा XII)",
      inState: "राज्य में",
      blockTopper: "ब्लॉक टॉपर",
      seeFullResults: "पूरे परिणाम और मेरिट लिस्ट देखें",
      principalWelcome: "स्वागत है",
      principalPara1: "हम मजबूत शैक्षणिक नींव, नैतिक मूल्य और नेतृत्व की आदतें बनाने पर ध्यान देते हैं ताकि हर छात्र वास्तविक दुनिया की चुनौतियों के लिए तैयार हो।",
      principalPara2: "हमारे शिक्षक और स्कूल समुदाय माता-पिता के साथ मिलकर एक सुरक्षित और प्रेरणादायक वातावरण बनाते हैं जहाँ छात्र फल-फूल सकें।",
      principal: "प्रधानाचार्य",
      helpdeskPara: "उम्र मानदंड, आवश्यक दस्तावेज़, परिवहन मार्ग या शुल्क के बारे में प्रश्न? हमारी टीम से तुरंत जुड़ें।",
      testimonialEyebrow: "उनकी अपनी ज़ुबानी",
      testimonialSub: "हमारे स्कूल से जुड़े परिवार अपने अनुभव के बारे में क्या कहते हैं।",
      testimonial1: "शिक्षक ध्यान देने वाले हैं और संवाद बहुत स्पष्ट है। मेरे बच्चे में आत्मविश्वास और अनुशासन बढ़ा है।",
      testimonial1Author: "कक्षा VI के छात्र के अभिभावक",
      testimonial2: "पढ़ाई और गतिविधियों पर संतुलित ध्यान। स्कूल का माहौल सुरक्षित और स्वागतपूर्ण है।",
      testimonial2Author: "कक्षा III के छात्र के अभिभावक",
      testimonial3: "बोर्ड की तैयारी के दौरान उत्कृष्ट सहायता। नियमित अपडेट ने हमें प्रगति से जुड़े रहने में मदद की।",
      testimonial3Author: "कक्षा X के छात्र के अभिभावक",
      stickyAdmTitle: "प्रवेश 2026-27",
      stickyAdmSub: "सीमित सीटें उपलब्ध",
      announce1: "सत्र 2026-27 के लिए प्रवेश खुला",
      announce2: "किसी भी कार्यदिवस में आएं, सुबह 9 – दोपहर 1 — अपॉइंटमेंट की ज़रूरत नहीं",
      announce3: "छात्रवृत्ति मार्गदर्शन डेस्क अब सक्रिय",
      latestNotices: "नवीनतम सूचनाएं",
      viewAllNotices: "सभी देखें",
      footerAffiliation: "उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE) से संबद्ध। अंग्रेज़ी और हिंदी दोनों माध्यम में NCERT आधारित पाठ्यक्रम, नर्सरी से कक्षा XII तक।",
      admProcessEyebrow: "यह कैसे काम करता है",
      admProcessHeading: "प्रवेश प्रक्रिया",
      admStep1Title: "पूछताछ करें",
      admStep1Desc: "नीचे फ़ॉर्म भरें या WhatsApp पर संदेश करें।",
      admStep2Title: "कैंपस देखें",
      admStep2Desc: "किसी भी कार्यदिवस में आएं, सुबह 9 – दोपहर 1।",
      admStep3Title: "दस्तावेज़ जमा करें",
      admStep3Desc: "आवश्यक दस्तावेज़ लाएं और पंजीकरण पूरा करें।",
      admStep4Title: "सीट कन्फ़र्म करें",
      admStep4Desc: "प्रवेश शुल्क का भुगतान करें और आपकी सीट सुरक्षित।",
      admFormStudentName: "छात्र का नाम",
      admFormParentName: "अभिभावक का नाम",
      admFormPhone: "फ़ोन नंबर",
      admFormEmail: "ईमेल पता",
      admFormClass: "कक्षा चुनें",
      admFormMessage: "संदेश",
      admFormResponse: "हमारी प्रवेश टीम स्कूली दिनों में 24 घंटे के भीतर जवाब देगी।",
      admWhyHeading: "KBIC क्यों",
      contactAddress: "पता",
      contactEmail: "ईमेल",
      contactPhone: "फ़ोन",
      contactFormHeading: "संदेश भेजें",
      contactFormName: "आपका नाम",
      contactFormEmail: "आपका ईमेल",
      contactFormPhone: "फ़ोन नंबर",
      contactFormMsg: "अपना संदेश लिखें",
      contactFormResponse: "हम 24 घंटे के भीतर जवाब देंगे।",
      photosTab: "फ़ोटो",
      videosTab: "वीडियो",
      loadingPhotos: "फ़ोटो लोड हो रही हैं…",
      videoHighlightsEyebrow: "वीडियो हाइलाइट्स",
      videoHighlightsHeading: "कैंपस जीवन को गति में देखें",
      campusTourGroup: "कैंपस टूर",
      eventsFestivalsGroup: "कार्यक्रम और उत्सव",
      sportsDayGroup: "खेल दिवस",
      facilitiesInsideEyebrow: "कैंपस के अंदर",
      facilitiesInsideHeading: "एक आधुनिक स्कूल में जो कुछ होना चाहिए — और उससे भी ज़्यादा।",
      facilitiesSafetyHeading: "सुरक्षा कोई सुविधा नहीं। यह नींव है।",
      facilitiesCCTVStat: "CCTV कैमरे",
      facilitiesSolarStat: "सोलर पावर",
      facilitiesBusesStat: "बसें और वैन",
      facilitiesFemCondStat: "महिला कंडक्टर",
      facilitiesSmartClassTitle: "स्मार्ट कक्षाएं",
      facilitiesSmartClassDesc: "प्रोजेक्टर, टीवी स्क्रीन, उचित वेंटिलेशन और पूर्ण सोलर इंस्टॉलेशन के माध्यम से 24/7 पावर बैकअप वाली कक्षाएं।",
      facilitiesSolarTitle: "100% सोलर संचालित",
      facilitiesSolarDesc: "पूर्ण सोलर पावर इंस्टॉलेशन बिजली कटने के दौरान भी कक्षाओं, पंखों, लाइटों और प्रोजेक्टरों का निर्बाध संचालन सुनिश्चित करता है।",
      facilitiesPlayZoneTitle: "प्ले ज़ोन (नर्सरी)",
      facilitiesPlayZoneDesc: "सबसे छोटे शिक्षार्थियों के लिए स्लाइड, ट्रैम्पोलिन, सुरंग और झूलों वाला समर्पित आउटडोर प्ले एरिया।",
      facilitiesCareStaffTitle: "देखभाल और सफ़ाई कर्मचारी",
      facilitiesCareStaffDesc: "नर्सरी बच्चों के लिए समर्पित आया, दैनिक सफ़ाई के लिए सफ़ाईकर्मी, और स्वच्छ कैंपस रखरखाव के लिए मेंटेनेंस स्टाफ।",
      resultsPageTitle: "बोर्ड परिणाम और मेरिट लिस्ट",
      resultsPageSubtitle: "उत्तराखंड बोर्ड परीक्षाओं में हमारे छात्रों की उपलब्धियां।",
      resultsHeroEyebrow: "बोर्ड परिणाम",
      feesPageTitle: "शुल्क संरचना",
      feesPageSubtitle: "सत्र 2026-27 के लिए सभी कक्षाओं का शुल्क विवरण।",
      feeSchedule: "शुल्क अनुसूची",
      onlinePayment: "ऑनलाइन भुगतान जल्द आ रहा है",
      scholarshipGuidance: "छात्रवृत्ति मार्गदर्शन",
      staffPageTitle: "हमारे शिक्षक और कर्मचारी",
      staffPageSubtitle: "हर छात्र की सफलता के पीछे समर्पित टीम।",
      teachingFaculty: "शिक्षण संकाय",
      ourCommitment: "हमारी प्रतिबद्धता",
      faqStillQuestions: "अभी भी प्रश्न हैं? हमसे संपर्क करें",
      acadJourneyEyebrow: "शैक्षणिक यात्रा",
      acadJourneyHeading: "हर चरण। हर साल। हर बच्चे की देखभाल।",
      acadSeniorSecEyebrow: "वरिष्ठ माध्यमिक - कक्षा 11 और 12",
      acadSeniorSecHeading: "अपना रास्ता चुनें। हम आपको तैयार करेंगे।",
      acadSeniorSecPara: "उत्तराखंड बोर्ड के तहत इंटरमीडिएट स्तर पर दो स्ट्रीम उपलब्ध।",
      acadPCMTitle: "विज्ञान — PCM",
      acadPCBTitle: "विज्ञान — PCB",
      acadArtsTitle: "कला / मानविकी",
      acadHowWeTeachEyebrow: "हम कैसे पढ़ाते हैं",
      acadBilingualTitle: "द्विभाषी माध्यम",
      acadBilingualPara: "अवधारणाओं की स्पष्टता सुनिश्चित करने के लिए NCERT पाठ्यक्रम अंग्रेज़ी और हिंदी दोनों माध्यम में पढ़ाया जाता है।",
      acadExpTeachersTitle: "अनुभवी शिक्षक",
      acadExpTeachersPara: "UBSE बोर्ड की तैयारी और छात्र मार्गदर्शन में वर्षों के अनुभव वाले समर्पित शिक्षक।",
      acadBoardCoachTitle: "बोर्ड परीक्षा अतिरिक्त कक्षाएं",
      acadBoardCoachPara: "कक्षा 10 और 12 के बोर्ड छात्रों के लिए अभ्यास पत्र और रिवीज़न सहित मुफ्त स्कूल के बाद कोचिंग।",
      acadJourneyPara: "खेल भरी नर्सरी की शुरुआत से बोर्ड-तैयार सीनियर्स तक — हर स्तर पर एक संरचित, देखभाल भरा मार्ग।",
      acadHowWeTeachHeading: "व्यावहारिक, व्यक्तिगत और प्रमाणित।",
      acadHowWeTeachPara: "हमारा शिक्षण दृष्टिकोण पारंपरिक अनुशासन को आधुनिक तरीकों से जोड़ता है ताकि हर छात्र आत्मविश्वासी और तैयार हो।",
      acadPCMPara: "भौतिकी, रसायन, गणित — इंजीनियरिंग, प्रौद्योगिकी और प्रतियोगी परीक्षाओं के लिए।",
      acadPCBPara: "भौतिकी, रसायन, जीव विज्ञान — चिकित्सा, पैरामेडिकल और जीवन विज्ञान करियर के लिए।",
      acadArtsPara: "हिंदी, अंग्रेज़ी, इतिहास, भूगोल, राजनीति विज्ञान, अर्थशास्त्र — मानविकी, कानून, सिविल सेवा के लिए।",
      proceedPayment: "भुगतान करें",
      acadApplyBtn: "प्रवेश के लिए आवेदन करें",
      acadExploreBtn: "कैंपस एक्सप्लोर करें",
      acadTrustEyebrow: "ये कक्षाएं देती हैं परिणाम",
      acadTrustHeading: "16 राज्य टॉप-25 स्थान। 4 ब्लॉक टॉपर। 97.6% सर्वोच्च अंक।",
      acadTrustSub: "उत्तराखंड बोर्ड मेरिट लिस्ट में लगातार 3 साल — हाई स्कूल और इंटर दोनों।",
      acadTrustBtn: "पूरे परिणाम और मेरिट लिस्ट देखें",
      successPara: "आपकी प्रवेश पूछताछ प्राप्त हो गई है। हमारी टीम इसकी समीक्षा करेगी और स्कूल के कार्यदिवसों में 24 घंटे के भीतर आपसे संपर्क करेगी।",
      transportHeading: "सुरक्षित और पर्यवेक्षित परिवहन",
      transportSub: "हर मार्ग पर GPS ट्रैकिंग, ऑनबोर्ड कैमरे और महिला कंडक्टर के साथ 11 वाहन।"
    }
  };

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };

  const setHref = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.setAttribute("href", value);
    });
  };

  const looksReal = (value) => {
    if (typeof value !== "string") return false;
    const normalized = value.trim();
    if (!normalized || normalized === "#") return false;
    if (normalized.includes("[") || normalized.includes("]")) return false;
    if (/X{4,}/.test(normalized)) return false;
    return true;
  };

  const currentLang = (() => {
    const saved = localStorage.getItem("site-lang");
    if (saved && t[saved]) return saved;
    return cfg.defaultLanguage === "hi" ? "hi" : "en";
  })();

  const getLocalSuccessPath = () =>
    window.location.pathname.includes("/pages/")
      ? "admission-success.html"
      : "pages/admission-success.html";

  const getSuccessUrl = () => {
    if (looksReal(cfg.siteUrl)) {
      return `${cfg.siteUrl.replace(/\/+$/, "")}/pages/admission-success.html`;
    }
    return getLocalSuccessPath();
  };

  const applyLanguage = (lang) => {
    const dict = t[lang] || t.en;
    document.documentElement.lang = lang;

    const navMap = {
      "index.html": dict.home,
      "about.html": dict.about,
      "academics.html": dict.academics,
      "admissions.html": dict.admissions,
      "facilities.html": dict.facilities,
      "staff.html": dict.staff,
      "gallery.html": dict.gallery,
      "news.html": dict.news,
      "contact.html": dict.contact,
      "faq.html": dict.faq,
      "results.html": dict.results,
      "fees.html": dict.fees
    };

    document.querySelectorAll(".site-nav a").forEach((link) => {
      const href = (link.getAttribute("href") || "").split("/").pop();
      if (navMap[href]) link.textContent = navMap[href];
    });

    const menuBtn = document.querySelector(".menu-toggle");
    if (menuBtn) menuBtn.textContent = dict.menu;

    const footerLinkTitle = Array.from(document.querySelectorAll("footer h3")).find(
      (h) => /Useful Links|उपयोगी लिंक/i.test(h.textContent)
    );
    if (footerLinkTitle) footerLinkTitle.textContent = dict.usefulLinks;

    const footerContactTitle = Array.from(document.querySelectorAll("footer h3")).find(
      (h) => /^Contact$|^संपर्क$/i.test(h.textContent)
    );
    if (footerContactTitle) footerContactTitle.textContent = dict.contactHeading;

    document.querySelectorAll(".js-whatsapp-label").forEach((el) => {
      el.textContent = dict.whatsapp;
    });
    document.querySelectorAll(".js-chat-admissions").forEach((el) => {
      el.textContent = dict.chatAdmissions;
    });
    document.querySelectorAll(".js-whatsapp-team").forEach((el) => {
      el.textContent = dict.whatsappTeam;
    });
    document.querySelectorAll(".js-whatsapp-admissions").forEach((el) => {
      el.textContent = dict.whatsappAdmissions;
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  };

  const injectLanguageToggle = () => {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner || headerInner.querySelector(".lang-toggle")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "lang-toggle";
    wrapper.innerHTML =
      '<button type="button" data-lang="en">EN</button><button type="button" data-lang="hi">HI</button>';

    wrapper.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang") || "en";
        localStorage.setItem("site-lang", lang);
        applyLanguage(lang);
        wrapper.querySelectorAll("button").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-lang") === lang);
        });
      });
    });

    const menuButton = document.querySelector(".menu-toggle");
    headerInner.insertBefore(wrapper, menuButton || null);

    wrapper.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  };

  const trackEvent = (eventName, payload) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  };

  const getAttribution = () => {
    const url = new URL(window.location.href);
    const stored = JSON.parse(localStorage.getItem("first_attribution") || "{}");
    const fresh = {
      utm_source: url.searchParams.get("utm_source") || stored.utm_source || "direct",
      utm_medium: url.searchParams.get("utm_medium") || stored.utm_medium || "none",
      utm_campaign:
        url.searchParams.get("utm_campaign") || stored.utm_campaign || "none",
      referrer: document.referrer || stored.referrer || "direct"
    };
    localStorage.setItem("first_attribution", JSON.stringify(fresh));
    return fresh;
  };

  if (cfg.schoolName) {
    setText(".js-school-name", cfg.schoolName);
    document.title = document.title.replace("[School Name]", cfg.schoolName);
    document
      .querySelectorAll("meta[name='description'],meta[property='og:title'],meta[property='og:description'],meta[name='twitter:title'],meta[name='twitter:description']")
      .forEach((meta) => {
        const content = meta.getAttribute("content") || "";
        meta.setAttribute(
          "content",
          content
            .replace(/\[School Name\]/g, cfg.schoolName)
            .replace(/Kheema Bisht Inter College/g, cfg.schoolName)
        );
      });
  }

  if (cfg.tagline) setText(".js-tagline", cfg.tagline);
  if (cfg.email) {
    setText(".js-email", cfg.email);
    setHref(".js-email-link", `mailto:${cfg.email}`);
  }
  if (cfg.phone) {
    setText(".js-phone", cfg.phone);
    const primaryPhone = cfg.phone.split(",")[0].replace(/\D/g, "");
    if (primaryPhone) setHref(".js-phone-link", `tel:${primaryPhone}`);
  }
  if (cfg.address) setText(".js-address", cfg.address);

  // Update copyright year automatically
  setText(".js-year", String(new Date().getFullYear()));

  const orgSchema = document.querySelector("script[type='application/ld+json']");
  if (orgSchema) {
    try {
      const parsed = JSON.parse(orgSchema.textContent || "{}");
      if (cfg.schoolName) parsed.name = cfg.schoolName;
      if (cfg.address) parsed.address = cfg.address;
      if (cfg.email) parsed.email = cfg.email;
      if (cfg.phone) parsed.telephone = cfg.phone;
      orgSchema.textContent = JSON.stringify(parsed);
    } catch (error) {
      // Ignore invalid JSON-LD and keep page rendering stable.
    }
  }

  // ---- PWA / favicon / manifest / apple-touch-icon injection ----
  // Done in JS so all 12 HTML files inherit these without per-file edits.
  (function injectHeadResources() {
    const head = document.head;
    if (!head) return;
    const inPages = window.location.pathname.includes("/pages/");
    const root = inPages ? "../" : "./";

    const ensureLink = (rel, href, attrs) => {
      const existing = Array.from(head.querySelectorAll(`link[rel="${rel}"]`));
      if (existing.some((l) => l.getAttribute("href") === href)) return;
      const link = document.createElement("link");
      link.setAttribute("rel", rel);
      link.setAttribute("href", href);
      if (attrs) {
        Object.keys(attrs).forEach((k) => link.setAttribute(k, attrs[k]));
      }
      head.appendChild(link);
    };

    ensureLink("manifest", `${root}manifest.json`);
    ensureLink("icon", `${root}favicon.svg`, { type: "image/svg+xml" });
    ensureLink("icon", `${root}assets/images/brand/logo-192.png`, { type: "image/png", sizes: "192x192" });
    ensureLink("apple-touch-icon", `${root}assets/images/brand/logo-192.png`);
    ensureLink("mask-icon", `${root}favicon.svg`, { color: "#04558a" });

    if (!head.querySelector('meta[name="theme-color"]')) {
      const tc = document.createElement("meta");
      tc.setAttribute("name", "theme-color");
      tc.setAttribute("content", "#04558a");
      head.appendChild(tc);
    }
    if (!head.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      const m = document.createElement("meta");
      m.setAttribute("name", "apple-mobile-web-app-capable");
      m.setAttribute("content", "yes");
      head.appendChild(m);
    }
    if (!head.querySelector('meta[name="apple-mobile-web-app-title"]')) {
      const m = document.createElement("meta");
      m.setAttribute("name", "apple-mobile-web-app-title");
      m.setAttribute("content", "KBIC");
      head.appendChild(m);
    }
  })();

  // ---- Skip-to-content link (a11y) ----
  (function injectSkipLink() {
    if (document.querySelector(".skip-link")) return;
    const main = document.querySelector("main");
    if (main && !main.id) main.id = "main-content";

    const link = document.createElement("a");
    link.className = "skip-link";
    link.href = "#main-content";
    link.setAttribute("data-i18n", "skipToContent");
    link.textContent = "Skip to main content";
    document.body.insertBefore(link, document.body.firstChild);
  })();

  // ---- Breadcrumbs (HTML + BreadcrumbList JSON-LD) ----
  (function injectBreadcrumbs() {
    const main = document.querySelector("main");
    if (!main) return;
    const path = window.location.pathname;
    // Skip on home page — breadcrumbs would just say "Home"
    if (path === "/" || /\/index\.html?$/.test(path)) return;
    if (main.querySelector(".breadcrumbs")) return;

    const fileName = path.split("/").pop().replace(".html", "") ||
      path.replace(/\//g, "") ||
      "page";

    const labels = {
      about: "About",
      academics: "Academics",
      admissions: "Admissions",
      facilities: "Facilities",
      staff: "Our Staff",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
      fees: "Fees",
      faq: "FAQ",
      "admission-success": "Submitted",
      "admin-news": "Admin",
      404: "Not Found"
    };
    const label = labels[fileName] || fileName.charAt(0).toUpperCase() + fileName.slice(1);

    const inPages = path.includes("/pages/");
    const homeHref = inPages ? "../index.html" : "index.html";
    const baseUrl = "https://kheemabishtintercollege.in";

    const nav = document.createElement("nav");
    nav.className = "breadcrumbs";
    nav.setAttribute("aria-label", "Breadcrumb");
    nav.innerHTML =
      '<div class="container"><ol>' +
      `<li><a href="${homeHref}" data-i18n="breadcrumbHome">Home</a></li>` +
      `<li aria-current="page">${label}</li>` +
      "</ol></div>";

    main.insertBefore(nav, main.firstChild);

    // BreadcrumbList JSON-LD for SEO
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: label,
          item: `${baseUrl}/${fileName}`
        }
      ]
    });
    document.head.appendChild(ld);
  })();

  injectLanguageToggle();
  applyLanguage(currentLang);

  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const wireForm = (selector, endpoint, typeLabel) => {
    const form = document.querySelector(selector);
    if (!form) return;

    const hasRealEndpoint =
      endpoint &&
      /^https?:\/\//.test(endpoint) &&
      !endpoint.includes("your-");

    const attribution = getAttribution();
    const leadId = `lead_${Date.now()}`;

    const setHidden = (name, value) => {
      let input = form.querySelector(`input[name="${name}"]`);
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
      }
      input.value = value;
    };

    setHidden("lead_id", leadId);
    setHidden("utm_source", attribution.utm_source);
    setHidden("utm_medium", attribution.utm_medium);
    setHidden("utm_campaign", attribution.utm_campaign);
    setHidden("referrer", attribution.referrer);

    // Honeypot: Formspree natively supports `_gotcha` — if a hidden field with
    // that name has a value, Formspree silently drops the submission. Bots that
    // blindly fill every input get caught; humans never see this field because
    // CSS class .hp-field positions it off-screen.
    if (!form.querySelector('input[name="_gotcha"]')) {
      const hp = document.createElement("input");
      hp.type = "text";
      hp.name = "_gotcha";
      hp.tabIndex = -1;
      hp.autocomplete = "off";
      hp.className = "hp-field";
      hp.setAttribute("aria-hidden", "true");
      const hpLabel = document.createElement("label");
      hpLabel.className = "hp-field";
      hpLabel.setAttribute("aria-hidden", "true");
      hpLabel.textContent = "Leave this field empty";
      hpLabel.appendChild(hp);
      form.appendChild(hpLabel);
    }

    if (selector === "#admission-form") {
      setHidden("_next", getSuccessUrl());
      setHidden("_subject", `[Admission Lead] ${cfg.schoolName || "School"} — new inquiry`);
    }
    if (selector === "#contact-form") {
      setHidden("_subject", `[Contact] ${cfg.schoolName || "School"} — website message`);
    }

    form.addEventListener("submit", (event) => {
      // Local honeypot check (in addition to Formspree's _gotcha handling).
      const gotcha = form.querySelector('input[name="_gotcha"]');
      if (gotcha && gotcha.value) {
        event.preventDefault();
        // Silently drop — don't tell the bot it was caught.
        return;
      }

      trackEvent("form_submit", {
        form_name: typeLabel,
        lead_id: leadId,
        page_path: window.location.pathname,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign
      });

      if (!hasRealEndpoint) {
        event.preventDefault();
        const status = form.querySelector(".form-status");
        if (status) {
          status.textContent = `To activate ${typeLabel} submissions, add a real endpoint in assets/js/site-config.js.`;
        }
      }
    });

    if (hasRealEndpoint) {
      form.setAttribute("action", endpoint);
      form.setAttribute("method", "POST");
    }
  };

  wireForm("#admission-form", cfg.admissionFormEndpoint, "admission form");
  wireForm("#contact-form", cfg.contactFormEndpoint, "contact form");

  // Wire fee form to show coming-soon message
  const feeForm = document.querySelector("#fee-form");
  if (feeForm) {
    feeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = feeForm.querySelector(".form-status");
      if (status) {
        status.textContent = "Fee payment gateway coming soon. Please pay fees at the school office.";
      }
    });
  }

  // Back-to-top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "back-to-top";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  backToTopBtn.innerHTML = "↑";
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", () => {
    const isVisible = window.scrollY > 400;
    backToTopBtn.classList.toggle("visible", isVisible);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (looksReal(cfg.whatsappNumber)) {
    const primaryWhatsApp = cfg.whatsappNumber.split(",")[0].replace(/\D/g, "");
    if (primaryWhatsApp) {
      const msg = encodeURIComponent(
        cfg.whatsappMessage || "Hello, I need information."
      );
      const waUrl = `https://wa.me/${primaryWhatsApp}?text=${msg}`;

      document.querySelectorAll(".js-whatsapp-link").forEach((el) => {
        el.setAttribute("href", waUrl);
      });

      const floatBtn = document.createElement("a");
      floatBtn.href = waUrl;
      floatBtn.target = "_blank";
      floatBtn.rel = "noopener noreferrer";
      floatBtn.className = "whatsapp-float";
      floatBtn.setAttribute("aria-label", "Chat on WhatsApp");
      floatBtn.innerHTML = `<span>${(t[currentLang] || t.en).whatsapp}</span>`;
      document.body.appendChild(floatBtn);
    }
  }

  if (looksReal(cfg.siteUrl)) {
    const cleanBase = cfg.siteUrl.replace(/\/+$/, "");
    const fullUrl = `${cleanBase}${window.location.pathname}`;
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) canonical.setAttribute("href", fullUrl);

    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) ogUrl.setAttribute("content", fullUrl);
  }

  const tickerTrack = document.querySelector(".announcement-track");
  if (tickerTrack && Array.isArray(cfg.announcements) && cfg.announcements.length) {
    const combined = [...cfg.announcements, ...cfg.announcements];
    tickerTrack.innerHTML = combined.map((item) => `<span>${item}</span>`).join("");
  }

  // ---- Gallery (tabs + grid + lightbox) ----
  // Reads a JSON manifest written by process_photos.py that maps each category
  // to a list of { slug, alt } entries. For each photo the thumbnail lives at
  // `{base}/{category}/{slug}-thumb.jpg` and the full-size at `{base}/{category}/{slug}.jpg`.
  (function initGallery() {
    const root = document.getElementById("gallery-root");
    if (!root) return;

    const manifestUrl = root.getAttribute("data-manifest");
    const basePath = (root.getAttribute("data-base") || "").replace(/\/$/, "");
    if (!manifestUrl || !basePath) return;

    const CATEGORY_LABELS = {
      all: "All",
      campus: "Campus",
      sports: "Sports",
      cultural: "Cultural",
      academic: "Academic",
      events: "Events",
      staff: "Staff"
    };

    const lightbox = document.getElementById("lightbox");
    const lbImg = lightbox && lightbox.querySelector(".lightbox-img");
    const lbCap = lightbox && lightbox.querySelector(".lightbox-caption");
    const lbCounter = lightbox && lightbox.querySelector(".lightbox-counter");
    const lbClose = lightbox && lightbox.querySelector(".lightbox-close");
    const lbPrev = lightbox && lightbox.querySelector(".lightbox-prev");
    const lbNext = lightbox && lightbox.querySelector(".lightbox-next");

    // State for the currently visible photo set (after tab filtering).
    let visible = [];
    let currentIdx = 0;

    const openLightbox = (idx) => {
      if (!lightbox || !visible.length) return;
      currentIdx = (idx + visible.length) % visible.length;
      const item = visible[currentIdx];
      lbImg.src = item.full;
      lbImg.alt = item.alt || "";
      if (lbCap) lbCap.textContent = item.alt || "";
      if (lbCounter) lbCounter.textContent = `${currentIdx + 1} / ${visible.length}`;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      if (lbClose) lbClose.focus();
    };

    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lbImg) lbImg.src = "";
    };

    const step = (delta) => openLightbox(currentIdx + delta);

    if (lightbox) {
      if (lbClose) lbClose.addEventListener("click", closeLightbox);
      if (lbPrev) lbPrev.addEventListener("click", () => step(-1));
      if (lbNext) lbNext.addEventListener("click", () => step(1));
      lightbox.addEventListener("click", (e) => {
        // Click on the dark backdrop (not the figure/controls) closes.
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        else if (e.key === "ArrowLeft") step(-1);
        else if (e.key === "ArrowRight") step(1);
      });
    }

    const buildGrid = (items) => {
      visible = items;
      const grid = document.createElement("div");
      grid.className = "gallery-grid";
      items.forEach((item, idx) => {
        const fig = document.createElement("figure");
        fig.className = "gallery-photo";
        fig.innerHTML =
          `<button type="button" class="gallery-photo-btn" aria-label="Open photo: ${item.alt || ""}">` +
          `<img src="${item.thumb}" alt="${item.alt || ""}" loading="lazy" decoding="async" />` +
          "</button>" +
          `<figcaption>${item.alt || ""}</figcaption>`;
        fig.querySelector("button").addEventListener("click", () => openLightbox(idx));
        // If a thumbnail fails to load, mark the card but keep layout stable.
        fig.querySelector("img").addEventListener("error", () => {
          fig.classList.add("missing");
        });
        grid.appendChild(fig);
      });
      return grid;
    };

    fetch(manifestUrl)
      .then((res) => {
        if (!res.ok) throw new Error("manifest load failed: " + res.status);
        return res.json();
      })
      .then((manifest) => {
        // Flatten per-category entries into {category, slug, alt, thumb, full}
        const categories = Object.keys(manifest).filter(
          (c) => Array.isArray(manifest[c]) && manifest[c].length > 0
        );
        if (!categories.length) {
          root.innerHTML = "<p>No photos yet. Check back soon.</p>";
          return;
        }

        const expand = (cat) =>
          manifest[cat].map((entry) => ({
            category: cat,
            slug: entry.slug,
            alt: entry.alt || "",
            thumb: `${basePath}/${cat}/${entry.slug}-thumb.jpg`,
            full: `${basePath}/${cat}/${entry.slug}.jpg`
          }));

        const allItems = categories.reduce((acc, cat) => acc.concat(expand(cat)), []);

        // Clear the "Loading photos…" placeholder.
        root.innerHTML = "";

        // Tabs: "All" first, then each category that has photos.
        const tabs = document.createElement("div");
        tabs.className = "gallery-tabs";
        tabs.setAttribute("role", "tablist");
        const tabKeys = ["all", ...categories];
        const tabButtons = {};
        tabKeys.forEach((key) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "gallery-tab";
          btn.setAttribute("role", "tab");
          btn.dataset.category = key;
          const count = key === "all" ? allItems.length : manifest[key].length;
          btn.innerHTML = `${CATEGORY_LABELS[key] || key} <span class="gallery-tab-count">${count}</span>`;
          tabs.appendChild(btn);
          tabButtons[key] = btn;
        });
        root.appendChild(tabs);

        // Grid wrapper — we'll replace its contents on tab switch.
        const gridWrap = document.createElement("div");
        gridWrap.className = "gallery-grid-wrap";
        root.appendChild(gridWrap);

        const showCategory = (key) => {
          Object.keys(tabButtons).forEach((k) => {
            tabButtons[k].classList.toggle("active", k === key);
            tabButtons[k].setAttribute("aria-selected", k === key ? "true" : "false");
          });
          const items = key === "all" ? allItems : expand(key);
          gridWrap.innerHTML = "";
          gridWrap.appendChild(buildGrid(items));
        };

        tabKeys.forEach((key) => {
          tabButtons[key].addEventListener("click", () => showCategory(key));
        });

        // Default view: "all"
        showCategory("all");
      })
      .catch((err) => {
        root.innerHTML = `<p class="gallery-error">Could not load photos (${err.message}). Please try refreshing.</p>`;
      });
  })();

  const revealElements = document.querySelectorAll("[data-reveal]");
  if (revealElements.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  const counters = document.querySelectorAll("[data-counter]");
  const animateCounter = (el) => {
    const target = Number(el.getAttribute("data-counter")) || 0;
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (counters.length && cfg.counters) {
    const mapping = {
      students: cfg.counters.students,
      faculty: cfg.counters.faculty,
      years: cfg.counters.years
    };

    counters.forEach((el) => {
      const key = el.getAttribute("data-counter-key");
      if (key && Number.isFinite(Number(mapping[key]))) {
        el.setAttribute("data-counter", String(mapping[key]));
      }
    });

    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    } else {
      counters.forEach((el) => animateCounter(el));
    }
  }

  const newsList = document.querySelector("#news-list");
  const newsStatus = document.querySelector("#news-status");
  if (newsList) {
    const prefix = window.location.pathname.includes("/pages/") ? "../" : "./";
    fetch(`${prefix}assets/data/news.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load news.");
        return res.json();
      })
      .then((items) => {
        if (!Array.isArray(items)) throw new Error("Invalid news format.");
        newsList.innerHTML = items
          .map((item) => `<li><strong>${item.date}:</strong> ${item.title}</li>`)
          .join("");
        if (newsStatus) newsStatus.textContent = "";
      })
      .catch(() => {
        if (newsStatus) {
          newsStatus.textContent =
            "Could not load latest notices. Please check assets/data/news.json.";
        }
      });
  }

  if (window.location.pathname.includes("admission-success.html")) {
    trackEvent("admission_success_view", { page_path: window.location.pathname });
  }

  // ---- Skip-to-content link (accessibility) ----
  (function setupSkipLink() {
    if (document.querySelector(".skip-to-content")) return;
    const skip = document.createElement("a");
    skip.className = "skip-to-content";
    skip.href = "#main";
    skip.textContent = "Skip to main content";
    document.body.insertBefore(skip, document.body.firstChild);
    // If no #main exists, attach id to first <main> element
    if (!document.getElementById("main")) {
      const mainEl = document.querySelector("main");
      if (mainEl && !mainEl.id) mainEl.id = "main";
    }
  })();

  // ---- Top utility bar (phone + email left, social icons right) ----
  (function setupTopBar() {
    if (document.querySelector(".top-utility-bar")) return;
    const header = document.querySelector(".site-header");
    if (!header) return;

    const phoneRaw = (cfg.phone || "").split(",")[0].replace(/\D/g, "");
    const phoneDisplay = (cfg.phone || "").split(",")[0].trim();
    const email = cfg.email || "";
    const fb = cfg.facebookUrl || "";
    const ig = cfg.instagramUrl || "";
    const yt = cfg.youtubeUrl || "";
    const waNumber = (cfg.whatsappNumber || "").replace(/\D/g, "");
    const waIntl = waNumber.length === 10 ? "91" + waNumber : waNumber;
    const waMsg = encodeURIComponent(cfg.whatsappMessage || "Hello, I want admission info for my child.");

    const bar = document.createElement("div");
    bar.className = "top-utility-bar";
    bar.innerHTML = `
      <div class="container top-utility-inner">
        <div class="top-utility-contact">
          ${phoneDisplay ? `<a href="tel:${phoneRaw}" class="top-utility-item" aria-label="Call school">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${phoneDisplay}</span>
          </a>` : ""}
          ${email ? `<a href="mailto:${email}" class="top-utility-item top-utility-item-email" aria-label="Email school">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            <span>${email}</span>
          </a>` : ""}
        </div>
        <div class="top-utility-social" aria-label="Social media">
          ${fb ? `<a href="${fb}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="top-social-link" data-net="fb">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>` : ""}
          ${ig ? `<a href="${ig}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="top-social-link" data-net="ig">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>` : ""}
          ${yt ? `<a href="${yt}" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="top-social-link" data-net="yt">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>` : ""}
          ${waIntl ? `<a href="https://wa.me/${waIntl}?text=${waMsg}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="top-social-link" data-net="wa">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </a>` : ""}
        </div>
      </div>
    `;
    // Insert BEFORE the header so it sits at the very top
    header.parentNode.insertBefore(bar, header);
  })();

  // ---- Shrinking sticky header on scroll ----
  (function setupHeaderShrink() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    let lastState = false;
    const onScroll = () => {
      const shouldShrink = window.scrollY > 80;
      if (shouldShrink !== lastState) {
        header.classList.toggle("is-scrolled", shouldShrink);
        lastState = shouldShrink;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();

  // ---- Back-to-top button ----
  (function setupBackToTop() {
    if (document.querySelector(".back-to-top")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    `;
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      trackEvent("back_to_top_click", { page_path: window.location.pathname });
    });

    const onScroll = () => {
      btn.classList.toggle("is-visible", window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();

  // ---- Scroll progress bar (thin gold line at top) ----
  (function setupScrollProgress() {
    if (document.getElementById("scroll-progress")) return;
    const bar = document.createElement("div");
    bar.id = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    let ticking = false;
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const max = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const pct = max > 0 ? Math.min((scrollTop / max) * 100, 100) : 0;
      bar.style.width = pct + "%";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateProgress);
          ticking = true;
        }
      },
      { passive: true }
    );
    updateProgress();
  })();

  // ---- Floating WhatsApp button (bottom-right, all pages) ----
  (function setupWhatsAppFloat() {
    if (document.querySelector(".whatsapp-float")) return;
    const number = (cfg.whatsappNumber || "").replace(/\D/g, "");
    if (!number) return;
    const intl = number.length === 10 ? "91" + number : number;
    const msg = encodeURIComponent(cfg.whatsappMessage || "Hello, I want admission info for my child.");
    const url = `https://wa.me/${intl}?text=${msg}`;

    const a = document.createElement("a");
    a.className = "whatsapp-float";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", "Chat on WhatsApp");
    a.innerHTML = `
      <span class="whatsapp-float-pulse" aria-hidden="true"></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
      <span class="whatsapp-float-label">Chat with us</span>
    `;
    document.body.appendChild(a);

    // Track click for analytics
    a.addEventListener("click", () => {
      trackEvent("whatsapp_float_click", { page_path: window.location.pathname });
    });
  })();

  // ---- News page: show "Last updated" from latest notice date ----
  if (newsList) {
    const lastUpdatedEl = document.getElementById("news-last-updated");
    // Re-hook into the fetch result above by observing mutations OR re-fetch
    // Simpler: re-run a lightweight fetch to get the latest date
    const prefix = window.location.pathname.includes("/pages/") ? "../" : "./";
    fetch(`${prefix}assets/data/news.json`)
      .then((res) => (res.ok ? res.json() : []))
      .then((items) => {
        if (!Array.isArray(items) || items.length === 0) return;
        // Find latest date (items may be unsorted, pick max)
        const parseDate = (s) => {
          const d = new Date(s);
          return isNaN(d.getTime()) ? null : d;
        };
        const dates = items.map((i) => parseDate(i.date)).filter(Boolean);
        if (!dates.length) return;
        const latest = new Date(Math.max.apply(null, dates));
        const formatted = latest.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        if (lastUpdatedEl) {
          lastUpdatedEl.textContent = `Last updated: ${formatted}`;
        }
      })
      .catch(() => {});
  }

  // ====================================================================
  // Ken-burns hero background — inject an animated .hero-bg-image element
  // ====================================================================
  (function setupKenBurnsHero() {
    const hero = document.querySelector(".hero-with-bg");
    if (!hero) return;
    if (hero.querySelector(".hero-bg-image")) return;
    const bg = document.createElement("div");
    bg.className = "hero-bg-image";
    bg.setAttribute("aria-hidden", "true");
    hero.insertBefore(bg, hero.firstChild);
  })();

  // ====================================================================
  // Hero decorative floating particles (subtle gold motes drifting up)
  // ====================================================================
  (function setupHeroParticles() {
    const hero = document.querySelector(".hero-with-bg");
    if (!hero) return;
    if (hero.querySelector(".hero-particles")) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = document.createElement("div");
    wrap.className = "hero-particles";
    wrap.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 10; i++) {
      const p = document.createElement("span");
      p.className = "hero-particle";
      wrap.appendChild(p);
    }
    hero.appendChild(wrap);
  })();

  // ====================================================================
  // Testimonial carousel — progressively enhance .testimonial-grid
  // Auto-rotates, dot indicators, prev/next arrows, swipe on touch.
  // ====================================================================
  (function setupTestimonialCarousel() {
    const grid = document.querySelector(".testimonial-grid");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll(".card"));
    if (cards.length < 2) return;

    // Build structure
    const carousel = document.createElement("div");
    carousel.className = "testimonial-carousel";
    const track = document.createElement("div");
    track.className = "testimonial-carousel-track";
    const viewport = document.createElement("div");
    viewport.className = "testimonial-carousel-viewport";
    cards.forEach((c) => viewport.appendChild(c));
    track.appendChild(viewport);
    carousel.appendChild(track);

    // Arrow buttons
    const mkBtn = (dir, label, iconPath) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "testimonial-carousel-btn " + dir;
      b.setAttribute("aria-label", label);
      b.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${iconPath}"/></svg>`;
      return b;
    };
    const prevBtn = mkBtn("prev", "Previous testimonial", "m15 18-6-6 6-6");
    const nextBtn = mkBtn("next", "Next testimonial", "m9 18 6-6-6-6");
    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    // Dot indicators
    const dotsWrap = document.createElement("div");
    dotsWrap.className = "testimonial-carousel-dots";
    dotsWrap.setAttribute("role", "tablist");
    const dots = cards.map((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "testimonial-carousel-dot";
      d.setAttribute("aria-label", `Show testimonial ${i + 1}`);
      dotsWrap.appendChild(d);
      return d;
    });
    carousel.appendChild(dotsWrap);

    // Replace the grid with the carousel
    grid.parentNode.replaceChild(carousel, grid);

    // State + navigation
    let index = 0;
    let autoTimer = null;
    const AUTO_MS = 6000;
    const go = (n) => {
      index = (n + cards.length) % cards.length;
      viewport.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    };
    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    prevBtn.addEventListener("click", () => { prev(); restartAuto(); });
    nextBtn.addEventListener("click", () => { next(); restartAuto(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); restartAuto(); }));

    const startAuto = () => { autoTimer = setInterval(next, AUTO_MS); };
    const stopAuto = () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } };
    const restartAuto = () => { stopAuto(); startAuto(); };

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    // Touch swipe
    let touchStartX = 0;
    let touchEndX = 0;
    viewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });
    viewport.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) > 40) {
        if (delta < 0) next(); else prev();
      }
      startAuto();
    }, { passive: true });

    // Keyboard nav when carousel has focus
    carousel.tabIndex = 0;
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  { prev(); restartAuto(); }
      if (e.key === "ArrowRight") { next(); restartAuto(); }
    });

    // Init
    go(0);
    startAuto();
  })();

  // ====================================================================
  // PWA install prompt (Add to Home Screen banner)
  // Only shows on supported browsers, dismissible, remembers dismissal.
  // ====================================================================
  (function setupPWAInstallPrompt() {
    const DISMISS_KEY = "kbic_pwa_dismissed_v1";
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch (_) { /* localStorage blocked — continue */ }

    let deferredPrompt = null;
    const showBanner = () => {
      if (document.querySelector(".pwa-install-banner")) return;
      const b = document.createElement("div");
      b.className = "pwa-install-banner";
      b.setAttribute("role", "dialog");
      b.setAttribute("aria-label", "Install this site as an app");
      b.innerHTML = `
        <img src="${window.location.pathname.includes("/pages/") ? "../" : ""}assets/images/brand/logo-192.png" alt="" />
        <div class="pwa-install-banner-text">
          <p class="pwa-install-banner-title">Install Kheema Bisht Inter College</p>
          <p class="pwa-install-banner-sub">Quick access from your home screen — works even offline.</p>
        </div>
        <div class="pwa-install-banner-actions">
          <button type="button" class="pwa-install-btn">Install</button>
          <button type="button" class="pwa-install-dismiss" aria-label="Dismiss">&times;</button>
        </div>
      `;
      document.body.appendChild(b);
      requestAnimationFrame(() => b.classList.add("is-visible"));

      const hide = (dismissed) => {
        b.classList.remove("is-visible");
        setTimeout(() => b.remove(), 500);
        if (dismissed) {
          try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch (_) {}
        }
      };

      b.querySelector(".pwa-install-btn").addEventListener("click", async () => {
        if (!deferredPrompt) { hide(true); return; }
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        trackEvent("pwa_install_prompt", { outcome: choice.outcome });
        deferredPrompt = null;
        hide(true);
      });
      b.querySelector(".pwa-install-dismiss").addEventListener("click", () => {
        trackEvent("pwa_install_prompt", { outcome: "dismissed" });
        hide(true);
      });
    };

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      // Wait 25 seconds so we don't nag immediately on page load
      setTimeout(showBanner, 25000);
    });

    window.addEventListener("appinstalled", () => {
      trackEvent("pwa_installed");
      try { localStorage.setItem(DISMISS_KEY, "installed"); } catch (_) {}
    });
  })();

  // ====================================================================
  // WhatsApp quick-reply popup — replaces simple float button behaviour
  // Click the floating WA button → opens popup with pre-filled options
  // ====================================================================
  (function setupWhatsAppQuickReply() {
    const float = document.querySelector(".whatsapp-float");
    if (!float) return;
    if (document.querySelector(".whatsapp-popup")) return;

    const rawNumber = (cfg.whatsappNumber || "").replace(/\D/g, "");
    if (!rawNumber) return;
    const intl = rawNumber.length === 10 ? "91" + rawNumber : rawNumber;
    const waUrl = (text) => `https://wa.me/${intl}?text=${encodeURIComponent(text)}`;

    const QUICK_REPLIES = [
      { label: "Admission info for my child",  msg: "Hello, I want admission information for my child." },
      { label: "Schedule a campus visit",       msg: "Hello, I would like to visit the campus. When is a good time?" },
      { label: "Fee details & payment options", msg: "Hello, can you share the fee details and payment options?" },
      { label: "Transport / school bus routes", msg: "Hello, does your school bus serve my area? Please share route details." },
      { label: "Something else",                msg: "Hello, I have a question about Kheema Bisht Inter College." }
    ];

    const popup = document.createElement("div");
    popup.className = "whatsapp-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", "WhatsApp quick reply");
    popup.innerHTML = `
      <div class="whatsapp-popup-header">
        <div class="whatsapp-popup-header-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </div>
        <div class="whatsapp-popup-header-text">
          <p class="whatsapp-popup-header-title">KBIC Admissions</p>
          <p class="whatsapp-popup-header-sub">Usually replies within 1 hour</p>
        </div>
        <button type="button" class="whatsapp-popup-close" aria-label="Close">&times;</button>
      </div>
      <div class="whatsapp-popup-body">
        <div class="whatsapp-popup-greeting">
          <strong>Namaste!</strong> How can we help you today? Tap any option below to start a WhatsApp chat with our admissions team.
        </div>
        <div class="whatsapp-popup-actions"></div>
      </div>
    `;
    const actionsWrap = popup.querySelector(".whatsapp-popup-actions");
    QUICK_REPLIES.forEach((r) => {
      const a = document.createElement("a");
      a.className = "whatsapp-quick-reply";
      a.href = waUrl(r.msg);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = r.label;
      a.addEventListener("click", () => {
        trackEvent("whatsapp_quick_reply", { option: r.label });
      });
      actionsWrap.appendChild(a);
    });
    document.body.appendChild(popup);

    // Intercept the float click → toggle popup instead of going straight to WA
    // (Keep the existing href as a fallback for no-JS / screen reader users)
    const togglePopup = (open) => {
      popup.classList.toggle("is-open", open);
    };

    float.addEventListener("click", (e) => {
      e.preventDefault();
      const willOpen = !popup.classList.contains("is-open");
      togglePopup(willOpen);
      if (willOpen) {
        trackEvent("whatsapp_popup_open", { page_path: window.location.pathname });
      }
    });

    popup.querySelector(".whatsapp-popup-close").addEventListener("click", () => togglePopup(false));

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!popup.classList.contains("is-open")) return;
      if (popup.contains(e.target) || float.contains(e.target)) return;
      togglePopup(false);
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && popup.classList.contains("is-open")) togglePopup(false);
    });
  })();
})();
