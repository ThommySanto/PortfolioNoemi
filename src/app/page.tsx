"use client";

const visuals = [
  ["/portfolio/WhatsApp%20Image%202026-11-26%20at%2009.39.10.jpeg", "Labbra", "pink"],
  ["/portfolio/WhatsApp%20Image%202026-11-26%20at%2009.39.10%20(1).jpeg", "Skincare", "blue"],
  ["/portfolio/WhatsApp%20Image%202026-11-26%20at%2009.39.10%20(2).jpeg", "Guance", "pink"],
  ["/portfolio/WhatsApp%20Image%202026-11-26%20at%2009.39.10%20(3).jpeg", "Occhi", "pearl"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.16.17.jpeg", "Beauty", "gold"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.11.35.jpeg", "Labbra", "pink"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.14.50.jpeg", "Skincare", "blue"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.10.51.jpeg", "Guance", "pink"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.09.50.jpeg", "Beauty", "gold"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.07.13.jpeg", "Occhi", "pearl"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.08.41.jpeg", "Labbra", "pink"],
  ["/portfolio/WhatsApp%20Image%202026-11-25%20at%2000.03.55.jpeg", "Skincare", "blue"],
] as const;

const instagram = "https://www.instagram.com/noemi.sbaffo/";
const email = "noemisbaffo744@gmail.com";

export default function Home() {
  return <main>
    <nav className="nav shell"><a className="brand" href="#top">NOEMI <i>SBAFFO</i></a><div className="links"><a href="#portfolio">Portfolio</a><a href="#about">Chi sono</a><a href="#contact">Contatti</a></div><a className="under" href="#contact">Collabora con me</a></nav>
    <section id="top" className="hero shell">
      <div className="copy"><p className="eyebrow">Beauty visual creator � Italia</p><h1>Il tuo prodotto,<br/><em>impossibile</em><br/>da ignorare.</h1><p>Creo visual beauty luminosi, curati e pronti per farsi notare. Dallo scatto del prodotto alla post-produzione creativa con AI, trasformo ogni idea in una piccola campagna.</p><div className="actions"><a className="button" href="#portfolio">Scopri il portfolio</a><a className="under" href={instagram} target="_blank" rel="noreferrer">Instagram</a></div></div>
      <div className="hero-art"><div className="orb one"/><div className="orb two"/><div className="waves"/><div className="bottle"><small>BEAUTY</small><b>VISUALS</b><i>by Noemi</i></div><span className="tag">creative<br/>direction</span></div>
    </section>
    <section className="quote"><p>Beauty immagini che sembrano <em>campagne.</em><br/>Pensate per far fermare lo scroll.</p></section>
    <section id="portfolio" className="portfolio shell"><header><div><p className="eyebrow">Selected work</p><h2>Portfolio</h2></div><p>Concept visual per raccontare texture, luce e desiderabilit� del prodotto.</p></header><div className="filters"><button>Tutti</button><button>Occhi</button><button>Labbra</button><button>Guance</button><button>Skincare</button></div><div className="gallery">{visuals.map(([src, category, color], i)=><article className="card" key={src}><div className={"placeholder "+color}>{category}</div><img src={src} alt={"Concept visual beauty: "+category} loading={i>3?"lazy":"eager"} onError={(event) => { event.currentTarget.style.display = "none"; }}/><div className="caption"><small>Concept visual</small><b>{category}</b></div></article>)}</div><p className="disclaimer">I visual mostrati sono concept creativi indipendenti e non costituiscono collaborazioni ufficiali con i marchi eventualmente raffigurati.</p></section>
    <section id="about" className="about"><div className="shell about-grid"><div className="portrait"><div><span>NOEMI<br/>SBAFFO</span></div><small>beauty creator<br/>based in Italy</small></div><div className="about-copy"><p className="eyebrow">About me</p><h2>Un prodotto<br/>merita la sua<br/><em>scena.</em></h2><p>Sono Noemi Sbaffo, beauty visual creator. Prendo un prodotto reale e costruisco attorno un immaginario fatto di luce, materie, texture, colore e dettagli.</p><p>Ogni progetto parte dall&apos;identit� del brand ed � pensato per social, e-commerce e comunicazione digitale.</p><a className="under" href="#contact">Parliamo del tuo prodotto</a></div></div></section>
    <section className="services shell"><p className="eyebrow">Cosa posso creare</p><div>{[["01","Product visual","Immagini prodotto d'impatto, con set e direzione estetica pensati per il tuo brand."],["02","Creative retouch","Post-produzione e AI creative per elevare lo scatto e renderlo pronto per una campagna."],["03","Social content","Visual verticali e formati digitali progettati per fermare lo scroll."]].map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section id="contact" className="contact"><div className="shell"><p className="eyebrow">Let&apos;s create</p><h2>Facciamo brillare<br/><em>il tuo prodotto.</em></h2><p>Hai un prodotto beauty da raccontare? Scrivimi e costruiamo insieme il suo prossimo visual.</p><div className="actions"><a className="button white" href={"mailto:"+email}>Scrivimi un&apos;email</a><a className="under" href={instagram} target="_blank" rel="noreferrer">@noemi.sbaffo</a></div></div></section>
    <footer className="shell"><span>� {new Date().getFullYear()} Noemi Sbaffo</span><a href={"mailto:"+email}>{email}</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></footer>
  </main>;
}

