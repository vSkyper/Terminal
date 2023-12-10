import { Terminal } from './components';
import './style.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <terminal--component />
  </div>
`;

customElements.define('terminal--component', Terminal);
