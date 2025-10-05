import { TerminalState, TerminalAction } from '../types';
import { DOMManager, ErrorHandler } from '../utils';

/**
 * Terminal state management utility
 */
export class TerminalStateManager {
  private static instance: TerminalStateManager;
  private state: TerminalState;
  private domManager: DOMManager;
  private errorHandler: ErrorHandler;
  private listeners: Map<string, ((state: TerminalState) => void)[]>;

  private constructor() {
    this.domManager = DOMManager.getInstance();
    this.errorHandler = ErrorHandler.getInstance();
    this.listeners = new Map();
    this.state = this.getInitialState();
  }

  public static getInstance(): TerminalStateManager {
    if (!TerminalStateManager.instance) {
      TerminalStateManager.instance = new TerminalStateManager();
    }
    return TerminalStateManager.instance;
  }

  /**
   * Get initial terminal state
   */
  private getInitialState(): TerminalState {
    return {
      isOpen: true,
      isMinimized: false,
      size: { maxWidth: '', height: 'auto' },
    };
  }

  /**
   * Update terminal state
   */
  public setState(updates: Partial<TerminalState>): void {
    this.state = { ...this.state, ...updates };

    this.updateDOM();
    this.notifyListeners();

    this.errorHandler.logInfo(
      `State updated: ${JSON.stringify(updates)}`,
      'TerminalStateManager'
    );
  }

  /**
   * Execute terminal action
   */
  public executeAction(action: TerminalAction): void {
    this.errorHandler.logInfo(
      `Executing action: ${action}`,
      'TerminalStateManager'
    );

    switch (action) {
      case 'open':
        this.setState({ isOpen: true, isMinimized: false });
        break;

      case 'close':
        this.setState({ isOpen: false, isMinimized: false });
        break;

      case 'minimize':
        this.setState({ isMinimized: true });
        break;

      case 'maximize':
        this.setState({
          isMinimized: false,
          size: { maxWidth: '100%', height: '100%' },
        });
        break;

      case 'restore':
        this.setState({
          isMinimized: false,
          size: { maxWidth: '', height: 'auto' },
        });
        break;

      default:
        this.errorHandler.logWarning(
          `Unknown action: ${action}`,
          'TerminalStateManager'
        );
    }
  }

  /**
   * Update DOM based on current state
   */
  private updateDOM(): void {
    const terminal = this.domManager.querySelector<HTMLDivElement>('#terminal');
    const terminalClosed =
      this.domManager.querySelector<HTMLDivElement>('#terminal-closed');
    const terminalMinimized = this.domManager.querySelector<HTMLDivElement>(
      '#terminal-minimized'
    );

    if (!terminal || !terminalClosed || !terminalMinimized) {
      this.errorHandler.logWarning(
        'Terminal DOM elements not found',
        'TerminalStateManager'
      );
      return;
    }

    // Handle visibility
    if (!this.state.isOpen) {
      this.domManager.setVisibility(terminal, false);
      this.domManager.setVisibility(terminalClosed, true, 'block');
      this.domManager.setVisibility(terminalMinimized, false);
    } else if (this.state.isMinimized) {
      this.domManager.setVisibility(terminal, false);
      this.domManager.setVisibility(terminalClosed, false);
      this.domManager.setVisibility(terminalMinimized, true, 'block');
    } else {
      this.domManager.setVisibility(terminal, true, 'flex');
      this.domManager.setVisibility(terminalClosed, false);
      this.domManager.setVisibility(terminalMinimized, false);
    }

    // Update position and size
    if (this.state.isOpen && !this.state.isMinimized) {
      terminal.style.maxWidth = `${this.state.size.maxWidth}`;
      terminal.style.height = `${this.state.size.height}`;
    }
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners(): void {
    this.listeners.forEach((callbacks, event) => {
      callbacks.forEach((callback) => {
        try {
          callback(this.state);
        } catch (error) {
          this.errorHandler.logError(
            error as Error,
            `TerminalStateManager listener for ${event}`
          );
        }
      });
    });
  }
}
