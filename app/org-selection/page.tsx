"use client";
import { CreateOrganization } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CreateOrganization />;
    </div>
  );
};

export default Page;
