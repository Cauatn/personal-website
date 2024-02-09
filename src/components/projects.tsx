import CardComponent from "./project-card";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full border-t border-gray-200 dark:border-gray-800 h-screen"
    >
      <section className="container md:py-8 px-4 md:px-6">
        <div className="grid gap-4 md:gap-8 lg:gap-12">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Projetos
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-1">
              Alguns dos projetos que estou trabalhando ultimamente.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-10">
            <CardComponent
              title={"Scasys"}
              tec={"Typescript"}
              color={"text-blue-800"}
              repo="scasys"
            />
            <CardComponent
              title={"Node-Polls"}
              tec={"Prisma"}
              repo="nlw-node"
              color={"text-[#0c344b]"}
            />

            <CardComponent
              title={"EvoGym"}
              color={"text-blue-800"}
              tec={"Typescript"}
              repo="Evogym"
            />
            <CardComponent
              title={" SqLite-task-Manager-App "}
              tec={"Dart"}
              color={"text-cyan-500"}
              repo={"SqLite-task-Manager-App"}
            />

            <CardComponent
              title={"Apeperia"}
              color={"text-[#e34c26]"}
              tec={"Html"}
              repo="apeperia"
              description="A beautiful "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
