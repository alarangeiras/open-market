import { Logger } from 'pino';
import { createMock } from 'ts-auto-mock';
import { LoggerPort } from '../../../data/ports/logger-port';
import { PinoLogger } from './pino-logger';

describe(__filename, () => {
  test('execute info log', async () => {
    const loggerMock = createMock<Logger>();
    const logger: LoggerPort = new PinoLogger(loggerMock);
    try {
      logger.info('teste');
    } catch (error) {
      fail();
    }
  });
  test('execute error log', async () => {
    const loggerMock = createMock<Logger>();
    const logger: LoggerPort = new PinoLogger(loggerMock);
    try {
      logger.error('teste');
    } catch (error) {
      fail();
    }
  });
});
