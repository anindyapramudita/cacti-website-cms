import {defineType} from 'sanity'

export default defineType({
  name: 'season',
  title: 'Season',
  type: 'string',
  options: {
    list: ['spring', 'summer', 'fall'],
  },
})
