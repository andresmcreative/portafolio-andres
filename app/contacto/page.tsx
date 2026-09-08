import Image from "next/image";
import Link from "next/link";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* CABECERA */}
      <header className="flex items-center justify-between border-b border-zinc-900 px-6 py-8 md:px-12 lg:px-20">


        <Image
          src="/logos/logo_andres.svg"
          alt="Logo Andrés Monsalve"
          width={95}
          height={55}
          unoptimized
          className="h-auto w-[80px] md:w-[95px]"
        />
      </header>

      {/* CONTENIDO */}
      <section className="flex min-h-[calc(100vh-120px)] items-center px-6 py-20 md:px-12 lg:px-20">
        <div className="w-full max-w-5xl">
          <p className="mb-6 text-sm tracking-[0.35em] text-zinc-500">
            CONTACTO
          </p>

<h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:text-6xl">
  ¿Quieres trabajar conmigo?
</h1>

<p className="mt-8 max-w-xl text-lg text-zinc-300 md:text-2xl">
  Si consideras que mi perfil puede aportar valor a tu equipo, escríbeme.
  Estoy abierto a nuevas oportunidades profesionales en diseño visual,
  identidad de marca y comunicación digital.
</p>

          {/* OPCIONES DE CONTACTO */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row md:mt-16">
            <a
              href="https://wa.me/573103514624"
              className="inline-flex min-w-[190px] items-center justify-center border border-white px-8 py-4 text-sm tracking-[0.2em] transition hover:bg-white hover:text-black"
>
  <img
    src="/recursos/iconos/icono_whatsapp.svg"
    alt="WhatsApp"
    className="mr-3 h-5 w-5"
  />

  WHATSAPP
</a>
            <a
              href="mailto:monri0604@gmail.com"
            
              className="inline-flex min-w-[190px] items-center justify-center border border-zinc-700 px-8 py-4 text-sm tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
            >
              CORREO
            </a>
          </div>

          <div className="mt-14 border-t border-zinc-900 pt-8 md:mt-20">
            <p className="max-w-xl text-sm leading-7 text-zinc-500">
Mi enfoque combina estrategia visual, creatividad y diseño funcional para desarrollar soluciones que conecten marcas con personas.
            </p>
          </div>
        </div>
      </section>
      {/* BOTÓN VOLVER AL INICIO */}

<div className="mt-10 flex justify-center md:mt-20">

  <a
    href="/"
    className="border border-zinc-700 px-8 py-3 text-xs tracking-[0.3em] text-zinc-400 transition hover:border-white hover:text-white"
  >
    VOLVER AL INICIO
  </a>

</div>
    </main>
  );
}