import js from '@eslint/js';
import gitignore from 'eslint-config-flat-gitignore';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { files: ['**/*.ts'] },
  gitignore({ files: ['./.gitignore', './.prettierignore'] }),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      eqeqeq: 'error',
      'no-param-reassign': 'error',
      "no-implicit-coercion": "error",
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          "checkCompoundAssignments": true,
          "allowBoolean": false,
          "allowNullish": false,
          "allowNumberAndString": false,
          "allowRegExp": false,
          "allowAny": false
        }
      ],
      "prefer-template": "error"
    }
      
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
  prettierConfig,
);