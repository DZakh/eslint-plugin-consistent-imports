/**
 * @fileoverview Assures consistent usage of css-modules in your project
 * @author Dmitry Zakharov
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/consistent-import-name');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true },
  },
});
ruleTester.run('consistent-import-name', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: `import { styles } from './hello-world.css'`,
      errors: [
        {
          message: 'No ImportDeclaration.',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});
