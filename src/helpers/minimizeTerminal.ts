export default function minimizeTerminal() {
  const minimizeButton =
    document.querySelector<HTMLImageElement>('#minimize-terminal');
  const terminal = document.querySelector<HTMLDivElement>('#terminal');
  const terminalMinimized = document.querySelector<HTMLDivElement>(
    '#terminal-minimized'
  );

  if (!minimizeButton || !terminal || !terminalMinimized) return;

  minimizeButton.addEventListener('click', () => {
    terminal.style.display = 'none';
    terminalMinimized.style.display = 'block';
  });

  terminalMinimized.addEventListener('click', () => {
    terminal.style.display = 'flex';
    terminalMinimized.style.display = 'none';
  });
}
