"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const approach = [
  ["01", "Evidence first", "Every decision begins with what can be known."],
  ["02", "Precise formulation", "Actives composed in intelligent harmony."],
  ["03", "Rigorous testing", "Safety, stability and performance verified."],
  ["04", "Sensorial intelligence", "Texture and finish designed for consistent use."],
  ["05", "Responsible beauty", "Care for skin, professional trust and context."],
];

const chapters = [
  ["Bioactive complexes", "Selected actives support visible renewal with purpose, not novelty."],
  ["Precision delivery", "Formulation systems protect stability, texture and effective use."],
  ["Clinical insight", "Professional observation informs what we refine next."],
  ["Sensorial excellence", "Comfort, absorption and ritual are treated as performance."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.62);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${pastHero ? "is-compact" : ""}`}>
        <nav className="nav-shell" aria-label="Primary navigation">
          <div className="nav-group nav-group-left">
            <a href="#philosophy">Philosophy</a>
            <a href="#science">Science</a>
            <a href="#technology">Technology</a>
          </div>

          <a className="wordmark" href="#home" aria-label="TANUVA home">
            <Image src="/assets/tanuva-logotype.svg" alt="TANUVA" width={200} height={22} priority />
          </a>

          <p className="compact-title">Advanced Skincare Technology House</p>

          <div className="nav-group nav-group-right">
            <a href="#product">Product</a>
            <a href="#professionals">Professionals</a>
            <a href="#house">House</a>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <p>Explore the house</p>
        {[
          ["Philosophy", "#philosophy"],
          ["Science", "#science"],
          ["Technology", "#technology"],
          ["Product", "#product"],
          ["Professionals", "#professionals"],
          ["House", "#house"],
        ].map(([label, href], index) => (
          <a href={href} key={href} onClick={closeMenu}>
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
      </div>

      <section className="hero" id="home">
        <aside className="chapter-rail" aria-label="Page chapters">
          <span className="active">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </aside>

        <div className="hero-copy reveal">
          <p className="eyebrow">The house premise</p>
          <h1>Quiet science.<br />Made visible.</h1>
          <div className="fine-rule" />
          <p className="hero-lede">
            Sophisticated skincare technology, made credible, sensorial and usable
            for professionals and the people they care for.
          </p>
          <a className="text-link" href="#philosophy">
            Discover our philosophy <i aria-hidden="true" />
          </a>
        </div>

        <div className="hero-still">
          <Image
            className="hero-product-photo"
            src="/product/exo-gf-chrome-jar.png"
            alt="TANUVA EXO-GF Bioactive Repair Cream in its reflective silver airless jar"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
          />
          <div className="hero-product-caption">
            <span>01</span>
            <p>The first expression / EXO-GF</p>
          </div>
        </div>
      </section>

      <section className="approach" aria-labelledby="approach-title">
        <div className="section-heading">
          <p>Our approach</p>
          <span className="rule-dot" />
        </div>
        <h2 id="approach-title" className="sr-only">The TANUVA approach</h2>
        <div className="approach-grid">
          {approach.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="philosophy-title">
          <p className="eyebrow">02 / Philosophy</p>
          <h2>A house of<br />considered care.</h2>
        </div>
        <div className="philosophy-copy">
          <p className="lead-quote">
            We believe what touches the skin deserves the same discipline as what
            enters a laboratory.
          </p>
          <div className="principles-list">
            <article>
              <span>01</span>
              <div><h3>Trusted science</h3><p>Credible formulation practice and responsible communication.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Skin respect</h3><p>Performance balanced with comfort, context and careful use.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Timeless experience</h3><p>Every detail earns its place; nothing performs status for its own sake.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="skin-studies" id="skin" aria-labelledby="skin-studies-title">
        <header className="skin-studies-intro">
          <p className="eyebrow">Skin / observed</p>
          <h2 id="skin-studies-title">The surface<br />tells a story.</h2>
          <p>
            Before intervention comes observation. Texture, comfort, movement and
            ritual shape how care is understood, experienced and sustained.
          </p>
          <div className="skin-study-index" aria-hidden="true">
            <span>01</span><span>02</span><span>03</span>
          </div>
        </header>

        <figure className="skin-frame skin-frame-texture">
          <Image
            src="/editorial/skin-texture.jpg"
            alt="Close study of natural skin texture"
            fill
            sizes="(max-width: 760px) 100vw, 42vw"
          />
          <figcaption><span>01</span> Texture / close observation</figcaption>
        </figure>

        <figure className="skin-frame skin-frame-ritual">
          <Image
            src="/editorial/skin-ritual.jpg"
            alt="Skincare cream being applied across the collarbone"
            fill
            sizes="(max-width: 760px) 100vw, 34vw"
          />
          <figcaption><span>02</span> Ritual / care made tangible</figcaption>
        </figure>

        <blockquote className="skin-study-note">
          <span>Observation 01</span>
          <p>
            The skin is not a surface to perfect. It is a living context to
            observe, respect and support.
          </p>
        </blockquote>

        <figure className="skin-frame skin-frame-vitality">
          <Image
            src="/editorial/skin-vitality.jpg"
            alt="Sunlit skin with fine water droplets"
            fill
            sizes="(max-width: 760px) 100vw, 34vw"
          />
          <figcaption><span>03</span> Vitality / sensorial presence</figcaption>
        </figure>
      </section>

      <section className="seal-story" aria-label="TANUVA house seal">
        <div className="seal-image" />
        <div className="seal-copy">
          <p className="eyebrow">One house. One standard.</p>
          <h2>Not a sequence<br />of releases.<br />A coherent world.</h2>
          <p>Product, education, consultation and follow-up — composed to carry the same quiet standard.</p>
        </div>
      </section>

      <section className="science" id="science">
        <header className="science-intro">
          <p className="eyebrow">03 / Science</p>
          <h2>Precision<br />you can feel.</h2>
          <p>
            Science gives TANUVA authority. Restraint gives TANUVA status.
            Experience makes both memorable.
          </p>
        </header>

        <figure className="science-canvas">
          <Image
            src="/science/petal-structure.jpg"
            alt="Macro study of overlapping crimson petals and their fine natural structure"
            fill
            sizes="(max-width: 980px) 100vw, 34vw"
          />
          <figcaption><span>Material study / 01</span> Structure made visible</figcaption>
        </figure>

        <div className="science-chapters" id="technology">
          {chapters.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product" id="product">
        <div className="product-visual">
          <Image
            className="product-portrait"
            src="/product/precision-drop.webp"
            alt="A suspended liquid droplet above a reflective glass vessel"
            fill
            sizes="(max-width: 760px) 100vw, 57vw"
          />
          <div className="product-visual-caption">
            <span>01</span>
            <p>Precision delivery / formulation study</p>
          </div>
        </div>
        <div className="product-copy">
          <p className="eyebrow">The first expression</p>
          <h2>Renewal,<br />precisely composed.</h2>
          <p>
            A refined bioactive cream created to support the appearance of renewed,
            resilient and balanced skin — uniting an Exosome Complex, Growth Factors
            and Bioactive Peptides in a sensorial restorative experience.
          </p>
          <dl>
            <div><dt>01</dt><dd>Exosome Complex</dd></div>
            <div><dt>02</dt><dd>EGF · FGF · TGF-Beta</dd></div>
            <div><dt>03</dt><dd>Peptide Renewal System</dd></div>
            <div><dt>04</dt><dd>Skin Comfort Complex</dd></div>
          </dl>
          <a className="text-link" href="#contact">Enquire about the collection <i aria-hidden="true" /></a>
        </div>
      </section>

      <section className="presentation" aria-labelledby="presentation-title">
        <div className="presentation-copy">
          <p className="eyebrow">The art of presentation</p>
          <h2 id="presentation-title">Composed<br />to be received.</h2>
          <div className="fine-rule" />
          <p>
            The experience begins before the vessel is opened. Material, restraint
            and the house seal turn presentation into a quiet act of care.
          </p>
          <span>Packaging study / 01</span>
        </div>
        <figure className="presentation-portrait">
          <Image
            src="/product/tanuva-sealed-box.jpg"
            alt="TANUVA presentation box finished with cord and a dark rose seal"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </figure>
      </section>

      <section className="professionals" id="professionals">
        <div className="professional-number">04</div>
        <div className="professional-copy">
          <p className="eyebrow">Partnering in excellence</p>
          <h2>Created for<br />professional trust.</h2>
          <p>
            Selected collaborations for clinics, dermatologists and skincare
            professionals who demand evidence, control and distinction.
          </p>
          <ul>
            <li>Professional-only formulations</li>
            <li>Education and protocol support</li>
            <li>Bespoke presentation options</li>
            <li>Consistent quality and supply</li>
          </ul>
          <a className="text-link text-link-light" href="#contact">Speak with the house <i aria-hidden="true" /></a>
        </div>
        <div className="professional-orbit" aria-hidden="true"><span /></div>
      </section>

      <section className="heritage" aria-labelledby="heritage-title">
        <figure className="heritage-portrait">
          <Image
            src="/house/iranian-geometry.jpg"
            alt="An Iranian tiled architectural canopy photographed from below"
            fill
            sizes="(max-width: 760px) 100vw, 58vw"
          />
          <figcaption>Iran / architectural study</figcaption>
        </figure>
        <div className="heritage-copy">
          <p className="eyebrow">Origin / geometry</p>
          <h2 id="heritage-title">Forward,<br />without becoming<br /><em>anonymous.</em></h2>
          <p>
            Iranian proportion, craft and cultural memory inform a house made
            contemporary through precision and restraint.
          </p>
        </div>
      </section>

      <section className="house" id="house">
        <p className="eyebrow">The TANUVA house</p>
        <h2>Advanced skincare.<br />Intelligently made.<br /><em>Beautifully experienced.</em></h2>
        <p className="house-note">
          Precise. Discreet. Sensory. Modern. Feminine.
        </p>
        <div className="completion-mark" aria-label="TANUVA rose emblem">
          <span />
          <Image src="/assets/tanuva-logo.svg" alt="" width={92} height={92} />
          <span />
        </div>
      </section>

      <footer id="contact">
        <div className="footer-lead">
          <p>Advanced Skincare Technology House</p>
          <h2>Quiet science.<br />Made visible.</h2>
        </div>
        <div className="footer-links">
          <div><p>House</p><a href="#philosophy">Philosophy</a><a href="#science">Science</a><a href="#technology">Technology</a></div>
          <div><p>Explore</p><a href="#product">Product</a><a href="#professionals">Professionals</a><a href="#house">Our standards</a></div>
          <div><p>Connect</p><a href="mailto:info@tanuva.beauty">info@tanuva.beauty</a><a href="https://tanuva.beauty">tanuva.beauty</a><span>@tanuva_beauty</span></div>
        </div>
        <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">Join our circle</label>
          <p>Insights on science, skin and the art of responsible beauty.</p>
          <div><input id="email" type="email" placeholder="Your email" aria-label="Email address" /><button type="submit">Join</button></div>
        </form>
        <div className="footer-bottom">
          <span>© 2026 TANUVA. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>
    </main>
  );
}
