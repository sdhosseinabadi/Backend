import Datas from "../pages/api/codeofconductdData";
import { useState, React } from "react";

const Content = () => {
  return (
    <>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold text-black-100">
            <p className="dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0 ">
              Code of Conduct
            </p>
          </div>
        </div>
        {Datas.filter((data) => {
          return data;
        }).map((data, j) => {
          return (
            <div className="container" key={j}>
              <div className="flex flex-col md:grid grid-cols-13 text-gray-50">
                <div className="flex md:contents">
                  <div className="list relative mb-10">
                    <span className="absolute z-[1] bg-code_of_conduct-1 px-7 py-2 rounded-full font-serif text-xl">
                      {j + 1}
                    </span>
                    <h3 className="relative mt-5 ml-5 bg-orange-100 text-black dark:bg-code_of_conduct-0 dark:text-white shadow-xl rounded-lg px-5 py-8 font-serif text-xl">
                      {data.head}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Content;