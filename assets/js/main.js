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
        "Use this inquiry form now. Once you add a Formspree endpoint in config, submissions become live.",
      submitInquiry: "Submit Inquiry",
      contactPageTitle: "Contact Us",
      contactPageSubtitle: "Keep details as placeholders for now. Replace when ready.",
      sendMessage: "Send Message",
      aboutPageTitle: "About",
      aboutPageSubtitle: "Replace this with your school history, mission, and vision.",
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
      viewAdmissions: "View Admissions"
    },
    hi: {
      menu: "मेन्यू",
      home: "होम",
      about: "हमारे बारे में",
      academics: "शैक्षणिक",
      admissions: "प्रवेश",
      facilities: "सुविधाएं",
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
        "अभी यह पूछताछ फॉर्म उपयोग करें। कॉन्फिग में Formspree endpoint जोड़ते ही सबमिशन लाइव हो जाएंगे।",
      submitInquiry: "पूछताछ भेजें",
      contactPageTitle: "संपर्क करें",
      contactPageSubtitle: "अभी विवरण प्लेसहोल्डर के रूप में रखें। तैयार होने पर बदलें।",
      sendMessage: "संदेश भेजें",
      aboutPageTitle: "हमारे बारे में",
      aboutPageSubtitle: "यहां अपने स्कूल का इतिहास, मिशन और विज़न जोड़ें।",
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
      viewAdmissions: "प्रवेश पेज देखें"
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
      "gallery.html": dict.gallery,
      "news.html": dict.news,
      "contact.html": dict.contact
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
            .replace(/Kheema Bisht Inter college/g, cfg.schoolName)
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

    if (selector === "#admission-form") {
      setHidden("_next", getSuccessUrl());
      setHidden("_subject", `${cfg.schoolName || "School"} Admission Lead`);
    }

    form.addEventListener("submit", (event) => {
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

  document.querySelectorAll(".gallery-photo img").forEach((img) => {
    img.addEventListener("error", () => {
      const card = img.closest(".gallery-photo");
      if (card) card.classList.add("missing");
    });
  });

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
