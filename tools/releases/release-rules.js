const releaseRuleWithScopeFilter = ({ type, release }, projectScope) => [
  /*
   * ATTENTION: The order of these rules is important.
   * 1. start by defining a release by commits type ignoring the scope rule
   *    -> releases workspace wide changes without a scope
   * 2. deactivate release for all commits with any scope
   *    -> prevents release from foreign scopes
   * 3. reactivate release in case of specific scope
   *    -> releases changes from specific scope
   */
  {
    type,
    release,
  },
  {
    scope: '*',
    type,
    release: false,
  },
  {
    scope: projectScope,
    type,
    release,
  },
]

const releaseByTypeWithScopeFilter = (release, types, projectScope) =>
  types.reduce(
    (rules, type) => [
      ...rules,
      ...releaseRuleWithScopeFilter({ type, release }, projectScope),
    ],
    []
  )

const releaseTypes = {
  minor: ['feat'],
  patch: ['build', 'docs', 'fix', 'perf', 'refactor'],
  none: ['chore', 'ci', 'revert', 'test', 'wip'],
}

function createReleaseRulesWithScopeFilter(projectScope) {
  return [
    ...releaseByTypeWithScopeFilter('minor', releaseTypes.minor, projectScope),
    ...releaseByTypeWithScopeFilter('patch', releaseTypes.patch, projectScope),
  ]
}

module.exports = {
  createReleaseRulesWithScopeFilter,
}
