export default function closeTerminal() {
  const closeButton =
    document.querySelector<HTMLImageElement>('#close-terminal');
  const terminal = document.querySelector<HTMLDivElement>('#terminal');
  const terminalClosed =
    document.querySelector<HTMLDivElement>('#terminal-closed');

  if (!closeButton || !terminal || !terminalClosed) return;

  closeButton.addEventListener('click', () => {
    terminal.style.display = 'none';
    terminalClosed.style.display = 'block';
  });
}
