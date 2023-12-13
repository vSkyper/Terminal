export default function closeTerminal() {
  console.log(1);
  const closeButton =
    document.querySelector<HTMLImageElement>('#close-terminal');
  const terminal = document.querySelector<HTMLDivElement>('#terminal');
  const terminalClosed =
    document.querySelector<HTMLDivElement>('#terminal-closed');

  console.log(closeButton, terminal, terminalClosed);

  if (!closeButton || !terminal || !terminalClosed) return;

  console.log(1);

  closeButton.addEventListener('click', () => {
    terminal.style.display = 'none';
    terminalClosed.style.display = 'block';
  });
}
