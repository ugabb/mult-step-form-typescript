import { useMultiStepForm } from "../hooks/useMultiStepForm"
import { FormWrapper } from "./FormWrapper"


type Props = {}

const FinishinpUp = (props: Props) => {


  return (
    <FormWrapper title="Finishing up" details="Double-check everything looks OK before confirming">
        <div className="flex justify-between items-center border-b border-LightGray px-5 py-2">
            <div>
                <h3 className="text-lg">Option(Time)</h3>
                <button className="text-base underline text-CoolGray">Change</button>
            </div>
            <p className="text-lg">$90/yr</p>
        </div>

        <div className="flex justify-between px-5">
            <p className="text-CoolGray text-lg font-normal">Online service</p>
            <p className="text-lg">+$10/yr</p>
        </div>

        <div className="flex justify-between px-5">
            <p className="text-CoolGray text-lg font-normal">Larger storage</p>
            <p className="text-lg">+$20/yr</p>
        </div>

        <div className="flex justify-between mt-10 px-5">
            <p className="text-CoolGray text-lg font-normal">Total(per month)</p>
            <p className="text-lg text-PurplishBlue">+$120/yr</p>
        </div>
    </FormWrapper>
  )
}

export default FinishinpUp