import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://api.thecatapi.com/v1/images/search')
let img = await res.json()
let caption = `
_『👑┇𝚁𝙰𝙸𝙻𝚈┇🤖┇𝙱𝙾𝚃┇👑』
`.trim()
conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['قطة']
handler.tags = ['random']
handler.command = /^قطة$/i
handler.fail = null
export default handler
