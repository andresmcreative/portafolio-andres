import Image from "next/image";
import Link from "next/link";

export default function Proyectos() {

const proyectos = [
  {
    numero: "01",
    titulo: "CLÍNICA MERY ÁLVAREZ",
    descripcion:
      "Campañas gráficas, piezas digitales y contenido visual para fortalecer la comunicación de marca.",
    link: "/proyectos/clinica",
    },
    {
      titulo: "IDENTIDAD VISUAL",
      descripcion:
        "Desarrollo de conceptos visuales, marcas y sistemas gráficos.",
      link: "/proyectos/identidad-visual",
    },
    {
      titulo: "DISEÑO DIGITAL / SOCIAL MEDIA",
      descripcion:
        "Diseño de contenido digital, piezas para redes y comunicación visual.",
      link: "/proyectos/diseno-digital-social-media",
    },
  ];


  return (

    <main className="min-h-screen bg-zinc-950 px-6 py-24 md:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">


        <div className="mb-16">

          <p className="text-sm tracking-[0.3em] text-zinc-500">
            PORTAFOLIO
          </p>


          <h1 className="mt-5 text-5xl font-semibold text-white md:text-7xl">
            Proyectos seleccionados
          </h1>

        </div>


{/* SELECTOR MÓVIL */}
<div className="md:hidden">

  <div className="space-y-16">

    {/* CLÍNICA */}
    <Link href="/proyectos/clinica" className="block">
<div className="h-[230px] overflow-hidden rounded-2xl">
  <img
    src="/proyectos/selector/selector_proyectos_vertical.jpg"
    alt="Clínica Mery Álvarez"
    className="h-full w-full object-cover object-top"
  />
</div>

      <div className="mt-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">01</p>
        <h2 className="mt-3 text-2xl font-semibold">
          CLÍNICA MERY ÁLVAREZ
        </h2>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Campañas gráficas, contenido visual y comunicación de marca para el sector estético.
        </p>
      </div>
    </Link>

    {/* IDENTIDAD VISUAL */}
    <Link href="/proyectos/identidad-visual" className="block">
<div className="h-[230px] overflow-hidden rounded-2xl">
  <img
    src="/proyectos/selector/selector_proyectos_vertical.jpg"
    alt="Identidad Visual"
    className="h-full w-full object-cover object-center"
  />
</div>

      <div className="mt-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">02</p>
        <h2 className="mt-3 text-2xl font-semibold">
          IDENTIDAD VISUAL
        </h2>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Desarrollo de marcas, conceptos visuales y sistemas gráficos para diferentes proyectos.
        </p>
      </div>
    </Link>

    {/* DISEÑO DIGITAL */}
    <Link href="/proyectos/diseno-digital-social-media" className="block">
<div className="h-[230px] overflow-hidden rounded-2xl">
  <img
    src="/proyectos/selector/selector_proyectos_vertical.jpg"
    alt="Diseño Digital Social Media"
    className="h-full w-full object-cover object-bottom"
  />
</div>

      <div className="mt-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">03</p>
        <h2 className="mt-3 text-2xl font-semibold">
          DISEÑO DIGITAL / SOCIAL MEDIA
        </h2>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Creación de piezas digitales, contenido para redes sociales y comunicación visual.
        </p>
      </div>
    </Link>

  </div>

</div>
<div className="relative hidden overflow-hidden md:block">


          <picture>

            <source
              media="(max-width: 767px)"
              srcSet="/proyectos/selector/selector_proyectos_vertical.jpg"
            />


            <Image
              src="/proyectos/selector/selector_proyectos_horizontal.jpg"
              alt="Selección de proyectos"
              width={1600}
              height={900}
              className="w-full object-cover"
            />


          </picture>



          <Link
            href="/proyectos/clinica"
            className="absolute left-0 top-0 h-full w-1/3"
          >
            <span className="sr-only">
              Clínica Mery Álvarez
            </span>
          </Link>



          <Link
            href="/proyectos/identidad-visual"
            className="absolute left-1/3 top-0 h-full w-1/3"
          >
            <span className="sr-only">
              Identidad Visual
            </span>
          </Link>



          <Link
href="/proyectos/diseno-digital-social-media"
            className="absolute right-0 top-0 h-full w-1/3"
          >
            <span className="sr-only">
              Diseño Digital Social Media
            </span>
          </Link>


        </div>



<div className="mt-20 hidden gap-12 md:grid md:grid-cols-3">

  <Link
    href="/proyectos/clinica"
    className="group border-t border-zinc-800 pt-6"
  >

    <p className="text-sm tracking-[0.3em] text-zinc-500">
      01
    </p>

    <h2 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-zinc-300">
      CLÍNICA MERY ÁLVAREZ
    </h2>

    <p className="mt-4 text-sm leading-7 text-zinc-400">
      Campañas gráficas, contenido visual y comunicación de marca para el sector estético.
    </p>

  </Link>


  <Link
    href="/proyectos/identidad-visual"
    className="group border-t border-zinc-800 pt-6"
  >

    <p className="text-sm tracking-[0.3em] text-zinc-500">
      02
    </p>

    <h2 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-zinc-300">
      IDENTIDAD VISUAL
    </h2>

    <p className="mt-4 text-sm leading-7 text-zinc-400">
      Desarrollo de marcas, conceptos visuales y sistemas gráficos para diferentes proyectos.
    </p>

  </Link>


  <Link
href="/proyectos/diseno-digital-social-media"
    className="group border-t border-zinc-800 pt-6"
  >

    <p className="text-sm tracking-[0.3em] text-zinc-500">
      03
    </p>

    <h2 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-zinc-300">
      DISEÑO DIGITAL / SOCIAL MEDIA
    </h2>

    <p className="mt-4 text-sm leading-7 text-zinc-400">
      Creación de piezas digitales, contenido para redes sociales y comunicación visual.
    </p>

  </Link>

        </div>        </div>


        {/* BOTÓN VOLVER AL HOME */}

        <div className="mt-20 flex justify-center">

          <Link
            href="/"
            className="border border-zinc-700 px-8 py-3 text-xs tracking-[0.3em] text-zinc-400 transition hover:border-white hover:text-white"
          >
            VOLVER AL INICIO
          </Link>

        </div>


        </main>

  );
}