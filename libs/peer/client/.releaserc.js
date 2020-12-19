const {
  createReleaseConfigWithScopeFilter,
} = require('../../../tools/releases')

const releaserc = createReleaseConfigWithScopeFilter({
  projectScope: 'peer-client',
  projectRoot: 'libs/peer/client',
  buildOutput: 'dist/libs/peer/client',
})
console.log(JSON.stringify(releaserc))
module.exports = releaserc
