import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Main() {
  const dm = document.getElementById("projects");

  return (
    <div className="relative overflow-hidden">
      <div className="py-12 md:py-14 max-w-7xl mx-auto flex flex-col px-4 md:px-6">
        <div className="container md:gap-12 lg:gap-24 flex flex-row justify-between">
          <div className="flex flex-col min-[300px]:grid gap-4 md:gap-8 lg:gap-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Engenheiro de Software
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transformando ideais em experiências interativas. Interessado na
                junção entre design e código que o desenvolvimento Web traz.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to={""}
              >
                Ver currículo
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Button
                className="text-black  inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                onClick={() => {
                  dm?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projetos
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Profile Picture"
              className="rounded-full border overflow-hidden object-cover object-center w-40 h-40"
              height="200"
              src="https://github.com/Cauatn.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
        <div className="max-w-[600px]  space-y-1 justify-start px-4 md:px-8 pt-6">
          <h3 className="text-xl font-bold">Habilidades</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Node.Js, React, Next.js, Flutter, Prisma, JavaScript, Tailwind CSS.
          </p>
        </div>
        <div className="max-w-[600px] space-y-1 justify-start px-4 md:px-8 pt-6">
          <h3 className="text-xl font-bold">Educação</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Engenharia de computação, UNIVASF (2022 - Cursando)
          </p>
        </div>
      </div>
    </div>
  );
}
