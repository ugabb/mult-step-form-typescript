import { useState } from "react";

import { BsCheck } from "react-icons/bs";

type Pick = {
  price: number;
  title: string;
  subTitle: string;
};

const PickOptions = ({ price, title, subTitle }: Pick) => {
  const [addOns, setAddOns] = useState<boolean>(false);

  function toggleAddOns(){
    setAddOns(prev => !prev)
  }

  return (
    <div onClick={toggleAddOns} className="flex justify-between items-center  border border-CoolGray hover:border-2 hover:border-PurplishBlue rounded-lg p-3 ">
      <div className={`flex justify-center items-center rounded w-6 h-6 ${addOns ? "bg-PurplishBlue" : "transparent"} text-[#fff] border border-CoolGray`}>
        {addOns ? <BsCheck /> : <BsCheck className="hidden" />}
      </div>
      <div className="">
        <p className="text-base font-bold">{title}</p>
        <p className="text-sm font-normal text-CoolGray">{subTitle}</p>
      </div>
      <p className="text-base font-semibold text-PurplishBlue">+${price}/yr</p>
    </div>
  );
};

export default PickOptions;
