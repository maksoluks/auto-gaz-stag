import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { BrandPhoto } from "@/lib/brands";

type Props = {
  photos: BrandPhoto[];
  brandName: string;
};

export function BrandGallery({ photos, brandName }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, photos.length]);

  if (photos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
        <p className="text-base font-medium text-foreground">
          Wkrótce dodamy realizacje dla marki {brandName}.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Chcesz zobaczyć zdjęcia montażu w Twoim modelu? Zadzwoń:{" "}
          <a href="tel:+48609258834" className="font-semibold text-primary hover:underline">
            609 258 834
          </a>
        </p>
      </div>
    );
  }

  const current = openIdx !== null ? photos[openIdx] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((p, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Powiększ zdjęcie: ${p.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {p.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left">
                  <p className="text-xs font-medium text-white">{p.caption}</p>
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>

      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx(null);
            }}
            aria-label="Zamknij"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
                }}
                aria-label="Poprzednie zdjęcie"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx((i) => (i === null ? i : (i + 1) % photos.length));
                }}
                aria-label="Następne zdjęcie"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
            {current.caption && (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {current.caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
