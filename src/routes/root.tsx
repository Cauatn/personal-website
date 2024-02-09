import Header from "@/components/header";
import Main from "@/components/main";
import Projects from "@/components/projects";

export default function Root() {
  return (
    <div className="w-full">
      <div className="h-screen">
        <Header />
        <Main />
      </div>
      <Projects />
    </div>
  );
}
