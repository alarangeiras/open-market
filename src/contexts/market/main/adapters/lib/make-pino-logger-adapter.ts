import { LoggerPort } from '../../../data/ports/logger-port';
import { PinoLogger } from '../../../infra/adapters/libs/pino-logger';
import makeLogger from 'pino';

const logger = makeLogger();

export function makePinoLoggerAdapter(): LoggerPort {
  return new PinoLogger(logger);
}
