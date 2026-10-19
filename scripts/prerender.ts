/* eslint-disable no-console */
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AppProviders from "../src/AppProviders";
import AppRoutes from "../src/AppRoutes";
import { getAllRoutes } from "./routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const INDEX_HTML = path.join(DIST, "index.html");
const LOCALES_DIR = path.resolve(__dirname, "../public/locales/en");

function routeToFilePath(route: string): string {
  const trimmed = route.replace(/^\/+|\/+$/g, "");
  if (!trimmed) return path.join(DIST, "index.html");
  return path.join(DIST, trimmed, "index.html");
}

function injectHtmlDocument(template: string, appHtml: string, helmet: Record<string, { toString(): string }>) {
  const htmlAttrs = helmet.htmlAttributes?.toString() ?? "";
  const bodyAttrs = helmet.bodyAttributes?.toString() ?? "";
  const helmetTitle = helmet.title?.toString() ?? "";
  const helmetMeta = helmet.meta?.toString() ?? "";
  const helmetLink = helmet.link?.toString() ?? "";
  const helmetScript = helmet.script?.toString() ?? "";
  const helmetPriority = helmet.priority?.toString?.() ?? "";

  // Strip static tags from the template that Helmet is replacing, so the
  // prerendered HTML doesn't ship duplicate <title>/description/og:* tags.
  let head = template;
  if (/<title[^>]*data-rh="true"/.test(helmetTitle)) {
    head = head.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  }
  if (/name="description"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+name="description"[^>]*\/?>\s*/i, "");
  }
  if (/property="og:title"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+property="og:title"[^>]*\/?>\s*/i, "");
  }
  if (/property="og:description"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+property="og:description"[^>]*\/?>\s*/i, "");
  }
  if (/property="og:type"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+property="og:type"[^>]*\/?>\s*/i, "");
  }
  if (/property="og:image"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+property="og:image"[^>]*\/?>\s*/i, "");
  }
  if (/name="twitter:image"/.test(helmetMeta)) {
    head = head.replace(/<meta\s+name="twitter:image"[^>]*\/?>\s*/i, "");
  }

  return head
    .replace(/<html([^>]*)>/i, `<html$1${htmlAttrs ? ` ${htmlAttrs}` : ""}>`)
    .replace(
      /<head>([\s\S]*?)<\/head>/i,
      `<head>${helmetTitle}${helmetPriority}${helmetMeta}${helmetLink}${helmetScript}$1</head>`,
    )
    .replace(/<body([^>]*)>/i, `<body$1${bodyAttrs ? ` ${bodyAttrs}` : ""}>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

async function writeRoute(route: string, html: string): Promise<void> {
  const target = routeToFilePath(route);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html, "utf-8");
}

async function initI18n() {
  if (i18n.isInitialized) return;

  const entries = await fs.readdir(LOCALES_DIR);
  const resources: Record<string, Record<string, unknown>> = { en: {} };

  for (const file of entries) {
    if (!file.endsWith(".json")) continue;
    const namespace = file.replace(/\.json$/, "");
    const raw = await fs.readFile(path.join(LOCALES_DIR, file), "utf-8");
    resources.en[namespace] = JSON.parse(raw);
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en"],
    defaultNS: "common",
    ns: Object.keys(resources.en),
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
  });
}

async function renderRoute(template: string, route: string): Promise<string> {
  const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};

  const appHtml = renderToString(
    React.createElement(
      AppProviders,
      { helmetContext },
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(AppRoutes),
      ),
    ),
  );

  return injectHtmlDocument(template, appHtml, helmetContext.helmet ?? {});
}

async function main() {
  const start = Date.now();
  const routes = getAllRoutes();
  const template = await fs.readFile(INDEX_HTML, "utf-8");

   await initI18n();

  console.log(`[prerender] ${routes.length} routes`);

  for (const route of routes) {
    const html = await renderRoute(template, route);
    await writeRoute(route, html);
    console.log(`  ✓ ${route}`);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`[prerender] done in ${elapsed}s — ${routes.length}/${routes.length} ok`);
}

main().catch((e) => {
  console.error("[prerender] fatal:", e);
  process.exit(1);
});