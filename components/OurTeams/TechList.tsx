import React from "react";

const TechList = ({ data, title }: { data: string[]; title: string }) => {
  return (
    <div className="bg-red h-auto w-full rounded-xl bg-[#4841ff0d] p-14">
      <p className="text-2xl font-medium text-main-blue">{title}</p>
      <div className="justify-left mt-6 flex flex-wrap gap-9">
        {data &&
          data.map((i, j) => (
            <div
              key={i}
              className="flex h-[84px] w-[84px] items-center justify-center rounded-2xl bg-white p-1 text-center"
            >
              <p className=" text-xs font-medium text-dark">{data[j]}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechList;
