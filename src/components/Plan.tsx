import { FormData } from "../App";

type Plan = FormData & {
  icon: string;
  name: string;
  priceYearly: number;
  priceMonth: number;
  months: string;
  planToggle: boolean;
  updateFields: (item: Partial<FormData>) => void;
};

const Plan = ({icon, name, priceYearly, priceMonth, months, planToggle, plano, updateFields }: Plan) => {
  return (
    <div className="flex items-start gap-5 border border-CoolGray hover:border-2 hover:border-MarineBlue rounded p-3">
      <img src={icon} alt={name} />
      <div>
        <h3 className="text-lg text-MarineBlue">{name}</h3>
        <label className="text-base text-CoolGray font-normal">
          ${planToggle ? priceMonth + "/mo" : priceYearly + "/yr"}
          {planToggle ? (
            ""
          ) : (
            <p className="text-base text-MarineBlue font-normal ">
              {months} months free
            </p>
          )}
        </label>
        <input type="radio" name="plano" checked={plano === name} onChange={e => updateFields({plano: "Arcade"})} />
      </div>
    </div>
  );
};

export default Plan;
