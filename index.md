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
        <p class="searchStatus muted">Loading…</p>
        <div class="searchResults" role="list"></div>
      </div>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-search" eyebrow="Search" title="Find pages fast" content=search %}

      {% capture about %}
      <p class="cardText">I work in media production, field operations, research, and a few other things that resist easy labels. This site holds all of it.<br><br>
Some of it is client work. Some of it is what I'm thinking about, building, or just genuinely curious about right now. I'm exploring the world and my own mind, and this is where that lives. My "social media."<br><br>
To book services, head to the Services page. For everything else, look around. Laying it all out here wouldn't do it justice anyway.</p>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-user" eyebrow="About" title="Darren Steptoe" content=about %}

      

    </div>
  </div>
</section>
