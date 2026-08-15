const fs = require('fs');
const xlsx = require('xlsx');

const excelPath = 'C:\\Users\\pc\\OneDrive\\Documents\\YSM\\YSM_Translations_Reference (1).xlsx';
const tsPath = 'context/translations.ts';

// 1. Read Excel file
const wb = xlsx.readFile(excelPath);
const ws = wb.Sheets[wb.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(ws);

// 2. Read existing TS file
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

// 3. Update translations object
for (const row of data) {
  if (!row.Key) continue;
  const parts = row.Key.split('.');
  if (parts.length !== 2) continue;
  
  const sec = parts[0];
  const key = parts[1];
  
  if (row.English) {
    if (!translations['en'][sec]) translations['en'][sec] = {};
    translations['en'][sec][key] = row.English;
  }
  if (row.Amharic) {
    if (!translations['am'][sec]) translations['am'][sec] = {};
    translations['am'][sec][key] = row.Amharic;
  }
  if (row.Tigrinya) {
    if (!translations['ti'][sec]) translations['ti'][sec] = {};
    translations['ti'][sec][key] = row.Tigrinya;
  }
}

// 4. Generate the new translations.ts file
const languages = ['en', 'de', 'it', 'am', 'ti'];
let newFileContent = `export const translations: Record<string, any> = {\n`;
for (const lang of languages) {
  newFileContent += `  ${lang}: {\n`;
  for (const sec in translations['en']) {
    newFileContent += `    ${sec}: {\n`;
    for (const key in translations['en'][sec]) {
      let val = "";
      if (translations[lang] && translations[lang][sec] && translations[lang][sec][key] !== undefined) {
          val = String(translations[lang][sec][key]);
      } else {
          val = String(translations['en'][sec][key]); // Fallback to English
      }
      val = val.replace(/"/g, '\\"').replace(/\n/g, '\\n');
      newFileContent += `      ${key}: "${val}",\n`;
    }
    newFileContent += `    },\n`;
  }
  newFileContent += `  },\n`;
}
newFileContent += `};\n`;

fs.writeFileSync(tsPath, newFileContent);
console.log("Successfully imported translations into context/translations.ts");
