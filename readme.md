## spfx.js ##
The default rules specified by SPFx by default. This would be updated with each release of SPFx.

## mycompany.js ##
Extends the base rules from SPFx and could be further modified to dial back or wratchet up rules you / your org find useful.  This repo is just a sample, in reality, the extends here would need to be updated to reflect wherever the core rules ended up living.  For example: @pnp/eslint-config-spfx-react-defaults.

## Using the package ##
In your local SPFx project.

npm install @brianpmccullough/spfx-eslint

Update the eslintrc.json:

require('@rushstack/eslint-config/patch/modern-module-resolution');
module.exports = {
  extends: ['@brianpmccullough/spfx-eslint/configurations/spfx'],
  parserOptions: { tsconfigRootDir: __dirname },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      'parserOptions': {
        'project': './tsconfig.json',
        'ecmaVersion': 2018,
        'sourceType': 'module'
      },
      rules: {}
    }
  ]
};

## todo: ##
Could/should the parser related configurations be applied to the spfx default config?
