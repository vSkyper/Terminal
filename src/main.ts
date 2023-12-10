import './style.scss';
import { Window } from './components';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <div id='window' />
</div>
`;

Window();
