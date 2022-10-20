import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

//configuração global do Heading
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm"> Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>;

// uma variante que não está default (confuguração de variações do Heading)
export const Default: StoryObj<CheckboxProps> = {};