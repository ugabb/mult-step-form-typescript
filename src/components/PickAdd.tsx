import { FormWrapper } from "./FormWrapper"
import PickOptions from "./PickOptions"


const PickAdd = () => {
  return (
    <FormWrapper title="Pick add-ons" details="Add-ons help enhance gaming experience.">
        <PickOptions
            title="Online service"
            price={10}
            subTitle="access to multiplayer games"
        />
        <PickOptions
            title="Larger storage"
            price={20}
            subTitle="Extra 1TB of cloud save"
        />
        <PickOptions
            title="Customizable profile"
            price={20}
            subTitle="Custom theme on your profile"
        />
    </FormWrapper>
  )
}

export default PickAdd