import type { Options } from '@wdio/types';
import { config as baseConfig } from './wdio.conf.ts';

const githubActionsConfig = {
    // specs: [
    //     './test/specs/**/*.ts',
    // ],

    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            args: [
                '--headless',
                '--disable-gpu',
                '--disable-dev-shm-usage'
            ]
        }
    }],
}

const lconfig:Options.Testrunner = {...baseConfig , ...githubActionsConfig}

export const config=lconfig;