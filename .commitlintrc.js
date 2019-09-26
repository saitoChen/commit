module.exports = {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
            headerCorrespondence: [
            'type',
            'scope',
            'subject'
            ],
            referenceActions: [
            'close',
            'closes',
            'closed',
            'fix',
            'fixes',
            'fixed',
            'resolve',
            'resolves',
            'resolved'
            ],
            issuePrefixes: ['#'],
            noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
            fieldPattern: /^-(.*?)-$/,
            revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
            revertCorrespondence: ['header', 'hash'],
            warn() {},
            mergePattern: null,
            mergeCorrespondence: null
        },
    },
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
  