export default function resizeTerminal() {
  const terminalMax = document.querySelector<HTMLImageElement>('#terminal-max');
  const terminalMin = document.querySelector<HTMLImageElement>('#terminal-min');
  const terminal = document.querySelector<HTMLDivElement>('#terminal');

  if (!terminalMax || !terminalMin || !terminal) return;

  terminalMin.style.display = 'none';

  terminalMax.addEventListener('click', () => {
    terminalMax.style.display = 'none';
    terminalMin.style.display = 'block';
    terminal.style.height = '100%';
    terminal.style.maxWidth = '100%';
  });

  terminalMin.addEventListener('click', () => {
    terminalMax.style.display = 'block';
    terminalMin.style.display = 'none';
    terminal.style.height = 'auto';
    terminal.style.maxWidth = '';
  });
}
