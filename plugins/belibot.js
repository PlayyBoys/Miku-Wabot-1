let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Bulan* :      *Rp 15000*
╠➥ *Permanen* : *Rp 25000*
╠➥ *Premium* :   *Rp 10000*
╠➥ *Sc Bot* :        *Masih Beta*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewabot$/i

module.exports = handler
