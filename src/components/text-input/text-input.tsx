import { InputHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

type TextInputRootProps = React.PropsWithChildren

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Input'

export type TextInputIconProps = React.PropsWithChildren

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent py-4 flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
      />
  );
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
