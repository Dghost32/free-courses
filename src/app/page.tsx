import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-700">Bienvenido a Cursos Gratis</h1>
        <p className="mb-6 text-lg text-gray-700">
          Descubre una amplia variedad de cursos gratuitos para potenciar tus conocimientos y habilidades. ¡Aprende a tu
          ritmo y sin costo!
        </p>
        <Link
          href="/dashboard"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Explorar Cursos
        </Link>
      </div>
    </main>
  );
}
