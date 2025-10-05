// Terminal types and interfaces
export interface TerminalState {
  isOpen: boolean;
  isMinimized: boolean;
  size: { maxWidth: number | string; height: number | string };
}

export type TerminalAction =
  | 'open'
  | 'close'
  | 'minimize'
  | 'maximize'
  | 'restore';
