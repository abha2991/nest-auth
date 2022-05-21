import path from 'path'

const { render } = require('@nexrender/core')

const main = async (input) => {
  const filePath = path.resolve(__dirname, 'assets', 'Clean.aep')

  const result = await render({
    template: {
      src: filePath,
      composition: 'BLANK_COMP'
    },
    parameters: [
      {
        key: 'first lastname',
        value: 'John Doe'
      }
    ]
  })
}
