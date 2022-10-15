import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './heading';

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading",
    size: "md",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", 'h6'],
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};
