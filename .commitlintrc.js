/* module.exports = {
    extends: [
      "@commitlint/config-conventional"
    ],
    rules: {
      'type-enum': [2, 'always', ['新功能', '修复', '优化', '重构', '文档', 'test', 'chore', 'revert', 'WIP', 'build', 'release']],
      'type-case': [0],
      'type-empty': [0],
      'scope-empty': [0],
      'scope-case': [0],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never'],
      'header-max-length': [0, 'always', 72]
    }
  };
   */

  module.exports = Object.assign({}, require('changelog-sn/lib/lint'), {
    rules: {
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
      'scope-empty': [2, 'never'],
      'type-enum': [2, 'always', ['新功能', '修复', '优化', '重构', '文档', 'test', 'chore', 'revert', 'WIP', 'build', 'release']]
    }
  });