"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, BedDouble, Coffee, MapPin, Phone, ShieldCheck, Sparkles, Tv, Wifi, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const whatsapp = "https://wa.me/5566999365582?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20acomoda%C3%A7%C3%B5es%20e%20consultar%20a%20disponibilidade%20do%20Santa%20Carmem%20Palace%20Hotel.";
const mapUrl = "https://maps.app.goo.gl/M3FmSVoZtXU5Pbft5";

export default function Home() {
  const page = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 35, opacity: 0, duration: 1, stagger: 0.13, ease: "power3.out", delay: 0.2 });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 42, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        });
      });
      gsap.to(".hero-image", { scale: 1.06, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    }, page);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  const toggleMenu = () => menu.current?.classList.toggle("open");

  return (
    <main ref={page}>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Santa Carmem Palace Hotel - início">
          <span className="brand-mark">SC</span>
          <span className="brand-name">SANTA CARMEM <b>PALACE HOTEL</b></span>
        </a>
        <nav className="desktop-nav">
          <a href="#sobre">O hotel</a><a href="#comodidades">Comodidades</a><a href="#localizacao">Localização</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowRight size={15}/></a>
        <button className="menu-button" onClick={toggleMenu} aria-label="Abrir menu"><Menu/></button>
      </header>
      <div className="mobile-menu" ref={menu}>
        <button onClick={toggleMenu} aria-label="Fechar menu"><X/></button>
        <a onClick={toggleMenu} href="#sobre">O hotel</a><a onClick={toggleMenu} href="#comodidades">Comodidades</a><a onClick={toggleMenu} href="#localizacao">Localização</a>
        <a className="mobile-cta" href={whatsapp}>Consultar disponibilidade</a>
      </div>

      <section className="hero" id="inicio">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><span/> HOSPITALIDADE EM SANTA CARMEM · MT</div>
          <div className="hero-copy">
            <h1>Seu descanso.<br/><em>Nosso cuidado.</em></h1>
            <p>Uma estadia acolhedora, com conforto e praticidade para você aproveitar cada momento da sua viagem.</p>
            <div className="hero-actions">
              <a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer">Fale com o hotel <ArrowRight size={17}/></a>
              <a className="text-link" href="#sobre">Conheça o hotel <ArrowDown size={15}/></a>
            </div>
          </div>
        </div>
        <div className="hero-bottom"><span>CONFORTO • ACOLHIMENTO • TRANQUILIDADE</span><span>SANTA CARMEM, MATO GROSSO</span></div>
      </section>

      <section className="intro section-pad" id="sobre">
        <div className="section-kicker reveal">01 — BOAS-VINDAS</div>
        <div className="intro-grid">
          <h2 className="reveal">Uma pausa tranquila<br/>em <em>Santa Carmem.</em></h2>
          <div className="intro-text reveal">
            <p className="lead">No Santa Carmem Palace Hotel, cada detalhe convida você a se sentir bem-vindo.</p>
            <p>Seja em uma viagem de trabalho ou em uma passagem pela região, conte com um ambiente organizado, atendimento acolhedor e a praticidade que faz diferença na sua estadia.</p>
            <a className="under-link" href={whatsapp} target="_blank" rel="noreferrer">Converse com nossa equipe <ArrowRight size={16}/></a>
          </div>
        </div>
      </section>

      <section className="stay">
        <div className="stay-photo" role="img" aria-label="Interior elegante e acolhedor de hotel"/>
        <div className="stay-copy">
          <div className="section-kicker light reveal">UMA ESTADIA PENSADA PARA VOCÊ</div>
          <h2 className="reveal">Chegue, relaxe<br/>e sinta-se <em>em casa.</em></h2>
          <p className="reveal">Quer saber qual acomodação combina com sua viagem? Nossa equipe pode ajudar você a consultar opções e disponibilidade.</p>
          <a className="gold-button reveal" href={whatsapp} target="_blank" rel="noreferrer">Consultar acomodações <ArrowRight size={17}/></a>
        </div>
      </section>

      <section className="amenities section-pad" id="comodidades">
        <div className="section-kicker reveal">02 — CONFORTO E PRATICIDADE</div>
        <div className="amenities-heading">
          <h2 className="reveal">O essencial para<br/><em>uma boa estadia.</em></h2>
          <p className="reveal">Comodidades que ajudam a deixar sua experiência mais prática e tranquila.</p>
        </div>
        <div className="amenity-grid">
          <article className="amenity reveal"><span className="amenity-icon"><Wifi/></span><h3>Wi-Fi</h3><p>Conectividade para acompanhar sua rotina.</p></article>
          <article className="amenity reveal"><span className="amenity-icon"><Tv/></span><h3>TV digital</h3><p>Mais uma opção para seus momentos de descanso.</p></article>
          <article className="amenity reveal"><span className="amenity-icon"><Sparkles/></span><h3>Ambiente organizado</h3><p>Cuidado com a limpeza e a organização dos espaços.</p></article>
          <article className="amenity reveal"><span className="amenity-icon"><BedDouble/></span><h3>Frigobar</h3><p>Praticidade para sua acomodação.</p></article>
          <article className="amenity reveal"><span className="amenity-icon"><ShieldCheck/></span><h3>Mais tranquilidade</h3><p>Ambiente com câmeras de segurança.</p></article>
          <article className="amenity reveal"><span className="amenity-icon"><Coffee/></span><h3>Café da manhã</h3><p>Consulte com a equipe a disponibilidade e as condições.</p></article>
        </div>
        <p className="fine-print">A disponibilidade de comodidades e serviços pode variar. Confirme as condições diretamente com o hotel.</p>
      </section>

      <section className="quote-band">
        <div className="quote-mark">“</div>
        <p>O melhor da viagem também está em encontrar um lugar para descansar.</p>
        <span>SANTA CARMEM PALACE HOTEL</span>
      </section>

      <section className="location section-pad" id="localizacao">
        <div className="location-copy">
          <div className="section-kicker reveal">03 — COMO CHEGAR</div>
          <h2 className="reveal">Bem localizado<br/>em <em>Santa Carmem.</em></h2>
          <p className="reveal">Encontre o Santa Carmem Palace Hotel e planeje sua chegada com facilidade.</p>
          <div className="address reveal"><MapPin size={20}/><div><b>Santa Carmem Palace Hotel</b><span>Av. Santos Dumont, 399<br/>Santa Carmem - MT, CEP 78545-000</span></div></div>
          <a className="gold-button reveal" href={mapUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowRight size={17}/></a>
        </div>
        <div className="map-card reveal">
          <div className="map-art"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><div className="map-pin"><MapPin size={25}/></div><div className="map-label">SANTA CARMEM<br/><b>PALACE HOTEL</b></div></div>
          <a href={mapUrl} target="_blank" rel="noreferrer">Ver rota e localização <ArrowRight size={15}/></a>
        </div>
      </section>

      <section className="contact">
        <div className="contact-inner">
          <div className="section-kicker light">VAMOS PLANEJAR SUA ESTADIA?</div>
          <h2>Será um prazer<br/><em>receber você.</em></h2>
          <p>Fale diretamente com nossa equipe para tirar dúvidas, conhecer as acomodações e consultar a disponibilidade.</p>
          <a className="gold-button" href={whatsapp} target="_blank" rel="noreferrer"><Phone size={17}/> Conversar pelo WhatsApp <ArrowRight size={17}/></a>
          <span className="phone-number">(66) 99936-5582</span>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">SC</span><span className="brand-name">SANTA CARMEM <b>PALACE HOTEL</b></span></a>
        <span>Av. Santos Dumont, 399 · Santa Carmem - MT</span>
        <span>© {new Date().getFullYear()} Santa Carmem Palace Hotel</span>
      </footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><Phone size={21}/></a>
    </main>
  );
}
