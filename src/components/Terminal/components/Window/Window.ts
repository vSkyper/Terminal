import classes from './Window.module.scss';
import { Commands, Content } from './components';

export default function Window() {
  return /* HTML */ `
    <div class=${classes.wrapper}>${Content()} ${Commands()}</div>
  `;
}
