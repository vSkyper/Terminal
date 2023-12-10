import classes from './Terminal.module.scss';
import cmdUrl from './cmd.png';

export default function Terminal() {
  document.querySelector<HTMLDivElement>('#terminal')!.innerHTML = `
  <div class=${classes.terminal}>
    <div class=${classes.terminalTitleBar}>
      <div class=${classes.terminalTitleBarWrapper}>
        <img class=${classes.terminalTitleBarTitleImage} src=${cmdUrl} alt='CMD' />
        <div class=${classes.terminalTitleBarTitleLonger}>C:\\WINDOWS\\system32\\cmd.exe</div>
        <div class=${classes.terminalTitleBarTitleShorter}>cmd.exe</div>
      </div>
    <div>
  </div>
`;
}
