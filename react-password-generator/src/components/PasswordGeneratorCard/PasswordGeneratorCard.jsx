import s from "./style.module.css";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";

export function PasswordGeneratorCard() {
  return (
    <div className={s.root}>
      <div className={s.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody />
      </div>
      <PasswordGeneratorFooter />
    </div>
  );
}
