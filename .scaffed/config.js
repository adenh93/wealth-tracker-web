const mainTemplates = require('./templates/mainTemplates')
const typographyTemplates = require('./templates/typographyTemplates')

module.exports = {
  main: {
    componentsDir: 'src/components',
    files: mainTemplates,
  },
  typography: {
    componentsDir: 'src/components/typography',
    files: typographyTemplates,
  },
}
