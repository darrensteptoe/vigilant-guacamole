---
title: Services
description: "Media production • Consulting"
permalink: /services/
---

<section class="section">
  <div class="container">
    <div class="grid">

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
      {% include card.html class="card--12" icon="i-media" eyebrow="Media" title="Media production services" content=media %}

      {% capture media_wedding %}
<div class="priceCompare" aria-label="Wedding pricing">
  <div class="priceCompareGrid">

    <div class="priceCol">
      <h5 class="priceName">Bronze</h5>
      <p class="priceMeta">Up to 6 hours<br>5–7 min highlight film<br>14-day turnaround</p>
      <div class="priceDivider" aria-hidden="true"></div>
      <p class="priceAmount">$2,400</p>
      
    </div>
    <div class="priceCol priceCol--featured">
      <h5 class="priceName">Silver</h5>
      <p class="priceMeta">Up to 8 hours<br>Full speeches edit<br>6–8 min cinematic film</p>
      <div class="priceDivider" aria-hidden="true"></div>
      <p class="priceAmount">$3,200</p>
      <p class="priceTag">Most popular</p>
    </div>
    <div class="priceCol">
      <h5 class="priceName">Gold</h5>
      <p class="priceMeta">Addition cameraperson<br>Multi-cam ceremony<br>Drone + social teaser</p>
      <div class="priceDivider" aria-hidden="true"></div>
      <p class="priceAmount">$4,200</p>
      
    </div>
    <div class="priceCol">
      <h5 class="priceName">Platinum</h5>
      <p class="priceMeta">Documentary + highlight<br>Specialty cameras<br>Ceremony + speeches</p>
      <div class="priceDivider" aria-hidden="true"></div>
      <p class="priceAmount">$5,200</p>
      
    </div>
    <div class="priceCol">
      <h5 class="priceName">Additional Hour</h5>
      <p class="priceMeta">Applies beyond the booked package<br>(non-negotiable)</p>
      <div class="priceDivider" aria-hidden="true"></div>
      <p class="priceAmount">$125</p>
    </div>
  </div>
  <div class="priceCompareNote">Packages can be customized. Travel/tax may apply depending on location.</div>
</div>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-card" eyebrow="Wedding Pricing" title="Wedding films" content=media_wedding %}

      {% capture media_pricing %}
<div class="pricingSection">
        <div class="subhead">Event &amp; Promotional</div>
        <div class="grid grid--tight pricingGrid">
          {% include card.html class="card--6" title="Half Day — $600" text="Up to 4 hours · 60–90 sec highlight" %}
          {% include card.html class="card--6" title="Full Day — $1,000" text="Up to 8 hours · 2–3 min highlight" %}
        </div>
      </div>

<div class="pricingSection">
        <div class="subhead">Corporate &amp; Small Business</div>
        <div class="grid grid--tight pricingGrid">
          {% include card.html class="card--6" title="Brand Promo — $1,200" text="Interview + b-roll · 2–3 min film · Social cut" %}
          {% include card.html class="card--6" title="Executive Interview — $850" text="Up to 2 hours · 1–2 min polished edit" %}
          {% include card.html class="card--6" title="Monthly Content — from $2,500" text="1 filming day · 3–5 edited videos" %}
          {% include card.html class="card--6" title="Custom Package — quote" text="Multi-day / multi-location / recurring" %}
        </div>
      </div>

<div class="pricingSection">
        <div class="subhead">Documentary &amp; Editing</div>
        <div class="grid grid--tight pricingGrid">
          {% include card.html class="card--6" title="Editing — $85/hr" text="5-hour minimum per project phase" %}
          {% include card.html class="card--6" title="Full Documentary Support — quote" text="Development → post support tailored to scope" %}
        </div>
      </div>

<p class="cardText mt-16">Directional estimate only. Final pricing depends on scope, travel, deliverables, and timeline.</p>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-card" eyebrow="Media Pricing" title="Other video services" content=media_pricing %}

      {% capture youtube %}
{% include embed.html src="https://www.youtube.com/embed/ycHys4e6s3Q" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" %}
      {% endcapture %}
      {% include card.html class="card--12" icon="i-play" eyebrow="YouTube" title="YouTube" content=youtube %}

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
      {% include card.html class="card--12" icon="i-ballot" eyebrow="Consulting" title="Political consulting" content=consult %}

      {% capture consulting_pricing %}
<div class="pricingSection">
        <div class="subhead">Political Consulting</div>
        <div class="grid grid--tight pricingGrid">
          {% include card.html class="card--6" title="Strategy Intensive (1 Hour) — $250" text="Win number, targeting, field plan, next steps" %}
          {% include card.html class="card--6" title="Municipal Retainer — $3,000–6,000 / month" text="Plan + training + reporting cadence" %}
          {% include card.html class="card--6" title="State Legislative Retainer — $5,000–10,000 / month" text="Ops buildout + weekly goals + GOTV" %}
          {% include card.html class="card--6" title="Congressional Retainer — $10,000–20,000+ / month" text="Full-scale field + ops systems" %}
        </div>
      </div>

<p class="cardText mt-16">Directional estimate only. Final pricing depends on scope, travel, deliverables, and timeline.</p>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-card" eyebrow="Consulting Pricing" title="Packages and rates" content=consulting_pricing %}

      {% capture intake %}
<p class="cardText">Use this form to describe what you need. I’ll follow up with next steps and a clear scope.</p>
      <form class="form" action="#" method="POST">
        <div class="formGrid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" autocomplete="name" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" required>
          </div>
          <div class="field">
            <label for="org">Organization / Campaign</label>
            <input id="org" name="organization" autocomplete="organization">
          </div>
          <div class="field">
            <label for="service">Service</label>
            <select id="service" name="service" required>
              <option value="" selected disabled>Select one…</option>
              <option>Media production</option>
              <option>Political consulting</option>
              <option>Editing / post-production</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field">
            <label for="timeline">Timeline</label>
            <input id="timeline" name="timeline" placeholder="e.g., March 2026 or ASAP">
          </div>
          <div class="field">
            <label for="budget">Budget range</label>
            <select id="budget" name="budget">
              <option value="" selected>Not sure yet</option>
              <option>Under $1,000</option>
              <option>$1,000–$2,500</option>
              <option>$2,500–$5,000</option>
              <option>$5,000–$10,000</option>
              <option>$10,000+</option>
            </select>
          </div>
          <div class="field" style="grid-column:1/-1">
            <label for="details">Details</label>
            <textarea id="details" name="details" placeholder="What are you trying to accomplish? What deliverables do you need? Any links or references?"></textarea>
            <p class="help">If you need to share files, include a link (Drive/Dropbox) in your message.</p>
          </div>
        </div>

        <div class="btnRow mt-16">
          <button class="btn" type="submit">Submit intake ↗</button>
          <a class="btn" href="{{ '/privacy/' | relative_url }}">Privacy</a>
        </div>
      </form>
      {% endcapture %}
      {% include card.html class="card--12" icon="i-form" eyebrow="Intake" title="Project intake form" content=intake %}

      {% capture payment %}
<p class="cardText">For invoices, deposits, or project payments, you can securely pay online using card, Apple Pay, or Google Pay.</p>
      {% include button.html href="#" label="Pay Invoice ↗" %}
      {% endcapture %}
      {% include card.html class="card--12" icon="i-card" eyebrow="Payment" title="Project payments" content=payment %}

    </div>
  </div>
</section>
