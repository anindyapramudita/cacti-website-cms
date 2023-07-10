import {defineField, defineType} from 'sanity'
import {FaLeaf as icon} from 'react-icons/fa'

export default defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'E.g.: Monstera Deliciosa',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'mediaRef'}],
      description: 'Which movie are we screening',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'E.g.: Monstera is a genus of 59 species of flowering plants in the arum family...',
    }),
    defineField({
      name: 'water',
      title: 'Water',
      type: 'object',
      description:
        'E.g.: Monstera is a genus of 59 species of flowering plants in the arum family...',
      fields: [
        defineField({
          name: 'level',
          title: 'Level',
          type: 'number',
          description: 'How many water is required for the plant',
          validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
          name: 'info',
          title: 'Info',
          type: 'text',
          description: 'E.g.: Water every 7-14 days, allowing soil to dry...',
        }),
      ],
    }),
    defineField({
      name: 'care',
      title: 'Care',
      type: 'object',
      description:
        'E.g.: Monstera requires little attention and water during separate intervals...',
      fields: [
        defineField({
          name: 'level',
          title: 'Level',
          type: 'number',
          description: 'How many care and attention does the plant need',
          validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
          name: 'info',
          title: 'Info',
          type: 'text',
          description: 'E.g.: The Monstera Deliciosa is considered an easy-care plant...',
        }),
      ],
    }),
    defineField({
      name: 'seasons',
      title: 'Seasons',
      type: 'object',
      fields: [
        {
          name: 'spring',
          title: 'Spring',
          type: 'boolean',
        },
        {
          name: 'summer',
          title: 'Summer',
          type: 'boolean',
        },
        {
          name: 'fall',
          title: 'Fall',
          type: 'boolean',
        },
        {
          name: 'winter',
          title: 'Winter',
          type: 'boolean',
        },
      ],
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'object',
      description: 'E.g.: Monstera is a genus which can grow only to a certain point...',
      fields: [
        defineField({
          name: 'level',
          title: 'Level',
          type: 'number',
          description: 'How big can the plant get',
          validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
          name: 'info',
          title: 'Info',
          type: 'text',
          description: 'E.g.: Given the right conditions and support, Monstera...',
        }),
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{type: 'color'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
