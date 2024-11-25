import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";

export function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem
            isSelected={props.difficulty === difficulty}
            onClick={props.onItemClick}
            difficulty={difficulty}
          />
        );
      })}
    </div>
  );
}
