import parse from 'csv-parse';
import fs from 'fs/promises';
import { join } from 'path';
import { makeMarketMySQLRepository } from './contexts/market/main/adapters/repositories/make-market-mysql-repository';
const csvFileName = 'DEINFO_AB_FEIRASLIVRES_2014.csv';

const marketRepository = makeMarketMySQLRepository();

const csvParse = (fileContent: string) => {
  return new Promise((resolve, reject) => {
    parse(fileContent, { trim: true }, (err, content) => {
      if (err) {
        return reject(err);
      }
      resolve(content);
    });
  });
};

(async () => {
  const csvFilePath = join(__dirname, '..', 'assets', 'csv', csvFileName);
  try {
    const fileContent = await fs.readFile(csvFilePath);
    const csvLines = (await csvParse(fileContent.toString())) as string[][];
    for (const line of csvLines) {
      const district = line[6];
      const region = line[9];
      const name = line[11];
      const neighbor = line[15];
      console.log(district, region, name, neighbor);
      await marketRepository.add({
        district,
        region,
        name,
        neighbor,
      });
    }
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
