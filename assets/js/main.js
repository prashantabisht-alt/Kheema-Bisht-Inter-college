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
      aboutPageSubtitle: "Replace this with your school history, mission, and vision.",
      mottoEyebrow: "Our Motto",
      mottoCaption: "The guiding principle behind everything we do — open doors for every student, and raise the bar for each one.",
      academicsPageTitle: "Academics",
      academicsPageSubtitle: "Update with your board, streams, and subjects.",
      facilitiesPageTitle: "Facilities",
      facilitiesPageSubtitle: "Update these as per your campus.",
      galleryPageTitle: "Gallery",
      galleryPageSubtitle:
        "Drop your photos into `assets/images/gallery/` using the same filenames listed below.",
      newsPageTitle: "News & Notices",
      newsPageSubtitle: "Latest updates are loaded from `assets/data/news.json`.",
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
      aboutStoryPara2: "Affiliated to the Uttarakhand Board of School Education (UBSE), the college has grown from a small institution into a trusted name in education, known for its dedicated faculty, disciplined environment, and focus on overall student development.",
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
      aboutAffiliationPara: "Uttarakhand Board of School Education (UBSE), Government of Uttarakhand.",
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
      skipToContent: "Skip to main content"
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
      aboutPageSubtitle: "यहां अपने स्कूल का इतिहास, मिशन और विज़न जोड़ें।",
      mottoEyebrow: "हमारा ध्येय",
      mottoCaption: "यही वह मार्गदर्शक सिद्धांत है जिस पर हम चलते हैं — हर छात्र के लिए द्वार खुले रखना, और हर एक से उत्कृष्टता की अपेक्षा रखना।",
      academicsPageTitle: "शैक्षणिक",
      academicsPageSubtitle: "यहां बोर्ड, स्ट्रीम और विषयों की जानकारी अपडेट करें।",
      facilitiesPageTitle: "सुविधाएं",
      facilitiesPageSubtitle: "अपने परिसर के अनुसार इन विवरणों को अपडेट करें।",
      galleryPageTitle: "गैलरी",
      galleryPageSubtitle:
        "अपनी फ़ोटो `assets/images/gallery/` में नीचे दिए गए नामों से जोड़ें।",
      newsPageTitle: "समाचार और सूचनाएं",
      newsPageSubtitle: "नवीनतम अपडेट `assets/data/news.json` से लोड होते हैं।",
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
      aboutStoryPara2: "उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE) से संबद्ध, यह कॉलेज एक छोटी संस्था से विकसित होकर शिक्षा के क्षेत्र में एक विश्वसनीय नाम बन गया है, जो अपने समर्पित संकाय, अनुशासित वातावरण और समग्र छात्र विकास पर ध्यान के लिए जाना जाता है।",
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
      aboutAffiliationPara: "उत्तराखंड स्कूल शिक्षा बोर्ड (UBSE), उत्तराखंड सरकार।",
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
      skipToContent: "मुख्य सामग्री पर जाएं"
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
      "faq.html": dict.faq
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
      achievements: cfg.counters.achievements,
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
})();
