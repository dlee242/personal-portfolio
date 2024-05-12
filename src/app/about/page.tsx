import Carousel from "../components/carousel";
import Tab from "../components/tab";
import Timeline from "../components/timeline";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-7xl font-bold">About Me</h1>
        <div className="divider"></div>
        <Tab/>
      </div>
    </main>
  );
}
