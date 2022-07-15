const { Client } = require('@notionhq/client')

const auth = 'op://fmvgmjtgi5eytk3v5rwxnsnm3e/NotionKey/INNO'

const notion = new Client({ auth })

;(async () => {
  try {
    const blockId = '71ddf928144d41999448be56a69d2fd5'

    const response = await notion.blocks.retrieve({ block_id: blockId })
    console.log(`[LOG] ->`, JSON.stringify(response, null, 2))

    // const updateResponse = await notion.blocks.update({ block_id: blockId, callout: response.callout })
    // console.log(`[LOG] -> updateResponse`, JSON.stringify(updateResponse, null, 2))
  } catch (err) {
    console.error(`[Notion] ->`, err)
  }
})()
