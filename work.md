---
title: Work
description: "Selected projects and experience"
permalink: /work/
---

<section class="section">
  <div class="container">
    <div class="grid">

      {% capture imdb %}
      <p class="cardText">Selected credits and projects across documentary and narrative work.</p>
      {% include button.html href="https://www.imdb.com/name/nm12602714/" label="Open IMDb profile ↗" %}
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Film credits" title="Darren Steptoe — IMDb" content=imdb %}

      {% capture last %}
      <p class="cardText"><strong>The Last to Know (2022)</strong><br>Join 89-year-old retired educator and community activist Dr. Opal Lee (often referred to as the “Grandmother of Juneteenth”), as she begins a years-long campaign to make her vision of Juneteenth becoming a federally-recognized holiday a reality.</p>
      <p class="cardText">My Roles: Co-producer, Co-writer, Editor<br>Released: March 19, 2022<br>Directed by Erica Stevenson</p>
      <ul class="list">
        <li>Founder’s Best Story Award — The African Film Festival (TAFF)</li>
        <li>Audience Award for Best Documentary — The Black Film Summit</li>
        <li>Nominee, Best Editing — Oregon Documentary Film Festival</li>
      </ul>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Documentary" title="The Last to Know" content=last %}

      {% capture vid %}
      {% include embed.html src="https://www.youtube.com/embed/ycHys4e6s3Q" title="Documentary video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" %}
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Watch" title="Video" content=vid %}

      {% capture pv %}
      <p class="cardText"><strong>Homeless PhotoVoice Project</strong><br>During my AmeriCorps VISTA service with the Homeless Coalition of Hillsborough County, I developed and led the Homeless PhotoVoice Project, a community-based applied sociology initiative. I designed the project and approached University of Tampa professor Norma Winston to integrate it into her Applied Sociology course.</p>
      <p class="cardText">The project became a core part of the curriculum, engaging students in fieldwork, media coordination, and a public PhotoVoice showcase focused on homelessness in Tampa.</p>
      <p class="cardText">The project was later documented as a case example in <a href="https://www.bloomsbury.com/us/national-service-and-volunteerism-9780739196946/" target="_blank" rel="noopener noreferrer">National Service and Volunteerism (Bloomsbury) ↗</a>.</p>
      {% endcapture %}
      {% include card.html class="card--12" eyebrow="Community work" title="Homeless PhotoVoice Project" content=pv %}

    </div>
  </div>
</section>
