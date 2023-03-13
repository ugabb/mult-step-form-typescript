
import { FormWrapper } from "./FormWrapper";

const PersonalInfo = () => {
  return (
    <FormWrapper
      title="Personal Info"
      details="Please provide your name, email address, and phone number."
    >
      <label className="text-base font-semibold text-MarineBlue ">Name</label>
      <input
        className="border border-CoolGray py-2 text-start pl-5 font-semibold text-base rounded-md"
        placeholder="e.g Stephen King"
        type="text"
        required
      />

      <label className="text-base font-semibold text-MarineBlue ">
        Email Address
      </label>
      <input
        className="border border-CoolGray py-2 text-start pl-5 font-semibold text-base rounded-md"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        required
      />

      <label className="text-base font-semibold text-MarineBlue ">
        Phone Number
      </label>
      <input
        className="border border-CoolGray py-2 text-start pl-5 font-semibold text-base rounded-md"
        placeholder="e.g. +1 234 567 890"
        type="text"
        required
      />
    </FormWrapper>
  );
};

export default PersonalInfo;
