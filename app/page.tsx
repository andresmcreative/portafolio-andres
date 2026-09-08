import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[100svh] overflow-hidden md:min-h-screen">
        <Image
          src="/home/home_foto_01_horizontal.jpg"
          alt="Andrés Monsalve - Diseñador Gráfico"
          fill
          priority
          unoptimized
          className="object-cover object-[75%_center] md:object-right"
        />

        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex min-h-screen items-start pt-[48vh] px-6 md:items-center md:pt-10 md:px-12 lg:px-20">
          <div className="max-w-4xl">
<h1 className="text-2xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
  ANDRÉS MONSALVE
</h1>
            <p className="mt-3 text-sm tracking-[0.32em] text-zinc-300 md:mt-4 md:text-lg md:tracking-[0.35em]">
              DISEÑADOR GRÁFICO
            </p>

            <Link
              href="/proyectos"
              className="mt-8 inline-block border border-white px-6 py-2.5 text-xs tracking-[0.2em] transition hover:bg-white hover:text-black md:mt-12 md:px-8 md:py-3 md:text-sm"
            >
              VER PROYECTOS
            </Link>

{/* LOGO MÓVIL */}
<div className="absolute left-6 top-[67%] md:hidden">
  <Image
    src="/logos/logo_andres.svg"
    alt="Logo Andrés Monsalve"
    width={105}
    height={60}
    unoptimized
    className="h-auto w-[72px]"
  />
</div>

{/* LOGO COMPUTADOR */}
<div className="mt-4 hidden md:block">
  <Image
    src="/logos/logo_andres.svg"
    alt="Logo Andrés Monsalve"
    width={105}
    height={60}
    unoptimized
    className="h-auto w-[105px]"
  />
</div>
          </div>
        </div>

{/* PARTE INFERIOR */}
<div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

<p className="max-w-[180px] text-[10px] leading-4 tracking-[0.04em] text-zinc-400 md:max-w-none md:whitespace-nowrap">
  Diseño identidades y experiencias visuales que conectan marcas,
  ideas y personas.
</p>

          <div className="flex gap-8 text-xs tracking-[0.2em] text-zinc-200 md:text-sm ml-10 md:ml-0">
            <Link href="/sobre-mi" className="transition hover:text-white">
              SOBRE MÍ
            </Link>

            <Link href="/contacto" className="transition hover:text-white">
              CONTACTO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}