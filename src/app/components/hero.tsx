import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex items-center lg:min-h-screen">
        <div className="hero">
          <div className="hero-content flex-col">
            <div>
              <h2 className="text-5xl font-bold">Hi, I&apos;m</h2>
              <h1 className="text-7xl font-bold py-2">Doug</h1> 
              <h2 className="text-5xl py-2">Software Engineer</h2>
              <p className="text-xl py-10">
                Welcome to my page. Get to know more about me and the work
                that I do.
              </p>
              <Link className="btn btn-primary" href={"/career"}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
