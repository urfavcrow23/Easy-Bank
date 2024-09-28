import Button from "../components/Button.jsx";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "adsasdasd" } },
};
const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "md",
};
export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
};
