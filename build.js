const fs = require('fs');

function replaceContent(file, newContent) {
    let html = fs.readFileSync(file, 'utf8');
    const startMarker = '<!-- ═══ HERO ═══ -->';
    const endMarker = '<!-- FOOTER -->';
    const start = html.indexOf(startMarker);
    const end = html.indexOf(endMarker);
    
    if (start === -1 || end === -1) {
        console.error("Markers not found in " + file);
        return;
    }
    
    html = html.substring(0, start) + newContent + '\n' + html.substring(end);
    fs.writeFileSync(file, html);
    console.log("Updated " + file);
}

// 1. ABOUT PAGE
const aboutContent = `<!-- ═══ HERO ═══ -->
<section class="hero" style="min-height:70vh; padding-top:200px; padding-bottom:120px; align-items:flex-start; grid-template-columns:1fr;">
  <div class="hero-bg">
    <div class="hero-bg-noise"></div>
    <div class="hero-bg-grid"></div>
    <div class="hero-bg-orb1"></div>
  </div>
  <div class="hero-left" style="max-width:800px; margin:0 auto; text-align:center; display:flex; flex-direction:column; align-items:center;">
    <div class="hero-eyebrow">
      <div class="eyebrow-dot"></div>
      About Abdul Basit A.
    </div>
    <h1 class="hl-solid l1" style="font-size:clamp(44px,6vw,90px); line-height:1;margin-bottom:12px;">THE MIND BEHIND<br><span class="hl-gradient" style="opacity:1; animation:none; display:inline-block; -webkit-text-stroke:0;">THE SYSTEM</span></h1>
    <p class="hero-desc" style="font-size:18px; max-width:640px; margin-top:0px; border-top:none;">I engineer digital growth. Period. With years of experience leading technically complex projects, I don't just build websites — I architect platforms that dominate markets.</p>
  </div>
</section>

<!-- ABOUT SECTION -->
<div class="about" style="padding-top:40px;">
  <div class="rv in">
    <div class="sec-eyebrow">Philosophy</div>
    <h2 class="about-quote">Building digital systems that <span class="hi">outlast trends</span> &amp; outperform competition.</h2>
    <p>I am a digital powerhouse for platforms and AI. My team develops digital infrastructure that accelerates your business and maximises impact across your market.</p>
    <p>A crew of digital natives across strategy, development, creative, and marketing — working from strong partnerships, AI-first, with zero compromise.</p>
  </div>
  <div class="rv d2 in">
    <div class="about-panel">
      <div class="ap-head">Success Formula</div>
      <div class="steps">
        <div class="step"><div class="step-n">01</div><div><div class="step-title">Strategy &amp; Discovery</div><div class="step-desc">Deep-dive sessions mapping your market, audience, and goals into a sharp digital roadmap.</div></div></div>
        <div class="step"><div class="step-n">02</div><div><div class="step-title">Design &amp; Architecture</div><div class="step-desc">Systems built to scale — from UX wireframes to technical infrastructure for the future.</div></div></div>
        <div class="step"><div class="step-n">03</div><div><div class="step-title">Build &amp; Launch</div><div class="step-desc">Full-stack development, rigorous QA, and a smooth go-live that puts your brand on the map.</div></div></div>
        <div class="step"><div class="step-n">04</div><div><div class="step-title">Grow &amp; Optimise</div><div class="step-desc">Continuous campaigns, A/B testing, and AI-powered analytics to compound your growth.</div></div></div>
      </div>
    </div>
  </div>
</div>

<!-- CULTURE -->
<div class="cult" style="padding-top:40px;">
  <div class="rv in">
    <div class="sec-eyebrow">Ethos &amp; Culture</div>
    <h2 class="sec-title">You can buy a solution.<br><span class="dim">You can't buy this culture.</span></h2>
  </div>
  <div class="cult-layout">
    <div class="cult-hero rv in">
      <div class="cult-hero-bg"></div>
      <div class="cult-hero-glow"></div>
      <div class="cult-hero-content">
        <div class="cult-hero-label">Brand Story</div>
        <div class="cult-hero-title">Good vibes, great outcomes.</div>
        <div class="cult-hero-desc">The best digital work comes from people who love what they build — collaborative, ambitious, and relentlessly forward-moving.</div>
      </div>
    </div>
    <div class="cult-col">
      <div class="cult-sm rv d1 in"><div class="cult-ico">🎤</div><div><div class="cult-sm-title">Abdul Basit A. Talks</div><div class="cult-sm-desc">Industry events, keynotes, and knowledge sessions.</div></div></div>
      <div class="cult-sm rv d2 in"><div class="cult-ico">🏅</div><div><div class="cult-sm-title">Awards &amp; Recognition</div><div class="cult-sm-desc">Proud partners of Dutch Design Awards and Google Partners.</div></div></div>
      <div class="cult-sm rv d3 in"><div class="cult-ico">🤝</div><div><div class="cult-sm-title">Strong Partnerships</div><div class="cult-sm-desc">Long-term relationships rooted in mutual ambition.</div></div></div>
      <div class="cult-sm rv d4 in"><div class="cult-ico">🚀</div><div><div class="cult-sm-title">AI-First Mindset</div><div class="cult-sm-desc">Constantly experimenting with what's next.</div></div></div>
    </div>
  </div>
</div>

<!-- QUOTE RUNNER -->
<div class="qrun" style="margin-bottom:80px;">
  <div class="qrun-t">
    <span class="q-item">Scalable systems. <span>Zero compromise.</span></span>
    <span class="q-item">AI-native. <span>Impact-first.</span> Always.</span>
    <span class="q-item">From strategy to launch — <span>every single day.</span></span>
    <span class="q-item">Precision SEO. <span>Measurable results.</span></span>
  </div>
</div>
`;

// 2. CONTACT PAGE
const contactContent = `<!-- ═══ HERO ═══ -->
<section class="hero" style="min-height:50vh; padding-top:200px; padding-bottom:20px; grid-template-columns:1fr;">
  <div class="hero-bg">
    <div class="hero-bg-noise"></div>
    <div class="hero-bg-grid"></div>
    <div class="hero-bg-orb2"></div>
  </div>
  <div class="hero-left" style="max-width:900px; margin:0 auto; text-align:center; display:flex; flex-direction:column; align-items:center;">
    <div class="hero-eyebrow">
      <div class="eyebrow-dot"></div>
      Contact
    </div>
    <h1 class="hl-solid l1" style="font-size:clamp(44px,6vw,80px); line-height:1;margin-bottom:0px;">START A<br><span class="hl-outline l2" data-text="LEGENDARY PROJECT">LEGENDARY PROJECT</span></h1>
  </div>
</section>

<!-- CONTACT FORM AND DETAILS -->
<div class="sec" style="padding-top:40px; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start;">
  <div class="c-left rv in">
    <h2 class="sec-title" style="font-size:32px; margin-bottom:16px;">Get in Touch</h2>
    <p style="color:var(--silver); margin-bottom:40px;">Whether it's a scalable system, precision SEO campaign, or AI automation, we're ready to architect your next phase of growth.</p>
    
    <div style="display:flex; flex-direction:column; gap:20px; margin-bottom:40px;">
      <div style="background:var(--card); border:1px solid var(--border); padding:24px; border-radius:16px;">
        <h3 style="font-family:var(--fD); font-size:16px; margin-bottom:4px;">Roosendaal (HQ)</h3>
        <p style="color:var(--silver); font-size:14px; margin-bottom:12px;">Aanwas 35, 4704 SC</p>
        <a href="tel:+31850211121" style="color:var(--blue); font-weight:700; text-decoration:none;">+31 85 021 11 21</a>
      </div>
      <div style="background:var(--card); border:1px solid var(--border); padding:24px; border-radius:16px;">
        <h3 style="font-family:var(--fD); font-size:16px; margin-bottom:4px;">The Hague (HUB)</h3>
        <p style="color:var(--silver); font-size:14px; margin-bottom:12px;">Binckhorstlaan 36, 2516 BE</p>
        <a href="tel:+31702071579" style="color:var(--blue); font-weight:700; text-decoration:none;">+31 70 207 15 79</a>
      </div>
      <div style="background:var(--card); border:1px solid var(--border); padding:24px; border-radius:16px;">
        <h3 style="font-family:var(--fD); font-size:16px; margin-bottom:4px;">Direct Email</h3>
        <a href="mailto:hello@abdulbasit.nl" style="color:var(--blue); font-weight:700; text-decoration:none;">hello@abdulbasit.nl</a>
      </div>
    </div>
  </div>
  
  <div class="c-right rv d2 in" style="background:var(--card-hi); border:1px solid var(--border-hi); padding:40px; border-radius:24px; position:relative; overflow:hidden;">
    <div class="hero-bg-orb1" style="width:500px; height:500px; top:-250px; right:-250px; opacity:0.5;"></div>
    <form style="display:flex; flex-direction:column; gap:20px; position:relative; z-index:2;" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em;">Name</label>
        <input type="text" placeholder="John Doe" style="background:transparent; border:none; border-bottom:1px solid var(--border); padding:12px 0; color:var(--white); font-family:var(--fB); font-size:16px; outline:none;" required>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em;">Email</label>
        <input type="email" placeholder="john@company.com" style="background:transparent; border:none; border-bottom:1px solid var(--border); padding:12px 0; color:var(--white); font-family:var(--fB); font-size:16px; outline:none;" required>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em;">Subject</label>
        <input type="text" placeholder="Platform Development" style="background:transparent; border:none; border-bottom:1px solid var(--border); padding:12px 0; color:var(--white); font-family:var(--fB); font-size:16px; outline:none;" required>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em;">Message</label>
        <textarea rows="4" placeholder="Tell us about your project..." style="background:transparent; border:none; border-bottom:1px solid var(--border); padding:12px 0; color:var(--white); font-family:var(--fB); font-size:16px; outline:none; resize:none;" required></textarea>
      </div>
      <button type="submit" class="btn btn-p" style="align-self:flex-start; margin-top:16px; border:none; font-family:var(--fD); cursor:pointer;">Send Message →</button>
    </form>
  </div>
</div>
`;

// 3. OFFERINGS PAGE
const offeringsContent = `<!-- ═══ HERO ═══ -->
<section class="hero" style="min-height:50vh; padding-top:200px; padding-bottom:40px; grid-template-columns:1fr;">
  <div class="hero-bg">
    <div class="hero-bg-noise"></div>
    <div class="hero-bg-grid"></div>
    <div class="hero-bg-orb1" style="left:-200px; right:auto;"></div>
  </div>
  <div class="hero-left" style="max-width:900px; margin:0 auto; text-align:center; display:flex; flex-direction:column; align-items:center;">
    <div class="hero-eyebrow">
      <div class="eyebrow-dot"></div>
      Offerings
    </div>
    <h1 class="hl-solid l1" style="font-size:clamp(44px,6vw,90px); line-height:1;">SERVICES &amp;<br><span class="hl-gradient" style="opacity:1; animation:none; display:inline-block; -webkit-text-stroke:0;">CAPABILITIES</span></h1>
    <p class="hero-desc" style="font-size:18px; max-width:640px; margin-top:24px; border-top:none;">End-to-end digital mastery. From scalable platforms to surgical SEO campaigns, we build architectures of growth.</p>
  </div>
</section>

<!-- SERVICES GRID -->
<div class="sec" style="padding-top:40px;">
  <div class="svc-grid" style="grid-template-columns:repeat(2,1fr); gap:24px;">
    <!-- Service 1 -->
    <div class="svc-card rv in" style="padding:48px 40px;">
      <div class="svc-num" style="font-size:80px; top:10px; right:20px;">01</div>
      <div class="svc-ico" style="width:64px; height:64px; font-size:28px;">🖥️</div>
      <div class="svc-title" style="font-size:24px; margin-bottom:16px;">Platform Development</div>
      <div class="svc-desc" style="font-size:15px;">Future-proof digital platforms — websites, webshops, and web applications built for real business results. We use Next.js, React, Liquid, and robust API layers to ensure perfect performance and scale.</div>
      <ul style="list-style:none; margin-bottom:32px; color:var(--silver); font-size:14px; display:flex; flex-direction:column; gap:8px;">
        <li><strong style="color:var(--white);">+</strong> E-Commerce (Shopify Plus, B2B)</li>
        <li><strong style="color:var(--white);">+</strong> Corporate &amp; Brand Websites</li>
        <li><strong style="color:var(--white);">+</strong> Custom Web Applications</li>
      </ul>
      <a href="contact.html" class="svc-link">Start a platform project →</a>
    </div>
    
    <!-- Service 2 -->
    <div class="svc-card rv d2 in" style="padding:48px 40px;">
      <div class="svc-num" style="font-size:80px; top:10px; right:20px;">02</div>
      <div class="svc-ico" style="width:64px; height:64px; font-size:28px;">📈</div>
      <div class="svc-title" style="font-size:24px; margin-bottom:16px;">Precision SEO &amp; Campaigns</div>
      <div class="svc-desc" style="font-size:15px;">Data-driven campaigns across paid, organic, and emerging channels. We don't guess—we architect growth strategies that guarantee return on investment.</div>
      <ul style="list-style:none; margin-bottom:32px; color:var(--silver); font-size:14px; display:flex; flex-direction:column; gap:8px;">
        <li><strong style="color:var(--white);">+</strong> Technical SEO &amp; Audits</li>
        <li><strong style="color:var(--white);">+</strong> Performance Marketing (Ads, Social)</li>
        <li><strong style="color:var(--white);">+</strong> Growth Hacking &amp; CRO</li>
      </ul>
      <a href="contact.html" class="svc-link">Accelerate growth →</a>
    </div>

    <!-- Service 3 -->
    <div class="svc-card rv d3 in" style="padding:48px 40px;">
      <div class="svc-num" style="font-size:80px; top:10px; right:20px;">03</div>
      <div class="svc-ico" style="width:64px; height:64px; font-size:28px;">🤖</div>
      <div class="svc-title" style="font-size:24px; margin-bottom:16px;">AI &amp; Automation</div>
      <div class="svc-desc" style="font-size:15px;">Intelligent workflows, AI agents, and integration pipelines utilizing n8n, OpenAI, and custom logic to free your team from manual labor.</div>
      <ul style="list-style:none; margin-bottom:32px; color:var(--silver); font-size:14px; display:flex; flex-direction:column; gap:8px;">
        <li><strong style="color:var(--white);">+</strong> Workflow Automation (n8n, Zapier)</li>
        <li><strong style="color:var(--white);">+</strong> AI Agent Customization</li>
        <li><strong style="color:var(--white);">+</strong> API Integrations &amp; Sync</li>
      </ul>
      <a href="contact.html" class="svc-link">Automate processes →</a>
    </div>

    <!-- Service 4 -->
    <div class="svc-card rv d4 in" style="padding:48px 40px;">
      <div class="svc-num" style="font-size:80px; top:10px; right:20px;">04</div>
      <div class="svc-ico" style="width:64px; height:64px; font-size:28px;">🧠</div>
      <div class="svc-title" style="font-size:24px; margin-bottom:16px;">Technical Consulting</div>
      <div class="svc-desc" style="font-size:15px;">High-level strategic consulting for digital transformations. We map out complex architectures and guide your executive team through tech pivots.</div>
      <ul style="list-style:none; margin-bottom:32px; color:var(--silver); font-size:14px; display:flex; flex-direction:column; gap:8px;">
        <li><strong style="color:var(--white);">+</strong> Digital Strategy Roadmaps</li>
        <li><strong style="color:var(--white);">+</strong> Tech Stack Audits</li>
        <li><strong style="color:var(--white);">+</strong> CTO as a Service</li>
      </ul>
      <a href="contact.html" class="svc-link">Book consultation →</a>
    </div>
  </div>
  
  <div class="stats-row rv in" style="margin-top:40px;">
    <div class="stat-cell"><div class="stat-n">150+</div><div class="stat-l">Platforms Launched</div></div>
    <div class="stat-cell"><div class="stat-n">10x</div><div class="stat-l">Traffic Multiplier</div></div>
    <div class="stat-cell"><div class="stat-n">10K</div><div class="stat-l">Hours Saved in Automation</div></div>
    <div class="stat-cell"><div class="stat-n">0</div><div class="stat-l">Compromises</div></div>
  </div>
</div>

<!-- CTA BANNER REUSED -->
<div class="cta-wrap" style="padding-top:80px;">
  <div class="cta-b rv in">
    <div class="cta-bg-glow"></div>
    <div class="cta-particles" id="particles"></div>
    <div class="cta-title">
      Ready to build<br>
      <span class="grd">something legendary?</span>
    </div>
    <div class="cta-right">
      <a href="contact.html" class="btn btn-p" style="font-size:15px;padding:17px 38px;">Start my journey →</a>
      <div class="cta-note">No commitment. Just a conversation.</div>
    </div>
  </div>
</div>
`;

// 4. PROJECTS PAGE
const projectsContent = `<!-- ═══ HERO ═══ -->
<section class="hero" style="min-height:50vh; padding-top:200px; padding-bottom:20px; grid-template-columns:1fr;">
  <div class="hero-bg">
    <div class="hero-bg-noise"></div>
    <div class="hero-bg-grid"></div>
  </div>
  <div class="hero-left" style="max-width:900px; margin:0 auto; text-align:center; display:flex; flex-direction:column; align-items:center;">
    <div class="hero-eyebrow">
      <div class="eyebrow-dot"></div>
      Cases & Work
    </div>
    <h1 class="hl-solid l1" style="font-size:clamp(44px,6vw,90px); line-height:1;margin-bottom:0px;">PROVEN<br><span class="hl-outline l2" data-text="IMPACT">IMPACT</span></h1>
  </div>
</section>

<!-- WORK GRID FULL -->
<div class="work" style="padding-top:40px;">
  <div class="work-grid">
    <a href="#" class="w-card rv in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#040d26,#0b2248)"><div class="w-mono">W</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">E-Commerce</span><span class="w-tag">Platforms</span></div><div class="w-title">Wristler</div><div class="w-sub">Watch trading marketplace</div><div class="w-res">+5,500 listings at launch</div></div>
    </a>
    <a href="#" class="w-card rv d2 in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#050d16,#0e1c2e)"><div class="w-mono">UC</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">Websites</span><span class="w-tag">Retail</span></div><div class="w-title">Urban Creative</div><div class="w-sub">Full digital partnership</div><div class="w-res">Long-term growth partner</div></div>
    </a>
    <a href="#" class="w-card rv in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#080416,#120a26)"><div class="w-mono">SS</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">Branding</span><span class="w-tag">SaaS</span></div><div class="w-title">So Syncd</div><div class="w-sub">Design dating platform</div><div class="w-res">International SaaS launch</div></div>
    </a>
    <a href="#" class="w-card rv d2 in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#04100d,#091e18)"><div class="w-mono">SC</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">Websites</span><span class="w-tag">Business Services</span></div><div class="w-title">Scooperz</div><div class="w-sub">Social &amp; influencer platform</div><div class="w-res">Award-winning design</div></div>
    </a>
    <a href="#" class="w-card rv in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#120a26,#080416)"><div class="w-mono">KC</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">SEO</span><span class="w-tag">Strategy</span></div><div class="w-title">Koppert Cress</div><div class="w-sub">Strategic client journey</div><div class="w-res">+30% sustainable traffic</div></div>
    </a>
    <a href="#" class="w-card rv d2 in"><div class="w-arrow">↗</div>
      <div class="w-vis"><div class="w-vis-in" style="background:linear-gradient(135deg,#0e1c2e,#050d16)"><div class="w-mono">HB</div></div><div class="w-ov"></div></div>
      <div class="w-body"><div class="w-tags"><span class="w-tag">Automation</span><span class="w-tag">Web Application</span></div><div class="w-title">HBC</div><div class="w-sub">Corporate website &amp; configurator</div><div class="w-res">Saved 40 hrs/month</div></div>
    </a>
  </div>
</div>

<!-- STRIP -->
<div class="strip" style="margin-top:40px; margin-bottom:120px;">
  <div class="strip-t">
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#04091e,#0c2248)"><div class="s-ov"></div><div class="s-lbl">Platform Launch</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#030c14,#072030)"><div class="s-ov"></div><div class="s-lbl">Performance Marketing</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#04100d,#091e18)"><div class="s-ov"></div><div class="s-lbl">Corporate Website</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#080414,#14082a)"><div class="s-ov"></div><div class="s-lbl">Brand Identity</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#040b1c,#081a38)"><div class="s-ov"></div><div class="s-lbl">AI Automation</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#04091e,#0c2248)"><div class="s-ov"></div><div class="s-lbl">Platform Launch</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#030c14,#072030)"><div class="s-ov"></div><div class="s-lbl">Performance Marketing</div></div></div>
    <div class="s-item"><div class="s-inner" style="background:linear-gradient(135deg,#04100d,#091e18)"><div class="s-ov"></div><div class="s-lbl">Corporate Website</div></div></div>
  </div>
</div>
`;

replaceContent('about.html', aboutContent);
replaceContent('contact.html', contactContent);
replaceContent('offerings.html', offeringsContent);
replaceContent('projects.html', projectsContent);
