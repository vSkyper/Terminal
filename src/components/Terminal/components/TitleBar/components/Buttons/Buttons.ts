import classes from './Buttons.module.scss';
import minimizeUrl from './images/minimize.png';
import terminalMaxUrl from './images/window-max.png';
import terminalMinUrl from './images/window-min.png';
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
      <img
        class=${classes.button}
        src=${terminalMaxUrl}
        alt="terminalMax"
        id="terminal-max"
      />
      <img
        class="${classes.button}"
        src=${terminalMinUrl}
        alt="terminalMin"
        id="terminal-min"
      />
      <img
        class=${classes.button}
        src=${closeUrl}
        alt="close"
        id="close-terminal"
      />
    </div>
  `;
}
