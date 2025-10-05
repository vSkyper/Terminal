/**
 * Configuration manager for terminal application
 */
export interface TerminalSettings {
  command: {
    maxHistorySize: number;
    placeholder: string;
  };
  typewriter: {
    delay: number;
  };
}

export class ConfigManager {
  private static instance: ConfigManager;
  private settings: TerminalSettings;

  private constructor() {
    this.settings = this.getDefaultSettings();
    this.loadFromStorage();
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  /**
   * Get default configuration
   */
  private getDefaultSettings(): TerminalSettings {
    return {
      command: {
        maxHistorySize: 100,
        placeholder: 'Enter command...',
      },
      typewriter: {
        delay: 5,
      },
    };
  }

  /**
   * Load settings from localStorage
   */
  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('terminal-settings');
      if (stored) {
        const parsedSettings = JSON.parse(stored) as Partial<TerminalSettings>;
        this.settings = { ...this.settings, ...parsedSettings };
      }
    } catch (error) {
      console.warn('Failed to load settings from storage:', error);
    }
  }

  /**
   * Get all settings
   */
  public getSettings(): TerminalSettings {
    return { ...this.settings };
  }

  /**
   * Get specific setting by path
   */
  public getSetting<K extends keyof TerminalSettings>(
    category: K
  ): TerminalSettings[K];
  public getSetting<
    K extends keyof TerminalSettings,
    S extends keyof TerminalSettings[K]
  >(category: K, setting: S): TerminalSettings[K][S];
  public getSetting<
    K extends keyof TerminalSettings,
    S extends keyof TerminalSettings[K]
  >(category: K, setting?: S): TerminalSettings[K] | TerminalSettings[K][S] {
    if (setting !== undefined) {
      return this.settings[category][setting];
    }
    return this.settings[category];
  }
}
