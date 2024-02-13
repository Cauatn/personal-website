import GithubBanner from "@/components/github-banner";
import { CodeIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="w-full backdrop-filter backdrop-blur-sm py-4 md:py-6">
      <nav className="container flex items-center justify-between px-4 md:px-6">
        <Link className="inline-flex items-center space-x-3" to={""}>
          <CodeIcon className="size-8" />
          <span className="font-bold text-2xl mb-0.5">Cauatn</span>
        </Link>
        <div className="inline-flex space-x-4">
          <Dialog>
            <DialogTrigger className="hidden lsm:inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
              Sobre mim
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Sobre mim
                </DialogTitle>
                <DialogDescription className="max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sou um engenheiro de frontend que ama criar interfaces de
                  usuário interessantes e acessíveis. <br />
                  Adoro a combinação de criatividade e lógica que vem com o
                  desenvolvimento web. <br />
                  Quando não estou codificando, você pode me encontrar
                  explorando algum lugar por ai.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <GithubBanner />
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border h-[40px] w-[1px]"
          >
            {""}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
