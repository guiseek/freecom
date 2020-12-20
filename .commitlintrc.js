module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // Minor
        'feat',
        // Patch
        // 'build',
        'docs',
        'fix',
        'perf',
        'refactor',
        // None
        'chore',
        'ci',
        'revert',
        'test',
      ],
    ],
    'scope-empty': [0],
    'scope-enum': [
      2,
      'always',
      // prettier-ignore
      [
        'peer-core',
        'peer-client'
      ],
    ],
  },
  ignores: [(message) => message.toLowerCase().startsWith('wip')],
}
