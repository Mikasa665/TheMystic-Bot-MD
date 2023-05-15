import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paypal.me/MOHAMEDSharkawy642')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `

*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*⟣◢مـرحـبـاً بـكـم فـي بـوت رايـلـي◤⟢*

*• تم تطويري وبرمجتي بواسطة ايتاشي ↯↯*
*https://wa.me/+96178965440*

*🜾قروب دعم البوت*
*https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ*

*شرح الاوامر↯↯*
*https://2u.pw/ninRvA*
*❍━──━━━❬ 🤖 ❭━━━──━❍*
*قـسـم الـمـجـمـوعـات 🪀 :*
*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*👑╎↫ .منشن (الرساله)*

*👑╎↫.المشرفين (الرساله)*

*👑╎↫.مخفي (الرساله)*

*👑╎↫.طرد (المنشن)*

*👑╎↫.تغيرالترحيب (الرساله)*

*👑╎↫.تغيرالمغادره (الرساله)*

*👑╎↫.ترقيه (منشن)*

*👑╎↫.تخفيض (منشن)*

*👑╎↫.اللينك*

*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*قـسـم الـتـحـمـيـل 📥:*
*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*👑╎↫.فيسبوك (الرابط)*

*👑╎↫.شغل (رابط)*

*👑╎↫.فيديو (رابط)*

*👑╎↫.البحث (الذي تريد البحث عنه)*

*👑╎↫. تيك  (رابط)*

*👑╎↫. صورة*

*👑╎↫. انستا  (رابط)*

*❍━──━━━❬ 🤖 ❭━━━──━❍*
*قـسـم الـصـور 📸 :* 
*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*👑╎↫. قطة🐈*

*👑╎↫. كلب🐕*

*👑╎↫. ميسي 🏃‍♂️⚽*

*👑╎↫. كرستيانو🏃‍♂️⚽*

*👑╎↫. ببجي🏇*

*👑╎↫. قهوة ☕*
*❍━──━━━❬ 🤖 ❭━━━──━❍*
*قـسـم الالـعـاب والـتـرفـيـه 🎮:* 
*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*👑╎↫. زواج* 

*👑╎↫. اكس (اسم الغرفه)* 

*👑╎↫. شاذ (منشن)* 

*👑╎↫.سيمب (منشن)* 

*👑╎↫. نسبة (منشن)* 

*👑╎↫.غباء (منشن)* 

*👑╎↫. تحدث*

*👑╎↫. ذكاء*

*👑╎↫.انطق (نص)*

*👑╎↫.بروفايل*

*❍━──━━━❬ 🤖 ❭━━━──━❍*
*قـسـم الـتـحـويـل ♻️:* 
*┓━━━═⊰⬩🤖⬩⊱═━━━┏*
*👑╎↫.ملصق*

*👑╎↫.استيكر*

*👑╎↫.سرقه (حقوقك)*

*👑╎↫.حيوان🦁*

*👑╎↫.ستكر*

*👑╎↫.ستكر2*

*👑╎↫.ستكر3*

*👑╎↫.ستك*

*👑╎↫.ستك2*

*👑╎↫.ستك3*

*👑╎↫.ستك4*

*👑╎↫.ستك5*

*👑╎↫.ترجم*

╝━━═✦•⊰🤖⊱•✦═━━━╚
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇𝚁𝙰𝙸𝙻𝚈┇🤖┇𝙱𝙾𝚃┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/https://www.paypal.me/MOHAMEDSharkawy642`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|اوامر|memú|help|info|comandos|allmenu|2help|menu1.2|الاوامر|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
