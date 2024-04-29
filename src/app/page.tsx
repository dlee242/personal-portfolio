import Avatar from "./components/avatar";
import Hero from "./components/hero";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <main className="lg:flex items-center justify-center">
          <Avatar/> 
          <Hero/>
    </main>
  );
}
