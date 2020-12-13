const {
  createReleaseConfigWithScopeFilter,
} = require('../../../tools/releases')

const releaserc = createReleaseConfigWithScopeFilter({
  projectScope: 'signaling',
  projectRoot: 'libs/signaling',
  buildOutput: 'dist/libs/signaling',
})
console.log(JSON.stringify(releaserc))
module.exports = releaserc
