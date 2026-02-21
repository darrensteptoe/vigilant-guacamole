---
title: Home
description: "Strategy • Systems • Story"
---

<section class="section">
  <div class="container">
    <div class="grid">

      {% capture search %}
      <div class="searchWrap" data-search>
        <span class="searchWrapIcon" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-search"></use></svg></span>
        <input class="searchInput" type="search" placeholder="Search this site…" aria-label="Search">
        <div class="searchResults" data-results></div>
      </div>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-search" eyebrow="Search" title="Find pages fast" content=search %}

      {% capture about %}
      <p class="cardText">
        I’m Darren Steptoe. I build structured, practical work where accuracy matters, 
        from campaign strategy and electoral modeling to media production and long-form research.
      </p>
      {% endcapture %}
      {% include card.html class="card--6" icon="i-user" eyebrow="About" title="Darren Steptoe" content=about %}

      {% capture photo %}
      <img src="/assets/img/headshot.jpg" alt="Darren Steptoe" class="photoCardImg">
      {% endcapture %}
      {% include card.html class="card--6" icon="i-camera" eyebrow="Photo" title="Portrait" content=photo %}

    </div>
  </div>
</section>
