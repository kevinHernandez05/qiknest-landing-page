export default function Hero() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Negocios con más control, menos caos
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Convierte tu operación en un sistema claro,{" "}
            <span className="text-slate-500">rentable y escalable</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Qiknest centraliza métricas, automatizaciones y procesos para que tu
            negocio crezca con estructura, no con más estrés.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Solicitar acceso
            </a>

            <a
              href="#producto"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver lo que estamos construyendo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Métricas en tiempo real
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Automatización operativa
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
              Visibilidad financiera
            </span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-6 text-slate-500">
            Diseñado para negocios que ya venden, pero necesitan orden,
            seguimiento y sistemas para seguir creciendo sin depender de una sola persona.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[36px] border border-slate-200 bg-[#f8f8f6] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Ingresos del mes</p>
                    <h3 className="mt-2 text-3xl font-semibold text-slate-950">
                      $48,240
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900">
                    ↗
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Última actualización</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Hoy, 9:42 AM
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Procesos automatizados</p>
                <h3 className="mt-2 text-3xl font-semibold text-slate-950">12</h3>

                <div className="mt-6 space-y-3">
                  <div className="rounded-[22px] bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    Reportes semanales
                  </div>
                  <div className="rounded-[22px] bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    Seguimiento de métricas
                  </div>
                  <div className="rounded-[22px] bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    Alertas operativas
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[28px] border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Visibilidad del negocio</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    Todo más claro, en un solo lugar
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  Pipeline saludable
                </div>
              </div>

              <div className="mt-6 flex h-52 items-end gap-3">
                <div className="w-full rounded-t-[18px] bg-slate-200" style={{ height: "36%" }} />
                <div className="w-full rounded-t-[18px] bg-slate-300" style={{ height: "52%" }} />
                <div className="w-full rounded-t-[18px] bg-slate-400" style={{ height: "46%" }} />
                <div className="w-full rounded-t-[18px] bg-slate-500" style={{ height: "68%" }} />
                <div className="w-full rounded-t-[18px] bg-slate-700" style={{ height: "74%" }} />
                <div className="w-full rounded-t-[18px] bg-slate-900" style={{ height: "88%" }} />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Ventas
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  +18.4%
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Operación
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  Centralizada
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Tiempo
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  +12 hrs/mes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}