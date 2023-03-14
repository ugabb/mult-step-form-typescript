import { FormEvent, useState } from "react";

import { NavLink } from "react-router-dom";

//Components
import PersonalInfo from "./components/PersonalInfo";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import SelectPlan from "./components/SelectPlan";
import PickAdd from "./components/PickAdd";
import FinishinpUp from "./components/FinishinpUp";
import ConfirmPage from "./components/ConfirmPage";

type Plan = {
  name: string;
  type: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: { name: "", type: "" },
};

export function App() {
  const [data, setData] = useState(initialData);

  function updateFields(fields: Partial<FormData>){
    setData(prev => {
      return {...prev, ...fields}
    })
  }

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
    <PersonalInfo name={data.name} email={data.email} phone={data.phone} updateFields={updateFields} />,
    <SelectPlan />,
    <PickAdd />,
    <FinishinpUp />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Succeful complete");
  }

  return (
    <form onSubmit={onSubmit} className="bg-LightBlue h-screen flex flex-col justify-center">
      <img
        className="absolute top-0 z-0 w-full"
        src="./bg-sidebar-mobile.svg"
        alt=""
      />

      {/* Navigation page */}
      <ul className="absolute top-5 flex justify-center items-center gap-5 w-full mx-auto">
        <li
          className={`text-2xl text-center font-bold border border-[#fff] w-10 h-10 rounded-full ${
            currentStepIndex === 0
              ? "bg-LightBlue text-MarineBlue"
              : "transparent text-[#fff]"
          }`}
        >
          1
        </li>
        <li
          className={`text-2xl text-center font-bold border border-[#fff] w-10 h-10 rounded-full ${
            currentStepIndex === 1
              ? "bg-LightBlue text-MarineBlue"
              : "transparent text-[#fff]"
          }`}
        >
          2
        </li>
        <li
          className={`text-2xl text-center font-bold border border-[#fff] w-10 h-10 rounded-full ${
            currentStepIndex === 2
              ? "bg-LightBlue text-MarineBlue"
              : "transparent text-[#fff]"
          }`}
        >
          3
        </li>
        <li
          className={`text-2xl text-center font-bold border border-[#fff] w-10 h-10 rounded-full ${
            currentStepIndex === 3
              ? "bg-LightBlue text-MarineBlue"
              : "transparent text-[#fff]"
          }`}
        >
          4
        </li>
      </ul>

      {/* Form */}
      <div
        className="absolute top-20 bg-[#fff] m-3 py-10 px-3 text-2xl font-bold rounded-xl shadow-xl"
      >
        <div>{step}</div>
      </div>

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

        {isLastStep ? (
          <button
            type="button"
            className={`${
              isLastStep ? "bg-PurplishBlue" : "bg-MarineBlue"
            } text-[#fff] font-semibold py-2 px-4 rounded flex`}
          >
            Confirm
          </button>
        ) : (
          <button
            type="submit"
            className={`${
              isLastStep ? "bg-PurplishBlue" : "bg-MarineBlue"
            } text-[#fff] font-semibold py-2 px-4 rounded flex`}
          >
            Next Step
          </button>
        )}
      </div>
    </form>
  );
}

export default App;
