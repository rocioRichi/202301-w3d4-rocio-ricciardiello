import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Footer } from "../footer/footer";

import "./App.css";
import AppRouter from "../app.router/app.router";
import Keyboard from "../../../feature/keyboard/keyboard";
import Actions from "../../../feature/actions/actions";

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: "Inicio", path: "/home" },
  { label: "Tareas", path: "/tasks" },
  { label: "Acerca de", path: "/about" },
];

export function App() {
  return (
    <div className="App">
      <Keyboard />
      <Actions />
    </div>
  );
}
