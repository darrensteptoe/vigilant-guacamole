---
title: Contact
description: "Email • Office hours • Scheduling"
permalink: /contact/
---

<section class="section">
  <div class="container">
    <div class="grid">

      {% capture c1 %}
      <p class="cardText"><strong>Email</strong><br><a href="mailto:hello@darrensteptoe.com">hello@darrensteptoe.com</a></p>
      <p class="cardText"><strong>Office Hours</strong><br>Monday–Friday • 9:00am–5:00pm</p>
      <p class="cardText"><strong>Mailing Address</strong><br>[Add mailing address here]</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Contact" title="Details" content=c1 %}

      {% capture cal %}
      <p class="cardText">Prefer a new tab? <a href="#" target="_blank" rel="noopener noreferrer">Open Calendly ↗</a></p>
      {% include embed.html class="embed--fixed" src="https://calendly.com/me--ujg" title="Calendly scheduling" %}
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Schedule" title="Book time" content=cal %}

    </div>
  </div>
</section>
