import Link from "next/link";

const NotFoundContainer = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center text-white">
        Uh oh! 404 Not Found
      </h1>
      <p className="text-center text-white">
        The page you are looking for does not exist
      </p>
      <Link
        href={"/"}
        className="bg-[#F8EDE3] text-[#798777] px-4 py-2 rounded-lg mt-4"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundContainer;
