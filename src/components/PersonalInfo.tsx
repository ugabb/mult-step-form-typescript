import { FormWrapper } from "./FormWrapper";

type UserData = {
  name: string;
  email: string;
  phone: string;
};

// this type will add the UserData type + PersonalInfoProps type(updateFields propriety)
type PersonalInfoProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const PersonalInfo = ({ name, email, phone, updateFields }: PersonalInfoProps) => {
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
        value={name}
        onChange={(e) => updateFields({name: e.target.value})}
      />

      <label className="text-base font-semibold text-MarineBlue ">
        Email Address
      </label>
      <input
        className="border border-CoolGray py-2 text-start pl-5 font-semibold text-base rounded-md"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        required
        value={email}
        onChange={(e) => updateFields({email: e.target.value})}
      />

      <label className="text-base font-semibold text-MarineBlue ">
        Phone Number
      </label>
      <input
        className="border border-CoolGray py-2 text-start pl-5 font-semibold text-base rounded-md"
        placeholder="e.g. +1 234 567 890"
        type="text"
        required
        value={phone}
        onChange={(e) => updateFields({phone: e.target.value})}
      />
    </FormWrapper>
  );
};

export default PersonalInfo;
