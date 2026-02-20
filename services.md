---
title: Services
description: "Media production • Consulting"
permalink: /services/
---

<section class="section">
  <div class="container">
    <div class="grid">
      {% capture vid %}
      {% include embed.html src="https://www.youtube.com/embed/ycHys4e6s3Q" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" %}
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Video" title="Sample work" content=vid %}

      {% capture consult %}
      <p class="cardText">I support campaigns, committees, and independent candidates with practical, field-tested strategy. If you need a clean plan, strong execution, and someone who can build the infrastructure and train the team, I can help.</p>
      <ul class="list">
        <li>Win number + targeting (what it takes to win, who to talk to, and how often)</li>
        <li>Field plan (persuasion → GOTV), universes, turf cutting, and staging locations</li>
        <li>Volunteer &amp; staff training (canvass, phones, data entry, packet build)</li>
        <li>Scripts and message discipline (doors, phones, texts, digital)</li>
        <li>GOTV operations (chase, visibility, poll coverage planning)</li>
        <li>Basic comms support (social content guidance, rapid response structure)</li>
        <li>Office systems (weekly goals, pipeline, reporting, and accountability)</li>
      </ul>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Consulting" title="Political consulting" content=consult %}

      {% capture media %}
      <p class="cardText">I provide end-to-end media production services for individuals, organizations, campaigns, and institutions.</p>
      <ul class="list">
        <li>Documentary filmmaking (development, production, post)</li>
        <li>Video production and editing (short-form, long-form)</li>
        <li>Event, interview, and field production</li>
        <li>Script development and story consulting</li>
        <li>Post-production workflows, color, and delivery</li>
      </ul>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Media" title="Media production services" content=media %}

      {% capture pricing %}
      <div class="subhead">Wedding Films</div>
      <div class="grid grid--tight">
        {% include card.html class="card--6" title="Bronze — $2,400" text="Up to 6 hours · 5–7 min highlight film · 14-day turnaround" %}
        {% include card.html class="card--6" title="Silver — $3,200" text="Up to 8 hours · Full speeches edit · 6–8 min cinematic film" %}
        {% include card.html class="card--6" title="Gold — $4,200" text="Up to 10 hours · Multi-cam ceremony · Drone + social teaser" %}
        {% include card.html class="card--6" title="Platinum — $5,200" text="Up to 12 hours · Specialty cameras · Ceremony + speeches · 48-hr teaser · 7-day delivery" %}
        {% include card.html class="card--12" title="Additional Hour — $125" text="Applies beyond the booked package" %}
      </div>

      <div class="subhead mt-16">Event &amp; Promotional</div>
      <div class="grid grid--tight">
        {% include card.html class="card--6" title="Half Day — $600" text="Up to 4 hours · 60–90 sec highlight" %}
        {% include card.html class="card--6" title="Full Day — $1,000" text="Up to 8 hours · 2–3 min highlight" %}
      </div>

      <div class="subhead mt-16">Corporate &amp; Small Business</div>
      <div class="grid grid--tight">
        {% include card.html class="card--6" title="Brand Promo — $1,200" text="Interview + b-roll · 2–3 min film · Social cut" %}
        {% include card.html class="card--6" title="Executive Interview — $850" text="Up to 2 hours · 1–2 min polished edit" %}
        {% include card.html class="card--6" title="Monthly Content — from $2,500" text="1 filming day · 3–5 edited videos" %}
        {% include card.html class="card--6" title="Custom Package — quote" text="Multi-day / multi-location / recurring" %}
      </div>

      <div class="subhead mt-16">Documentary &amp; Editing</div>
      <div class="grid grid--tight">
        {% include card.html class="card--6" title="Editing — $85/hr" text="5-hour minimum per project phase" %}
        {% include card.html class="card--6" title="Full Documentary Support — quote" text="Development → post support tailored to scope" %}
      </div>

      <div class="subhead mt-16">Political Consulting</div>
      <div class="grid grid--tight">
        {% include card.html class="card--6" title="Strategy Intensive (1 Hour) — $250" text="Win number, targeting, field plan, next steps" %}
        {% include card.html class="card--6" title="Municipal Retainer — $3,000–6,000 / month" text="Plan + training + reporting cadence" %}
        {% include card.html class="card--6" title="State Legislative Retainer — $5,000–10,000 / month" text="Ops buildout + weekly goals + GOTV" %}
        {% include card.html class="card--6" title="Congressional Retainer — $10,000–20,000+ / month" text="Full-scale field + ops systems" %}
      </div>

      <p class="cardText mt-16">Directional estimate only. Final pricing depends on scope, travel, deliverables, and timeline.</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Pricing" title="Packages and rates" content=pricing %}

      {% capture payment %}
      <p class="cardText">For invoices, deposits, or project payments, you can securely pay online using card, Apple Pay, or Google Pay.</p>
      {% include button.html href="#" label="Pay Invoice ↗" %}
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Payment" title="Project payments" content=payment %}

    </div>
  </div>
</section>
