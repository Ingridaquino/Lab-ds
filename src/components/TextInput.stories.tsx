import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

//configuração global do Heading
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon> 
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />

    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<TextInputRootProps>;

// uma variante que não está default (confuguração de variações do Heading)
export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  },
};
