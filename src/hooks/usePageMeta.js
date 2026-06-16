import { useEffect } from "react";

const SITE_URL = "https://jeongsupark-dev.github.io";

function upsertMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  if (!href) return;
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// SPA 라우트마다 <title>·description·canonical·OG 메타를 갱신한다.
// path는 leading slash 포함된 절대 경로(예: "/colophon"), 루트는 "/".
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    if (!title) return;
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    if (typeof path === "string") {
      const url = SITE_URL + path;
      upsertCanonical(url);
      upsertMeta("og:url", url, "property");
    }
  }, [title, description, path]);
}
