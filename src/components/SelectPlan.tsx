import {useState} from 'react'

import { FormWrapper } from "./FormWrapper";
import {BsToggleOn,BsToggleOff} from 'react-icons/bs'
import Plan from "./Plan";

const SelectPlan = () => {
  // Yearly by default (false)
  const [plan, setPlan] = useState<boolean>(false) 

  function togglePlan(){
    setPlan(prev => !prev)
  }

  return (
    <FormWrapper
      title="Select your plan"
      details="you have the option of monthly or yearly billing."
    >
      <div className="flex flex-col gap-3">
        <Plan
          icon="./icon-arcade.svg"
          months="2"
          name="Arcade"
          priceYearly={90}
        />
        <Plan
          icon="./icon-advanced.svg"
          months="2"
          name="Advanced"
          priceYearly={120}
        />
        <Plan
          icon="./icon-pro.svg"
          months="2"
          name="Pro"
          priceYearly={150}
        />
      </div>
      <div className="flex gap-5 mt-5 items-center justify-center">
        <p className="text-base text-MarineBlue">Monthly</p>
        <button type='button' onClick={togglePlan} className="text-base"><BsToggleOn className={`text-3xl text-MarineBlue  ${plan ? "rotate-180" : ""}`} /></button>
        <p className="text-base text-CoolGray">Yearly</p>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
