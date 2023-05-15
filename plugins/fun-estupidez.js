let handler = async (m, { conn, command, text }) => {
let love = `
*غباءك ${text} نسبتك هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*نسبة غبائك اذكى من بعض القرده*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(غباء)$/i
export default handler
