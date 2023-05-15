/* Creditos a https://github.com/ALBERTO9883 */

let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ *لقد تم تعين رابط جديد لي مجموعه*\n♾ • رابط جديد:  ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['اعادة_الرابط', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
