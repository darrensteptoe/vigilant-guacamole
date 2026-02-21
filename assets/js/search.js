(() => {
  const INDEX_URL = "/assets/data/search-index.json";

  const escapeHtml = (s) =>
    String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const normalize = (s) => String(s ?? "").toLowerCase();

  const makeSnippet = (text, terms) => {
    const t = String(text ?? "").replace(/\s+/g, " ").trim();
    if (!t) return "";
    if (!terms.length) return t.slice(0, 180) + (t.length > 180 ? "…" : "");

    const low = t.toLowerCase();
    let idx = -1;
    for (const term of terms) {
      const i = low.indexOf(term);
      if (i !== -1 && (idx === -1 || i < idx)) idx = i;
    }
    if (idx === -1) return t.slice(0, 180) + (t.length > 180 ? "…" : "");

    const start = Math.max(0, idx - 70);
    const end = Math.min(t.length, idx + 110);
    let snippet = t.slice(start, end);
    if (start > 0) snippet = "…" + snippet;
    if (end < t.length) snippet = snippet + "…";
    return snippet;
  };

  const highlight = (snippet, terms) => {
    if (!snippet || !terms.length) return escapeHtml(snippet);
    const escaped = escapeHtml(snippet);
    let out = escaped;
    for (const term of terms) {
      if (!term) continue;
      const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
      out = out.replace(re, "<mark>$1</mark>");
    }
    return out;
  };

  const scoreField = (hay, terms, weight) => {
    if (!hay) return 0;
    let s = 0;
    for (const t of terms) if (hay.includes(t)) s += weight;
    return s;
  };

  const rank = (pages, termRaw) => {
    const terms = normalize(termRaw).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    return pages
      .filter((p) => !p.hidden)
      .map((p) => {
        const title = normalize(p.title);
        const excerpt = normalize(p.excerpt || "");
        const tags = normalize((p.tags || []).join(" "));
        const content = normalize(p.content || "");

        let score = 0;
        score += scoreField(title, terms, 8);
        score += scoreField(tags, terms, 6);
        score += scoreField(excerpt, terms, 3);
        score += scoreField(content, terms, 1);

        if (score <= 0) return null;

        const snippetSource = p.content || p.excerpt || "";
        const snippet = makeSnippet(snippetSource, terms);

        return {
          p,
          score,
          snippet,
          terms,
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);
  };

  const loadIndex = async () => {
    try {
      const res = await fetch(INDEX_URL, { cache: "no-store" });
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  };

  const initInlineSearch = (pages) => {
    const wrap = document.querySelector("[data-search]");
    if (!wrap) return;

    const input = wrap.querySelector(".searchInput");
    const status = wrap.querySelector(".searchStatus");
    const results = wrap.querySelector(".searchResults");

    if (!input || !status || !results) return;

    const clear = () => {
      results.innerHTML = "";
      status.textContent = "";
    };

    const render = (items) => {
      if (!items.length) {
        status.textContent = "0 results";
        results.innerHTML = "";
        return;
      }

      status.textContent = `${items.length} result${items.length === 1 ? "" : "s"}`;
      results.innerHTML = items
        .map(({ p, snippet, terms }) => {
          const title = escapeHtml(p.title || p.url);
          const url = escapeHtml(p.url || "#");
          const snip = highlight(snippet || p.excerpt || "", terms);
          return `
            <a class="searchResult" href="${url}" role="listitem">
              <div class="srTitle">${title}</div>
              ${snip ? `<div class="srDesc">${snip}</div>` : ""}
            </a>
          `;
        })
        .join("");
    };

    status.textContent = pages.length ? "" : "Search unavailable";

    input.addEventListener("input", () => {
      const v = input.value;
      if (!v.trim()) {
        clear();
        return;
      }
      render(rank(pages, v));
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        input.value = "";
        clear();
      }
      if (e.key === "Enter") {
        const items = rank(pages, input.value);
        if (items.length) window.location.href = items[0].p.url;
      }
    });
  };

  const initLegacySearchPage = (pages) => {
    const q = document.getElementById("q");
    const clearBtn = document.getElementById("clear");
    const resultsEl = document.getElementById("results");
    const countEl = document.getElementById("count");
    const metaEl = document.getElementById("resultsMeta");

    if (!q || !clearBtn || !resultsEl || !countEl || !metaEl) return;

    let filtered = [];

    const setVisible = (on) => {
      metaEl.classList.toggle("hidden", !on);
      resultsEl.classList.toggle("hidden", !on);
    };

    const clearResults = () => {
      filtered = [];
      resultsEl.innerHTML = "";
      countEl.textContent = "0";
      setVisible(false);
    };

    const renderResults = () => {
      resultsEl.innerHTML = filtered
        .map(({ p, snippet, terms }) => {
          const title = escapeHtml(p.title || p.url);
          const desc = escapeHtml(p.excerpt || "");
          const snip = highlight(snippet || "", terms);
          const url = escapeHtml(p.url || "#");

          return `
            <li>
              <div class="resultTitle"><a href="${url}">${title}</a></div>
              ${snip ? `<div class="resultSnippet">${snip}</div>` : (desc ? `<div class="resultDesc">${desc}</div>` : "")}
            </li>
          `;
        })
        .join("");

      countEl.textContent = String(filtered.length);
      setVisible(true);
    };

    const applyFilter = () => {
      const termRaw = q.value;
      if (!termRaw.trim()) {
        clearResults();
        return;
      }

      filtered = rank(pages, termRaw);
      renderResults();
    };

    const openTopResult = () => {
      if (!filtered.length) return;
      const url = filtered[0]?.p?.url;
      if (url) window.location.href = url;
    };

    q.addEventListener("input", applyFilter);

    q.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        openTopResult();
      }
      if (e.key === "Escape") {
        q.value = "";
        clearResults();
      }
    });

    clearBtn.addEventListener("click", () => {
      q.value = "";
      q.focus();
      clearResults();
    });

    clearResults();
  };

  (async () => {
    const pages = await loadIndex();
    initInlineSearch(pages);
    initLegacySearchPage(pages);
  })();
})();
