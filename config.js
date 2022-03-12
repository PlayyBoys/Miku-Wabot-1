// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/CcHAiR7gDJR0x8EakMsQ0k'
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/CcHAiR7gDJR0x8EakMsQ0k', 'https://chat.whatsap'] // ganti jadi group lu
global.owner = ['6285742344873','6281214769844'] // Put your number here //owner eval
global.kontak = ['6285742344873','6281214769844']//Ketika ada yang ngetik #owner
global.mods = ['62896255561617'] // Want some help?
global.prems = ['62896255561610'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'Privat Syg'
kasihcaption = `Nih kak`
namakontak1 = 'Boss Miku'
namakontak2 = 'Manager Miku'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = '© Miku-Bot' // ganti aja
global.author = 'Iyann Ganzz' // ganti aja

//
bc = 'Miku-Bot' //Broadcast
footer = '\n*Miku-Bot By +62 857-4234-4873*\n*Bot Grup: https://tinyurl.com/yapnjvdt*\n*Twitter Owner: https://twitter.com/IyanKastara*'
namabot = 'Miku-Bot'
namalu = 'Iyann Ganteng'


// 
wait = '_*Tunggu Om...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.image = 'https://telegra.ph/file/301eb8d95f70026e5aa90.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 250 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
