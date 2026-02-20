---
title: Services
description: "Neutral service layout with placeholder boxes."
permalink: /services/
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture c1 %}
      <p class="cardText">Describe offerings here. Keep each service in its own box.</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Offer" title="Service box 1" content=c1 %}

      {% capture c2 %}
      <p class="cardText">Describe a second offering. Add a button when you have a destination link.</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Offer" title="Service box 2" content=c2 %}

      {% capture c3 %}
      <p class="cardText">Placeholder for pricing, intake, or scheduling.</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Next" title="Call to action" content=c3 %}
    </div>
  </div>
</section>
