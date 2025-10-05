import { DOMManager, TerminalStateManager } from '../utils';

export default function closeTerminal(): void {
  const domManager = DOMManager.getInstance();
  const stateManager = TerminalStateManager.getInstance();

  const closeButton =
    domManager.querySelector<HTMLImageElement>('#close-terminal');

  if (!closeButton) {
    console.warn('closeTerminal: Close button not found');
    return;
  }

  const handleClose: EventListener = (): void => {
    stateManager.executeAction('close');
  };

  domManager.addEventListener(closeButton, 'click', handleClose);
}
