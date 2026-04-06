export default function Modules() {
  const modules = [
    {
      name: "Metrics",
      status: "Activo",
      description:
        "Monitorea KPIs, ingresos, rendimiento y señales importantes del negocio en tiempo real.",
    },
    {
      name: "DataBridge",
      status: "Activo",
      description:
        "Conecta y transforma data de distintas fuentes para convertir archivos y reportes en decisiones útiles.",
    },
    {
      name: "POS",
      status: "En desarrollo",
      description:
        "Gestiona ventas, tickets, facturación y operación comercial desde un entorno pensado para negocios reales.",
    },
    {
      name: "Automations",
      status: "Próximamente",
      description:
        "Automatiza reportes, recordatorios, seguimientos y tareas repetitivas que hoy consumen tiempo operativo.",
    },
    {
      name: "Payments",
      status: "Próximamente",
      description:
        "Centraliza cobros y simplifica la relación entre ventas, facturación y flujo de ingresos.",
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Activo":
        return "border-emerald-200 bg-emerald-50 text-emerald-700";
      case "En desarrollo":
        return "border-amber-200 bg-amber-50 text-amber-700";
      default:
        return "border-slate-200 bg-slate-100 text-slate-600";
    }
  };

  return (
    <section
      id="modulos"
      className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Un ecosistema para operar mejor
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Módulos diseñados para convertir tu negocio en un sistema.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Qiknest se construye como una suite modular. Cada módulo resuelve
            una parte clave de la operación, pero juntos crean una base más
            clara, rentable y escalable para tu negocio.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module, index) => (
            <article
              key={module.name}
              className={`rounded-[30px] border p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold ${
                    index === 0
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-slate-300 bg-slate-50 text-slate-900"
                  }`}
                >
                  {module.name.slice(0, 2).toUpperCase()}
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    index === 0
                      ? "border-white/15 bg-white/10 text-white/80"
                      : getStatusClasses(module.status)
                  }`}
                >
                  {module.status}
                </span>
              </div>

              <h3
                className={`mt-6 text-2xl font-semibold ${
                  index === 0 ? "text-white" : "text-slate-950"
                }`}
              >
                {module.name}
              </h3>

              <p
                className={`mt-4 text-sm leading-6 ${
                  index === 0 ? "text-white/75" : "text-slate-600"
                }`}
              >
                {module.description}
              </p>

              <div
                className={`mt-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                Ver módulo
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}