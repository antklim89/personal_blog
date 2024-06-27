

/** @type {import('re-exporter').RootConfig} */
module.exports = {
  root: './src',
  watch: false,
  clear: true,
  folders: [
    {
      path: 'components',
      ignoreFiles: [(fileName) => !fileName.includes('index.ts')],
    },
    {
      path: ['types', 'transforms'],
    }
  ]

}
