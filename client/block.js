const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_API_KEY })

;(async () => {
  try {
    const blockId = '791818157829408588c8d5677f3aae28'

    const response = await notion.blocks.retrieve({ block_id: blockId })
    response.callout['rich_text'][1]['plain_text'] = `(${version})`
    response.callout['rich_text'][1]['text']['content'] = response.callout['rich_text'][1]['plain_text']

    const response2 = await notion.blocks.update({ block_id: blockId, callout: response.callout })
    console.info('[Notion] -> 版本号已更新', chalk.bgBlue.black(``, response2.callout['rich_text'][1]['plain_text']))
  } catch (err) {
    console.error(`[Notion] -> updateNotionVersion`, err)
  }
})()
