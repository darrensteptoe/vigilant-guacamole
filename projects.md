---
title: Projects & Research
description: "Placeholder projects page."
permalink: /projects/
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture c1 %}
      <p class="cardText">Create one card per project. Keep the summary short; link out to a detail page.</p>
      {% endcapture %}
      {% include card.html class="card--8" eyebrow="Projects" title="Project list" content=c1 %}

      {% capture c2 %}
      <p class="cardText">Use this card for filters, tags, or a “currently building” list later.</p>
      {% endcapture %}
      {% include card.html class="card--4" eyebrow="Notes" title="Sidebar" content=c2 %}
    </div>
  </div>
</section>
