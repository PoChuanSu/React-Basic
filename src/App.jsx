import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  const [currentDifficulty, setCurrDifficulty] = useState("Insane");

  const onMenuListItemClick = (difficulty) => {
    setCurrDifficulty(difficulty);
  };

  return (
    <div>
      <h1>Select your React difficulty</h1>

      <div className={s.workspace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={onMenuListItemClick}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
