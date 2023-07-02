import {defineType} from 'sanity'

export default defineType({
  name: 'mediaRef',
  title: 'Image',
  type: 'reference',
  weak: true,
  to: [{type: 'media'}],
})
