import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Input placeholder="merhabalar" className="w-32 h-9 m-4" /> */}
      <Image
        src="https://i.pinimg.com/564x/22/91/d7/2291d743b385d3fd6052bf2ae2551237.jpg"
        alt="Vercel Logo"
        width={500}
        height={500}
        objectFit="contain"
      />
    </div>
  );
}
