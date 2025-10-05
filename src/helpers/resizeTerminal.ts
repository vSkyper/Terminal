import { DOMManager, TerminalStateManager } from '../utils';

export default function resizeTerminal(): void {
  const domManager = DOMManager.getInstance();
  const stateManager = TerminalStateManager.getInstance();

  const terminalMax =
    domManager.querySelector<HTMLImageElement>('#terminal-max');
  const terminalMin =
    domManager.querySelector<HTMLImageElement>('#terminal-min');

  if (!terminalMax || !terminalMin) {
    console.warn('resizeTerminal: Required elements not found');
    return;
  }

  // Initialize state - minimize button hidden by default
  domManager.setVisibility(terminalMin, false);

  const handleMaximize: EventListener = (): void => {
    stateManager.executeAction('maximize');
    domManager.setVisibility(terminalMax, false);
    domManager.setVisibility(terminalMin, true);
  };

  const handleRestore: EventListener = (): void => {
    stateManager.executeAction('restore');
    domManager.setVisibility(terminalMax, true);
    domManager.setVisibility(terminalMin, false);
  };

  domManager.addEventListener(terminalMax, 'click', handleMaximize);
  domManager.addEventListener(terminalMin, 'click', handleRestore);
}
