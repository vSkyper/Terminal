import { Closed, Terminal } from './components';
import { closeTerminal } from './helpers';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* HTML */ `
  ${Terminal()} ${Closed()}
`;

closeTerminal();
