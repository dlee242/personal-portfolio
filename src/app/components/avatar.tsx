import Image from 'next/image';

export default function Avatar() {
  return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/headshot.jpg"
          className="rounded-full"
          width={350}
          height={350}
          alt="Picture of Doug"
        />
      </div>
  );
}
