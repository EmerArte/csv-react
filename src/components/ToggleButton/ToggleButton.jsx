import { Switch } from "@material-tailwind/react";
 
const ToggleButton = ({...props}) => {
  return (
    <Switch
      ripple={false}
      className="h-full w-full bg-primary checked:bg-primary"
      disabled={false}
      containerProps={{
        className: "w-11 h-6 ",
      }}
      labelProps={{
        className: "text-white",
      }}
      circleProps={{
        className: "before:hidden bg-[#1D252D] left-0.5 border-none",
      }}
      {...props}
    />
  );
}
export default ToggleButton;
