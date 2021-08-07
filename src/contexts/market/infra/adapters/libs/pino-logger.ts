import { Logger } from 'pino';
import { LoggerPort } from '../../../data/ports/logger-port';

export class PinoLogger implements LoggerPort {
  constructor(private _logger: Logger) {}

  error(...args: any[]): void {
    this._logger.error(args);
  }

  info(...args: any[]): void {
    this._logger.info(args);
  }
}
