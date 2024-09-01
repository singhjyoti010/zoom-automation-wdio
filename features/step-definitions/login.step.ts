import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import loginPage from '../pageobjects/login.page.js';

const page = {
    login: loginPage
}

Given(/^user logs in with user1$/, async (page) => {
    await page.login(userCredentials.user1, userCredentials.password);
});

