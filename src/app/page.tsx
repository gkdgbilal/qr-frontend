/* eslint-disable max-len */
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Input placeholder="merhabalar" className="w-32 h-9 m-4" /> */}
      <Image
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background Image"
        fill
        objectFit="contain"
        className="-z-10 blur-sm"
      />
    </div>
  );
}
