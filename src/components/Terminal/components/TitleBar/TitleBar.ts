import classes from './TitleBar.module.scss';
import { Buttons } from './components';
import cmdUrl from './images/cmd.png';

export default function TitleBar() {
  return /* HTML */ `
    <div class=${classes.wrapper}>
      <div class=${classes.title}>
        <img class=${classes.titleImage} src=${cmdUrl} alt="CMD" />
        <div class=${classes.titleLonger}>C:\\WINDOWS\\system32\\cmd.exe</div>
        <div class=${classes.titleShorter}>cmd.exe</div>
      </div>
      ${Buttons()}
    </div>
  `;
}
