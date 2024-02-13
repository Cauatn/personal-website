import { ArrowRightIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import pdf from "@/assets/curriculum.pdf";

export default function CurriculumDialog() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
        Ver Curriculo
        <ArrowRightIcon className="w-4 h-4" />
      </DialogTrigger>
      <DialogContent className="top-[50%] flex items-center justify-center p-8 pt-9">
        <iframe src={pdf} width="640" height="480" />
      </DialogContent>
    </Dialog>
  );
}
