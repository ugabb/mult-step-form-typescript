import { FormEvent, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import SelectPlan from "./components/SelectPlan";

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
    <SelectPlan />,
    <div>3</div>,
    <div>4</div>,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Succeful complete");
  }

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
      <form
        onSubmit={onSubmit}
        className="absolute top-20 bg-[#fff] m-3 py-10 px-3 text-2xl font-bold rounded-xl"
      >
        <div>{step}</div>
      </form>

      {/* NEXT AND BACK BUTTONS */}

      <div
        className={`absolute bottom-0 w-full flex ${
          isFirstStep ? "justify-end" : "justify-between"
        } p-5 bg-[#fff]`}
      >
        {!isFirstStep && (
          <button
            type="button"
            onClick={back}
            className="font-semibold text-CoolGray"
          >
            Go Back
          </button>
        )}

        <button
          type="button"
          onClick={next}
          className={`${
            isLastStep ? "bg-PurplishBlue" : "bg-MarineBlue"
          } text-[#fff] font-semibold py-2 px-4 rounded flex`}
        >
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </div>
    </div>
  );
}

export default App;
