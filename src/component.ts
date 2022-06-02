import { PlopGeneratorConfig } from 'node-plop'

const basePath = '{{pathCase path}}/{{pascalCase name}}'

const component: PlopGeneratorConfig = {
  description: 'React Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '1. Ingrese el nombre del componente:',
      validate: (value: string) => {
        if (/.+/.test(value)) return true

        return 'El nombre del componente es requerido.'
      },
    },
    {
      type: 'input',
      name: 'path',
      message: '2. Ingrese la ruta donde desea crearlo:',
      default: 'components/molecules',
      validate: (value: string) => {
        if (/.+/.test(value)) return true

        return 'La ruta es requerida.'
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${basePath}/index.ts`,
      templateFile: './templates/component/index.hbs',
    },
    {
      type: 'add',
      path: `${basePath}/{{camelCase name}}.component.tsx`,
      templateFile: './templates/component/component.hbs',
    },
    {
      type: 'add',
      path: `${basePath}/{{camelCase name}}.container.tsx`,
      templateFile: './templates/component/container.hbs',
    },
    {
      type: 'add',
      path: `${basePath}/{{camelCase name}}.messages.ts`,
      templateFile: './templates/component/messages.hbs',
    },
    {
      type: 'add',
      path: `${basePath}/{{camelCase name}}.styles.ts`,
      templateFile: './templates/component/styles.hbs',
    },
  ],
}

export default component
