---
title: Home
description: "Strategy • Systems • Story"
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture about %}
      <p class="cardText">I’m Darren Steptoe. I build structured, practical work where accuracy matters, from campaign strategy and electoral modeling to media production and long-form research. This site serves as a central hub for my documentaries, books, projects, and ongoing work. If you’re here for professional services, please visit the Services page using the menu above.</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="About" title="Darren Steptoe" content=about %}

      {% capture search %}
      <div class="searchWrap" data-search>
        <input class="searchInput" type="search" placeholder="Search this site…" aria-label="Search">
        <p class="searchStatus muted">Loading…</p>
        <div class="searchResults" role="list"></div>
      </div>
      {% endcapture %}
      {% include card.html class="card--8" eyebrow="Search" title="Find pages fast" content=search %}

      {% capture photo %}
      {% include media.html class="media--square" src="/assets/img/scoreboard.jpeg" alt="Photo placeholder" %}
      {% endcapture %}
      {% include card.html class="card--4" eyebrow="Photo" title=" " content=photo %}

    </div>
  </div>
</section>
