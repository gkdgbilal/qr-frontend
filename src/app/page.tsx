import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Input placeholder="merhabalar" className="w-32 h-9 m-4" /> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center text-white">
          Welcome to Coffee Cafe
        </h1>
        <p className="text-center text-white">
          The best place to enjoy your coffee
        </p>
        <Link
          href={"/menu"}
          className="bg-[#F8EDE3] text-[#798777] px-4 py-2 rounded-lg mt-4"
        >
          Go to Menu
        </Link>
      </div>
    </div>
  );
}
