---
title: Research
description: "Papers collection index (placeholder)."
permalink: /research/
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture c1 %}
      <p class="cardText">This list auto-populates from the <code>papers</code> collection.</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Collection" title="Papers" content=c1 %}

      {% for p in site.papers %}
        {% capture row %}
        <p class="cardText">{{ p.excerpt | strip_html | truncate: 160 }}</p>
        {% endcapture %}
        {% include card.html class="card--6" eyebrow="Paper" title=p.title text=nil content=row href=p.url cta="Open" %}
      {% endfor %}
    </div>
  </div>
</section>
