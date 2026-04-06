export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white"></div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    Qiknest
                  </h3>
                  <p className="text-sm text-slate-500">Working by Kevo</p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                Sistema modular para negocios que quieren crecer con más
                estructura, visibilidad y control operativo.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                Navegación
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="#producto" className="transition hover:text-slate-950">
                  Producto
                </a>
                <a
                  href="#soluciones"
                  className="transition hover:text-slate-950"
                >
                  Soluciones
                </a>
                <a href="#modulos" className="transition hover:text-slate-950">
                  Módulos
                </a>
                <a href="#acerca" className="transition hover:text-slate-950">
                  Acerca
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                Acceso
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="#waitlist" className="transition hover:text-slate-950">
                  Solicitar acceso
                </a>
                <a href="#demo" className="transition hover:text-slate-950">
                  Ver demo
                </a>
                <a
                  href="mailto:contact@wbkd.com"
                  className="transition hover:text-slate-950"
                >
                  contact@wbkd.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 - Qiknest · Working by Kevo. All rights reserved.</p>
              <p>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
