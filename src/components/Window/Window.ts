import classes from './Window.module.scss';

export default function Window() {
  document.querySelector<HTMLDivElement>('#window')!.innerHTML = `
  <div class=${classes.window}>
  </div>
`;
}
