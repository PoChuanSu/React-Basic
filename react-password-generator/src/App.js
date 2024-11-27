import { PasswordGeneratorCard } from './components/PasswordGeneratorCard/PasswordGeneratorCard';
import { PasswordGeneratorBody } from './components/PasswordGeneratorBody/PasswordGeneratorBody';
import s from "./style.module.css";
function App() { 
  return <div className={s.root}>
    <PasswordGeneratorCard/>
  </div>;
}

export default App;