import { Closed, Minimize, Terminal } from './components';
import { closeTerminal, minimizeTerminal, resizeTerminal } from './helpers';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* HTML */ `
  ${Terminal()} ${Closed()} ${Minimize()}
`;

closeTerminal();
minimizeTerminal();
resizeTerminal();
