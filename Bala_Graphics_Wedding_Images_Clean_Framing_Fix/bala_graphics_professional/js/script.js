
/* =====================================================
   BALA GRAPHICS
   Complete Website JavaScript
   ===================================================== */

// BUSINESS SETTINGS
const WHATSAPP_NUMBER = "918825997041";

// =====================================================
// 1. YOUR ORIGINAL POSTERS
// =====================================================

const myCreations = [
  {
    id: 1,
    title: "My Original Poster 01",
    code: "BG-OLD-001",
    image: "images/my-creations/poster-01.jpg",
    format: "JPG",
    description: "Original poster created by Bala Graphics."
  },
  {
    id: 2,
    title: "My Original Poster 02",
    code: "BG-OLD-002",
    image: "images/my-creations/poster-02.jpg",
    format: "JPG",
    description: "Original poster created by Bala Graphics."
  },
  {
    id: 3,
    title: "My Original Poster 03",
    code: "BG-OLD-003",
    image: "images/my-creations/poster-03.jpg",
    format: "JPG",
    description: "Original poster created by Bala Graphics."
  },
  {
    id: 4,
    title: "My Original Poster 04",
    code: "BG-OLD-004",
    image: "images/my-creations/poster-04.jpg",
    format: "JPG",
    description: "Original poster created by Bala Graphics."
  }
];

// =====================================================
// 2. WEBSITE DESIGN COLLECTION
// =====================================================
// Add new designs here.
// Every design must have a unique identity code.
// Add image files inside the images folder.

const designs = [

  // WEDDING DESIGNS — sample artwork assigned to every requested size.
  // Replace/reassign these image paths when you add your own size-specific designs.
  { id: 101, title: "Design Sample 01", category: "Wedding", format: "JPG", size: "5X8", code: "BG-WED-001", image: "images/wedding/wedding-banner.jpg", downloadFile: "images/wedding/wedding-banner.jpg", description: "Sample wedding design for 5X8 size." },
  { id: 102, title: "Design Sample 02", category: "Wedding", format: "JPG", size: "10X5", code: "BG-WED-002", image: "images/wedding/wedding-banner-02.jpg", downloadFile: "images/wedding/wedding-banner-02.jpg", description: "Sample wedding design for 10X5 size." },
  { id: 103, title: "Design Sample 03", category: "Wedding", format: "JPG", size: "10X8", code: "BG-WED-003", image: "images/wedding/wedding-banner-03.jpg", downloadFile: "images/wedding/wedding-banner-03.jpg", description: "Sample wedding design for 10X8 size." },
  { id: 104, title: "Design Sample 04", category: "Wedding", format: "JPG", size: "12X8", code: "BG-WED-004", image: "images/wedding/wedding-banner-04.jpg", downloadFile: "images/wedding/wedding-banner-04.jpg", description: "Sample wedding design for 12X8 size." },
  { id: 105, title: "Design Sample 05", category: "Wedding", format: "JPG", size: "10X10", code: "BG-WED-005", image: "images/wedding/wedding-banner.jpg", downloadFile: "images/wedding/wedding-banner.jpg", description: "Sample wedding design for 10X10 size." },
  { id: 106, title: "Design Sample 06", category: "Wedding", format: "JPG", size: "15X8", code: "BG-WED-006", image: "images/wedding/wedding-banner-02.jpg", downloadFile: "images/wedding/wedding-banner-02.jpg", description: "Sample wedding design for 15X8 size." },
  { id: 107, title: "Design Sample 07", category: "Wedding", format: "JPG", size: "20X8", code: "BG-WED-007", image: "images/wedding/wedding-banner-03.jpg", downloadFile: "images/wedding/wedding-banner-03.jpg", description: "Sample wedding design for 20X8 size." },

  // FLEX DESIGNS — sample flex artwork assigned to every requested size.
  { id: 501, title: "Flex Design Sample 01", category: "Flex", format: "JPG", size: "5X8", code: "BG-FLX-001", price: "₹600", image: "images/political/political-flex.jpg", downloadFile: "images/political/political-flex.jpg", description: "Sample flex design for 5X8 size." },
  { id: 502, title: "Flex Design Sample 02", category: "Flex", format: "JPG", size: "10X5", code: "BG-FLX-002", price: "₹700", image: "images/political/political-flex-02.jpg", downloadFile: "images/political/political-flex-02.jpg", description: "Sample flex design for 10X5 size." },
  { id: 503, title: "Flex Design Sample 03", category: "Flex", format: "JPG", size: "10X8", code: "BG-FLX-003", price: "₹1,000", image: "images/political/political-flex.jpg", downloadFile: "images/political/political-flex.jpg", description: "Sample flex design for 10X8 size." },
  { id: 504, title: "Flex Design Sample 04", category: "Flex", format: "JPG", size: "12X8", code: "BG-FLX-004", price: "₹1,200", image: "images/political/political-flex-02.jpg", downloadFile: "images/political/political-flex-02.jpg", description: "Sample flex design for 12X8 size." },
  { id: 505, title: "Flex Design Sample 05", category: "Flex", format: "JPG", size: "10X10", code: "BG-FLX-005", price: "₹1,200", image: "images/political/political-flex.jpg", downloadFile: "images/political/political-flex.jpg", description: "Sample flex design for 10X10 size." },
  { id: 506, title: "Flex Design Sample 06", category: "Flex", format: "JPG", size: "15X8", code: "BG-FLX-006", price: "₹1,500", image: "images/political/political-flex-02.jpg", downloadFile: "images/political/political-flex-02.jpg", description: "Sample flex design for 15X8 size." },
  { id: 507, title: "Flex Design Sample 07", category: "Flex", format: "JPG", size: "20X8", code: "BG-FLX-007", price: "₹2,000", image: "images/political/political-flex.jpg", downloadFile: "images/political/political-flex.jpg", description: "Sample flex design for 20X8 size." },

  // INVITATION — OFFSET. No prices are shown for invitation designs.
  { id: 201, title: "Offset A4 Invitation Sample", category: "Invitation", invitationType: "Offset", invitationCategory: "A4", format: "JPG", size: "A4", code: "BG-OFF-A4-001", image: "images/invitation/marriage-invitation.jpg", downloadFile: "images/invitation/marriage-invitation.jpg", description: "Sample Offset A4 invitation design." },
  { id: 202, title: "Offset Friends Card Sample", category: "Invitation", invitationType: "Offset", invitationCategory: "Friends Card", format: "JPG", size: "Friends Card", code: "BG-OFF-FC-001", image: "images/invitation/marriage-invitation-02.jpg", downloadFile: "images/invitation/marriage-invitation-02.jpg", description: "Sample Offset Friends Card design." },
  { id: 203, title: "Offset Premium Card Sample", category: "Invitation", invitationType: "Offset", invitationCategory: "Premium Cards", format: "JPG", size: "Premium Cards", code: "BG-OFF-PC-001", image: "images/invitation/marriage-invitation-03.jpg", downloadFile: "images/invitation/marriage-invitation-03.jpg", description: "Sample Offset Premium Card design." },

  // INVITATION — MULTICOLOR. No prices are shown for invitation designs.
  { id: 204, title: "Multicolor A4 Invitation Sample", category: "Invitation", invitationType: "Multicolor", invitationCategory: "A4", format: "JPG", size: "A4", code: "BG-MUL-A4-001", image: "images/invitation/marriage-invitation-04.jpg", downloadFile: "images/invitation/marriage-invitation-04.jpg", description: "Sample Multicolor A4 invitation design." },
  { id: 205, title: "Multicolor A5 Invitation Sample", category: "Invitation", invitationType: "Multicolor", invitationCategory: "A5", format: "JPG", size: "A5", code: "BG-MUL-A5-001", image: "images/invitation/marriage-invitation-02.jpg", downloadFile: "images/invitation/marriage-invitation-02.jpg", description: "Sample Multicolor A5 invitation design." },
  { id: 206, title: "Multicolor A3 Invitation Sample", category: "Invitation", invitationType: "Multicolor", invitationCategory: "A3", format: "JPG", size: "A3", code: "BG-MUL-A3-001", image: "images/invitation/marriage-invitation-03.jpg", downloadFile: "images/invitation/marriage-invitation-03.jpg", description: "Sample Multicolor A3 invitation design." },
  { id: 207, title: "Multicolor 22X17 Invitation Sample", category: "Invitation", invitationType: "Multicolor", invitationCategory: "22X17", format: "JPG", size: "22X17", code: "BG-MUL-2217-001", image: "images/invitation/marriage-invitation.jpg", downloadFile: "images/invitation/marriage-invitation.jpg", description: "Sample Multicolor 22X17 invitation design." },

  // PHOTO FRAME SAMPLE DESIGNS — existing sample artwork is reused until size-specific files are supplied.
  ...["12X8", "10X15", "12X18", "12X15", "10X10", "12X12", "12X24", "12X36", "24X18", "30X20", "36X24", "48X36", "Death Lighting Frame"].map((size, index) => {
    const image = ["images/my-creations/poster-01.jpg", "images/my-creations/poster-02.jpg", "images/wedding/wedding-banner-03.jpg"][index % 3];
    return { id: 301 + index, title: `Photo Frame Sample ${String(index + 1).padStart(2, "0")}`, category: "Photo Frame", format: "JPG", size, code: `BG-PF-${String(index + 1).padStart(3, "0")}`, image, downloadFile: image, description: `Sample artwork preview for ${size} photo frame printing.` };
  }),

  // LITHO SAMPLE DESIGNS — existing sample artwork is reused until size-specific files are supplied.
  ...["3X2", "4X3", "5X4"].map((size, index) => {
    const image = ["images/invitation/marriage-invitation.jpg", "images/invitation/marriage-invitation-04.jpg", "images/political/political-flex.jpg"][index];
    return { id: 401 + index, title: `Litho Sample ${String(index + 1).padStart(2, "0")}`, category: "Litho", format: "JPG", size, code: `BG-LI-${String(index + 1).padStart(3, "0")}`, image, downloadFile: image, description: `Sample artwork preview for ${size} litho printing.` };
  }),

  // VISITING CARD SAMPLE DESIGNS — sample images reuse available studio artwork.
  ...["images/my-creations/poster-02.jpg", "images/my-creations/poster-03.jpg", "images/my-creations/poster-04.jpg"].map((image, index) => ({ id: 601 + index, title: `Visiting Card Sample ${String(index + 1).padStart(2, "0")}`, category: "Visiting Card", format: "JPG", size: "Standard", code: `BG-VC-${String(index + 1).padStart(3, "0")}`, image, downloadFile: image, description: "Sample visiting card artwork preview." })),

  // BILL BOOK SAMPLES — Offset and Multicolor, each with A4 and A5 options.
  ...["Offset", "Multicolor"].flatMap((type, typeIndex) => ["A4", "A5"].map((size, sizeIndex) => {
    const image = ["images/my-creations/poster-03.jpg", "images/my-creations/poster-04.jpg"][typeIndex];
    const n = typeIndex * 2 + sizeIndex + 1;
    return { id: 611 + n, title: `${type} ${size} Bill Book Sample`, category: "Bill Book", billBookType: type, format: "JPG", size, code: `BG-BB-${type === "Offset" ? "OFF" : "MUL"}-${size}-${String(n).padStart(2, "0")}`, image, downloadFile: image, description: `${type} ${size} bill book sample artwork.` };
  })),

  // NOTICE SAMPLE DESIGNS — A4, A5, A3 and Legal Size.
  ...["A4", "A5", "A3", "Legal Size"].map((size, index) => {
    const image = ["images/my-creations/poster-01.jpg", "images/my-creations/poster-02.jpg", "images/my-creations/poster-03.jpg", "images/my-creations/poster-04.jpg"][index];
    return { id: 621 + index, title: `${size} Notice Sample`, category: "Notice", format: "JPG", size, code: `BG-NOT-${String(index + 1).padStart(3, "0")}`, image, downloadFile: image, description: `Sample notice artwork for ${size}.` };
  })
];

// =====================================================
// 3. CATEGORIES
// =====================================================

const categories = ["Flex", "Invitation", "Photo Frame", "Litho", "Visiting Card", "Bill Book", "Notice"];

const weddingSizes = [
  { size: "5X8", price: 600 },
  { size: "10X5", price: 700 },
  { size: "10X8", price: 1000 },
  { size: "12X8", price: 1200 },
  { size: "10X10", price: 1200 },
  { size: "15X8", price: 1500 },
  { size: "20X8", price: 2000 }
];

const flexSizes = weddingSizes;
const photoFrameSizes = [
  { size: "12X8", price: 500 }, { size: "10X15", price: 600 },
  { size: "12X18", price: 900 }, { size: "12X15", price: 700 },
  { size: "10X10", price: 500 }, { size: "12X12", price: 600 },
  { size: "12X24", price: 1200 }, { size: "12X36", price: 1500 },
  { size: "24X18", price: 1800 }, { size: "30X20", price: 2200 },
  { size: "36X24", price: 2500 }, { size: "48X36", price: 4000 },
  { size: "Death Lighting Frame", price: 2200 }
];
const lithoSizes = [
  { size: "3X2", price: 45 }, { size: "4X3", price: 90 }, { size: "5X4", price: 140 }
];
const billBookOptions = { Offset: ["A4", "A5"], Multicolor: ["A4", "A5"] };
const noticeSizes = ["A4", "A5", "A3", "Legal Size"];

const invitationOptions = {
  Offset: ["A4", "Friends Card", "Premium Cards"],
  Multicolor: ["A4", "A5", "A3", "22X17"]
};

// WEBSITE STATE
const currentPage = document.body.dataset.page || "home";
const pageParams = new URLSearchParams(window.location.search);
let activeCategory = pageParams.get("category") || "";
let activeSubCategory = pageParams.get("type") || "";
let activeSize = pageParams.get("size") || "";
let searchText = (pageParams.get("q") || "").toLowerCase().trim();

// Category pages should open at the top. Avoid restoring a previous scroll position
// when a visitor moves between catalogue categories.
if (currentPage === "designs" && activeCategory) {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}

// =====================================================
// 4. HTML ELEMENTS
// =====================================================

const app = document.getElementById("app");
const navList = document.getElementById("nl");
const modal = document.getElementById("mo");
const modalBody = document.getElementById("mb");
const toastContainer = document.getElementById("toasts");

// =====================================================
// 5. WHATSAPP LINK
// =====================================================

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// =====================================================
// 6. TOAST MESSAGE
// =====================================================

function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// =====================================================
// 7. NAVIGATION
// =====================================================

function renderNavigation() {
  if (!navList) return;

  const links = [
    ["Home", "index.html", "home"],
    ["Our Creations", "creations.html", "creations"],
    ["Photography", "photography.html", "photography"],
    ["Designs", "designs.html", "designs"],
    ["Book a Shoot", "booking.html", "booking"],
    ["Reviews", "reviews.html", "reviews"],
    ["Contact", "contact.html", "contact"]
  ];

  navList.innerHTML = links.map(([name, href, page]) => `
    <li>
      <a href="${href}" class="${currentPage === page ? "on" : ""}" ${currentPage === page ? 'aria-current="page"' : ""}>${name}</a>
    </li>
  `).join("");

  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
      const target = link.getAttribute("href");
      if (!target || target.startsWith("#") || link.origin !== window.location.origin) return;

      event.preventDefault();
      navList.classList.remove("o");
      menuButton?.setAttribute("aria-expanded", "false");

      if (target === window.location.pathname.split("/").pop()) return;

      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = target;
      }, 180);
    });
  });
}

// =====================================================
// 8. HERO SECTION
// =====================================================

function renderHero() {
  const heroImages = myCreations.slice(0, 3);

  return `
    <section class="hero" id="home">
      <div class="w">

        <div>
          <p class="mu">WELCOME TO BALA GRAPHICS</p>

          <h1>
            Your Creative Printing
            & Design Partner
          </h1>

          <p>
            Explore our original Tamil posters,
            wedding banners, invitation designs,
            birthday flex designs and printing services.
          </p>

          <form id="searchForm">
            <input
              class="in"
              id="searchInput"
              type="search"
              placeholder="Search your favourite designs..."
              aria-label="Search designs"
            >
          </form>

          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:18px">

            <a href="creations.html" class="btn or">
              Explore Our Creations
            </a>

            <a
              class="btn wa"
              href="${whatsappLink("Hello Bala Graphics, I want to order a design.")}"
              target="_blank"
              rel="noopener"
            >
              WhatsApp Us
            </a>

          </div>

          <div class="trust">
            <div>
              <b>100%</b>
              Creative Designs
            </div>

            <div>
              <b>Premium</b>
              Printing Quality
            </div>

            <div>
              <b>Fast</b>
              Customer Support
            </div>
          </div>
        </div>

        <div class="press">
          ${heroImages.map(item => `
            <div>
              <img
                src="${item.image}"
                alt="${item.title}"
                onerror="this.parentElement.style.display='none'"
              >
            </div>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}

// =====================================================
// 9. ANNOUNCEMENT STRIP
// =====================================================

function renderStrip() {
  return `
    <div class="strip">
      <div>
        <span>BALA GRAPHICS</span>
        <span>Our Original Creations</span>
        <span>Wedding Banners</span>
        <span>Marriage Invitations</span>
        <span>Birthday Flex</span>
        <span>Political Designs</span>
        <span>Premium Printing</span>
        <span>BALA GRAPHICS</span>
      </div>
    </div>
  `;
}

// =====================================================
// 10. OUR CREATIONS CARD
// =====================================================

function creationCard(item) {
  return `
    <article class="card">

      <div
        class="th"
        data-creation-preview="${item.id}"
        role="button"
        tabindex="0"
      >
        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
        >

        <span class="bd">Our Creation</span>
      </div>

      <div class="cb">

        <h3>${item.title}</h3>

        <p class="mu">
          Code: <strong>${item.code}</strong>
        </p>

        <p class="mu">
          Format: ${item.format}
        </p>

        <div class="ac">

          <button
            class="btn g"
            type="button"
            data-creation-preview="${item.id}"
          >
            Preview
          </button>

          <a class="btn" href="${item.image}" download>
            Download
          </a>

        </div>

        <a
          class="btn wa"
          style="justify-content:center;margin-top:8px"
          href="${whatsappLink(
            `Hello Bala Graphics, I am interested in ${item.title}. Code: ${item.code}`
          )}"
          target="_blank"
          rel="noopener"
        >
          Enquire on WhatsApp
        </a>

      </div>
    </article>
  `;
}

// =====================================================
// 11. OUR CREATIONS SECTION
// =====================================================

function renderMyCreations() {

  const searchResults = myCreations.filter(item => {

    const content = `
      ${item.title}
      ${item.code}
      ${item.format}
    `.toLowerCase();

    return content.includes(searchText);
  });

  return `
    <section class="sec" id="my-creations">
      <div class="w">

        <div class="hd">
          <div>
            <h2>Our Creations</h2>
            <p>
              Explore our previously created original posters
              and creative designs by Bala Graphics.
            </p>
          </div>

          <p>${searchResults.length} Posters</p>
        </div>

        <div class="grid">

          ${
            searchResults.length > 0
              ? searchResults.map(creationCard).join("")
              : `<p class="mu">No posters found.</p>`
          }

        </div>

      </div>
    </section>
  `;
}

// =====================================================
// 12. CATEGORY SECTION
// =====================================================

function renderCategories() {
  const collectionDetails = {
    Wedding: { eyebrow: "WEDDING COLLECTION", description: "Wedding designs organised by print size.", tag: "Size-wise designs" },
    Flex: { eyebrow: "FLEX COLLECTION", description: "Flex designs organised by print size with prices.", tag: "Size-wise designs" },
    Invitation: { eyebrow: "INVITATION COLLECTION", description: "Offset and multicolor invitation designs.", tag: "Two collections" },
    "Photo Frame": { eyebrow: "PHOTO FRAME COLLECTION", description: "Browse photo frame designs.", tag: "Personalised frames" },
    Litho: { eyebrow: "LITHO COLLECTION", description: "Browse litho printing designs.", tag: "Print collection" },
    "Visiting Card": { eyebrow: "VISITING CARD COLLECTION", description: "Explore professional visiting card designs for your business.", tag: "Business cards" },
    "Bill Book": { eyebrow: "BILL BOOK COLLECTION", description: "Browse custom bill book and invoice design options.", tag: "Business stationery" },
    Notice: { eyebrow: "NOTICE COLLECTION", description: "Explore notice and announcement design options.", tag: "Print notices" }
  };
  const fallbackImages = [
    "images/wedding/wedding-banner.jpg",
    "images/political/political-flex.jpg",
    "images/invitation/marriage-invitation.jpg",
    "images/my-creations/poster-01.jpg",
    "images/my-creations/poster-02.jpg",
    "images/my-creations/poster-03.jpg",
    "images/my-creations/poster-04.jpg"
  ];

  return `
    <section class="sec premium-section" id="premium-collections">
      <div class="w">
        <div class="premium-heading">
          <div>
            <span class="eyebrow">BALA GRAPHICS DESIGN CATALOGUE</span>
            <h2>Design Collections</h2>
            <p>Choose a collection to explore available designs.</p>
          </div>
          <a class="premium-link" href="designs.html">Explore all designs <span>→</span></a>
        </div>
        <div class="premium-grid">
          ${categories.map((category, index) => {
            const item = designs.find(design => design.category === category);
            const details = collectionDetails[category];
            const imagePath = item ? item.image : fallbackImages[index];
            const count = designs.filter(design => design.category === category).length;
            return `
              <article class="premium-card premium-card-${index + 1}"
                data-category="${category}" role="button" tabindex="0"
                aria-label="Explore ${category} collection">
                <img src="${imagePath}" alt="${category} design collection" loading="lazy">
                <div class="premium-shade"></div>
                <div class="premium-card-content">
                  <span class="premium-tag">${details.tag}</span>
                  <small>${details.eyebrow}</small>
                  <h3>${category}</h3>
                  <p>${details.description}</p>
                  <span class="premium-count">${count} designs added <b>↗</b></span>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    </section>
  `;
}

// =====================================================
// 13. DESIGN CARD
// =====================================================

function designCard(item) {
  return `
    <article class="card">

      <div
        class="th"
        data-design-preview="${item.id}"
        role="button"
        tabindex="0"
      >

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
        >

        <span class="bd">Available</span>

      </div>

      <div class="cb">

        <h3>${item.title}</h3>

        <p class="mu">
          ${item.size}
        </p>

        <p class="mu">
          Code: <strong>${item.code}</strong>
        </p>


        <div class="ac">

          <button
            class="btn g"
            data-design-preview="${item.id}"
            type="button"
          >
            Preview
          </button>

          <a
            class="btn"
            href="${item.downloadFile}"
            download
          >
            Download
          </a>

        </div>

        <a
          class="btn wa"
          style="justify-content:center;margin-top:8px"
          href="${whatsappLink(
            `Hello Bala Graphics, I want ${item.title}. Code: ${item.code}`
          )}"
          target="_blank"
          rel="noopener"
        >
          Order on WhatsApp
        </a>

      </div>
    </article>
  `;
}

// =====================================================
// 14. DESIGNS GALLERY
// =====================================================
// ALL OPTION:
// Displays separate category headings.
//
// INDIVIDUAL CATEGORY:
// Displays only selected category.

function renderDesigns() {
  const priceLists = { "Wedding": weddingSizes, "Flex": flexSizes, "Photo Frame": photoFrameSizes, "Litho": lithoSizes };
  const selectedSizePrice = priceLists[activeCategory]?.find(item => item.size === activeSize)?.price ?? null;
  const selectedInvitationSizes = invitationOptions[activeSubCategory] || [];
  const selectedBillBookSizes = billBookOptions[activeSubCategory] || [];
  const categoryDetails = {
    Flex: { title: "Flex Designs", description: "Explore creative flex designs for events, celebrations and promotions.", image: "images/political/political-flex.jpg" },
    Invitation: { title: "Invitation Designs", description: "Find invitation designs for special occasions and celebrations.", image: "images/invitation/marriage-invitation.jpg" },
    "Photo Frame": { title: "Photo Frame Designs", description: "Browse designs to make your favourite memories stand out.", image: "images/my-creations/poster-01.jpg" },
    Litho: { title: "Litho Designs", description: "Explore artwork samples for litho printing.", image: "images/invitation/marriage-invitation-04.jpg" },
    "Visiting Card": { title: "Visiting Card Designs", description: "Professional visiting cards to introduce your business and contact details.", image: "images/my-creations/poster-02.jpg" },
    "Bill Book": { title: "Bill Book Designs", description: "Custom bill books and business stationery for your shop or company.", image: "images/my-creations/poster-03.jpg" },
    Notice: { title: "Notice Designs", description: "Clear, attractive notices for announcements and important information.", image: "images/my-creations/poster-04.jpg" }
  };

  const filteredDesigns = designs.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesType = !activeSubCategory ||
      (activeCategory === "Bill Book" ? (item.billBookType || "") === activeSubCategory : (item.invitationType || "") === activeSubCategory);
    const matchesSize = !activeSize ||
      String(item.size || "").toUpperCase() === activeSize.toUpperCase();
    const content = `${item.title} ${item.category} ${item.code} ${item.format} ${item.size || ""} ${item.invitationType || ""} ${item.invitationCategory || ""}`.toLowerCase();
    return matchesCategory && matchesType && matchesSize && content.includes(searchText);
  });

  let subCategoryControls = "";
  if (activeCategory === "Wedding") {
    subCategoryControls = `
      <div class="catalogue-subheading"><h3>Choose Wedding Size</h3><p>Select a size to view all designs available in that size.</p></div>
      <div class="chips catalogue-chips">
        ${weddingSizes.map(item => `
          <button class="chip ${activeSize === item.size ? "on" : ""}" data-size="${item.size}" type="button">
            ${item.size}
          </button>
        `).join("")}
      </div>`;
  } else if (activeCategory === "Flex") {
    subCategoryControls = `
      <div class="catalogue-subheading"><h3>Choose Flex Size</h3><p>Select a size to view matching flex designs and prices.</p></div>
      <div class="chips catalogue-chips">
        ${flexSizes.map(item => `
          <button class="chip ${activeSize === item.size ? "on" : ""}" data-size="${item.size}" type="button">${item.size}</button>
        `).join("")}
      </div>`;
  } else if (activeCategory === "Invitation") {
    subCategoryControls = `
      <div class="catalogue-subheading"><h3>Choose Invitation Type</h3><p>Select Offset or Multicolor to view its sizes.</p></div>
      <div class="chips catalogue-chips">
        ${Object.keys(invitationOptions).map(type => `
          <button class="chip ${activeSubCategory === type ? "on" : ""}" data-invitation-type="${type}" type="button">${type}</button>
        `).join("")}
      </div>
      ${activeSubCategory ? `
        <div class="catalogue-subheading"><h3>${activeSubCategory} Sizes</h3></div>
        <div class="chips catalogue-chips">
          ${selectedInvitationSizes.map(size => `
            <button class="chip ${activeSize === size ? "on" : ""}" data-size="${size}" type="button">${size}</button>
          `).join("")}
        </div>` : ""}
    `;
  } else if (activeCategory === "Photo Frame" || activeCategory === "Litho") {
    const availableSizes = activeCategory === "Photo Frame" ? photoFrameSizes : lithoSizes;
    subCategoryControls = `
      <div class="catalogue-subheading"><h3>Choose ${activeCategory} Size</h3><p>Select a size to view matching ${activeCategory.toLowerCase()} designs and prices${activeCategory === "Litho" ? ". Minimum order: 10 pieces." : "."}</p></div>
      <div class="chips catalogue-chips">
        ${availableSizes.map(item => `
          <button class="chip ${activeSize === item.size ? "on" : ""}" data-size="${item.size}" type="button">${item.size}</button>
        `).join("")}
      </div>`;
  } else if (activeCategory === "Bill Book") {
    subCategoryControls = `
      <div class="catalogue-subheading"><h3>Choose Bill Book Type</h3><p>Select Offset or Multicolor, then choose A4 or A5.</p></div>
      <div class="chips catalogue-chips">${Object.keys(billBookOptions).map(type => `<button class="chip ${activeSubCategory === type ? "on" : ""}" data-billbook-type="${type}" type="button">${type}</button>`).join("")}</div>
      ${activeSubCategory ? `<div class="catalogue-subheading"><h3>${activeSubCategory} Sizes</h3></div><div class="chips catalogue-chips">${selectedBillBookSizes.map(size => `<button class="chip ${activeSize === size ? "on" : ""}" data-size="${size}" type="button">${size}</button>`).join("")}</div>` : ""}`;
  } else if (activeCategory === "Notice") {
    subCategoryControls = `<div class="catalogue-subheading"><h3>Choose Notice Size</h3><p>Select A4, A5, A3 or Legal Size.</p></div><div class="chips catalogue-chips">${noticeSizes.map(size => `<button class="chip ${activeSize === size ? "on" : ""}" data-size="${size}" type="button">${size}</button>`).join("")}</div>`;
  }

  const heading = activeSize
    ? `${activeCategory} – ${activeSubCategory ? activeSubCategory + " – " : ""}${activeSize}`
    : activeSubCategory ? `${activeCategory} – ${activeSubCategory}` : activeCategory;

  let galleryContent = "";
  if (activeCategory && activeSize && (activeCategory !== "Invitation" || activeSubCategory)) {
    galleryContent = `
      <div class="category-group catalogue-gallery-enter">
        ${selectedSizePrice !== null ? `<div class="catalogue-selected-price"><strong>${activeCategory} ${activeSize} Price: ₹${selectedSizePrice.toLocaleString("en-IN")}</strong>${activeCategory === "Litho" ? `<p>Minimum order: 10 pieces.</p>` : ""}</div>` : ""}
        <div class="hd"><div><h2>${heading} Designs</h2><p>Browse the available designs in this selection.</p></div><p>${filteredDesigns.length} Designs</p></div>
        <div class="grid">
          ${filteredDesigns.length ? filteredDesigns.map(designCard).join("") : `<p class="mu catalogue-empty">No designs have been added to this category yet. Add images and assign this category and size in the designs list to display them here.</p>`}
        </div>
      </div>`;
  } else if (activeCategory === "Invitation" && !activeSubCategory) {
    galleryContent = `<p class="mu catalogue-empty">Choose Offset or Multicolor to see the available invitation sizes and designs.</p>`;
  } else if (["Wedding", "Flex", "Photo Frame", "Litho", "Notice"].includes(activeCategory) && !activeSize) {
    galleryContent = `<p class="mu catalogue-empty">Choose a ${activeCategory.toLowerCase()} size above to view its designs.</p>`;
  } else if (activeCategory === "Bill Book" && !activeSubCategory) {
    galleryContent = `<p class="mu catalogue-empty">Choose Offset or Multicolor to view A4 and A5 bill book samples.</p>`;
  } else if (activeCategory === "Bill Book" && activeSubCategory && !activeSize) {
    galleryContent = `<p class="mu catalogue-empty">Choose A4 or A5 to view ${activeSubCategory} bill book samples.</p>`;
  } else if (activeCategory === "Visiting Card") {
    galleryContent = `<div class="category-group catalogue-gallery-enter"><div class="hd"><div><h2>Visiting Card Samples</h2><p>Browse sample visiting card artwork. Share your details to request a custom design.</p></div><p>${filteredDesigns.length} Designs</p></div><div class="grid">${filteredDesigns.map(designCard).join("")}</div></div>`;
  }

  return `
    <section class="sec" id="designs">
      <div class="w">
        <div class="hd"><div><h2>Design Collections</h2><p>Choose a design category, then select its size or type.</p></div></div>
        ${activeCategory ? `<div class="catalogue-back-row"><a class="btn g" href="designs.html">← All Design Categories</a></div>` : `
          <div class="chips catalogue-main-chips">
            ${categories.map(category => `
              <button class="chip" data-filter="${category}" type="button">${category}</button>
            `).join("")}
          </div>`}
        ${activeCategory && categoryDetails[activeCategory] ? `
          <section class="catalogue-category-intro catalogue-premium-enter">
            <div class="catalogue-category-copy"><span class="eyebrow">BALA GRAPHICS CATALOGUE</span><h1>${categoryDetails[activeCategory].title}</h1><p>${categoryDetails[activeCategory].description}</p></div>
            <img src="${categoryDetails[activeCategory].image}" alt="${activeCategory} design sample" loading="lazy">
          </section>` : `
          <section class="catalogue-welcome catalogue-premium-enter">
            <div class="catalogue-welcome-copy"><span class="eyebrow">BALA GRAPHICS DESIGN STUDIO</span><h1>Explore Our Designs</h1><p>Choose a category above to discover creative designs, sample artworks and available print sizes.</p></div>
            <div class="catalogue-welcome-images"><img src="images/political/political-flex.jpg" alt="Flex design sample"><img src="images/invitation/marriage-invitation.jpg" alt="Invitation design sample"><img src="images/my-creations/poster-01.jpg" alt="Creative poster sample"></div>
          </section>`}
        ${subCategoryControls}
        ${galleryContent}
      </div>
    </section>
  `;
}

// =====================================================
// 15. CONTACT SECTION
// =====================================================

function renderContact() {

  return `
    <section class="sec" id="contact">

      <div class="w">

        <div class="two">

          <div class="pad">

            <h2>Contact Bala Graphics</h2>

            <p class="mu" style="margin:14px 0">
              Contact us for custom posters, banners,
              invitations and professional printing services.
            </p>

            <p><strong>Address:</strong></p>

            <p class="mu">
              Rice Mil Stop, Ervadi,
              Tamil Nadu 623566, India
            </p>

            <p style="margin-top:12px">
              <strong>Phone:</strong>
              <a href="tel:8825997041">8825997041</a>
            </p>

            <a
              class="btn wa"
              style="margin-top:18px"
              href="${whatsappLink("Hello Bala Graphics, I need a custom design.")}"
              target="_blank"
              rel="noopener"
            >
              Contact on WhatsApp
            </a>

          </div>

          <div class="pad">

            <h2>Our Services</h2>

            <div class="chips">
              <span class="chip">Wedding Banners</span>
              <span class="chip">Marriage Invitations</span>
              <span class="chip">Birthday Flex</span>
              <span class="chip">Political Designs</span>
              <span class="chip">Flex Printing</span>
              <span class="chip">Vinyl Printing</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}


// =====================================================
// CUSTOMER REVIEWS
// Reviews are stored in this browser. Use a backend for shared public reviews.
// =====================================================

const REVIEW_STORAGE_KEY = "balaGraphicsReviews";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getReviews() {
  try {
    const saved = JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function renderReviews() {
  const reviews = getReviews();
  const average = reviews.length
    ? (reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0) / reviews.length).toFixed(1)
    : "—";

  const reviewCards = reviews.length
    ? reviews.slice().reverse().map(review => `
        <article class="review-card">
          <div class="review-card-top">
            <strong>${escapeHTML(review.name)}</strong>
            <span class="stars" aria-label="${Number(review.rating)} out of 5 stars">${"★".repeat(Number(review.rating))}${"☆".repeat(5 - Number(review.rating))}</span>
          </div>
          <p>${escapeHTML(review.message)}</p>
          <small>${escapeHTML(review.date || "")}</small>
        </article>
      `).join("")
    : `<div class="reviews-empty"><span class="empty-star">☆</span><h3>Be the first to review</h3><p>Your feedback helps us serve you better.</p></div>`;

  return `
    <section class="sec reviews-section" id="reviews">
      <div class="w">
        <div class="reviews-heading">
          <div>
            <span class="eyebrow">CUSTOMER FEEDBACK</span>
            <h2>What Our Customers Say</h2>
            <p class="mu">Share your experience with Bala Graphics.</p>
          </div>
          <div class="review-summary">
            <strong>${average}</strong>
            <span class="stars">★★★★★</span>
            <small>${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}</small>
          </div>
        </div>

        <div class="reviews-layout">
          <form class="review-form" id="reviewForm">
            <h3>Write a Review</h3>
            <p class="mu">Tell us about your design or printing experience.</p>
            <label for="reviewName">Your name</label>
            <input class="in" id="reviewName" name="name" maxlength="60" placeholder="Enter your name" required>
            <label for="reviewRating">Your rating</label>
            <select class="in" id="reviewRating" name="rating" required>
              <option value="">Choose a rating</option>
              <option value="5">★★★★★ — Excellent</option>
              <option value="4">★★★★☆ — Very good</option>
              <option value="3">★★★☆☆ — Good</option>
              <option value="2">★★☆☆☆ — Fair</option>
              <option value="1">★☆☆☆☆ — Needs improvement</option>
            </select>
            <label for="reviewMessage">Your review</label>
            <textarea class="in" id="reviewMessage" name="message" rows="4" maxlength="500" placeholder="Write your feedback..." required></textarea>
            <button class="btn or" type="submit">Submit Review</button>
            <small class="review-note">Reviews submitted here are saved in this browser only.</small>
          </form>

          <div class="reviews-list" aria-live="polite">
            ${reviewCards}
          </div>
        </div>
      </div>
    </section>
  `;
}

// =====================================================
// 16. COMPLETE WEBSITE RENDER
// =====================================================


// =====================================================
// PHOTOGRAPHY SERVICES + CLIENT BOOKING
// =====================================================

// EmailJS configuration is completed after the owner creates a free EmailJS account.
const EMAILJS_CONFIG = {
  publicKey: "LkotubM6Qyjz1kRd4",
  serviceId: "service_2as4a6a",
  templateId: "template_9tquy8g"
};

// =====================================================
// FORMAT BOOKING EVENT DATE
// =====================================================

function formatEventDate(value) {
  if (!value) return "Not provided";

  const match = String(value)
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (match) {
    const [, year, month, day] = match;
    return `${day}-${month}-${year}`;
  }

  return String(value);
}

// Return the correct labels for the selected wedding or reception venue.
function getVenueLabels(type) {
  switch (String(type || "").trim()) {
    case "Temple":
      return { nameLabel: "Temple Name", placeLabel: "Temple Location" };
    case "Mahal":
      return { nameLabel: "Mahal Name", placeLabel: "Mahal Place" };
    case "Home":
      // Home uses the name field for the village/town; no separate place is collected.
      return { nameLabel: "Home Village / Town", placeLabel: "", hidePlace: true };
    default:
      return { nameLabel: "Venue Name", placeLabel: "Venue Location" };
  }
}

function renderPhotography() {
  const packageCard = (title, price, originalPrice, items, type) => {
    const packageImage = title === "Silver" ? "images/wedding/ws.png" : title === "Gold" ? "images/wedding/wedding-package-gold-hd.jpg" : "images/wedding/wd.png";
    const currentPrice = price.replace(/^Price:\s*/, "");
    return `
    <article class="photo-package-card ${title.toLowerCase()}-package">
      <div class="photo-package-image"><img src="${packageImage}" alt="${title} wedding photography package" loading="lazy" decoding="async"><span>${title} Collection</span></div>
      <div class="photo-package-head"><h4>${title}</h4><div class="photo-package-pricing"><del>${originalPrice}</del><strong>${currentPrice}</strong></div></div>
      <ul>${items.map((item, index) => {
        const isOffer = /complimentary offer/i.test(item);
        const isGiftAfterOffer = items.slice(0, index).some(previous => /complimentary offer/i.test(previous)) && /photo frames|magic cup|pillow|monthly calendar/i.test(item);
        const classes = [isOffer ? "complimentary-trigger" : "", isGiftAfterOffer ? "complimentary-detail" : ""].filter(Boolean).join(" ");
        return `<li${classes ? ` class="${classes}"` : ""} style="--feature-index:${index}"${isOffer ? ' role="button" tabindex="0" aria-expanded="false" title="Click to reveal complimentary gifts"' : ""}>${item}</li>`;
      }).join("")}</ul>
      <a class="btn wa" href="booking.html?type=${encodeURIComponent(type)}">Enquire / Book ${title}</a>
    </article>`;
  };
  return `
    <section class="sec photo-services">
      <div class="w">
        <div class="photo-intro">
          <span class="eyebrow">CAPTURE YOUR FOREVER MOMENTS</span>
          <h2>Photography & Event Packages</h2>
          <p>Beautifully capture every celebration, from pre-wedding moments to weddings, post-wedding shoots and birthdays.</p>
          <a class="btn or" href="booking.html">Book Your Shoot</a>
        </div>
        <div class="photo-service-grid">
          <article class="photo-service-card prewedding">
            <div class="photo-service-art"><img src="images/wedding/pw.png" alt="High-resolution romantic pre-wedding couple photography"><span>PRE-WEDDING MOMENTS</span><b>♡</b></div>
            <div class="photo-service-copy">
              <span class="eyebrow">BEFORE THE BIG DAY</span><h3>Pre-Wedding Shoot</h3>
              <div class="photo-price"><del>₹5,000/-</del><strong>₹3,000/-</strong></div>
              <ul><li>Two hours photoshoot</li><li>50 digital photos</li><li>Physical album available at extra amount</li></ul>
              <a class="btn wa" href="booking.html?type=Pre-Wedding">Enquire / Book Pre-Wedding</a>
            </div>
          </article>
          <article class="photo-service-card wedding">
            <div class="photo-service-copy"><span class="eyebrow">WEDDING COLLECTIONS</span><h3>Wedding Packages</h3>
              <div class="photo-package-list">
                ${packageCard("Silver", "Price: ₹35,000/-", "₹40,000/-", ["Traditional Photo", "Traditional Video", "12X36 Album with 30 Sheets — Qty: 1", "32 GB Pendrive", "Promo & Full Video", "Complimentary Offer", "2 Photo Frames", "2 magic cup", "1 pillow", "1 monthly calendar"], "Wedding - Silver")}
                ${packageCard("Gold", "Price: ₹45,000/-", "₹50,000/-", ["Traditional Photo & Video", "Drone video", "12X36 Album with 40 Sheets — Qty: 1", "32 GB Pendrive", "Promo & Full Video", "Complimentary Offer", "2 Photo Frames", "2 magic cup", "1 pillow", "1 monthly calendar"], "Wedding - Gold")}
                ${packageCard("Diamond", "Price: ₹1,00,000/-", "₹1,10,000/-", ["Traditional Photo & Video", "Candid Photo & Video", "Drone Video", "12X36 Album with 50 Sheets — Qty: 2", "32 GB Pendrive", "Candid Promo & Full Video", "Complimentary Offer", "2 Photo Frames", "2 magic cup", "1 pillow", "1 monthly calendar"], "Wedding - Diamond")}
              </div>
            </div>
          </article>
          <article class="photo-service-card postwedding">
            <div class="photo-service-art"><img src="images/wedding/post-w.png" alt="High-resolution post-wedding couple photography"><span>AFTER THE YES</span><b>♡</b></div>
            <div class="photo-service-copy"><span class="eyebrow">AFTER THE CELEBRATION</span><h3>Post-Wedding Shoot</h3><div class="photo-price"><del>₹15,000/-</del><strong>₹12,000/-</strong></div>
              <ul><li>3 hours photoshoot</li><li>3 minutes video</li><li>24X8 Album — 30 sheets</li><li class="complimentary-trigger" role="button" tabindex="0" aria-expanded="false" aria-label="Show complimentary offer" title="Click to see the complimentary offer">Complimentary Offer</li><li class="complimentary-detail">2 Photo Frames</li></ul>
              <a class="btn wa" href="booking.html?type=Post-Wedding">Enquire / Book Post-Wedding</a>
            </div>
          </article>
          <article class="photo-service-card birthday">
            <div class="photo-service-art"><img src="images/birthday/bs.png" alt="High-resolution birthday celebration photography"><span>CELEBRATE IN STYLE</span><b>✦</b></div>
            <div class="photo-service-copy"><span class="eyebrow">CELEBRATE EVERY YEAR</span><h3>Birthday Function</h3><div class="photo-price"><del>₹10,000/-</del><strong>₹7,000/-</strong></div>
              <ul><li>3 hours</li><li>24X8 Album — 30 sheets</li><li class="complimentary-trigger" role="button" tabindex="0" aria-expanded="false" aria-label="Show complimentary offer" title="Click to see the complimentary offer">Complimentary Offer</li><li class="complimentary-detail">2 Photo Frames</li></ul>
              <a class="btn wa" href="booking.html?type=Birthday Function">Enquire / Book Birthday</a>
            </div>
          </article>
        </div>
        <div class="photo-cta"><div><h3>Let's plan your photography experience</h3><p>Share your event date and location. Our team will contact you to discuss availability and packages.</p></div><a class="btn or" href="booking.html">Request a Booking</a></div>
      </div>
    </section>`;
}

function renderBookingForm() {
  const requestedType = pageParams.get("type") || "";
  const selectedPre = requestedType === "Pre-Wedding" ? "selected" : "";
  const selectedWed = requestedType === "Wedding" ? "selected" : "";
  const selectedOther = requestedType;
  return `
    <section class="sec booking-page">
      <div class="w booking-layout">
        <div class="booking-info">
          <span class="eyebrow">LET'S MAKE IT MEMORABLE</span>
          <h2>Book Your Photography Session</h2>
          <p>Tell us about your wedding and reception venues. We'll contact you to confirm availability and details.</p>
          <div class="booking-benefit"><span>01</span><div><b>Send your request</b><small>Complete the booking form with your event details.</small></div></div>
          <div class="booking-benefit"><span>02</span><div><b>We contact you</b><small>Our team will discuss your event date and both venue locations.</small></div></div>
          <div class="booking-benefit"><span>03</span><div><b>Confirm your shoot</b><small>Your booking is confirmed after our team contacts you.</small></div></div>
          <p class="booking-smallprint">Submitting this form is a booking request, not a confirmed appointment.</p>
        </div>
        <form class="booking-form" id="shootBookingForm">
          <h3>Client Booking Form</h3>
          <p class="mu">Fields marked * are required.</p>
          <div class="booking-fields">
            <label>Full name *<input class="in" name="clientName" required maxlength="90" placeholder="Your full name"></label>
            <label>Mobile number *<input class="in" name="phone" type="tel" required pattern="[0-9+() -]{8,20}" placeholder="Your contact number"></label>
            <label>Email address<input class="in" name="email" type="email" maxlength="120" placeholder="Optional email"></label>
            <label>Shoot type *
              <select class="in" name="shootType" required>
                <option value="">Select shoot type</option>
                <option ${selectedPre} value="Pre-Wedding">Pre-Wedding Shoot</option>
                <option ${selectedWed} value="Wedding">Wedding Shoot</option>
                <option value="Post-Wedding" ${selectedOther === "Post-Wedding" ? "selected" : ""}>Post-Wedding Shoot</option>
                <option value="Birthday Function" ${selectedOther === "Birthday Function" ? "selected" : ""}>Birthday Function</option>
                <option value="Wedding - Silver" ${selectedOther === "Wedding - Silver" ? "selected" : ""}>Wedding - Silver</option>
                <option value="Wedding - Gold" ${selectedOther === "Wedding - Gold" ? "selected" : ""}>Wedding - Gold</option>
                <option value="Wedding - Diamond" ${selectedOther === "Wedding - Diamond" ? "selected" : ""}>Wedding - Diamond</option>
                <option value="Both">Both Pre-Wedding & Wedding</option>
              </select>
            </label>
            <label>Preferred event date *<input class="in" name="eventDate" type="date" required min="${new Date().toISOString().slice(0,10)}"></label>
            <label>Wedding venue type *
              <select class="in" name="weddingVenueType" id="weddingVenueType" required>
                <option value="">Select wedding venue</option>
                <option value="Temple">Temple</option>
                <option value="Mahal">Mahal</option>
                <option value="Home">Home</option>
              </select>
            </label>
            <div class="venue-detail-fields booking-full" id="weddingVenueDetails" aria-live="polite">
              <p class="venue-hint">Select a wedding venue type to enter its details.</p>
            </div>
            <label>Reception venue type *
              <select class="in" name="receptionVenueType" id="receptionVenueType" required>
                <option value="">Select reception venue</option>
                <option value="Temple">Temple</option>
                <option value="Mahal">Mahal</option>
                <option value="Home">Home</option>
              </select>
            </label>
            <div class="venue-detail-fields booking-full" id="receptionVenueDetails" aria-live="polite">
              <p class="venue-hint">Select a reception venue type to enter its details.</p>
            </div>
            <label class="booking-full">Additional details<textarea class="in" name="notes" rows="4" maxlength="1000" placeholder="Tell us about your plans, preferred timing or special requests..."></textarea></label>
          </div>
          <button class="btn or booking-submit" type="submit">Send Booking Request</button>
          <p class="booking-form-note" id="bookingFeedback" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function renderWebsite() {
  if (!app) {
    console.error("Missing HTML element: #app");
    return;
  }

  const pages = {
    home: `
      ${renderHero()}
      ${renderStrip()}
      ${renderCategories()}
      <section class="sec home-featured">
        <div class="w">
          <div class="hd">
            <div><h2>Latest Designs</h2><p>Discover a few of our latest creative designs.</p></div>
            <a class="premium-link" href="designs.html">Browse all designs →</a>
          </div>
          <div class="grid">${designs.slice(0, 4).map(designCard).join("")}</div>
        </div>
      </section>
      <section class="home-photo-promo">
        <div class="w home-photo-promo-inner">
          <div><span class="eyebrow">NEW SERVICE</span><h2>Pre-Wedding & Wedding Photography</h2><p>Keep your most meaningful moments alive with beautiful photography.</p></div>
          <div class="home-photo-actions"><a class="btn or" href="photography.html">Explore Photography</a><a class="btn wa" href="booking.html">Book a Shoot</a></div>
        </div>
      </section>
    `,
    creations: `${renderMyCreations()}`,
    photography: `${renderPhotography()}`,
    collections: `${renderCategories()}`,
    designs: `${renderDesigns()}`,
    booking: `${renderBookingForm()}`,
    reviews: `${renderReviews()}`,
    contact: `${renderContact()}`
  };

  app.innerHTML = pages[currentPage] || pages.home;

  // Add a consistent page intro on inner pages.
  if (currentPage !== "home") {
    const pageTitles = {
      creations: ["Our Creations", "A selection of original artwork by Bala Graphics."],
      photography: ["Photography Services", "Pre-wedding and wedding photography to preserve your special moments."],
      booking: ["Book a Photography Shoot", "Send your event details and request a booking."],
      collections: ["Premium Collections", "Explore designs curated for every occasion."],
      designs: ["Design Marketplace", "Find the right design and order directly through WhatsApp."],
      reviews: ["Customer Reviews", "Your feedback helps us deliver better design and printing services."],
      contact: ["Contact Bala Graphics", "Talk to our team about your next design or printing order."]
    };
    const title = pageTitles[currentPage];
    if (title) {
      const intro = document.createElement("section");
      intro.className = "page-banner";
      intro.innerHTML = `<div class="w"><span class="eyebrow">BALA GRAPHICS · ERVADI</span><h1>${title[0]}</h1><p>${title[1]}</p></div>`;
      app.prepend(intro);
    }
  }

  attachEvents();
}

// =====================================================
// 17. PREVIEW MODAL
// =====================================================

function openPreview(item, type) {

  if (!item || !modal || !modalBody) return;

  const isCreation = type === "creation";

  const downloadPath = isCreation
    ? item.image
    : item.downloadFile;

  modalBody.innerHTML = `

    <img
      src="${item.image}"
      alt="${item.title}"
    >

    <h2>${item.title}</h2>

    <p class="mu">
      Code: ${item.code}
    </p>

    <p class="mu" style="margin:10px 0">
      ${item.description || ""}
    </p>

    <div style="display:flex;gap:10px;flex-wrap:wrap">

      <a
        class="btn"
        href="${downloadPath}"
        download
      >
        Download
      </a>

      <a
        class="btn wa"
        href="${whatsappLink(
          `Hello Bala Graphics, I am interested in ${item.title}. Code: ${item.code}`
        )}"
        target="_blank"
        rel="noopener"
      >
        Enquire on WhatsApp
      </a>

    </div>
  `;

  modal.classList.add("o");
  document.body.style.overflow = "hidden";
}

// =====================================================
// 18. CLOSE MODAL
// =====================================================

function closePreview() {

  if (!modal) return;

  modal.classList.remove("o");
  document.body.style.overflow = "";
}

function attachReviewEvents() {
  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", event => {
      event.preventDefault();
      const formData = new FormData(reviewForm);
      const name = String(formData.get("name") || "").trim();
      const rating = Number(formData.get("rating"));
      const message = String(formData.get("message") || "").trim();

      if (!name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        showToast("Please complete all review fields.");
        return;
      }

      const reviews = getReviews();
      reviews.push({
        name,
        rating,
        message,
        date: new Date().toLocaleDateString()
      });

      try {
        localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
        const reviewsSection = document.getElementById("reviews");
        if (reviewsSection) {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = renderReviews();
          reviewsSection.replaceWith(wrapper.firstElementChild);
          attachReviewEvents();
        }
        showToast("Thank you for your review!");
      } catch {
        showToast("Could not save your review in this browser.");
      }
    });
  }

}

// =====================================================
// 19. CATEGORY AND GALLERY EVENTS
// =====================================================

function renderVenueDetailFields(kind, venueType) {
  const prefix = kind === "wedding" ? "Wedding" : "Reception";
  const nameField = kind === "wedding" ? "weddingVenueName" : "receptionVenueName";
  const placeField = kind === "wedding" ? "weddingVenuePlace" : "receptionVenuePlace";
  const safeType = String(venueType || "");
  if (!safeType) return `<p class="venue-hint">Select a ${kind} venue type to enter its details.</p>`;

  if (safeType === "Temple") {
    return `<div class="venue-detail-grid"><label>${prefix} temple name *<input class="in" name="${nameField}" required maxlength="160" placeholder="Enter temple name"></label><label>${prefix} temple location *<input class="in" name="${placeField}" required maxlength="160" placeholder="Enter village / town / area"></label></div>`;
  }
  if (safeType === "Home") {
    return `<label>${prefix} home village / town *<input class="in" name="${nameField}" required maxlength="160" placeholder="Enter village or town name"></label>`;
  }
  if (safeType === "Mahal") {
    return `<div class="venue-detail-grid"><label>${prefix} mahal name *<input class="in" name="${nameField}" required maxlength="160" placeholder="Enter mahal name"></label><label>${prefix} mahal place *<input class="in" name="${placeField}" required maxlength="160" placeholder="Enter town / area"></label></div>`;
  }
  return `<p class="venue-hint">Please select Temple, Mahal or Home.</p>`;
}

function setupConditionalVenueFields(form) {
  ["wedding", "reception"].forEach(kind => {
    const select = form.querySelector(`[name="${kind}VenueType"]`);
    const details = document.getElementById(`${kind}VenueDetails`);
    if (!select || !details) return;
    const update = () => {
      details.innerHTML = renderVenueDetailFields(kind, select.value);
    };
    select.addEventListener("change", update);
    update();
  });
}

function attachEvents() {

  attachReviewEvents();

  const shootBookingForm = document.getElementById("shootBookingForm");
  if (shootBookingForm) {
    setupConditionalVenueFields(shootBookingForm);
    shootBookingForm.addEventListener("submit", async event => {
      event.preventDefault();
      const feedback = document.getElementById("bookingFeedback");
      const submitButton = shootBookingForm.querySelector('[type="submit"]');

      if (
        EMAILJS_CONFIG.publicKey.startsWith("ADD_YOUR_") ||
        !EMAILJS_CONFIG.serviceId ||
        !EMAILJS_CONFIG.templateId
      ) {
        if (feedback) feedback.textContent = "Email notifications are not connected yet. Please contact Bala Graphics on WhatsApp to submit your request.";
        return;
      }

      const formData = new FormData(shootBookingForm);
      const booking = Object.fromEntries(formData.entries());
      const templateParams = {
        business_name: "Bala Graphics",
        client_name: booking.clientName,
        client_phone: booking.phone,
        client_email: booking.email || "",
        shoot_type: booking.shootType,
        event_date: formatEventDate(booking.eventDate),
        wedding_venue_type: booking.weddingVenueType,
        wedding_venue_name: booking.weddingVenueName || "",
        wedding_venue_place: booking.weddingVenuePlace || "",
        wedding_venue_name_label: getVenueLabels(booking.weddingVenueType).nameLabel,
        wedding_venue_place_label: getVenueLabels(booking.weddingVenueType).placeLabel,
        reception_venue_type: booking.receptionVenueType,
        reception_venue_name: booking.receptionVenueName || "",
        reception_venue_place: booking.receptionVenuePlace || "",
        reception_venue_name_label: getVenueLabels(booking.receptionVenueType).nameLabel,
        reception_venue_place_label: getVenueLabels(booking.receptionVenueType).placeLabel,
        additional_details: booking.notes || "None"
      };

      try {
        if (submitButton) { submitButton.disabled = true; submitButton.textContent = "Sending..."; }
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, { publicKey: EMAILJS_CONFIG.publicKey });
        shootBookingForm.reset();
        if (feedback) feedback.textContent = "Thank you! Your booking request has been emailed to Bala Graphics. We will contact you to confirm availability.";
        showToast("Booking request sent successfully.");
      } catch (error) {
        console.error("Booking email failed:", error);
        if (feedback) feedback.textContent = "We couldn't send your request right now. Please contact Bala Graphics on WhatsApp or call 8825997041.";
      } finally {
        if (submitButton) { submitButton.disabled = false; submitButton.textContent = "Send Booking Request"; }
      }
    });
  }

  // DESIGN CATALOGUE FILTERS
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      window.location.href = `designs.html?category=${encodeURIComponent(category)}`;
    });
  });
  document.querySelectorAll("[data-invitation-type]").forEach(button => {
    button.addEventListener("click", () => {
      activeSubCategory = button.dataset.invitationType;
      activeSize = "";
      renderWebsite();
    });
  });
  document.querySelectorAll("[data-billbook-type]").forEach(button => {
    button.addEventListener("click", () => {
      activeSubCategory = button.dataset.billbookType;
      activeSize = "";
      renderWebsite();
    });
  });
  document.querySelectorAll("[data-size]").forEach(button => {
    button.addEventListener("click", () => {
      activeSize = button.dataset.size;
      renderWebsite();
    });
  });

  // COLLECTION CARDS: open the selected category on its own designs page.
  document.querySelectorAll("[data-category]").forEach(card => {
    const openCategory = () => {
      const category = card.dataset.category;
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = `designs.html?category=${encodeURIComponent(category)}`;
      }, 180);
    };
    card.addEventListener("click", openCategory);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCategory();
      }
    });
  });

  // POSTER PREVIEW
  document.querySelectorAll("[data-creation-preview]").forEach(element => {

    const preview = () => {

      const item = myCreations.find(
        poster => poster.id === Number(element.dataset.creationPreview)
      );

      openPreview(item, "creation");
    };

    element.addEventListener("click", preview);

    element.addEventListener("keydown", event => {

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        preview();
      }
    });
  });

  // DESIGN PREVIEW
  document.querySelectorAll("[data-design-preview]").forEach(element => {

    const preview = () => {

      const item = designs.find(
        design => design.id === Number(element.dataset.designPreview)
      );

      openPreview(item, "design");
    };

    element.addEventListener("click", preview);

    element.addEventListener("keydown", event => {

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        preview();
      }
    });
  });

  // SEARCH
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {

    searchInput.value = searchText;

    searchInput.addEventListener("input", event => {

      searchText = event.target.value.toLowerCase().trim();

      if (document.getElementById("designs") || document.getElementById("my-creations")) {
        updateGalleries();
      }
    });
  }
}

// =====================================================
// 20. UPDATE GALLERIES
// =====================================================

function updateGalleries() {

  const creationsSection = document.getElementById("my-creations");
  const designsSection = document.getElementById("designs");

  if (creationsSection) {

    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderMyCreations();

    creationsSection.replaceWith(wrapper.firstElementChild);
  }

  if (designsSection) {

    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderDesigns();

    designsSection.replaceWith(wrapper.firstElementChild);
  }

  attachGalleryEvents();
}

// =====================================================
// 21. GALLERY EVENTS AFTER SEARCH
// =====================================================

function attachGalleryEvents() {

  // POSTER PREVIEW
  document.querySelectorAll("[data-creation-preview]").forEach(element => {

    element.addEventListener("click", () => {

      const item = myCreations.find(
        poster => poster.id === Number(element.dataset.creationPreview)
      );

      openPreview(item, "creation");
    });
  });

  // DESIGN PREVIEW
  document.querySelectorAll("[data-design-preview]").forEach(element => {

    element.addEventListener("click", () => {

      const item = designs.find(
        design => design.id === Number(element.dataset.designPreview)
      );

      openPreview(item, "design");
    });
  });

  // DESIGN CATALOGUE FILTERS AFTER GALLERY REFRESH
  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      window.location.href = `designs.html?category=${encodeURIComponent(category)}`;
    });
  });
  document.querySelectorAll("[data-invitation-type]").forEach(button => {
    button.addEventListener("click", () => {
      activeSubCategory = button.dataset.invitationType;
      activeSize = "";
      renderWebsite();
    });
  });
  document.querySelectorAll("[data-billbook-type]").forEach(button => {
    button.addEventListener("click", () => {
      activeSubCategory = button.dataset.billbookType;
      activeSize = "";
      renderWebsite();
    });
  });
  document.querySelectorAll("[data-size]").forEach(button => {
    button.addEventListener("click", () => {
      activeSize = button.dataset.size;
      renderWebsite();
    });
  });

  // Collection cards navigate to their filtered designs page.
  document.querySelectorAll("[data-category]").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = `designs.html?category=${encodeURIComponent(card.dataset.category)}`;
    });
  });
}

// =====================================================
// 22. SEARCH FORM
// =====================================================

document.addEventListener("submit", event => {

  if (event.target.id === "searchForm") {
    event.preventDefault();
    const query = document.getElementById("searchInput")?.value.trim() || "";
    window.location.href = `designs.html${query ? `?q=${encodeURIComponent(query)}` : ""}`;
  }
});

// =====================================================
// 23. MOBILE NAVIGATION
// =====================================================

const menuButton = document.getElementById("bg");

if (menuButton && navList) {

  menuButton.addEventListener("click", () => {
    navList.classList.toggle("o");
    menuButton.setAttribute("aria-expanded", navList.classList.contains("o") ? "true" : "false");
  });
}

// =====================================================
// 24. MODAL CLOSE EVENTS
// =====================================================

if (modal) {

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closePreview();
    }
  });
}

document.querySelector(".mi .x")?.addEventListener(
  "click",
  closePreview
);

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closePreview();
  }
});

// =====================================================
// 25. BACK TO TOP
// =====================================================

const topButton = document.getElementById("top");

window.addEventListener("scroll", () => {

  if (topButton) {

    topButton.style.display =
      window.scrollY > 400 ? "block" : "none";
  }
});

if (topButton) {

  topButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Complimentary offer dropdown: gifts remain hidden until the client opens the offer.
function toggleComplimentaryHighlight(trigger) {
  const card = trigger.closest(".photo-package-card, .photo-service-card");
  if (!card) return;
  const active = trigger.getAttribute("aria-expanded") !== "true";
  card.classList.toggle("complimentary-active", active);
  trigger.setAttribute("aria-expanded", active ? "true" : "false");
  trigger.classList.toggle("offer-highlighted", active);
  card.querySelectorAll(".complimentary-detail").forEach((item, index) => {
    item.classList.toggle("offer-highlighted", active);
    item.style.setProperty("--gift-index", index);
  });
}

document.addEventListener("click", event => {
  const trigger = event.target.closest(".complimentary-trigger");
  if (trigger) toggleComplimentaryHighlight(trigger);
});
document.addEventListener("keydown", event => {
  const trigger = event.target.closest(".complimentary-trigger");
  if (trigger && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    toggleComplimentaryHighlight(trigger);
  }
});

// =====================================================
// 26. INITIALIZE WEBSITE
// =====================================================

renderNavigation();

renderWebsite();

console.log("BALA GRAPHICS website loaded successfully.");
