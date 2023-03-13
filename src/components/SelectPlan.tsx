import { FormWrapper } from "./FormWrapper";
import Plan from "./Plan";

const SelectPlan = () => {
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
          name="Arcade"
          priceYearly={120}
        />
        <Plan
          icon="./icon-pro.svg"
          months="2"
          name="Arcade"
          priceYearly={150}
        />
      </div>
      <div className="flex gap-3 mt-5 items-center justify-center">
        <p className="text-base text-MarineBlue">Monthly</p>
        <button className="text-base">toggle</button>
        <p className="text-base text-CoolGray">Yearly</p>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
