import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './text';

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Texto",
    size: "md",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    as: {
      control: "select",
      options: ["span", "p", "strong", "small", "i"],
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};
