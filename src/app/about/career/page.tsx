import Timeline from "@/app/components/timeline";
import Tab from "../../components/tab";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-xl font-bold">About Me</h1>
        <div className="divider"></div>
        <Tab/>
        <Timeline/>
      </div>
    </main>
  );
}
