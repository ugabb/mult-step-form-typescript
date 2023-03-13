type Plan = {
  icon: string;
  name: string;
  priceYearly: number;
  months: string;
};

const Plan = ({ icon, name, priceYearly, months }: Plan) => {
  return (
    <div className="flex items-start gap-5 border border-CoolGray hover:border-2 hover:border-MarineBlue rounded p-3">
      <img src={icon} alt={name} />
      <div>
        <h3 className="text-lg text-MarineBlue">{name}</h3>
        <p className="text-base text-CoolGray font-normal">${priceYearly}/yr</p>
        <p className="text-base text-MarineBlue font-normal ">
          {months} months free
        </p>
      </div>
    </div>
  );
};

export default Plan;
