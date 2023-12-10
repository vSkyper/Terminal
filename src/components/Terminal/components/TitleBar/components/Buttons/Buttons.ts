import classes from './Buttons.module.scss';
import minimizeUrl from './images/minimize.png';
import windowMaxUrl from './images/window-max.png';
import closeUrl from './images/close.png';

export default class Buttons extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class=${classes.buttons}>
        <img
          class=${classes.button}
          src=${minimizeUrl}
          alt='minimize'
        />
        <img
          class=${classes.button}
          src=${windowMaxUrl}
          alt='maximize'
        />
        <img
          class=${classes.button}
          src=${closeUrl}
          alt='close'
        />
      </div>
    `;
  }
}
