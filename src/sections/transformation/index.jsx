export default function Transformation() {
  const items = [
    {
      title: "Claridad financiera",
      description:
        "Entiende mejor qué está entrando, qué está saliendo y qué parte del negocio realmente está generando valor.",
    },
    {
      title: "Operación centralizada",
      description:
        "Reúne métricas, procesos y seguimiento en un solo lugar para reducir fricción y trabajar con más orden.",
    },
    {
      title: "Seguimiento automático",
      description:
        "Deja de perseguir información manualmente. Automatiza reportes, visibilidad y señales importantes del negocio.",
    },
    {
      title: "Escalabilidad real",
      description:
        "Empieza a construir un negocio que puede crecer con estructura, sin depender de ti para cada decisión diaria.",
    },
  ];

  return (
    <section
      id="soluciones"
      className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Lo que cambia con Qiknest
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Organiza tu negocio en un sistema que sí puede crecer.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Qiknest reúne métricas, procesos y automatizaciones en un solo lugar
            para darte claridad operativa, seguimiento real y más control sobre
            cómo crece tu negocio.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[28px] border border-slate-200 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] ${
                index === 0 || index === 3 ? "bg-slate-900 text-white" : "bg-white"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold ${
                  index === 0 || index === 3
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-slate-300 bg-slate-50 text-slate-900"
                }`}
              >
                0{index + 1}
              </div>

              <h3
                className={`mt-5 text-xl font-semibold ${
                  index === 0 || index === 3 ? "text-white" : "text-slate-950"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  index === 0 || index === 3 ? "text-white/75" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}