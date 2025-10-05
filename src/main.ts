import { Closed, Minimize, Terminal } from './components';
import { closeTerminal, minimizeTerminal, resizeTerminal } from './helpers';
import { ErrorHandler } from './utils';
import './style.scss';

/**
 * Initialize the terminal application
 */
function initializeTerminal(): void {
  const errorHandler = ErrorHandler.getInstance();

  errorHandler.logInfo('Starting terminal application initialization', 'main');

  try {
    // Render the terminal components
    const app = document.querySelector<HTMLDivElement>('#app');
    if (!app) {
      throw new Error('App container not found');
    }

    const renderResult = `${Terminal()} ${Closed()} ${Minimize()}`;

    app.innerHTML = renderResult;

    // Initialize terminal functionality
    closeTerminal();
    minimizeTerminal();
    resizeTerminal();
  } catch (error) {
    errorHandler.logError(error as Error, 'main.initializeTerminal');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTerminal);
} else {
  initializeTerminal();
}
