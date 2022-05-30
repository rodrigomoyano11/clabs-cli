import { NodePlopAPI } from 'plop'

import component from './component.js'
import customHelpers from './helpers.js'

const welcomeMessage = `Cloudlabs CLI
- - -
`

const setHelpers = (plop: NodePlopAPI) => {
  const helpers = Object.entries(customHelpers)
  helpers.forEach(([key, value]) => {
    plop.setHelper(key, value)
  })
}

const setGenerators = (plop: NodePlopAPI) => {
  plop.setGenerator('component', component)
  // plop.setGenerator('hook', component)
}

const getMainMenu = (plop: NodePlopAPI) => {
  const generators = plop.getGeneratorList()
  generators.forEach((generator) => {
    plop.setActionType(`${generator.name}-action`, (answers, config) => {
      const { action } = config
      const { name } = answers
      return `${action} ${name}`
    })
  })
}

const source = (plop: NodePlopAPI) => {
  console.clear()

  plop.setDefaultInclude({ generators: true })
  plop.setWelcomeMessage(welcomeMessage)

  setHelpers(plop)
  setGenerators(plop)

  getMainMenu(plop)
}

export default source
