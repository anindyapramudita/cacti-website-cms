import {defineField, defineType} from 'sanity'
import {FaLeaf as icon} from 'react-icons/fa'

// {
//   "id": 1,
//   "name": "Monstera deliciosa",
//   "images": [
//     {
//       "mainImage": "https://images.unsplash.com/photo-1604866830513-d54766457f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//       "placeholder": "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==",
//       "alt": "Monstera deliciosa"
//     },
//     {
//       "mainImage": "https://images.unsplash.com/photo-1585598117791-876ce25c1884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//       "placeholder": "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==",
//       "alt": "Monstera deliciosa"
//     },
//     {
//       "mainImage": "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//       "placeholder": "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==",
//       "alt": "Monstera deliciosa"
//     },
//     {
//       "mainImage": "https://images.unsplash.com/photo-1599987793208-1e8473d5147f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//       "placeholder": "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==",
//       "alt": "Monstera deliciosa"
//     },
//     {
//       "mainImage": "https://images.unsplash.com/photo-1625582598943-2445bb7b8253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//       "placeholder": "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==",
//       "alt": "Monstera deliciosa"
//     }
//   ],
//   "description": "Monstera is a genus of 59 species of flowering plants in the arum family, Araceae, native to tropical regions of the Americas. They are herbs or evergreen vines, growing to heights of 20 metres (66 ft) in trees, climbing by means of aerial roots which act as hooks over branches; these roots will also grow into the soil to help support the plant. Since the plant roots both into the soil and over trees, it is considered a hemiepiphyte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Eu augue ut lectus arcu bibendum at varius vel. Convallis aenean et tortor at risus viverra. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Aliquam sem fringilla ut morbi tincidunt. Suspendisse interdum consectetur libero id faucibus. Est ante in nibh mauris cursus. Justo nec ultrices dui sapien eget mi proin sed libero. Ornare massa eget egestas purus viverra accumsan in. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Adipiscing elit duis tristique sollicitudin nibh sit amet. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Bibendum neque egestas congue quisque. Amet purus gravida quis blandit turpis cursus in. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Elementum curabitur vitae nunc sed. Eget mauris pharetra et ultrices neque ornare aenean euismod. Massa enim nec dui nunc mattis enim ut tellus elementum. Ultricies mi quis hendrerit dolor magna eget est. Enim ut sem viverra aliquet eget sit amet tellus. Euismod lacinia at quis risus sed. Mauris cursus mattis molestie a iaculis. A cras semper auctor neque vitae tempus. In cursus turpis massa tincidunt dui ut. Quis hendrerit dolor magna eget est lorem. Cum sociis natoque penatibus et magnis dis parturient. Id semper risus in hendrerit gravida rutrum. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Ut porttitor leo a diam. Quis hendrerit dolor magna eget est lorem ipsum. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Dolor sed viverra ipsum nunc aliquet bibendum enim. Diam maecenas sed enim ut sem viverra.",
//   "water": {
//     "level": 3,
//     "info": "Water every 7-14 days, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light"
//   },
//   "difficulty": {
//     "level": 1,
//     "info": "The Monstera Deliciosa is considered an easy-care plant, requiring very little attention to grow full and lush in your home over time. This low-maintenance beauty does well with a regular watering routine and bright indirect light"
//   },
//   "season": ["spring", "summer", "fall"],
//   "size": {
//     "level": 3,
//     "info": "Given the right conditions and support, Monstera deliciosa are long-lived plants that can grow 10 to 15 feet tall indoors and stretch 8 feet wide, with leaves that measure 18 inches across or more. Variegated monstera grow much slower and rarely achieve that size indoors."
//   },
//   "color": ["green", "red", "purple", "yellow"]
// },

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
      type: 'array',
      of: [{type: 'season'}],
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
