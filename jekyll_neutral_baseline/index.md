---
title: Home
description: "Placeholder homepage built from neutral components. Replace these cards with your real content."
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture c1 %}
      <p class="cardText">This is a neutral baseline. You will migrate your old site content into these boxes manually.</p>
      {% endcapture %}
      {% include card.html class="card--8" eyebrow="Start here" title="Homepage box" content=c1 %}

      {% capture c2 %}
      <p class="cardText">Use this space for a short bio, a one‑liner, or key links.</p>
      {% endcapture %}
      {% include card.html class="card--4" eyebrow="Profile" title="Sidebar box" content=c2 %}

      {% capture c3 %}
      <p class="cardText">This is a placeholder grid. Swap in real cards as you migrate.</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Placeholder" title="Card A" content=c3 %}

      {% capture c4 %}
      <p class="cardText">Buttons are links. Images go in a media wrapper. Text goes in a card.</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Rule" title="Card B" content=c4 %}

    </div>
  </div>
</section>
