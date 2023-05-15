import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
*═〘 معلومات عن البوت 〙 ═*

*👑╎↫ [🤴🏻] المطور:ايتاشي👑*

*👑╎↫[#️⃣] رقم المطور:* *+96178965440*

*👑╎↫ [🔐] عدد المحدثات في الخاص*: *${chats.length - groups.length}*

 *👑╎↫[🦜] عدد الجروبات:* *${groups.length}* 

*👑╎↫[💡] ممجموع كل المحدثات:* *${chats.length}* 

*👑╎↫ [🚀] سرعة البوت:* *${uptime}*

*👑╎↫ [🎩] المستخدمون:* *${totalreg} شخص*

*👑╎↫ [☑️] قراءة الرسائل بشكل تلقائي:* ${autoread ? '*مفعل*' : '*غير مفعل*'}

*👑╎↫[❗] امر الاضافه والطرد:* ${restrict ? '*مفعل*' : '*غير مفعل*'} 

*👑╎↫[💬] بي سي انولي:* ${pconly ? '*مفعل*' : '*غير مفعل*'}

*👑╎↫جي سي اونلي [🏢] :* ${gconly ? '*مفعل*' : '*غير مفعل*'}


*👑╎↫ [🌎] الحاله:* ${self ? '*خاص*' : '*عام*'}

 *[💬] حظر من يراسلني بالخاص:* ${antiprivado ? '*مفعل*' : '*غير مفعل*'}

*👑╎↫ [🤖] جادي بوت:* ${modejadibot ? '*مفعل*' : '*غير مفعل*'}

*👑╎↫ [📵] حظر من يتصل بي :* ${antiCall ? '*مفعل*' : '*غير مفعل*'}
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(.حول|بوت|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
