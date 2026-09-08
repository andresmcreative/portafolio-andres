export default function DisenoDigitalSocialMedia() {
  return (
    <main className="bg-black text-white">


      {/* INTRO */}

      <section className="px-6 py-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.3em] text-zinc-500">
            DISEÑO DIGITAL
          </p>


          <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
            Diseño digital y comunicación visual.
          </h1>


          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">
            Desarrollo de piezas digitales para redes sociales,
            campañas visuales y comunicación comercial,
            enfocadas en construcción de marca y conexión con usuarios.
          </p>


        </div>

      </section>





{/* PORTADA */}

<section className="px-6 pb-24 md:px-12 lg:px-20">

  <div className="mx-auto max-w-7xl">


    <div className="relative mt-10">


<picture>
  <source
    media="(max-width: 767px)"
    srcSet="/proyectos/diseno-digital-social-media/01_PORTADA/diseno_social_media_portada_vertical.jpg"
  />

  <img
    src="/proyectos/diseno-digital-social-media/01_PORTADA/diseno_social_media_portada_horizontal.jpg"
    alt="Diseño social media portada"
    className="w-full object-cover"
  />
</picture>


      <div className="absolute left-6 right-6 bottom-[60px] max-w-xl md:left-8 md:right-auto md:bottom-12">


        <p className="text-base leading-8 text-zinc-300">
          Desarrollo de piezas digitales enfocadas en comunicación
          visual, campañas comerciales y contenido estratégico
          para redes sociales.
        </p>


      </div>


    </div>


  </div>

</section>






      {/* GALERÍA */}

      <section className="px-6 pb-24 md:px-12 lg:px-20">


        <div className="mx-auto max-w-7xl">


          <h2 className="text-xl font-medium">
            Aplicaciones digitales
          </h2>



<picture>
  <source
    media="(max-width: 767px)"
    srcSet="/proyectos/diseno-digital-social-media/02_GALERIA/diseno_social_media_galeria_vertical.jpg"
  />

  <img
    src="/proyectos/diseno-digital-social-media/02_GALERIA/diseno_social_media_galeria_horizontal.jpg"
    alt="Diseño social media"
    className="mt-8 w-full transition duration-700 hover:scale-[1.02]"
  />
</picture>



        </div>


      </section>

{/* BOTÓN VOLVER A PROYECTOS */}

<div className="px-6 pb-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    <a
      href="/proyectos"
      className="inline-flex border border-zinc-700 px-6 py-3 text-xs tracking-[0.2em] text-zinc-300 transition hover:border-white hover:text-white"
    >
      VOLVER A PROYECTOS
    </a>

  </div>
</div>

    </main>
  );
}