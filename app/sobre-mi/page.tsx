import Image from "next/image";
import Link from "next/link";

export default function SobreMi() {
  return (
    <main className="bg-black text-white">
      {/* CABECERA */}
      <section className="relative border-b border-zinc-900 px-6 py-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <Link
            href="/"
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
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="grid min-h-screen items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[540px]">
          <Image
            src="/home/home_foto_02_horizontal.jpg"
            alt="Andrés Monsalve"
            fill
            unoptimized
            className="object-cover object-[30%_top]"
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
            SOBRE MÍ
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Diseño con intención, claridad y personalidad.
          </h1>

          <div className="mt-9 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              Soy Andrés Monsalve, diseñador gráfico enfocado en identidad
              visual, comunicación digital y creación de contenido para marcas.
            </p>

            <p>
              Mi experiencia me ha permitido trabajar en campañas gráficas,
              piezas para redes sociales, contenido audiovisual, diseño
              aplicado a prendas y propuestas visuales para diferentes tipos de
              proyectos.
            </p>

            <p>
              También he desarrollado piezas impresas como volantes, flyers,
              pendones y otros materiales de comunicación.
            </p>

            <p>
              Me desenvuelvo bien en el trabajo en equipo, aportando ideas,
              escuchando diferentes puntos de vista y adaptándome a los procesos
              necesarios para alcanzar un buen resultado.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="grid min-h-screen items-center gap-12 bg-zinc-950 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
            EXPERIENCIA
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Experiencia en diseño y comunicación visual.
          </h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl font-medium">CLÍNICA MERY ÁLVAREZ</h3>
              <p className="mt-2 text-sm tracking-[0.12em] text-zinc-500">
                DISEÑO GRÁFICO / COMUNICACIÓN VISUAL · 2 AÑOS Y 9 MESES
              </p>
              <p className="mt-4 leading-7 text-zinc-300">
                Desarrollo de campañas gráficas, contenido digital, piezas para
                redes sociales y participación en campañas audiovisuales,
                manteniendo coherencia con la comunicación visual de la marca.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">RVITIS</h3>
              <p className="mt-2 text-sm tracking-[0.12em] text-zinc-500">
                DISEÑADOR GRÁFICO FREELANCE / COMUNICACIÓN VISUAL · 1 AÑO
              </p>
              <p className="mt-4 leading-7 text-zinc-300">
                Creación de contenido y piezas digitales para redes sociales y
                campañas publicitarias, adaptadas a diferentes formatos
                digitales.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">INVERZAMAN</h3>
              <p className="mt-2 text-sm tracking-[0.12em] text-zinc-500">
                DISEÑADOR GRÁFICO · 17 MESES
              </p>
              <p className="mt-4 leading-7 text-zinc-300">
Desarrollo y adaptación de propuestas gráficas aplicadas a procesos
de estampación y bordado, teniendo en cuenta requerimientos técnicos
y características del producto final.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden md:min-h-[540px]">
          <Image
            src="/home/home_foto_03_horizontal.jpg"
            alt="Andrés Monsalve trabajando en diseño gráfico"
            fill
            unoptimized
            className="object-cover object-[25%_center]"
          />
        </div>
      </section>

      {/* FORMA DE TRABAJAR */}
      <section className="grid min-h-screen items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="relative min-h-[540px] overflow-hidden md:order-2">
          <Image
            src="/home/home_foto_04_horizontal.jpg"
            alt="Andrés Monsalve - proceso creativo"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="max-w-xl md:order-1">
          <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
            FORMA DE TRABAJAR
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Cada proyecto necesita una solución visual propia.
          </h2>

          <div className="mt-9 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              Me gusta entender primero la necesidad de cada proyecto antes de
              tomar decisiones visuales.
            </p>

            <p>
              Trabajo cuidando la composición, la jerarquía, el color, la
              tipografía y la adaptación de cada pieza a su formato y medio de
              comunicación.
            </p>

            <p>
              Busco que cada propuesta mantenga coherencia, tenga una intención
              clara y pueda funcionar correctamente tanto de manera individual
              como dentro de un sistema visual más amplio.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO CREATIVO */}
      <section className="grid min-h-screen items-center gap-12 bg-zinc-950 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20">
        <div className="relative min-h-[540px] overflow-hidden">
          <Image
            src="/home/home_foto_05_horizontal.png"
            alt="Andrés Monsalve trabajando en computador"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
            PROCESO CREATIVO
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Del concepto a una solución visual funcional.
          </h2>

          <div className="mt-9 space-y-6 text-base leading-8 text-zinc-300">
            <p>
              Mi proceso combina investigación, exploración visual, composición
              y desarrollo de diferentes alternativas antes de llegar a una
              solución final.
            </p>

            <p>
              Cada proyecto se construye pensando en su objetivo, en el público
              al que se dirige y en los diferentes formatos donde tendrá que
              funcionar.
            </p>

            <p>
              El resultado final busca mantener un equilibrio entre estética,
              claridad y funcionalidad.
            </p>
          </div>
        </div>
      </section>
            {/* ESPECIALIDADES */}
      <section className="border-t border-zinc-900 px-6 py-20 md:px-12 lg:px-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div className="max-w-xl">

            <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
              ESPECIALIDADES
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Diseño sistemas visuales que conectan marcas y personas.
            </h2>

          </div>


          <div className="space-y-8 text-zinc-300">


            <div>
              <h3 className="text-xl font-medium text-white">
                Identidad visual
              </h3>

              <p className="mt-3 leading-7">
                Creación de sistemas gráficos, construcción de marcas
                y desarrollo de elementos visuales coherentes con la
                personalidad de cada proyecto.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-medium text-white">
                Diseño digital
              </h3>

              <p className="mt-3 leading-7">
                Desarrollo de piezas digitales, campañas visuales y
                contenido para redes sociales adaptado a diferentes
                formatos de comunicación.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-medium text-white">
                Comunicación visual
              </h3>

              <p className="mt-3 leading-7">
                Creación de propuestas visuales enfocadas en transmitir
                mensajes claros, fortalecer marcas y conectar con sus
                públicos.
              </p>
            </div>


          </div>

        </div>

      </section>
            {/* HERRAMIENTAS */}

      <section className="border-t border-zinc-900 px-6 py-20 md:px-12 lg:px-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm tracking-[0.3em] text-zinc-500">
              HERRAMIENTAS
            </p>

<h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
  Herramientas que acompañan mi proceso creativo.
</h2>
          </div>


          <div className="space-y-8 text-zinc-300">

            <div>
              <h3 className="text-xl font-medium text-white">
                Diseño gráfico
              </h3>

              <p className="mt-2">
                Illustrator · Photoshop
              </p>
            </div>


            <div>
              <h3 className="text-xl font-medium text-white">
                Motion y contenido audiovisual
              </h3>

<p className="mt-2">
  After Effects · CapCut
</p>

<p className="mt-1 text-sm text-zinc-500">
  Premiere Pro (manejo básico)
</p>
            </div>


            <div>
<h3 className="text-xl font-medium text-white">
  Exploración y apoyo creativo
</h3>

<p className="mt-2">
  Canva · ChatGPT
</p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}