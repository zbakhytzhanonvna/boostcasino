/*
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  projectId: 'boost-casino-tests',
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://www.boostcasino.com',
    specPattern: 'cypress/e2e/features/!*.feature',
    supportFile: 'cypress/support/e2e.ts',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor',
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );

      return config;
    },
  },
});
*/

import {defineConfig} from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import {addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    projectId: 'boost-casino-tests',
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        specPattern: '**/*.feature',
        setupNodeEvents,
    },
})
