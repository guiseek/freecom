const {
  createReleaseConfigWithScopeFilter,
} = require('../../../tools/releases')

const releaserc = createReleaseConfigWithScopeFilter({
  projectScope: 'peer-meeting',
  projectRoot: 'libs/peer/meeting',
  buildOutput: 'dist/libs/peer/meeting',
})
console.log(JSON.stringify(releaserc))
module.exports = releaserc
