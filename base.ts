import { test as baseTest} from '@playwright/test';
import { LoginPage } from "./pages/login-page";


type MyFixtures = {
    loginPage: LoginPage;
    // navPage: NavPage;
    // registerPage: RegisterPage;
};

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await use (new LoginPage(page));
    },
    // navPage: async ({page}, use) => {
    //     await use (new NavPage(page));
    // },
    // registerPage: async ({page}, use) => {
    //     await use (new RegisterPage(page));
    // }
});

export {expect} from '@playwright/test';