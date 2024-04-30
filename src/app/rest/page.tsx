"use client";

import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <Button
        onClick={() => alert("test")}
        className="bg-red-500 text-white border-none hover:bg-red-600"
      >
        test
      </Button>

      <Button onClick={() => alert("test")} variant="danger">
        test
      </Button>
      <Button onClick={() => alert("test")} variant="danger" size="lg">
        test
      </Button>
      <Button onClick={() => alert("test")} variant="danger" size="md">
        test
      </Button>
    </div>
  );
};

export default page;
