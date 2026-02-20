---
title: Contact
description: "Placeholder contact page."
permalink: /contact/
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture c1 %}
      <p class="cardText">Add your form, email, and scheduling embed here. Each is its own box.</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Contact" title="Contact box" content=c1 %}

      {% capture c2 %}
      <p class="cardText">Placeholder for Calendly embed (we’ll add once the layout is locked).</p>
      {% endcapture %}
      {% include card.html class="card--6" eyebrow="Schedule" title="Scheduling box" content=c2 %}
    </div>
  </div>
</section>
