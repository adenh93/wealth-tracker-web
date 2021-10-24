const mainTemplates = require('./templates/mainTemplates')
const typographyTemplates = require('./templates/typographyTemplates')
const uiTemplates = require('./templates/uiTemplates')

module.exports = {
  main: {
    componentsDir: 'src/components',
    files: mainTemplates,
  },
  typography: {
    componentsDir: 'src/components/typography',
    files: typographyTemplates,
  },
  ui: {
    componentsDir: 'src/components/ui',
    files: uiTemplates,
  },
}
