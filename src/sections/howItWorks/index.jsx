export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Conectas tu operación",
      description:
        "Empieza a registrar ventas, métricas o información clave de tu negocio en un solo lugar.",
    },
    {
      step: "02",
      title: "Centralizas y organizas",
      description:
        "Qiknest reúne tu data y procesos para darte visibilidad clara sobre lo que está pasando.",
    },
    {
      step: "03",
      title: "Automatizas y escalas",
      description:
        "Activa reportes, seguimiento y automatizaciones para reducir carga operativa y crecer con estructura.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Cómo empezar
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            De operación caótica a sistema organizado en pocos pasos.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Qiknest está diseñado para integrarse a tu negocio sin fricción. En poco tiempo puedes pasar de tener información dispersa a operar con claridad.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((item, index) => (
            <article
              key={item.step}
              className={`rounded-[30px] border p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] ${
                index === 1
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white border-slate-200"
              }`}
            >
              <div
                className={`text-sm font-medium ${
                  index === 1 ? "text-white/60" : "text-slate-400"
                }`}
              >
                {item.step}
              </div>

              <h3
                className={`mt-4 text-xl font-semibold ${
                  index === 1 ? "text-white" : "text-slate-950"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  index === 1 ? "text-white/70" : "text-slate-600"
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