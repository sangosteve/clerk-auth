import React, { ReactElement } from "react";
import { Input } from "../ui/input";

const ThirdStep = (): ReactElement => {
  return (
    <div className="flex flex-col items-start w-1/2">
      <p className="text-3xl text-gray-900 font-bold">
        What's the name of your company, workspace or team?
      </p>

      <Input className="my-10" placeholder="Ex. ABC Inc." />
    </div>
  );
};

export default ThirdStep;
