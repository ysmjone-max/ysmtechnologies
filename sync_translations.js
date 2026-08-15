const fs = require('fs');
const xlsx = require('xlsx'); // I'll need to install xlsx

// 1. Read existing TS file
const tsPath = 'context/translations.ts';
let tsCode = fs.readFileSync(tsPath, 'utf8');

// Ensure we can evaluate it
let evalCode = tsCode.replace(/export const translations(?:\s*:\s*Record<string,\s*any>)?\s*=\s*/, 'return ');
let translations;
try {
  const getTranslations = new Function(evalCode);
  translations = getTranslations();
} catch (e) {
  console.error("Failed to parse translations object:", e);
  process.exit(1);
}

// 2. Identify all unique keys from 'en'
const en = translations['en'];
const allKeys = {}; // { section: { key: defaultValue } }

for (const section in en) {
  allKeys[section] = {};
  for (const key in en[section]) {
    allKeys[section][key] = en[section][key];
  }
}

// Ensure our new hardcoded keys are in 'en'
const newKeys = {
  portfolio: {
    featuredTag: "FEATURED RESTAURANT PROJECT",
    featuredTitle: "What if your restaurant looked like this online?",
    featMenu: "Menu",
    featRes: "Reservation",
    featWa: "WhatsApp",
    featMap: "Google Maps",
    featLang: "Multilingual",
    viewDemo: "View Restaurant Demo",
    freeReview: "Get a Free Website Review",
    fakeBtn1: "Book a Table",
    fakeBtn2: "Order via WhatsApp",
    otherProjects: "Other Client Projects"
  },
  restaurants: {
    solutionTag: "Restaurant Solutions",
    reqDetails: "Request Details",
    pkg1Name: "Restaurant Starter",
    pkg1Target: "For small cafés and new restaurants",
    pkg1Feat1: "Modern, Responsive Website",
    pkg1Feat2: "Digital PDF Menu Integration",
    pkg1Feat3: "Google Business Profile Setup",
    pkg1Feat4: "WhatsApp Contact Button",
    pkg1Feat5: "Basic SEO (Local Search)",
    pkg1Feat6: "Mobile-First Design",
    pkg2Name: "Restaurant Growth",
    pkg2Target: "For established restaurants looking to scale",
    pkg2Feat1: "Everything in Starter, plus:",
    pkg2Feat2: "Interactive Digital Menu (QR Code ready)",
    pkg2Feat3: "Table Reservation System (Email/WhatsApp)",
    pkg2Feat4: "Multilingual Support (2 Languages)",
    pkg2Feat5: "Social Media Integration",
    pkg2Feat6: "Performance Analytics Setup",
    pkg3Name: "Restaurant Pro",
    pkg3Target: "For high-volume restaurants and chains",
    pkg3Feat1: "Everything in Growth, plus:",
    pkg3Feat2: "Custom Online Ordering System",
    pkg3Feat3: "Payment Gateway Integration",
    pkg3Feat4: "Customer Account & Loyalty Features",
    pkg3Feat5: "Multilingual Support (Up to 5 Languages)",
    pkg3Feat6: "Advanced Local SEO Strategy",
    feat1Title: "QR Digital Menus",
    feat1Desc: "Easily update your menu items, prices, and specials without printing costs.",
    feat2Title: "Mobile Optimized",
    feat2Desc: "Over 80% of restaurant searches happen on mobile. We ensure your site looks perfect on all devices.",
    feat3Title: "Multilingual Support",
    feat3Desc: "Serve a diverse customer base with native language support for English, Italian, German, Amharic, and Tigrinya.",
    feat4Title: "WhatsApp Integration",
    feat4Desc: "Let customers book tables or ask questions directly through WhatsApp."
  }
};

// Add new keys to allKeys['en'] if missing
for (const sec in newKeys) {
  if (!allKeys[sec]) allKeys[sec] = {};
  for (const k in newKeys[sec]) {
    if (!allKeys[sec][k]) {
      allKeys[sec][k] = newKeys[sec][k];
    }
  }
}

// 3. Sync all languages
const languages = ['en', 'de', 'it', 'am', 'ti'];
for (const lang of languages) {
  if (!translations[lang]) translations[lang] = {};
  for (const sec in allKeys) {
    if (!translations[lang][sec]) translations[lang][sec] = {};
    for (const key in allKeys[sec]) {
      // If the language is missing this key, fill it with the English default
      if (translations[lang][sec][key] === undefined) {
        translations[lang][sec][key] = allKeys[sec][key];
      }
    }
  }
}

// 4. Generate the new translations.ts file
let newFileContent = `export const translations: Record<string, any> = {\n`;
for (const lang of languages) {
  newFileContent += `  ${lang}: {\n`;
  for (const sec in allKeys) {
    newFileContent += `    ${sec}: {\n`;
    for (const key in allKeys[sec]) {
      const val = String(translations[lang][sec][key]).replace(/"/g, '\\"').replace(/\n/g, '\\n');
      newFileContent += `      ${key}: "${val}",\n`;
    }
    newFileContent += `    },\n`;
  }
  newFileContent += `  },\n`;
}
newFileContent += `};\n`;
fs.writeFileSync(tsPath, newFileContent);
console.log("Updated context/translations.ts");

// 5. Generate Excel file
const rows = [];
for (const sec in allKeys) {
  for (const key in allKeys[sec]) {
    const fullKey = `${sec}.${key}`;
    rows.push({
      Key: fullKey,
      English: translations['en'][sec][key],
      Amharic: translations['am'][sec][key],
      Tigrinya: translations['ti'][sec][key]
    });
  }
}

const ws = xlsx.utils.json_to_sheet(rows);

// Adjust column widths
ws['!cols'] = [
  {wch: 25}, // Key
  {wch: 50}, // English
  {wch: 50}, // Amharic
  {wch: 50}  // Tigrinya
];

const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, "Translations");
xlsx.writeFile(wb, "YSM_Translations_Reference.xlsx");
console.log("Generated YSM_Translations_Reference.xlsx");
