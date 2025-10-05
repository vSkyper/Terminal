/**
 * Centralized error handling and logging utility
 */
export class ErrorHandler {
  private static instance: ErrorHandler;
  private isDevelopment: boolean;

  private constructor() {
    // Check if we're in development mode (can be set via build tools or manually)
    this.isDevelopment =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.protocol === 'file:';
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Log error with context
   */
  public logError(error: Error | string, context?: string): void {
    const errorMessage = error instanceof Error ? error.message : error;
    const errorStack = error instanceof Error ? error.stack : undefined;

    const logMessage = context ? `[${context}] ${errorMessage}` : errorMessage;

    console.error(logMessage);

    if (this.isDevelopment && errorStack) {
      console.error('Stack trace:', errorStack);
    }
  }

  /**
   * Log warning with context
   */
  public logWarning(message: string, context?: string): void {
    const logMessage = context ? `[${context}] ${message}` : message;

    console.warn(logMessage);
  }

  /**
   * Log info with context
   */
  public logInfo(message: string, context?: string): void {
    if (this.isDevelopment) {
      const logMessage = context ? `[${context}] ${message}` : message;

      console.info(logMessage);
    }
  }

  /**
   * Handle async errors safely
   */
  public async safeAsync<T>(
    asyncFn: () => Promise<T>,
    context?: string,
    fallback?: T
  ): Promise<T | undefined> {
    try {
      return await asyncFn();
    } catch (error) {
      this.logError(error as Error, context);
      return fallback;
    }
  }

  /**
   * Handle sync operations safely
   */
  public safeSync<T>(
    syncFn: () => T,
    context?: string,
    fallback?: T
  ): T | undefined {
    try {
      return syncFn();
    } catch (error) {
      this.logError(error as Error, context);
      return fallback;
    }
  }
}
