import classes from './Buttons.module.scss';
import minimizeUrl from './images/minimize.png';
import windowMaxUrl from './images/window-max.png';
import closeUrl from './images/close.png';

export default function Buttons() {
  return /* HTML */ `
    <div class=${classes.buttons}>
      <img
        class=${classes.button}
        src=${minimizeUrl}
        alt="minimize"
        id="minimize-terminal"
      />
      <img class=${classes.button} src=${windowMaxUrl} alt="maximize" />
      <img
        class=${classes.button}
        src=${closeUrl}
        alt="close"
        id="close-terminal"
      />
    </div>
  `;
}
