import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
};

export function App() {
  const {
    back,
    currentStepIndex,
    goTo,
    isFirstStep,
    isLastStep,
    next,
    step,
    steps,
  } = useMultiStepForm([
    <PersonalInfo />,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
  ]);

  return (
    <div className="bg-LightBlue h-screen flex flex-col justify-center">
      <img
        className="absolute top-0 z-0"
        src="./bg-sidebar-mobile.svg"
        alt=""
      />

      {/* Navigation page */}
      <ul className="absolute top-5 flex justify-center items-center gap-5 w-full mx-auto">
        <li className="text-2xl text-[#fff] text-center font-bold border border-[#fff] w-10 h-10 rounded-full">
          1
        </li>
        <li className="text-2xl text-[#fff] text-center font-bold border border-[#fff] w-10 h-10 rounded-full">
          2
        </li>
        <li className="text-2xl text-[#fff] text-center font-bold border border-[#fff] w-10 h-10 rounded-full">
          3
        </li>
        <li className="text-2xl text-[#fff] text-center font-bold border border-[#fff] w-10 h-10 rounded-full">
          4
        </li>
      </ul>

      {/* Form */}
      <div className="absolute top-20 bg-[#fff] m-3 py-10 px-3 text-2xl font-bold rounded-xl">
        <PersonalInfo />
      </div>

      {/* NEXT AND BACK BUTTONS */}

      <div className="absolute bottom-0 w-full flex justify-between p-5 bg-[#fff]">
        <button className="font-semibold text-CoolGray">Go Back</button>
        <button className="bg-MarineBlue text-[#fff] font-semibold py-2 px-4 rounded">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;
