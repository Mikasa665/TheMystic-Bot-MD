/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 المطور 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ مرحبا ${name}*
*┃*
*┃ 👉🏻 فيما يلي بعض البيانات التي تخص المطور*
*┃ في حالة دعمك :𝟹*
*┃*
*┃ ➤ رقم:* 
*┃ +01284329186*
*┃ ➤ بلد: مصر* 
*┃ ➤ يعمل البوت بنظام: لينكس* 
*┃ ➤ متاح: 24 ساعه*  
*┃ ➤ بايبل: لم اضع بايل حتا الان*
*┃*
*┃ 👉🏻 اذا كان لديك مشكله راسلني علي رقمي*
*┃ تعال فقط اذا كان لديك مشكله فقط*
*┃ wa.me/+01284329186*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
