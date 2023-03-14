import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  details: string;
  children: ReactNode;
};

export function FormWrapper({ title, children, details }: FormWrapperProps) {
  return (
    <div className="px-2">
      <h2 className="text-3xl text-MarineBlue">{title}</h2>
      <p className="text-lg font-normal text-CoolGray w-4/5">{details}</p>
      <div className="flex flex-col w-full mt-5 gap-2">{children}</div>
    </div>
  );
}
