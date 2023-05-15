let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ نسبة حبك لهذا شخص ❤️❤️*
*حب ${text} انها لك* *${Math.floor(Math.random() * 100)}%* *من 100%*
*يجب أن تطلب منها أن تكون صديقك/تك ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(نسبة)$/i
export default handler
