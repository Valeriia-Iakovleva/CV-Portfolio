// Check the deployable output rather than reproducing the Astro templates.
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, sep } from "node:path";

const root = resolve("dist");
const origin = "https://valeriia-iakovleva.github.io";
const base = "/CV-Portfolio/";
const languages = ["en", "pl", "uk"];
const read = (path) => readFile(path, "utf8");
const attributes = (html, name) =>
  [...html.matchAll(new RegExp(`\\b${name}="([^"]*)"`, "g"))].map(
    (match) => match[1],
  );

async function outputPath(url) {
  assert.ok(url.pathname.startsWith(base), `URL escapes Pages base: ${url}`);
  const path = resolve(
    root,
    `.${decodeURIComponent(url.pathname.slice(base.length - 1))}`,
  );
  assert.ok(
    path === root || path.startsWith(root + sep),
    `URL escapes output: ${url}`,
  );
  const info = await stat(path);
  return info.isDirectory() ? resolve(path, "index.html") : path;
}

const entry = await read(resolve(root, "index.html"));
assert.match(
  entry,
  /http-equiv="refresh"[^>]*content="0;url=\/CV-Portfolio\/en\//i,
  "Entry must redirect instantly to English",
);
let referenceTitles;
for (const language of languages) {
  const current = new URL(`${base}${language}/`, origin);
  const html = await read(await outputPath(current));
  assert.match(html, new RegExp(`<html lang="${language}"`));
  assert.equal(
    (html.match(/<h1\b/g) ?? []).length,
    1,
    `${language}: one main heading`,
  );
  assert.ok(html.includes(`rel="canonical" href="${current}"`));
  const navigation = html.match(
    /<ul class="language-list">([\s\S]*?)<\/ul>/,
  )?.[1];
  assert.ok(navigation, `${language}: language navigation`);
  assert.equal((navigation.match(/aria-current="page"/g) ?? []).length, 1);
  for (const locale of languages) {
    assert.ok(navigation.includes(`href="${base}${locale}/"`));
    assert.ok(html.includes(`hreflang="${locale}"`));
  }
  const activeLink = navigation.match(
    /<a\b[^>]*aria-current="page"[^>]*>/,
  )?.[0];
  assert.ok(
    activeLink.includes(`href="${base}${language}/"`),
    "Active language matches page",
  );
  const ids = attributes(html, "id");
  assert.equal(new Set(ids).size, ids.length, `${language}: unique IDs`);
  for (const id of ["main", "experience", "projects", "about", "contact"])
    assert.ok(ids.includes(id));
  const titles = [
    ...html.matchAll(/<div class="experience-copy">\s*<h3>(.*?)<\/h3>/g),
  ].map((match) => match[1]);
  assert.ok(titles.length > 0, "Career history renders");
  if (referenceTitles)
    assert.deepEqual(
      titles,
      referenceTitles,
      "Official titles match across translations",
    );
  referenceTitles = titles;
  assert.equal(
    (html.match(/<details\b/g) ?? []).length,
    (html.match(/<summary\b/g) ?? []).length,
  );
  assert.ok(
    html.includes("<details"),
    "Project disclosures render without JavaScript",
  );

  for (const value of [
    ...attributes(html, "href"),
    ...attributes(html, "src"),
  ]) {
    const url = new URL(value.replaceAll("&amp;", "&"), current);
    assert.ok(
      !["mailto:", "tel:"].includes(url.protocol),
      "Contact must stay GitHub-only",
    );
    if (url.origin !== origin) continue;
    const path = await outputPath(url);
    await stat(path);
    if (url.hash) {
      const target = await read(path);
      assert.ok(
        attributes(target, "id").includes(
          decodeURIComponent(url.hash.slice(1)),
        ),
        `Missing anchor: ${url}`,
      );
    }
  }
}

async function checkPrivacy(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, item.name);
    if (item.isDirectory()) await checkPrivacy(path);
    else if (/\.(html|js|mjs|ts|astro|css|md|svg)$/.test(item.name)) {
      const text = await read(path);
      assert.ok(
        !/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(text),
        `Email address found in ${path}`,
      );
      assert.ok(
        !/\b(?:mailto|tel):/i.test(text),
        `Personal contact URL found in ${path}`,
      );
    }
  }
}
for (const directory of ["dist", "src", "public", "docs"])
  await checkPrivacy(resolve(directory));
console.log(
  "Site checks passed: English redirect, three locales, shared titles, navigation, assets, anchors, and contact privacy.",
);

