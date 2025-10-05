import { DOMManager, TerminalStateManager } from '../utils';

export default function minimizeTerminal(): void {
  const domManager = DOMManager.getInstance();
  const stateManager = TerminalStateManager.getInstance();

  const minimizeButton =
    domManager.querySelector<HTMLImageElement>('#minimize-terminal');
  const terminalMinimized = domManager.querySelector<HTMLDivElement>(
    '#terminal-minimized'
  );

  if (!minimizeButton || !terminalMinimized) {
    console.warn('minimizeTerminal: Required elements not found');
    return;
  }

  const handleMinimize: EventListener = (): void => {
    stateManager.executeAction('minimize');
  };

  const handleRestore: EventListener = (): void => {
    stateManager.executeAction('open');
  };

  domManager.addEventListener(minimizeButton, 'click', handleMinimize);
  domManager.addEventListener(terminalMinimized, 'click', handleRestore);
}
