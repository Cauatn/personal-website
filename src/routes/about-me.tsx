export default function AboutMe() {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-800 h-screen">
      <section className="container md:py-4 px-4 md:px-6">
        <div className="grid gap-4 md:gap-8 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Sobre mim
            </h2>
            <p className="max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Sou um engenheiro de frontend com uma paixão por criar interfaces
              de usuário interessantes e acessíveis. Adoro a combinação de
              criatividade e lógica que vem com o desenvolvimento web. Quando
              não estou codificando, você pode me encontrar explorando algum
              lugar por ai.
            </p>
          </div>
          <div className="grid gap-4 md:gap-8 lg:gap-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Habilidades</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                JavaScript, React, Jsx, Next.js, Tailwind CSS, Node.Js
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Frontend Developer at Scasys (2024-Present)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
