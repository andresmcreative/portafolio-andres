"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function VideoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const src = searchParams.get("src");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-5 py-5">
        <button
          onClick={() => router.back()}
          className="text-sm tracking-[0.2em] text-zinc-300 transition hover:text-white"
        >
          ← VOLVER
        </button>
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 pb-8">
        {src ? (
          <video
            src={src}
            controls
            autoPlay
            className="max-h-[80vh] max-w-full"
          />
        ) : (
          <p className="text-sm text-zinc-500">
            No se encontró el video.
          </p>
        )}
      </div>
    </main>
  );
}

export default function VideoPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          <p className="text-sm text-zinc-500">Cargando video...</p>
        </main>
      }
    >
      <VideoContent />
    </Suspense>
  );
}