import classes from './Terminal.module.scss';
import { TitleBar, Window } from './components';

export default function Terminal() {
  return /* HTML */ `
    <div class=${classes.wrapper} id="terminal">${TitleBar()} ${Window()}</div>
  `;
}
