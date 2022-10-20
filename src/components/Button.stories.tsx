import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

//configuração global do Heading
export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {},
} as Meta<ButtonProps>;

// uma variante que não está default (confuguração de variações do Heading)
export const Default: StoryObj<ButtonProps> = {};
