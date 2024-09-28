import { config as baseConfig } from './wdio.conf.ts';

exports.config = {
  ...baseConfig,
  specFileRetries: 2,
  // We only need to override the Chrome configuration of capabilities
  capabilities: [
    {
    //   maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      // We need to extends some Chrome flags in order to tell Chrome to run headless
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080'],
      },
    },
  ],
}