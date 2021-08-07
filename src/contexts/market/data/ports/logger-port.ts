export interface LoggerPort {
  info(...args: any[]): void;
  error(...args: any[]): void;
}
