import './style.scss';
import { Terminal } from './components';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <div id='terminal' />
</div>
`;

Terminal();
