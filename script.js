/* EASY EDIT SETTINGS */
const CONFIG = {
  fontFamily: "Inter",

  brand: "SWISH",
  topCode: "NYC / 2026",
  event: "FANATICS FEST 2026",

  titleLine1: "STREAM",
  titleLine2: "STARTING SOON",
  deck: "NEW YORK CITY / LIVE FROM THE FLOOR",

  mainCamLabel: "MAIN FLOOR",
  packCamLabel: "PACK CAM",

  countLabel: "GOING LIVE AT",
  goLiveTime: "12:00 PM",

  location: "FANATICS FEST NYC",
  onDeck: "LIVE BREAKS, RARE PULLS<br>& PACK REVEALS",

  microText: "PREMIUM COLLECTIBLES.<br>LIVE ENERGY.<br>ONLY ON SWISH.",

  tickerItems: [
    { logo: "./assets/whatnot.png", text: "@SWISHBREAKS" },
    { logo: "./assets/tiktok.png", text: "@SWISHBREAKS" },
    { logo: "./assets/instagram.png", text: "@SWISHBREAKS" },
    { logo: "./assets/fanatics.png", text: "FANATICS LIVE" }
  ]
};

document.documentElement.style.setProperty(
  "--font",
  `"${CONFIG.fontFamily}", Arial, Helvetica, sans-serif`
);

function setText(id, value, allowHtml = false) {
  const element = document.getElementById(id);
  if (!element) return;
  allowHtml ? element.innerHTML = value : element.textContent = value;
}

setText("brandText", CONFIG.brand);
setText("topCode", CONFIG.topCode);
setText("eventText", CONFIG.event);
setText("titleLine1", CONFIG.titleLine1);
setText("titleLine2", CONFIG.titleLine2);
setText("deckText", CONFIG.deck);
setText("mainCamLabel", CONFIG.mainCamLabel);
setText("packCamLabel", CONFIG.packCamLabel);
setText("countLabel", CONFIG.countLabel);
setText("timer", CONFIG.goLiveTime);
setText("locationText", CONFIG.location);
setText("onDeckText", CONFIG.onDeck, true);
setText("microText", CONFIG.microText, true);

const tickerTrack = document.getElementById("tickerTrack");
if (tickerTrack) {
  const repeatedItems = [...CONFIG.tickerItems, ...CONFIG.tickerItems];
  tickerTrack.innerHTML = repeatedItems.map((item) => `
    <span class="item">
      <img src="${item.logo}" alt="">
      <span>${item.text}</span>
      <span class="separator"></span>
    </span>
  `).join("");
}
