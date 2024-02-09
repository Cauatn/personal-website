import Header from "@/components/header";
import Main from "@/components/main";
import Projects from "@/components/projects";

export default function Root() {
  return (
    <div className="w-full h-full flex flex-col lg:space-y-0">
      <div className="lg:h-screen">
        <Header />
        <Main />
      </div>
      <Projects />
    </div>
  );
}
