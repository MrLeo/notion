const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_API_KEY })

/**
 * @see https://developers.notion.com/reference/post-database-query
 */
;(async (): Promise<void> => {
  const databaseId = '897e5a76-ae52-4b48-9fdf-e71f5945d1af'
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'In stock',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Cost of next trip',
          number: {
            greater_than_or_equal_to: 2,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Last ordered',
        direction: 'ascending',
      },
    ],
  })
  console.info(`[LOG] -> response`, response)
})()
