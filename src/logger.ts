export class CodeWatchman {
  private name: string;
  private level: string;
  private projectId?: string;
  private apiKey?: string;
  private apiSecret?: string;

  constructor(options: {
    name: string;
    level?: string;
    projectId?: string;
    apiKey?: string;
    apiSecret?: string;
  }) {
    this.name = options.name;
    this.level = options.level || 'info';
    this.projectId = options.projectId;
    this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;

    if (process.env.CODEWATCHMAN_PROJECT_ID && !this.projectId) {
      this.projectId = process.env.CODEWATCHMAN_PROJECT_ID;
    }
    if (process.env.CODEWATCHMAN_API_KEY && !this.apiKey) {
      this.apiKey = process.env.CODEWATCHMAN_API_KEY;
    }
    if (process.env.CODEWATCHMAN_API_SECRET && !this.apiSecret) {
      this.apiSecret = process.env.CODEWATCHMAN_API_SECRET;
    }
  }

  private colorMessage(message: string, level: string): string {
    const colors: { [key: string]: string } = {
      debug: '\x1b[97m',    // Blue
      info: '\x1b[90m',     // Green
      warn: '\x1b[93m',     // Yellow
      error: '\x1b[91m',    // Red
      critical: '\x1b[95m', // Magenta
      success: '\x1b[92m',  // Green
    };
    const reset = '\x1b[0m';
    return `${colors[level] || reset}${message}${reset}`;
  }

  private log(level: string, message: string, ...args: any[]): void {
    const formattedMessage = `${new Date().toISOString()} | ${level.toUpperCase()}: ${message}`;
    const coloredMessage = this.colorMessage(formattedMessage, level);

    console.log(coloredMessage, ...args);
  }

  debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  success(message: string, ...args: any[]): void {
    this.log('success', message, ...args);
  }

  failure(message: string, ...args: any[]): void {
    this.log('failure', message, ...args);
  }
}
