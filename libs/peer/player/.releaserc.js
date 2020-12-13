const {
  createReleaseConfigWithScopeFilter,
} = require('../../../tools/releases')

const releaserc = createReleaseConfigWithScopeFilter({
  projectScope: 'peer-player',
  projectRoot: 'libs/peer/player',
  buildOutput: 'dist/libs/peer/player',
})
console.log(JSON.stringify(releaserc))
module.exports = releaserc
