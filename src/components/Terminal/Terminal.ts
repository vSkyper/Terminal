import classes from './Terminal.module.scss';
import { TitleBar } from './components';

export default class Terminal extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class=${classes.wrapper}>
        <title-bar--component />
      </div>
    `;

    customElements.define('title-bar--component', TitleBar);
  }
}
