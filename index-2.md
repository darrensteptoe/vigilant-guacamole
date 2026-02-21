---
title: Home
description: "Strategy • Systems • Story"
---

<section class="section">
  <div class="container">
    <div class="grid">

      {% capture search %}
      <div class="searchWrap" data-search>
        <span class="searchWrapIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><use href="#i-search"></use></svg>
        </span>
        <input class="searchInput" type="search" placeholder="Search this site…" aria-label="Search">
        <p class="searchStatus muted">Loading…</p>
        <div class="searchResults" role="list"></div>
      </div>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-search" eyebrow="Search" title="Find pages fast" content=search %}

    </div>

    <!-- PHOTO + ABOUT ROW -->
    <div class="grid">

      {% capture photo %}
      {% include media.html 
        class="media--square" 
        src="/assets/img/EA15915B-E56C-4FB3-B89B-085E5E740523.png" 
        alt="Portrait" %}
      {% endcapture %}
      {% include card.html class="card--3" icon="i-camera" eyebrow="Photo" title="" content=photo %}

      {% capture about %}
      <p class="cardText">
        I’m Darren Steptoe. I build structured, practical work where accuracy matters, from campaign strategy and electoral modeling to media production and long-form research. This site serves as a central hub for my documentaries, books, projects, and ongoing work. If you’re here for professional services, please visit the Services page using the menu above.
      </p>
      {% endcapture %}
      {% include card.html class="card--9" icon="i-user" eyebrow="About" title="Darren Steptoe" content=about %}

    </div>
  </div>
</section>
