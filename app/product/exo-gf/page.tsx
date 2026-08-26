import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EXO-GF Bioactive Repair Cream — TANUVA",
  description: "Discover TANUVA EXO-GF Bioactive Repair Cream.",
};

export default function ExoGfPage() {
  return (
    <main className="product-detail-page">
      <header className="product-detail-header">
        <a href="/" aria-label="Return to TANUVA home">← Home</a>
        <Image src="/assets/tanuva-logotype.svg" alt="TANUVA" width={180} height={22} priority />
        <span>EXO-GF</span>
      </header>

      <section className="product-detail-hero">
        <div className="product-detail-image">
          <Image
            src="/product/tanuva-hero-4k.png"
            alt="TANUVA EXO-GF Bioactive Repair Cream"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="product-detail-copy">
          <p>EXO-GF Advanced Repair</p>
          <h1>Bioactive<br />Repair Cream</h1>
          <div className="fine-rule" />
          <p className="product-detail-lede">
            A refined bioactive cream created to support the appearance of renewed,
            resilient and balanced skin.
          </p>
          <dl>
            <div><dt>01</dt><dd>Exosome Complex</dd></div>
            <div><dt>02</dt><dd>Growth Factor Complex</dd></div>
            <div><dt>03</dt><dd>Peptide Renewal System</dd></div>
            <div><dt>04</dt><dd>Skin Comfort Complex</dd></div>
          </dl>
          <a className="text-link" href="mailto:info@tanuva.beauty">
            Enquire about EXO-GF <i aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
