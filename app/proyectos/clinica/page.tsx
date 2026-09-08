import Image from "next/image";
import Link from "next/link";

export default function Clinica() {
  const campanas = [
    {
      numero: "01",
      titulo: "REDEFINE TU SILUETA",
      descripcion:
  "Campaña visual enfocada en comunicar tratamientos corporales para reducir grasa localizada y redefinir la silueta, transmitiendo bienestar, confianza y resultados profesionales.",
      horizontal:
        "/proyectos/clinica/campanas-imagen/redefine-tu-silueta/redefine_tu_silueta_horizontal.jpg",
      vertical:
        "/proyectos/clinica/campanas-imagen/redefine-tu-silueta/redefine_tu_silueta_vertical.jpg",
    },
{
  numero: "02",
  titulo: "AGENDA ABIERTA",
  descripcion:
    "Campaña digital enfocada en comunicar disponibilidad, cercanía y atención personalizada, fortaleciendo la conexión entre la clínica y sus pacientes.",
  horizontal:
    "/proyectos/clinica/campanas-imagen/agenda-abierta/agenda_abierta_horizontal.jpg",
  vertical:
    "/proyectos/clinica/campanas-imagen/agenda-abierta/agenda_abierta_vertical.jpg",
},
{
  numero: "03",
  titulo: "MAMÁ SE MERECE LO MEJOR",
  descripcion:
    "Campaña emocional desarrollada para resaltar el vínculo familiar y transmitir un mensaje cercano de bienestar y cuidado.",
  horizontal:
    "/proyectos/clinica/campanas-imagen/mama-se-merece-lo-mejor/mama_se_merece_lo_mejor_horizontal.jpg",
  vertical:
    "/proyectos/clinica/campanas-imagen/mama-se-merece-lo-mejor/mama_se_merece_lo_mejor_vertical.jpg",
},
{
  numero: "04",
  titulo: "ADIÓS A LA FLACIDEZ",
  descripcion:
    "Campaña visual enfocada en comunicar tratamientos corporales orientados a recuperar firmeza y bienestar, transmitiendo confianza mediante una estética limpia y profesional.",
  horizontal:
    "/proyectos/clinica/campanas-imagen/adios-a-la-flacidez/adios_a_la_flacidez_horizontal.jpg",
  vertical:
    "/proyectos/clinica/campanas-imagen/adios-a-la-flacidez/adios_a_la_flacidez_vertical.jpg",
},
{
  numero: "05",
  titulo: "BOGOTÁ, RENUEVA TU PIEL",
  descripcion:
    "Campaña visual enfocada en comunicar tratamientos faciales y cuidado de la piel, transmitiendo frescura, confianza y renovación mediante una estética cercana y profesional.",
  horizontal:
    "/proyectos/clinica/campanas-imagen/bogota-renueva-tu-piel/bogota_renueva_tu_piel_horizontal.jpg",
  vertical:
    "/proyectos/clinica/campanas-imagen/bogota-renueva-tu-piel/bogota_renueva_tu_piel_vertical.jpg",
},
{
  numero: "06",
  titulo: "RECUPERA LA FIRMEZA",
  descripcion:
    "Campaña visual enfocada en tratamientos estéticos para recuperar firmeza y mejorar la apariencia de la piel, comunicando bienestar, confianza y resultados profesionales.",
  horizontal:
    "/proyectos/clinica/campanas-imagen/recupera-la-firmeza/recupera_la_firmeza_horizontal.jpg",
  vertical:
    "/proyectos/clinica/campanas-imagen/recupera-la-firmeza/recupera_la_firmeza_vertical.jpg",
},
  ];

const videos = [
  {
    numero: "01",
    titulo: "EXPERIENCIA WELLNESS EN MEDELLÍN",
  descripcion:
  "Desarrollo de pieza audiovisual enfocada en posicionar a Clínica Mery Álvarez como un destino de bienestar y experiencia estética para visitantes extranjeros. La producción integra el concepto de Medellín como destino de bienestar, mostrando procesos de transformación y resultados antes y después.",
imagenHorizontal:
  "/proyectos/clinica/campanas-video/01_video-campana/video_campana_horizontal.jpg",

imagenVertical:
  "/proyectos/clinica/campanas-video/01_video-campana/video_campana_vertical.jpg",

videos: [
  "/proyectos/clinica/campanas-video/01_video-campana/campana_video_vertical.mp4",

  "/proyectos/clinica/campanas-video/01_video-campana/campana_video_vertical_2.mp4",

  "/proyectos/clinica/campanas-video/01_video-campana/campana_video_horizontal.mp4",
],
  },

  {
    numero: "02",
    titulo: "DÍAS DE BELLEZA",
    descripcion:
"Creación de contenido audiovisual promocional para comunicar tratamientos estéticos destacados de la clínica y una campaña especial de descuentos. La pieza fue adaptada a diferentes formatos digitales para redes sociales, buscando generar interacción y conexión con los usuarios.",
 imagenHorizontal:
  "/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_horizontal.jpg",

imagenVertical:
  "/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_vertical.jpg",

videos: [
  "/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_vertical_vi.mp4",

  "/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_cuadrado_vi.mp4",

  "/proyectos/clinica/campanas-video/02_dias-de-belleza/dias_de_belleza_horizontal_vi.mp4",
],
  },
];

const reels = [
   {
     titulo: "Día de madres",
     imagen: "/proyectos/clinica/instagram/reels/reel_01_dia_de_madres.jpg",
     link: "https://www.instagram.com/reel/DI9SdGZxc9o/",
   },
   {
     titulo: "Piel fresca, luminosa y radiante",
     imagen: "/proyectos/clinica/instagram/reels/reel_02_piel_fresca_luminosa.jpg",
     link: "https://www.instagram.com/reel/DaQ-KnKhJ0U/",
   },
   {
     titulo: "25 años de la clínica",
     imagen: "/proyectos/clinica/instagram/reels/reel_03_25_aniversario_clinica.jpg",
     link: "https://www.instagram.com/reel/DBT5CmVRQVe/",
   },
   {
     titulo: "Morpheus8",
     imagen: "/proyectos/clinica/instagram/reels/reel_04_morpheus8.jpg",
     link: "https://www.instagram.com/reel/DI2OnXMtVCc/",
   },
   {
     titulo: "Láser CO2",
     imagen: "/proyectos/clinica/instagram/reels/reel_05_laser_co2.jpg",
     link: "https://www.instagram.com/reel/DI6xf-Dxb5a/",
   },
   {
     titulo: "Top tratamientos favoritos",
     imagen: "/proyectos/clinica/instagram/reels/reel_06_top_tratamientos_favoritos.jpg",
     link: "https://www.instagram.com/reel/DSvgW-nETQf/",
   },
   {
     titulo: "Nos acostumbramos a esconder lo que somos",
     imagen: "/proyectos/clinica/instagram/reels/reel_07_nos_acostumbramos_a_esconder.jpg",
     link: "https://www.instagram.com/reel/DV6AH8SjUzk/",
   },
   {
     titulo: "No todos necesitan el mismo tratamiento",
     imagen: "/proyectos/clinica/instagram/reels/reel_08_no_todos_necesitan_el_mismo_tratamiento.jpg",
     link: "https://www.instagram.com/p/Das4d30lSib/?img_index=4",
   },
];
 
return (
    <main className="bg-black text-white">

      <header className="flex items-center justify-between border-b border-zinc-900 px-6 py-8 md:px-12 lg:px-20">
        <Link
          href="/proyectos"
          className="text-xs tracking-[0.2em] text-zinc-400 hover:text-white"
        >
          VOLVER
        </Link>

        <Image
          src="/logos/logo_andres.svg"
          alt="Logo Andrés Monsalve"
          width={90}
          height={50}
          unoptimized
          className="w-[75px] md:w-[90px]"
        />
      </header>


<section className="px-6 py-12 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    <div className="group relative overflow-hidden">

      <picture>

        <source
          media="(max-width:767px)"
          srcSet="/proyectos/clinica/portada/clinica_portada_vertical.jpg"
        />

        <img
          src="/proyectos/clinica/portada/clinica_portada_horizontal.jpg"
          alt="Clínica Mery Álvarez"
          className="w-full object-cover"
        />

      </picture>


      <div className="absolute inset-0 flex items-center justify-end">

        <div className="w-full max-w-lg px-8 md:px-20 text-white">

          <p className="text-xs tracking-[0.4em] text-zinc-400">
            CLÍNICA MERY ÁLVAREZ
          </p>

          <h1 className="mt-84 text-2xl md:mt-6 md:text-4xl font-semibold leading-snug">
            Diseño y comunicación visual
            para una marca del sector
            estético y bienestar.
          </h1>

          <p className="mt-6 text-sm md:text-base leading-7 text-zinc-300">
            Desarrollo de campañas gráficas, piezas digitales y contenido
            audiovisual enfocado en fortalecer la identidad visual de la marca.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>


      <section className="px-6 py-14 md:px-12 lg:px-20">
  <div className="mx-auto max-w-5xl">

    <p className="text-sm tracking-[0.3em] text-zinc-500">
      CLÍNICA MERY ÁLVAREZ
    </p>

<h2 className="mt-8 text-2xl font-semibold leading-tight text-white md:text-4xl">
  El reto
</h2>

    <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
      Construir una comunicación visual coherente para una marca del sector
      estético y bienestar, transmitiendo confianza, profesionalismo y
      cercanía a través de diferentes puntos de contacto digitales.
    </p>

    <h2 className="mt-12 text-3xl font-semibold leading-tight text-white md:text-5xl">
      Mi aporte
    </h2>

    <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
      Desarrollo de campañas gráficas, piezas digitales y contenido audiovisual
      enfocado en fortalecer la identidad visual de la marca, manteniendo una
      comunicación clara y consistente.
    </p>

  </div>
</section>


      {/* CAMPAÑAS GRÁFICAS */}

      <section className="bg-zinc-950 px-6 py-16 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-24">
            <p className="text-sm tracking-[0.3em] text-zinc-500">
              CAMPAÑAS GRÁFICAS
            </p>

<h2 className="mt-5 text-4xl font-semibold md:text-5xl">
  Campañas visuales construidas para comunicar la esencia de la marca.
</h2>
<p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
  Desarrollo de piezas gráficas para campañas digitales y comunicación de
  marca, adaptando cada propuesta visual a diferentes formatos y objetivos
  estratégicos.
</p>
          </div>

<div className="space-y-36">

  {campanas.map((campana) => (
<article
  key={campana.titulo}
  className="bg-[#222222] pb-8 lg:bg-transparent lg:pb-0"
>

  <div className="group relative overflow-hidden">

    <picture>

      <source
        media="(max-width:767px)"
        srcSet={campana.vertical}
      />

      <img
        src={campana.horizontal}
        alt={campana.titulo}
className="w-full transition duration-700 group-hover:scale-[1.03]"
      />

    </picture>


    <div className="absolute inset-0 hidden lg:flex items-center justify-end pr-16">

      <div className="w-full max-w-lg px-10 -translate-y-10 text-white">

        <p className="text-4xl font-light text-zinc-600">
          {campana.numero}
        </p>


        <h3 className="mt-8 text-4xl font-semibold leading-tight">
          {campana.titulo}
        </h3>


        <div className="mt-8 h-px w-16 bg-zinc-600"></div>


<p className="mt-6 text-xs tracking-[0.3em] text-zinc-400">
  CAMPAÑA DIGITAL
</p>

<p className="mt-3 text-xs tracking-[0.3em] text-zinc-500">
  CLIENTE
</p>

<p className="mt-2 text-sm text-zinc-300">
  Clínica Mery Álvarez
</p>

<p className="mt-6 text-sm leading-7 text-zinc-400">
  {campana.descripcion}
</p>

      </div>

    </div>

  </div>


  <div className="relative z-10 -mt-47 px-6 pb-20 lg:hidden">

<p className="mt-6 text-4xl font-light text-zinc-500">
  {campana.numero}
</p>


    <h3 className="mt-4 text-3xl font-semibold leading-tight">
      {campana.titulo}
    </h3>


    <div className="mt-6 h-px w-16 bg-zinc-700"></div>


    <p className="mt-5 text-xs tracking-[0.3em] text-zinc-400">
      CAMPAÑA GRÁFICA
    </p>


    <p className="mt-3 text-sm text-zinc-300">
      Clínica Mery Álvarez
    </p>


<p className="mt-5 text-sm leading-7 text-zinc-400">
  {campana.descripcion}
</p>

  </div>

</article>

            ))}

          </div>

        </div>

      </section>      {/* CAMPAÑAS AUDIOVISUALES */}

      <section className="px-6 py-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20">

            <p className="text-sm tracking-[0.3em] text-zinc-500">
              CAMPAÑAS AUDIOVISUALES
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Contenido audiovisual adaptado a diferentes formatos.
            </h2>

          </div>


          <div className="space-y-28">

            {videos.map((video, index) => (

              <article
                key={video.titulo}
                className="border-t border-zinc-800 pt-16 first:border-t-0 first:pt-0"
              >

                <div className="mb-8 hidden md:block">

                  <p className="text-4xl font-light text-zinc-700">
                    {video.numero}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {video.titulo}
                  </h3>

                </div>


<div className="mt-10">

  {/* MINIATURAS DE VIDEO */}
 <div className="relative w-full">

{/* IMAGEN COMPUESTA PARA CELULAR */}
<div className="bg-[#222222] md:hidden">

  {/* IMAGEN + BOTONES */}
  <div className="relative h-[430px] overflow-hidden">
    <img
      src={video.imagenVertical}
      alt={video.titulo}
      className="h-full w-full object-cover object-top"
    />

    {/* BOTÓN IZQUIERDO - VERTICAL 650x1920 */}
    <a
href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[1] ?? ""
)}`}
className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
  video.numero === "02"
    ? "left-[34%] top-[23%]"
    : "left-[31%] top-[27%]"
}`}
      aria-label="Reproducir formato vertical 650x1920"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-12 opacity-90"
      />
    </a>

    {/* BOTÓN DERECHO - VERTICAL */}
    <a
href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[0] ?? ""
)}`}
  className={`absolute top-[27%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
  video.numero === "02" ? "left-[74%]" : "left-[64%]"
}`}
      aria-label="Reproducir formato vertical"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-12 opacity-90"
      />
    </a>

    {/* BOTÓN INFERIOR - HORIZONTAL */}
    <a
href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[2] ?? ""
)}`}
      className="absolute left-1/2 top-[74%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      aria-label="Reproducir formato horizontal"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-12 opacity-90"
      />
    </a>
  </div>

  {/* TEXTO VIDEO MÓVIL */}
  <div className="px-8 pt-10 pb-20 text-white">
    <p className="text-4xl font-light text-zinc-500">
      {video.numero}
    </p>

    <h3 className="mt-6 text-3xl font-semibold leading-tight">
      {video.titulo}
    </h3>

    <div className="mt-6 h-px w-16 bg-zinc-700"></div>

    <p className="mt-5 text-xs tracking-[0.3em] text-zinc-400">
      CAMPAÑA AUDIOVISUAL
    </p>

    <p className="mt-3 text-sm text-zinc-300">
      Clínica Mery Álvarez
    </p>

    <p className="mt-6 text-sm leading-7 text-zinc-400">
      {video.descripcion}
    </p>
  </div>
</div>


  {/* IMAGEN COMPUESTA PARA COMPUTADOR */}
<div className="relative hidden md:block">

  <img
    src={video.imagenHorizontal}
    alt={video.titulo}
    className="w-full"
  />

  <div className="absolute left-[58%] top-[28%] w-[20%]">
<p className="text-lg leading-relaxed text-zinc-300">
      {video.descripcion}
    </p>
  </div>

    <a
      href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[1] ?? ""
)}`}
className="absolute left-[8%] top-[8%] flex h-[32%] w-[14%] items-center justify-center"
      aria-label="Reproducir formato vertical 1"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-14 opacity-90"
      />
    </a>

    <a
href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[2] ?? ""
)}`}
      className="absolute left-[4%] top-[62%] flex h-[26%] w-[42%] items-center justify-center"
      aria-label="Reproducir formato horizontal"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-14 opacity-90"
      />
    </a>

    <a
href={`/proyectos/clinica/video?src=${encodeURIComponent(
  video.videos?.[0] ?? ""
)}`}
className={`absolute top-[17%] flex h-[18%] w-[10%] items-center justify-center ${
  video.numero === "02" ? "left-[30%]" : "left-[25%]"
}`}
      aria-label="Reproducir formato vertical 2"
    >
      <img
        src="/recursos/iconos/icono_play.svg"
        alt="Reproducir video"
        className="w-14 opacity-90"
      />
    </a>

  </div>

</div>





</div>
</article>

))}

          </div>

        </div>

      </section>



      {/* INSTAGRAM */}

<section className="bg-zinc-950 px-6 py-12 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">


          <div className="mb-16">

            <p className="text-sm tracking-[0.3em] text-zinc-500">
              INSTAGRAM
            </p>


            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Contenido digital publicado en redes sociales.
            </h2>


            <p className="mt-6 max-w-3xl text-zinc-400 leading-8">
Selección de piezas audiovisuales y contenido desarrollado para fortalecer
la presencia digital de la marca.
            </p>

          </div>



        


        </div>

      </section>
{/* REELS INSTAGRAM */}

<section className="px-6 py-24 md:px-12 lg:px-20">

  <div className="mx-auto max-w-7xl">

    <div className="mb-12">
      <p className="text-sm tracking-[0.3em] text-zinc-500">
        REELS DESTACADOS
      </p>

      <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
        REELS DESTACADOS
      </h2>

      <p className="mt-6 max-w-3xl text-zinc-400 leading-8">
Selección de piezas audiovisuales enfocadas en comunicación visual
y construcción de identidad digital.
      </p>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

  {reels.map((reel) => (
<a
  key={reel.titulo}
  href={reel.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative overflow-hidden rounded-xl"
>

  <img
    src={reel.imagen}
    alt={reel.titulo}
className="w-full aspect-square object-contain bg-zinc-950 transition duration-500"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">

    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">

      <img
        src="/recursos/iconos/icono_instagram.svg"
        alt="Instagram"
        className="h-7 w-7"
      />

    </div>

  </div>

</a>
  ))}

</div>
    </div>

  </div>

</section>



{/* CIERRE */}

<section className="px-6 py-2 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <picture>
      <source
        media="(max-width:767px)"
        srcSet="/proyectos/clinica/cierre/clinica_cierre_vertical.jpg"
      />

      <img
        src="/proyectos/clinica/cierre/clinica_cierre_horizontal.jpg"
        alt="Cierre Clínica Mery Álvarez"
        className="w-full transition duration-700 hover:scale-[1.03]"
      />
    </picture>
  </div>
</section>


{/* DERECHOS Y AUTORÍA */}

<section className="border-t border-zinc-900 px-6 py-16 md:px-12 lg:px-20">
  <div className="mx-auto max-w-5xl">

    <p className="text-xs tracking-[0.3em] text-zinc-600">
      DERECHOS Y AUTORÍA
    </p>

    <p className="mt-6 text-sm leading-7 text-zinc-500">
      Las marcas, nombres comerciales, fotografías, contenidos institucionales
      y demás elementos pertenecientes a Clínica Mery Álvarez son propiedad
      de sus respectivos titulares.
    </p>

    <p className="mt-4 text-sm leading-7 text-zinc-500">
      Las piezas aquí presentadas se incluyen únicamente con fines de portafolio
      y exhibición profesional del trabajo de diseño realizado.
    </p>

    <Link
      href="/proyectos"
      className="mt-10 inline-block border border-zinc-700 px-7 py-3 text-xs tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
    >
      VOLVER A PROYECTOS
    </Link>

  </div>
      </section>

    </main>
  );
}