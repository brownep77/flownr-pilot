const LAST_SCAN = "16 September 2026";
const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let calCursor = new Date();
calCursor.setDate(1);
let selectedISO = null;
function pad(n) { return String(n).padStart(2, "0"); }
function toISO(d) { return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function weekdayName(d) { return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d.getDay()]; }
function slotsOnDate(d) {
  const name = weekdayName(d);
  return CLASSES.filter(c => c.day === name).sort((a, b) => a.time.localeCompare(b.time));
}
function renderCalendar() {
  const grid = document.getElementById("monthGrid");
  const table = document.getElementById("calTable");
  const title = document.getElementById("calTitle");
  const stamp = document.getElementById("calStamp");
  if (!grid || !table) return;
  const year = calCursor.getFullYear();
  const month = calCursor.getMonth();
  title.textContent = calCursor.toLocaleString("en-GB", { month: "long", year: "numeric" });
  if (stamp) stamp.textContent = `Public boards last scanned ${LAST_SCAN}. Next automatic scan: each Monday.`;
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const start = new Date(year, month, 1 - startOffset);
  const todayISO = toISO(new Date());
  if (!selectedISO) selectedISO = todayISO;
  const heads = WEEKDAYS.map(d => `<div class="dow">${d.slice(0,3)}</div>`).join("");
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const iso = toISO(d);
    const inMonth = d.getMonth() === month;
    const slots = slotsOnDate(d);
    const shown = slots.slice(0, 2).map(s => `<span class="slot">${s.time}</span>`).join("");
    const extra = slots.length > 2 ? `<span class="more-slots">+${slots.length - 2}</span>` : "";
    cells.push(`<button type="button" class="day-cell${inMonth?"":" out"}${iso===selectedISO?" on":""}${iso===todayISO?" today":""}" data-iso="${iso}"><span class="day-num">${d.getDate()}</span><span class="day-slots">${shown}${extra}</span></button>`);
  }
  grid.innerHTML = heads + cells.join("");
  const selected = new Date(selectedISO + "T12:00:00");
  const rows = slotsOnDate(selected);
  const label = selected.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  table.innerHTML = `<thead><tr><th>${label}</th><th>Class</th><th>Where</th><th></th></tr></thead><tbody>` +
    (rows.length ? rows.map(c => `<tr><td class="when">${c.time}</td><td><strong>${c.title}</strong> · ${c.style}</td><td>${c.place}</td><td><a class="more" href="${c.url}" target="_blank" rel="noopener">Book →</a></td></tr>`).join("") : `<tr><td colspan="4" class="meta">No public slot pinned for this day yet.</td></tr>`) +
    `</tbody>`;
}
document.getElementById("monthGrid")?.addEventListener("click", e => {
  const cell = e.target.closest("[data-iso]");
  if (!cell) return;
  selectedISO = cell.dataset.iso;
  renderCalendar();
});
document.getElementById("calPrev")?.addEventListener("click", () => {
  calCursor = new Date(calCursor.getFullYear(), calCursor.getMonth() - 1, 1);
  selectedISO = toISO(calCursor);
  renderCalendar();
});
document.getElementById("calNext")?.addEventListener("click", () => {
  calCursor = new Date(calCursor.getFullYear(), calCursor.getMonth() + 1, 1);
  selectedISO = toISO(calCursor);
  renderCalendar();
});
renderCalendar();
