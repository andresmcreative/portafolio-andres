import Image from "next/image";
import Link from "next/link";

export default function Clinica() {
  return (
    <main className="bg-black text-white">
      {/* CABECERA */}
      <header className="flex items-center justify-between border-b border-zinc-900 px-6 py-8 md:px-12 lg:px-20">
        <Link
          href="/proyectos"
          className="text-xs tracking-[0.2em] text-zinc-400 transition hover:text-white md:text-sm"
        >
          VOLVER
        </Link>

        <Image
          src="/logos/logo_andres.svg"
          alt="Logo Andrés Monsalve"
          width={90}
          height={50}
          unoptimized
          className="h-auto w-[75px] md:w-[90px]"
        />
      </header>

      {/* PORTADA */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/proyectos/clinica/portada/clinica_portada_vertical.jpg"
            />
            <img
              src="/proyectos/clinica/portada/clinica_portada_horizontal.jpg"
              alt="Clínica Mery Álvarez"
              className="h-auto w-full object-cover"
            />
          </picture>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.3em] text-zinc-500">
            CLÍNICA MERY ÁLVAREZ
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Diseño y comunicación visual para una marca del sector estético y
            de bienestar.
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            El proyecto reúne campañas gráficas, piezas digitales, contenido
            audiovisual y publicaciones para redes sociales, manteniendo una
            comunicación visual coherente entre diferentes formatos y
            plataformas.
          </p>
        </div>
      </section>

      {/* CAMPAÑAS GRÁFICAS */}
      <section className="bg-zinc-950 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] text-zinc-500">
              CAMPAÑAS GRÁFICAS
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Adaptaciones visuales para diferentes formatos.
            </h2>
          </div>

          <div className="space-y-12">
            {/* 01 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/redefine-tu-silueta/redefine_tu_silueta_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/redefine-tu-silueta/redefine_tu_silueta_horizontal.jpg"
                alt="Campaña Redefine tu silueta"
                className="h-auto w-full object-cover"
              />
            </picture>

            {/* 02 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/agenda-abierta/agenda_abierta_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/agenda-abierta/agenda_abierta_horizontal.jpg"
                alt="Campaña Agenda abierta"
                className="h-auto w-full object-cover"
              />
            </picture>

            {/* 03 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/mama-se-merece-lo-mejor/mama_se_merece_lo_mejor_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/mama-se-merece-lo-mejor/mama_se_merece_lo_mejor_horizontal.jpg"
                alt="Campaña Mamá se merece lo mejor"
                className="h-auto w-full object-cover"
              />
            </picture>

            {/* 04 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/adios-a-la-flacidez/adios_a_la_flacidez_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/adios-a-la-flacidez/adios_a_la_flacidez_horizontal.jpg"
                alt="Campaña Adiós a la flacidez"
                className="h-auto w-full object-cover"
              />
            </picture>

            {/* 05 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/bogota-renueva-tu-piel/bogota_renueva_tu_piel_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/bogota-renueva-tu-piel/bogota_renueva_tu_piel_horizontal.jpg"
                alt="Campaña Bogotá, renueva tu piel"
                className="h-auto w-full object-cover"
              />
            </picture>

            {/* 06 */}
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-imagen/recupera-la-firmeza/recupera_la_firmeza_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-imagen/recupera-la-firmeza/recupera_la_firmeza_horizontal.jpg"
                alt="Campaña Recupera la firmeza"
                className="h-auto w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* CAMPAÑAS DE VIDEO */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] text-zinc-500">
              CAMPAÑAS AUDIOVISUALES
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Contenido audiovisual adaptado a diferentes formatos.
            </h2>
          </div>

          <div className="space-y-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-video/01_video-campana/video_campana_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-video/01_video-campana/video_campana_horizontal.jpg"
                alt="Campaña audiovisual Clínica Mery Álvarez"
                className="h-auto w-full object-cover"
              />
            </picture>

            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_vertical.jpg"
              />
              <img
                src="/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_horizontal.jpg"
                alt="Campaña Días de belleza"
                className="h-auto w-full object-cover"
              />
            </picture>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-zinc-500">
            Más adelante conectaremos estas composiciones con los archivos de
            video reales para que puedan reproducirse directamente desde el
            portafolio.
          </p>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-zinc-950 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] text-zinc-500">
              INSTAGRAM
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Contenido digital publicado en redes sociales.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
              Selección de publicaciones y Reels desarrollados para Instagram.
              Los enlaces dirigirán al contenido original publicado en la
              plataforma.
            </p>
          </div>

          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/proyectos/clinica/instagram/instagram_galeria_vertical.jpg"
            />
            <img
              src="/proyectos/clinica/instagram/instagram_galeria_horizontal.jpg"
              alt="Galería de Instagram Clínica Mery Álvarez"
              className="h-auto w-full object-cover"
            />
          </picture>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/proyectos/clinica/cierre/clinica_cierre_vertical.jpg"
            />
            <img
              src="/proyectos/clinica/cierre/clinica_cierre_horizontal.jpg"
              alt="Cierre proyecto Clínica Mery Álvarez"
              className="h-auto w-full object-cover"
            />
          </picture>
        </div>
      </section>

      {/* DERECHOS */}
      <section className="border-t border-zinc-900 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs tracking-[0.25em] text-zinc-600">
            DERECHOS Y AUTORÍA
          </p>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-500">
            Las marcas, nombres comerciales, fotografías, contenidos
            institucionales y demás elementos pertenecientes a Clínica Mery
            Álvarez son propiedad de sus respectivos titulares.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-500">
            Las piezas aquí presentadas se incluyen únicamente con fines de
            portafolio y exhibición profesional del trabajo de diseño realizado.
          </p>

          <div className="mt-12">
            <Link
              href="/proyectos"
              className="inline-block border border-zinc-700 px-7 py-3 text-xs tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
            >
              VOLVER A PROYECTOS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}