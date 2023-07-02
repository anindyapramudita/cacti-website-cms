import {defineType} from 'sanity'

export default defineType({
  name: 'color',
  title: 'Color',
  type: 'string',
  options: {
    list: ['green', 'red', 'purple', 'yellow'],
  },
})
