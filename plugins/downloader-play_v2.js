import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*[❗ملاحظه❗] اكتب اسم الاغنيه لتشغيلها*\n\n*—◉ مثال:*\n*.شغل راب ايتاشي فخم*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'شغل') {
conn.reply(m.chat, `*_⏳جارري تنزيل الموسيقى...⏳_*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_『👑┇𝚁𝙰𝙸𝙻𝚈┇🤖┇𝙱𝙾𝚃┇👑』_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
}}
handler.help = ['شغل' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['شغل', 'play.2']
export default handler
