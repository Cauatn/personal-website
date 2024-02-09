/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fTRgTcANdvk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

type CardProps = {
  title: string;
  description?: string;
  tec: string;
  color?: string;
  repo: string;
};

export default function CardComponent({
  title,
  description,
  tec,
  repo,
  color = "bg-black-500",
}: CardProps) {
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [lastDescription, setDescription] = useState<string | null>(null);
  const url = "https://github.com/Cauatn/" + repo;

  const getLastUpdate = async (repo: string) => {
    const response = await axios.get(
      `https://api.github.com/repos/Cauatn/${repo}`
    );

    const date = new Date(response.data.updated_at);
    const formattedDate = `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;

    setDescription(response.data.description);
    setLastUpdate(formattedDate);
  };

  useEffect(() => {
    if (lastUpdate === null) {
      getLastUpdate(repo);
    }
  }, [lastUpdate]);

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg border shadow-sm">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription>
          {description}
          {lastDescription ? `${lastDescription}` : "Loading..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 inline-flex justify-between border-t w-full">
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex items-center">
            <CircleDotIcon className={`h-3 w-3 mr-1 fill-current ${color}`} />
            {tec}
          </div>
          <div className="flex items-center">
            <StarIcon className="h-3 w-3 mr-1 text-yellow-300 fill-yellow-300" />
            20k
          </div>

          <div className="text-sm">
            {lastUpdate ? `Updated ${lastUpdate}` : "Loading..."}
          </div>
        </div>
        <a href={url}>
          <Button size="sm" variant="outline" className="">
            View
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}

function CircleDotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
