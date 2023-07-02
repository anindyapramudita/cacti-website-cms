import media from './media'
import mediaRef from './media-ref'
import plant from './plant'
import season from './season'
import color from './color'

export const schemaTypes = [
  // Document types
  plant,
  media,

  // Other types
  season,
  color,

  // References
  mediaRef,
]
