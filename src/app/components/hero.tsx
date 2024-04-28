import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex items-center min-h-screen">
        <div className="avatar">
          <div className="rounded-full">
            <Image
              src="/Headshot.jpeg"
              className="max-w-sm rounded-lg"
              width={500}
              height={500}
              alt="Picture of Doug"
            />
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h2 className="text-5xl font-bold">Hi, I&apos;m</h2>
              <h1 className="text-7xl font-bold">Doug</h1>
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
