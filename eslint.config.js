module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disabilita tutte le regole di ESLint per il deploy
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}