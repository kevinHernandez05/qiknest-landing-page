export default function FinalCTA() {
  return (
    <section
      id="waitlist"
      className="px-4 pb-20 pt-16 sm:px-6 lg:px-10 lg:pb-28 lg:pt-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-14">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Deja de trabajar para tu negocio.
            <br />
            Empieza a construir un sistema que funcione sin ti.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Qiknest está abriendo acceso anticipado para negocios que quieren crecer con estructura, visibilidad y control.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#form"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-8 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Solicitar acceso
            </a>

            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver demo
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Acceso limitado · Sin compromiso · Construido junto a negocios reales
          </p>
        </div>
      </div>
    </section>
  );
}