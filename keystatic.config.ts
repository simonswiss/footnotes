import { config, collection, fields } from '@keystatic/core'
import { __experimental_mdx_field } from '@keystatic/core/form/fields/markdoc'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: __experimental_mdx_field({ label: 'Content' }),
      },
    }),
  },
})
