import {defineField, defineType} from 'sanity'
import {BsFillImageFill as icon} from 'react-icons/bs'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'src',
      title: 'Source',
      type: 'image',
      description: 'The source of the image',
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
      description: 'The description text for the image',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'media.src',
    },
  },
})
