import { defineConfig, devices } from "@playwright/test";

const httpCredentials = {
  username: "john",
  password: "1qa@WS3ed",
};
const btoa = (str: string) => Buffer.from(str).toString("base64");
const credentialsBase64 = btoa(
  `${httpCredentials.username}:${httpCredentials.password}`
);

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  reporter: [
    [
      "html",
      {
        open: "on-failure",
      },
    ],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    ["dot"],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    headless: false,
    screenshot: "on",
    launchOptions: {
      // 1
      args: ["--start-maximized"],
    },
    extraHTTPHeaders: {
      Authorization: `Basic ${credentialsBase64}`,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "firefox",

      use: {
        //viewport: null,
        ...devices["Desktop Firefox"],
      },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
