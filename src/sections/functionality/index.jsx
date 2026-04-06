export default function Functionality() {
  const painPoints = [
    {
      title: "Operación dependiente",
      description:
        "Sigues atrapado en el día a día resolviendo cosas que tu negocio debería manejar con sistemas.",
    },
    {
      title: "Poca claridad financiera",
      description:
        "Facturas, cobras y vendes… pero no siempre sabes con precisión cuánto ganas realmente.",
    },
    {
      title: "Tu equipo depende de ti",
      description:
        "Si no estás presente, las decisiones se frenan y la ejecución pierde consistencia.",
    },
    {
      title: "Crecer se siente pesado",
      description:
        "En lugar de libertad, el crecimiento trae más presión, más caos y más carga operativa.",
    },
  ];

  return (
    <section
      id="producto"
      className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            El problema no es vender más
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Facturar más no significa que tu negocio esté realmente escalando.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Si cada vez que el negocio crece tú tienes que trabajar más, apagar
            más fuegos y estar encima de todo, entonces no estás escalando.
            Solo estás cargando más peso.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-lg">
                ✦
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}