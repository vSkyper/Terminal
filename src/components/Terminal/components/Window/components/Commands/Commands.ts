import classes from './Commands.module.scss';

export default function Commands() {
  const commandsInput = async () => {
    const commandsInput =
      document.querySelector<HTMLInputElement>('#commands-input');
    const commandsOutput =
      document.querySelector<HTMLDivElement>('#commands-output');
    const terminalWindow =
      document.querySelector<HTMLDivElement>('#terminal-window');

    if (!commandsInput || !commandsOutput || !terminalWindow) return;

    commandsInput.focus();

    commandsInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      switch (commandsInput.value.toLowerCase()) {
        case 'time': {
          const time = new Date().toLocaleString();
          commandsOutput.innerHTML = `Now is ${time}`;
          break;
        }
        case 'ping':
          commandsOutput.innerHTML = `Pong!`;
          break;
        default:
          commandsOutput.innerHTML = `'${commandsInput.value}' is not recognized as an internal or external command, operable program or batch file.`;
          break;
      }

      commandsInput.value = '';
      terminalWindow.scrollTo(0, terminalWindow.scrollHeight);
    });
  };

  (function () {
    addEventListener('load', () => {
      commandsInput();
    });
  })();

  return /* HTML */ `
    <div class=${classes.title}>Try out some commands!</div>
    <div>&gt; <input class=${classes.input} id="commands-input" /></div>
    <div id="commands-output"></div>
  `;
}
