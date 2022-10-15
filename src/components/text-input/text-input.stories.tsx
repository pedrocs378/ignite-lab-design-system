import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput, TextInputInputProps } from './text-input';

export default {
  title: "Components/TextInput",
  component: TextInput.Input,
  args: {
    placeholder: 'Type your e-mail address'
  },
  argTypes: {},
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {
  decorators: [
    (Story) => {
      return (
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          {Story()}
        </TextInput.Root>
      )
    }
  ] 
};

export const WithoutIcon: StoryObj<TextInputInputProps> = {
  decorators: [
    (Story: any) => {
      Story.displayName = 'TextInput.Input'

      return (
        <TextInput.Root>
          <Story />
        </TextInput.Root>
      )
    }
  ]
};
