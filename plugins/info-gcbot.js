import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/CxJShadfxYqCVAHHxdHSiy'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: 'Gilzz Md',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler
