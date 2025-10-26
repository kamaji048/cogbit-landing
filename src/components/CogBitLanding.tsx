"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Section = { id: string; label: string };

export default function CogBitLanding() {
  const sections: Section[] = useMemo(
    () => [
      { id: "inicio", label: "Início" },
      { id: "servicos", label: "Serviços" },
      { id: "diferenciais", label: "Diferenciais" },
      { id: "projetos", label: "Projetos" },
      { id: "contato", label: "Contato" },
    ],
    []
  );

  const [active, setActive] = useState<string>("inicio");
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => (ev: React.MouseEvent) => {
    ev.preventDefault();
    const el = document.getElementById(id);
    const headerH = headerRef.current?.offsetHeight ?? 0;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main className="min-h-screen scroll-smooth">
      {/* HEADER */}
      <header
        ref={headerRef}
        className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(8,12,20,0.7)] backdrop-blur"
      >
        <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/cogbit-logo.png"
              width={36}
              height={36}
              alt="Cog&Bit"
              className="rounded"
              priority
            />
            <span className="font-display text-lg tracking-wide">Cog&Bit</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={scrollTo(s.id)}
                className={`px-3 py-2 rounded-full transition hover:bg-white/5 ${
                  active === s.id ? "bg-white/10" : ""
                }`}
              >
                {s.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={scrollTo("contato")}
              className="ml-2 rounded-full px-4 py-2 text-white"
              style={{
                background:
                  "linear-gradient(90deg, var(--cb-grad1,#0EA5E9), var(--cb-grad2,#2563EB))",
              }}
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <div className="space-y-1.5">
              <div className="h-0.5 w-5 bg-current" />
              <div className="h-0.5 w-4 bg-current" />
              <div className="h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-[rgba(8,12,20,0.9)]">
            <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={scrollTo(s.id)}
                  className={`px-3 py-3 rounded-xl ${
                    active === s.id ? "bg-white/10" : ""
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={scrollTo("contato")}
                className="mt-2 rounded-xl px-4 py-3 text-center text-white"
                style={{
                  background:
                    "linear-gradient(90deg, var(--cb-grad1,#0EA5E9), var(--cb-grad2,#2563EB))",
                }}
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/cogbit-logo.png"
                width={56}
                height={56}
                alt="Cog&Bit"
                className="rounded"
              />
              <span className="text-sm tracking-widest uppercase text-white/60">
                Tecnologia & Design
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Soluções Inovadoras para o Mundo Digital
            </h1>
            <p className="mt-4 text-white/70 text-lg">
              Criamos <b>landing pages</b>, <b>sites profissionais</b> e{" "}
              <b>soluções sob medida</b> para acelerar o seu negócio.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contato"
                onClick={scrollTo("contato")}
                className="px-5 py-3 rounded-xl text-white"
                style={{
                  background:
                    "linear-gradient(90deg, var(--cb-grad1,#0EA5E9), var(--cb-grad2,#2563EB))",
                }}
              >
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                onClick={scrollTo("servicos")}
                className="px-5 py-3 rounded-xl border border-white/15"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 font-medium">
              Tecnologias que usamos
            </p>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-white/70">
              <li className="rounded-lg border border-white/10 p-3">Next.js</li>
              <li className="rounded-lg border border-white/10 p-3">React</li>
              <li className="rounded-lg border border-white/10 p-3">Tailwind</li>
              <li className="rounded-lg border border-white/10 p-3">Node.js</li>
              <li className="rounded-lg border border-white/10 p-3">Vercel</li>
              <li className="rounded-lg border border-white/10 p-3">
                Integrações
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 bg-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl">
            O que fazemos
          </h2>
          <p className="text-white/70 mt-2">
            Projetos ágeis, código de qualidade e foco em conversão.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Landing Pages",
                d: "Páginas rápidas e otimizadas para captar leads.",
              },
              {
                t: "Sites Institucionais",
                d: "Sua marca com presença profissional e moderna.",
              },
              {
                t: "Soluções Sob Medida",
                d: "Integrações, automações e features específicas.",
              },
            ].map((i) => (
              <div
                key={i.t}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold">{i.t}</h3>
                <p className="text-white/70 mt-2">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl">
            Por que a Cog&Bit?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Time experiente",
                d: "Dev fullstack com vivência em produto e entrega.",
              },
              {
                t: "Tecnologia de ponta",
                d: "Stack moderna (Next.js/React) e boas práticas.",
              },
              {
                t: "Prazo e suporte",
                d: "Entrega ágil com acompanhamento pós-go-live.",
              },
            ].map((i) => (
              <div
                key={i.t}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold">{i.t}</h3>
                <p className="text-white/70 mt-2">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-16 bg-white/5">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl">
            Projetos recentes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]"
              >
                <div className="aspect-[4/3] bg-white/10" />
                <div className="p-4">
                  <h3 className="font-semibold">Landing de Exemplo {n}</h3>
                  <p className="text-sm text-white/70">
                    SEO, performance e conversão.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center">
            Vamos conversar?
          </h2>
          <p className="text-white/70 text-center mt-2">
            Envie uma mensagem e retornamos ainda hoje.
          </p>

          {/* Formulário simples (Formspree) — substitua a action pelo seu endpoint */}
          <form
            action="https://formspree.io/f/SEU_ENDPOINT"
            method="POST"
            className="mt-8 grid gap-4"
          >
            <input
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none"
              name="nome"
              placeholder="Seu nome"
              required
            />
            <input
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none"
              name="email"
              type="email"
              placeholder="Seu e-mail"
              required
            />
            <textarea
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none min-h-[120px]"
              name="mensagem"
              placeholder="Conte rapidamente sobre o projeto"
              required
            />
            <button
              className="rounded-xl px-5 py-3 text-white"
              style={{
                background:
                  "linear-gradient(90deg, var(--cb-grad1,#0EA5E9), var(--cb-grad2,#2563EB))",
              }}
            >
              Enviar
            </button>
          </form>

          <div className="text-center text-white/70 mt-6">
            <p>Ou fale no WhatsApp: (XX) 9XXXX-XXXX</p>
            <p className="text-white/50 text-sm mt-2">
              Cog&Bit Serviços de Criação LTDA · CNPJ 00.000.000/0000-00
            </p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/cogbit-logo.png" width={28} height={28} alt="Cog&Bit" />
            <span className="font-display">Cog&Bit</span>
          </div>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Cog&Bit — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  );
}
