export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-900/10 bg-white/85 px-4 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900 bg-slate-900 text-sm font-bold text-white">
            Q
          </div>

          <div className="leading-none">
            <p className="text-lg font-bold tracking-tight text-slate-900">
              Qiknest
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 md:flex">
          <a
            href="#producto"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Producto
          </a>
          <a
            href="#soluciones"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Soluciones
          </a>
          <a
            href="#modulos"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Módulos
          </a>
          <a
            href="#acerca"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Acerca
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#demo"
            className="inline-flex h-11 items-center rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Ver demo
          </a>

          <a
            href="#waitlist"
            className="inline-flex h-11 items-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Solicitar acceso
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 md:hidden"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
