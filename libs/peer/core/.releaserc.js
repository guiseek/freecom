const { createReleaseConfigWithScopeFilter } = require('../../../tools/releases');

const releaserc = createReleaseConfigWithScopeFilter({
  projectScope: 'peer-core',
  projectRoot: 'libs/peer/core',
  buildOutput: 'dist/libs/peer/core',
});
console.log(JSON.stringify(releaserc));
module.exports = releaserc;
