import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,vue}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,vue}'], languageOptions: { globals: globals.browser } },
  pluginVue.configs['flat/essential'],
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/max-statements-per-line': 'error',
      '@stylistic/comma-style': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/function-paren-newline': ['error', {'minItems': 4}],
      '@stylistic/newline-per-chained-call': 'error',
    },
  },
]);