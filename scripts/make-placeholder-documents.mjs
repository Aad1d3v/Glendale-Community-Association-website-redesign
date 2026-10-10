/**
 * Writes one placeholder PDF per archive entry into public/documents/.
 *
 * The site's download buttons point at /documents/<slug>.pdf, so without these
 * files every download on the resource page would 404. Each placeholder is a
 * single page that says so in large type, which makes it obvious in review that
 * the real newsletter scans and signed minutes still need to be dropped in.
 *
 * The slug list is read out of src/content/documents.ts so the two can never
 * drift apart. Run with:  npm run docs:placeholders
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "public", "documents");
const source = join(root, "src", "content", "documents.ts");

/** Escapes the three characters that would break a PDF string literal. */
const escape = (text) => text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

/** A minimal, valid single-page PDF carrying one centred line of text. */
const buildPdf = (title, subtitle) => {
  const body = [
    "BT /F1 20 Tf 60 640 Td (Glendale / Glendale Meadows Community Association) Tj ET",
    `BT /F1 16 Tf 60 600 Td (${escape(title)}) Tj ET`,
    `BT /F1 12 Tf 60 570 Td (${escape(subtitle)}) Tj ET`,
    "BT /F1 11 Tf 60 520 Td (This is a placeholder file shipped with the redesign.) Tj ET",
    "BT /F1 11 Tf 60 500 Td (Replace it with the association's real PDF at the same path.) Tj ET",
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${body.length} >>\nstream\n${body}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  return pdf;
};

const contents = await readFile(source, "utf8");
const entries = [...contents.matchAll(/slug:\s*"([^"]+)",\s*\n\s*title:\s*"((?:[^"\\]|\\.)*)"/g)];

if (entries.length === 0) {
  throw new Error("No slug/title pairs found in src/content/documents.ts");
}

await mkdir(target, { recursive: true });

for (const [, slug, rawTitle] of entries) {
  const title = rawTitle.replace(/\\"/g, '"');
  const pdf = buildPdf(title, "Archive document - placeholder");
  await writeFile(join(target, `${slug}.pdf`), pdf, "utf8");
}

console.log(`wrote ${entries.length} placeholder PDFs to public/documents/`);
