const LISTINGS = [
  { name: "Norwich Yoga Central", type: "Studio", postcode: "NR1 3EU", area: "City centre", styles: ["Hatha", "Vinyasa", "Yin", "Ashtanga", "Teacher training"], notes: "Ber Street studio led by Tess Bickerstaff. Drop-in around \u00a312; class passes and workshops.", url: "https://www.norwichyogacentral.co.uk/", venue: "17\u201323 Ber Street" },
  { name: "Yantra Studio", type: "Studio", postcode: "NR1 1PW", area: "King Street", styles: ["Hot yoga", "Pilates", "Barre", "Somatic"], notes: "Infrared hot yoga plus strength and restorative work. Street-level and wheelchair accessible.", url: "https://www.yantrastudio.co.uk/", venue: "Studio 9, Netherconesford, King Street" },
  { name: "The Yoga Tree", type: "Studio", postcode: "NR1 3NB", area: "All Saints Green", styles: ["Hatha", "Vinyasa", "Restorative", "Pregnancy", "Sound"], notes: "City yoga school with mixed timetable, guest workshops, Root Caf\u00e9 and teacher training.", url: "https://www.theyogatree.co.uk/", venue: "50 All Saints Green" },
  { name: "Hotpod Yoga Norwich", type: "Studio", postcode: "NR1 3DD", area: "Castle Quarter", styles: ["Hot yoga", "Flow", "Recovery"], notes: "Heated inflatable pod above Castle Quarter.", url: "https://hotpodyoga.com/studios/norwich/schedule/", venue: "Level 2, 94 Castle Quarter" },
  { name: "The Yoga Studio Norwich", type: "Studio", postcode: "NR3 4AG", area: "Magdalen Road", styles: ["Hatha", "Yin", "Yoga Nidra", "Pilates"], notes: "Boutique studio above The Norfolk Clinic.", url: "https://www.theyogastudionorwich.co.uk/", venue: "38\u201340 Magdalen Road" },
  { name: "Happy OM Yoga Studio", type: "Studio", postcode: "NR2 4TE", area: "Heigham Street", styles: ["Somatic", "Hatha", "Kirtan", "Tantra"], notes: "Independent teacher hub at Capitol House.", url: "https://www.yogawithivana.co.uk/", venue: "Capitol House, 2\u20136 Heigham Street" },
  { name: "SunFyr Barns", type: "Studio", postcode: "NR14 7PZ", area: "Poringland", styles: ["Hatha", "Pregnancy", "Mum & baby", "Teacher training"], notes: "Rural wellbeing barn 15 minutes from the city.", url: "https://www.sunfyrbarns.co.uk/", venue: "Manor Farm Barns, Pigot Lane" },
  { name: "Norwich Buddhist Centre", type: "Community", postcode: "NR2 4SE", area: "Bank Street", styles: ["Gentle yoga", "Mixed level", "Meditation"], notes: "Triratna centre offering regular yoga with Anya alongside meditation.", url: "https://norwichbuddhistcentre.com/", venue: "14 Bank Street" },
  { name: "Marie Williams Yoga", type: "Teacher", postcode: "NR1", area: "City + Acle", styles: ["Somatic", "Embodied flow", "Chair yoga"], notes: "Teaches at Yantra and Happy OM, chair yoga at the MS Centre and Acle Recreation Centre.", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich", venue: "Yantra / Happy OM / MS Centre / Acle" },
  { name: "Bliss Yoga Norwich \u2014 Jessica McKenna", type: "Teacher", postcode: "NR7 8UA", area: "Sprowston & Horning", styles: ["Gentle", "ISHTA", "Mindfulness"], notes: "Monday and Wednesday at Sprowston Diamond Centre; Friday at Horning Village Hall.", url: "https://www.blissyoganorwich.co.uk/", venue: "Sprowston Diamond Centre" },
  { name: "Yoga with Amber Ferguson", type: "Teacher", postcode: "NR1", area: "City", styles: ["Pregnancy", "Postnatal", "Mum & baby"], notes: "Specialist prenatal and baby classes, often at The Yoga Tree.", url: "https://www.yogawithamber.co.uk/", venue: "The Yoga Tree and city venues" },
  { name: "Yoga with Ivana", type: "Teacher", postcode: "NR2 4TE", area: "Heigham Street", styles: ["Soma flow", "Tantra", "Ayurveda"], notes: "Soma Flow Tuesdays at Happy OM. Monthly kirtan gatherings.", url: "https://www.yogawithivana.co.uk/", venue: "Happy OM Studio" },
  { name: "Soulful Yoga \u2014 Georgina", type: "Teacher", postcode: "NR", area: "Norwich & Norfolk", styles: ["Yoga therapy", "Fascia", "Accessible"], notes: "One-to-ones and group classes for pain, mobility and nervous-system support.", url: "https://www.soulfulyoga.co.uk/", venue: "Norwich and Norfolk venues" },
  { name: "Yoga With Lucy", type: "Teacher", postcode: "NR10 5DL", area: "Broads / Swanton Abbott", styles: ["Hatha", "Vinyasa", "Yin", "SUP yoga", "Teacher training"], notes: "Classes, coastal sessions, SUP yoga and annual 200-hour YTT.", url: "https://www.yogawithlucy.co.uk/", venue: "Grove Farm Wellbeing and Norfolk sites" },
  { name: "Anya Yoga \u2014 Anya Konefal", type: "Teacher", postcode: "NR2 4SE", area: "Bank Street & Inner Space", styles: ["Hatha", "Gentle yoga", "Relaxation", "Alignment"], notes: "British Wheel of Yoga teacher. Thu 10:00 at Norwich Buddhist Centre; Mon 18:00 at Inner Space.", url: "http://kontestacja.wixsite.com/anyayoga", venue: "14 Bank Street / Maude Gray Court" },
  { name: "Blossom Therapies & Yoga \u2014 Ania Chard", type: "Teacher", postcode: "NR9 5AP", area: "Honingham & villages", styles: ["Hatha", "Therapeutic yoga", "Meditation", "Online"], notes: "Classes in Honingham, Cringleford, Barnham Broom, Sprowston and Zoom.", url: "https://book.blossom.yoga/", venue: "Honingham, Cringleford, Barnham Broom, Sprowston" },
  { name: "Inner Space", type: "Studio", postcode: "NR2 4PA", area: "St Benedicts Street", styles: ["Hatha", "Iyengar", "Pilates", "Qigong", "Taiji"], notes: "City hire studio with a published weekly board.", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space", venue: "Maude Gray Court, St Benedicts Street" },
  { name: "Christina Fulcher Pilates", type: "Studio", postcode: "NR2 2PE", area: "Unthank Road", styles: ["Pilates", "Pregnancy pilates", "Postnatal", "Barre", "Beginners"], notes: "Now at 129 Unthank Road (CFP). Mat, pregnancy and postnatal pilates.", url: "https://www.christinafulcherpilates.co.uk/", venue: "129 Unthank Road" },
  { name: "Virgin Active Norwich", type: "Gym", postcode: "NR6 5DU", area: "Hellesdon", styles: ["Yoga", "Pilates", "Reformer", "Spin", "Boxing", "HIIT"], notes: "Club on Drayton High Road. Classes sit in the Virgin Active app.", url: "https://www.virginactive.co.uk/our-classes", venue: "Drayton High Road, Hellesdon" },
  { name: "PureGym Norwich Castle Mall", type: "Gym", postcode: "NR1 3DD", area: "Castle Mall", styles: ["Circuits", "Strength", "Cycle", "Ride", "Hybrid", "Core", "Mind", "Burn"], notes: "24-hour gym. Free member classes. Book in the PureGym app.", url: "https://www.puregym.com/gyms/norwich-castle-mall/timetable/", venue: "28 Castle Mall, Level 2" },
  { name: "PureGym Norwich Riverside", type: "Gym", postcode: "NR1 1WX", area: "Riverside", styles: ["Gym classes", "Strength", "Cardio"], notes: "24-hour gym on Wherry Road.", url: "https://www.puregym.com/city/norwich/", venue: "Wherry Road, Riverside" },
  { name: "PureGym Norwich Aylsham Road", type: "Gym", postcode: "NR3", area: "Aylsham Road", styles: ["Gym classes", "Strength", "Cardio"], notes: "24-hour gym on Copenhagen Way off Aylsham Road.", url: "https://puregym.com/gyms/norwich-aylsham-road/", venue: "Copenhagen Way, Aylsham Road" },
  { name: "The Gym Group Norwich City", type: "Gym", postcode: "NR2 1EA", area: "Little London Street", styles: ["HIIT", "Strength", "Core", "Mind & body", "Spin"], notes: "24-hour gym. Member classes booked in The Gym Group app.", url: "https://www.thegymgroup.com/gym-classes/classes-timetable/norwich-city-classes/", venue: "6\u20138 Little London Street" },
  { name: "The Gym Group Norwich Hall Road", type: "Gym", postcode: "NR4 6DP", area: "Hall Road", styles: ["Hybrid", "HIIT", "Spin", "LBT", "Strength", "Fit Balance"], notes: "24-hour gym at Harford Place.", url: "https://www.thegymgroup.com/gym-classes/classes-timetable/norwich-hall-road-classes/", venue: "Harford Place, 50 Hall Road" },
  { name: "GAIN Fitness Norwich", type: "Gym", postcode: "NR5 8PF", area: "Guardian Road", styles: ["Hyrox", "S&C", "Olympic lifting", "Pilates", "Intervals"], notes: "Large functional / Hyrox hall. Up to 7 classes a day.", url: "https://gainfitness.co.uk/", venue: "1B Guardian Road" },
  { name: "Fitness Space Norwich", type: "Gym", postcode: "NR4 6AU", area: "Cringleford", styles: ["Hot yoga", "Hot barre", "Pilates", "Circuits", "S&C"], notes: "Coached studio gym. 25+ classes a week.", url: "https://www.fsnorwich.com/", venue: "Suite 6A, Cringleford Business Centre" },
  { name: "Nuffield Health Norwich", type: "Gym", postcode: "NR3 1TS", area: "Barrack Street", styles: ["Yoga", "Les Mills Yoga", "BODYBALANCE"], notes: "Member gym classes including dedicated yoga and BODYBALANCE.", url: "https://www.nuffieldhealth.com/gyms/norwich/classes", venue: "Barrack Street" },
  { name: "David Lloyd Norwich", type: "Gym", postcode: "NR", area: "Norwich club", styles: ["Iyengar", "Vinyasa", "Beginners"], notes: "Club studio timetable covering Iyengar, vinyasa and introduction-to-yoga.", url: "https://www.davidlloyd.co.uk/clubs/norwich/yoga/", venue: "David Lloyd Norwich" },
  { name: "Riverside Leisure Centre", type: "Leisure", postcode: "NR1 1WX", area: "Riverside", styles: ["Gym yoga", "Group exercise"], notes: "Places Leisure centre with 60+ weekly classes.", url: "https://www.placesleisure.org/centres/riverside-leisure-centre/", venue: "Wherry Road" },
  { name: "Norman Centre \u2014 Xtra Mile Gym", type: "Leisure", postcode: "NR3 2QZ", area: "Mile Cross", styles: ["Fitness yoga", "Tai chi", "Chair exercise"], notes: "Council community hub. Fitness yoga and tai chi from about \u00a32.50\u2013\u00a38.", url: "https://www.norwich.gov.uk/sports-and-leisure/welcome-norman-centre/go-xtra-mile-norwichs-community-gym-and-fitness-hub", venue: "Norman Centre" },
  { name: "Wensum Valley Hotel Leisure, Taverham", type: "Leisure", postcode: "NR8", area: "Taverham", styles: ["Yoga", "Pilates", "Stretch"], notes: "Wednesday evening yoga plus stretch-and-flex and Pilates.", url: "https://wensumvalleyhotel.co.uk/leisure/fitness-classes", venue: "Wensum Valley Hotel" },
  { name: "Inspire Studio Norwich", type: "Studio", postcode: "NR7 8SG", area: "Roundtree Way", styles: ["Group fitness", "PT studio"], notes: "Newer studio advertising about 25 classes a week plus PT.", url: "https://norwich.mumbler.co.uk/category/adult-fitness-classes/", venue: "44 Roundtree Way" }
];

const CLASSES = [
  { day: "Monday", time: "06:45", title: "Circuits", place: "PureGym Castle Mall", style: "Circuits", url: "https://www.puregym.com/gyms/norwich-castle-mall/timetable/" },
  { day: "Monday", time: "09:30", title: "Embodied Flow \u2014 Marie Williams", place: "Yantra Studio", style: "Somatic", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich" },
  { day: "Monday", time: "11:00", title: "Hatha \u2014 Eliane", place: "Inner Space", style: "Hatha", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space" },
  { day: "Monday", time: "18:00", title: "Yoga \u2014 Anya Konefal", place: "Inner Space", style: "Hatha", url: "http://kontestacja.wixsite.com/anyayoga" },
  { day: "Monday", time: "18:00", title: "Somatic Flow \u2014 Marie Williams", place: "Happy OM", style: "Somatic", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich" },
  { day: "Monday", time: "18:00", title: "Gentle Yoga \u2014 Jess McKenna", place: "Sprowston Diamond Centre", style: "Gentle", url: "https://www.blissyoganorwich.co.uk/" },
  { day: "Tuesday", time: "10:30", title: "Wi-Tchi Yoga \u2014 Janine", place: "Inner Space", style: "Yoga", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space" },
  { day: "Tuesday", time: "18:00", title: "Soma Flow \u2014 Ivana", place: "Happy OM", style: "Soma flow", url: "https://www.yogawithivana.co.uk/service-page/soma-flow" },
  { day: "Tuesday", time: "19:30", title: "Iyengar Yoga Level 1\u20132", place: "Inner Space", style: "Iyengar", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space" },
  { day: "Wednesday", time: "10:00", title: "Chair Yoga for MS \u2014 Marie", place: "MS Centre", style: "Chair yoga", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich" },
  { day: "Wednesday", time: "10:30", title: "Qigong \u2014 Kit", place: "Inner Space", style: "Qigong", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space" },
  { day: "Wednesday", time: "13:45", title: "Chair Yoga \u2014 Marie", place: "Acle Recreation Centre", style: "Chair yoga", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich" },
  { day: "Wednesday", time: "18:30", title: "Hot Barre", place: "Fitness Space Cringleford", style: "Barre", url: "https://www.fsnorwich.com/" },
  { day: "Wednesday", time: "19:45", title: "Yoga", place: "Wensum Valley, Taverham", style: "Yoga", url: "https://wensumvalleyhotel.co.uk/leisure/fitness-classes" },
  { day: "Thursday", time: "09:30", title: "Hybrid 45", place: "The Gym Group Hall Road", style: "Hybrid", url: "https://www.thegymgroup.com/gym-classes/classes-timetable/norwich-hall-road-classes/" },
  { day: "Thursday", time: "10:00", title: "Yoga \u2014 Anya Konefal", place: "Norwich Buddhist Centre", style: "Hatha", url: "http://kontestacja.wixsite.com/anyayoga" },
  { day: "Thursday", time: "18:00", title: "Pilates \u2014 Aoife", place: "Inner Space", style: "Pilates", url: "https://www.findhealthclinics.com/GB/Norwich/471030986320113/Inner-Space" },
  { day: "Friday", time: "07:45", title: "Shake the Dust \u2014 Marie", place: "Yantra Studio", style: "Somatic", url: "https://www.mariewilliamsyoga.com/yoga-classes-norwich" },
  { day: "Friday", time: "08:30", title: "Les Mills Yoga", place: "Nuffield Health Norwich", style: "Yoga", url: "https://www.nuffieldhealth.com/gyms/norwich/classes" },
  { day: "Friday", time: "10:00", title: "Gentle Yoga \u2014 Jess McKenna", place: "Horning Village Hall", style: "Gentle", url: "https://www.blissyoganorwich.co.uk/" },
  { day: "Saturday", time: "08:30", title: "Ride", place: "PureGym Castle Mall", style: "Ride", url: "https://www.puregym.com/gyms/norwich-castle-mall/timetable/" },
  { day: "Saturday", time: "09:10", title: "Mind", place: "PureGym Castle Mall", style: "Mind", url: "https://www.puregym.com/gyms/norwich-castle-mall/timetable/" },
  { day: "Sunday", time: "11:00", title: "Les Mills Yoga", place: "Nuffield Health Norwich", style: "Yoga", url: "https://www.nuffieldhealth.com/gyms/norwich/classes" }
];

const EVENTS = [
  { when: "Weekly", title: "City studio timetable", where: "NYC, Yantra, Yoga Tree, Hotpod", detail: "The four central studios run daily morning and evening boards." },
  { when: "Sundays", title: "Sound baths & restorative evenings", where: "The Yoga Tree / Calm in the City", detail: "Regular sound healing immersions sit alongside yin and nidra." },
  { when: "Last Friday monthly", title: "Gather \u2014 kirtan & social", where: "Happy OM Studio, Heigham Street", detail: "Mantra, community and satsang with Ivana." },
  { when: "Seasonal 2026\u201327", title: "Teacher training & retreats", where: "NYC, SunFyr, Grove Farm NR10", detail: "200-hour YTT at Norwich Yoga Central from 21 Sept 2026." }
];

const I18N = {
  en: {
    nav_find: "Find a class", nav_events: "Events", nav_how: "How it works",
    cta_list: "List a class free", cta_browse: "Browse Norwich classes",
    kicker: "Pilot \u00b7 Norwich & NR postcodes",
    h1: "Every class in Norwich, on one calm map.",
    lede: "Flow NR gathers yoga, pilates, gym and leisure classes across the NR postcodes. Students browse free. Teachers list free for three months.",
    stat1: "Places mapped", stat2: "NR districts", stat3: "Languages",
    card_title: "Pilot offer for teachers", card_1: "Free listing", card_1b: "First 3 months",
    card_2: "Then from \u00a39 / month", card_2b: "Cancel anytime", card_3: "Events included", card_3b: "Workshops & retreats",
    find_h: "Find a class", find_p: "Filter by style, area or venue type. Times change weekly \u2014 always confirm on the provider\u2019s own booking page.",
    search_ph: "Search teacher, studio or postcode", all_types: "All types", all_areas: "All areas",
    how_h: "How the Norwich pilot works", how_1t: "We map the city", how_1: "Studios, village halls, gyms and leisure centres in NR1\u2013NR14 go on one public directory.",
    how_2t: "Teachers list free", how_2: "Claim or add a listing at no cost for 90 days.", how_3t: "A small fee after", how_3: "From month four: \u00a39/month standard or \u00a319/month featured.",
    price_h: "Simple pricing after the free quarter", price_free: "Pilot", price_std: "Standard", price_feat: "Featured",
    events_h: "Yoga-type events", events_p: "Workshops, sound baths, kirtan, teacher training and retreats sit beside weekly classes.",
    lang_h: "Built to be translated", lang_p: "The interface can switch language. Listing details stay in the teacher\u2019s own words unless they add a translation.",
    form_h: "Claim or add a listing", form_p: "Free for three months from the day you join the pilot.",
    name: "Name", email: "Email", place: "Studio / teacher name", where: "Venue & postcode",
    send: "Request a free listing", sent: "Thank you. In the live pilot this would reach the Flow NR inbox.",
    foot: "Flow NR is a Norwich pilot concept. Listings are compiled from public websites and should be claimed by each teacher or venue."
  }
};

const LANG_META = [
  { code: "en", label: "English" }, { code: "zh", label: "\u4e2d\u6587\uff08\u7b80\u4f53\uff09" }, { code: "zh-TW", label: "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09" },
  { code: "hi", label: "\u0939\u093f\u0928\u094d\u0926\u0940" }, { code: "es", label: "Espa\u00f1ol" }, { code: "fr", label: "Fran\u00e7ais" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" }, { code: "bn", label: "\u09ac\u09be\u0982\u09b2\u09be" }, { code: "pt", label: "Portugu\u00eas" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" }, { code: "uk", label: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430" }, { code: "ur", label: "\u0627\u0631\u062f\u0648" },
  { code: "id", label: "Bahasa Indonesia" }, { code: "de", label: "Deutsch" }, { code: "ja", label: "\u65e5\u672c\u8a9e" },
  { code: "it", label: "Italiano" }, { code: "tr", label: "T\u00fcrk\u00e7e" }, { code: "vi", label: "Ti\u1ebfng Vi\u1ec7t" },
  { code: "ko", label: "\ud55c\uad6d\uc5b4" }, { code: "pl", label: "Polski" }
];
const RTL = new Set(["ar", "ur"]);
let lang = "en";
let activeStyle = "All";
let activeDay = "All";
function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
function applyI18n() {
  document.querySelectorAll("[data-i]").forEach(el => { el.textContent = t(el.dataset.i); });
  document.querySelectorAll("[data-iph]").forEach(el => { el.placeholder = t(el.dataset.iph); });
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.has(lang) ? "rtl" : "ltr";
}
function unique(arr) { return [...new Set(arr)]; }
function renderLangGrid() {
  const box = document.getElementById("langGrid");
  if (!box) return;
  box.innerHTML = LANG_META.map(x => `<button type="button" class="lang-card${x.code===lang?" on":""}" data-setlang="${x.code}">${x.label}</button>`).join("");
}
function renderFilters() {
  const styles = unique(LISTINGS.flatMap(x => x.styles)).sort();
  const areas = unique(LISTINGS.map(x => x.area)).sort();
  const types = unique(LISTINGS.map(x => x.type)).sort();
  document.getElementById("type").innerHTML = `<option value="">${t("all_types")}</option>` + types.map(x => `<option>${x}</option>`).join("");
  document.getElementById("area").innerHTML = `<option value="">${t("all_areas")}</option>` + areas.map(x => `<option>${x}</option>`).join("");
  document.getElementById("pills").innerHTML = ["All", ...styles].map(s => `<button class="pill${s===activeStyle?" on":""}" data-style="${s}">${s}</button>`).join("");
}
function renderList() {
  const q = document.getElementById("q").value.toLowerCase();
  const type = document.getElementById("type").value;
  const area = document.getElementById("area").value;
  const rows = LISTINGS.filter(x => {
    const blob = `${x.name} ${x.postcode} ${x.area} ${x.styles.join(" ")} ${x.notes} ${x.venue}`.toLowerCase();
    return (!q || blob.includes(q)) && (!type || x.type === type) && (!area || x.area === area) && (activeStyle === "All" || x.styles.includes(activeStyle));
  });
  document.getElementById("count").textContent = rows.length;
  document.getElementById("cards").innerHTML = rows.map(x => `<article class="card"><div class="type">${x.type} \u00b7 ${x.postcode}</div><h3>${x.name}</h3><p class="meta">${x.venue} \u00b7 ${x.area}</p><p class="meta">${x.notes}</p><div class="tags">${x.styles.map(s => `<span class="tag">${s}</span>`).join("")}</div><a class="more" href="${x.url}" target="_blank" rel="noopener">Visit site \u2192</a></article>`).join("");
}
function renderEvents() {
  document.getElementById("eventGrid").innerHTML = EVENTS.map(e => `<article class="event"><div class="when">${e.when}</div><h3>${e.title}</h3><p class="meta">${e.where}</p><p>${e.detail}</p></article>`).join("");
}
function renderCalendar() {
  const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const pills = document.getElementById("dayPills");
  const table = document.getElementById("calTable");
  if (!pills || !table) return;
  pills.innerHTML = days.map(d => `<button class="pill${d===activeDay?" on":""}" data-day="${d}">${d}</button>`).join("");
  const rows = CLASSES.filter(c => activeDay === "All" || c.day === activeDay).sort((a,b) => days.indexOf(a.day)-days.indexOf(b.day) || a.time.localeCompare(b.time));
  table.innerHTML = `<thead><tr><th>When</th><th>Class</th><th>Where</th><th></th></tr></thead><tbody>` + rows.map(c => `<tr><td class="when">${c.day.slice(0,3)} ${c.time}</td><td><strong>${c.title}</strong><div class="meta">${c.style}</div></td><td>${c.place}</td><td><a class="more" href="${c.url}" target="_blank" rel="noopener">Book \u2192</a></td></tr>`).join("") + `</tbody>`;
}
function setLang(next) {
  lang = next;
  const sel = document.getElementById("lang");
  if (sel && sel.value !== next) sel.value = next;
  applyI18n(); renderFilters(); renderList(); renderLangGrid();
}
document.getElementById("lang").addEventListener("change", e => setLang(e.target.value));
document.getElementById("langGrid").addEventListener("click", e => { const btn = e.target.closest("[data-setlang]"); if (btn) setLang(btn.dataset.setlang); });
document.getElementById("q").addEventListener("input", renderList);
document.getElementById("type").addEventListener("change", renderList);
document.getElementById("area").addEventListener("change", renderList);
document.getElementById("pills").addEventListener("click", e => { const btn = e.target.closest("[data-style]"); if (!btn) return; activeStyle = btn.dataset.style; renderFilters(); renderList(); });
document.getElementById("menuBtn").addEventListener("click", () => { document.getElementById("navLinks").classList.toggle("open"); });
document.getElementById("listForm").addEventListener("submit", e => { e.preventDefault(); document.getElementById("formMsg").textContent = t("sent"); e.target.reset(); });
document.getElementById("dayPills")?.addEventListener("click", e => { const btn = e.target.closest("[data-day]"); if (!btn) return; activeDay = btn.dataset.day; renderCalendar(); });
applyI18n(); renderFilters(); renderList(); renderEvents(); renderCalendar(); renderLangGrid();
document.getElementById("statPlaces").textContent = LISTINGS.length;
const langStat = document.querySelectorAll(".stats strong")[2];
if (langStat) langStat.textContent = String(LANG_META.length);
