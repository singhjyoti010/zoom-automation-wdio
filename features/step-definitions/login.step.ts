import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import {LoginPage} from '../pageobjects/login.page.ts';

import { userCredentials } from '../../utils/helperConstants.ts';

const loginPage = new LoginPage();

Given(/^user logs in with user1$/, async () => {
    await browser.url('/signin');
    await loginPage.login(userCredentials.user1, userCredentials.password);
});

