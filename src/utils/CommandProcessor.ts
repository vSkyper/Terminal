import { ConfigManager } from './ConfigManager';

/**
 * Handles command processing and execution for the terminal
 */
export class CommandProcessor {
  private static instance: CommandProcessor;
  private commandHistory: string[] = [];
  private configManager: ConfigManager;

  private constructor() {
    this.configManager = ConfigManager.getInstance();
  }

  public static getInstance(): CommandProcessor {
    if (!CommandProcessor.instance) {
      CommandProcessor.instance = new CommandProcessor();
    }
    return CommandProcessor.instance;
  }

  /**
   * Process a command and return the output
   */
  public processCommand(command: string): string {
    const normalizedCommand = command.toLowerCase().trim();

    if (normalizedCommand) {
      this.addToHistory(command);
    }

    switch (normalizedCommand) {
      case 'time':
        return `Current time: ${new Date().toLocaleString()}`;

      case 'date':
        return `Current date: ${new Date().toLocaleDateString()}`;

      case 'ping':
        return 'Pong!';

      case 'help':
        return this.getHelpText();

      case 'clear':
        return '';

      case 'history':
        return this.getHistoryText();

      case 'whoami':
        return 'Guest User';

      case 'version':
        return 'Terminal Emulator v1.0.0';

      case 'config':
        return this.getConfigText();

      case 'pwd':
        return 'C:\\Users\\Guest';

      case 'dir':
      case 'ls':
        return this.getDirectoryListing();

      default:
        if (normalizedCommand.startsWith('echo ')) {
          return normalizedCommand.substring(5);
        }
        return `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
    }
  }

  /**
   * Add command to history
   */
  private addToHistory(command: string): void {
    this.commandHistory.push(command);
    const maxHistorySize = this.configManager.getSetting(
      'command',
      'maxHistorySize'
    );
    if (this.commandHistory.length > maxHistorySize) {
      this.commandHistory.shift();
    }
  }

  /**
   * Get command history
   */
  public getHistory(): string[] {
    return [...this.commandHistory];
  }

  /**
   * Get help text
   */
  private getHelpText(): string {
    return `Available commands:<br>
- time: Show current time<br>
- date: Show current date<br>
- ping: Test command<br>
- help: Show this help message<br>
- clear: Clear the terminal<br>
- history: Show command history<br>
- whoami: Show current user<br>
- version: Show terminal version<br>
- echo [text]: Display text<br>
- config: Show current configuration<br>
- pwd: Show current directory<br>
- dir/ls: List directory contents`;
  }

  /**
   * Get formatted history text
   */
  private getHistoryText(): string {
    if (this.commandHistory.length === 0) {
      return 'No commands in history.';
    }
    return this.commandHistory
      .map((cmd, index) => `${index + 1}: ${cmd}`)
      .join('<br>');
  }

  /**
   * Get configuration information
   */
  private getConfigText(): string {
    const settings = this.configManager.getSettings();
    return `Terminal Configuration:<br>
- Max History: ${settings.command.maxHistorySize}<br>
- Typewriter Delay: ${settings.typewriter.delay}ms`;
  }

  /**
   * Get directory listing simulation
   */
  private getDirectoryListing(): string {
    return `Directory of C:\\Users\\Guest<br><br>
10/05/2025  12:00 PM    &lt;DIR&gt;          .<br>
10/05/2025  12:00 PM    &lt;DIR&gt;          ..<br>
10/05/2025  12:00 PM    &lt;DIR&gt;          Documents<br>
10/05/2025  12:00 PM    &lt;DIR&gt;          Downloads<br>
10/05/2025  12:00 PM    &lt;DIR&gt;          Desktop<br>
               0 File(s)              0 bytes<br>
               5 Dir(s)   1,024,000,000 bytes free`;
  }
}
