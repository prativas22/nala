/* eslint-disable import/named */
import { test } from '@playwright/test';
import { features } from '../../../features/visual/milo/milo.spec.js';
import { takeTwo } from '../../../libs/screenshot/take.js';
import { writeResultsToFile } from '../../../libs/screenshot/utils.js';
import Visual from '../../../selectors/visual/visual.page.js';

const envs = require('../../../envs/envs.js');

const folderPath = 'screenshots/milo';
const results = {};

test.describe('Milo blocks visual comparison test suite', () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const feature of features) {
    // eslint-disable-next-line no-loop-func
    test(`${feature.name},${feature.tags}`, async ({ page }, testInfo) => {
      const visual = new Visual(page);
      const name = `${feature.name}-${testInfo.project.name}`;
      const stableURL = `${envs[feature.stable]}${feature.path}`;
      console.info(stableURL);
      const betaURL = `${envs[feature.beta]}${feature.path}`;
      console.info(betaURL);
      const result = await takeTwo(
        page,
        stableURL,
        async () => { await visual.waitForEndOfPage(); },
        betaURL,
        async () => { await visual.waitForEndOfPage(); },
        folderPath,
        name,
        { fullPage: true, style: '.milonav,.global-footer { display: none; }' },
      );
      results[name] = [result];

      writeResultsToFile(folderPath, testInfo, results);
    });
  }
});
