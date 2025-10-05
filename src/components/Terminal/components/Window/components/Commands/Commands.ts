import classes from './Commands.module.scss';
import {
  CommandProcessor,
  DOMManager,
  ConfigManager,
} from '../../../../../../utils';

export default function Commands(): string {
  const initializeCommands = (): void => {
    const domManager = DOMManager.getInstance();
    const commandProcessor = CommandProcessor.getInstance();

    const commandsInput =
      domManager.querySelector<HTMLInputElement>('#commands-input');
    const commandsOutput =
      domManager.querySelector<HTMLDivElement>('#commands-output');
    const terminalWindow =
      domManager.querySelector<HTMLDivElement>('#terminal-window');

    if (!commandsInput || !commandsOutput || !terminalWindow) {
      console.warn('Commands: Required elements not found');
      return;
    }

    // Focus the input
    domManager.focusElement(commandsInput);

    const handleKeyDown: EventListener = (e: Event): void => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key !== 'Enter') return;

      const command = commandsInput.value.trim();

      if (command) {
        const output = commandProcessor.processCommand(command);

        if (command.toLowerCase() === 'clear') {
          domManager.clearContent(commandsOutput);
        } else {
          domManager.setContent(commandsOutput, output);
        }
      }

      commandsInput.value = '';
      domManager.scrollToBottom(terminalWindow);
    };

    domManager.addEventListener(commandsInput, 'keydown', handleKeyDown);
  };

  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCommands);
  } else {
    // DOM is already loaded
    setTimeout(initializeCommands, 0);
  }

  const configManager = ConfigManager.getInstance();
  const placeholder = configManager.getSetting('command', 'placeholder');

  return /* HTML */ `
    <div class=${classes.title}>
      Try out some commands! (Type 'help' for available commands)
    </div>
    <div>
      &gt;
      <input
        class=${classes.input}
        id="commands-input"
        placeholder="${placeholder}"
      />
    </div>
    <div id="commands-output"></div>
  `;
}
