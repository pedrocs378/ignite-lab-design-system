import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/button/button";
import { Checkbox } from "./components/checkbox/checkbox";

import { Heading } from "./components/heading/heading";
import { Logo } from "./components/logo";
import { TextInput } from "./components/text-input/text-input";
import { Text } from "./components/text/text";

import "./styles/global.css";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>

        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input id="email" type="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input id="password" type="password" placeholder="*******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm" className="underline text-gray-400 hover:text-gray-200">
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm" className="underline text-gray-400 hover:text-gray-200">
          <a href="">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
