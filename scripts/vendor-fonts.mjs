/**
 * Copies the latin subsets of our two variable fonts into public/fonts/.
 *
 * The @fontsource packages ship every script (cyrillic, greek, vietnamese …).
 * Shipping them all into the image buys nothing: the browser only ever fetches
 * latin for this site. This keeps ~1.6 MB of dead weight out of the container
 * and lets index.html preload the two files that are actually painted.
 *
 * Run with:  npm run fonts:vendor
 */
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "public", "fonts");

const sources = [
  {
    packageDir: "@fontsource-variable/inter",
    files: [
      "inter-latin-wght-normal.woff2",
      "inter-latin-wght-italic.woff2",
      "inter-latin-wght-normal.woff2",
    ],
    license: "LICENSE",
    licenseAs: "LICENSE-Inter.txt",
  },
  {
    packageDir: "@fontsource-variable/plus-jakarta-sans",
    files: [
      "plus-jakarta-sans-latin-wght-normal.woff2",
      "plus-jakarta-sans-latin-wght-italic.woff2",
    ],
    license: "LICENSE",
    licenseAs: "LICENSE-PlusJakartaSans.txt",
  },
];

await mkdir(target, { recursive: true });

for (const source of sources) {
  const from = join(root, "node_modules", source.packageDir);
  for (const file of new Set(source.files)) {
    await copyFile(join(from, "files", file), join(target, file));
    console.log(`copied ${file}`);
  }
  await copyFile(join(from, source.license), join(target, source.licenseAs));
  console.log(`copied ${source.licenseAs}`);
}
