const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_29_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnRCbmFjeEUwN0lsWGo0Vk93bTBsQ0RZNUM1TDVtVWV4WmQwVWxBdlNUWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc4NzE3MTExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OTMxODJFMTk4OTBCMjE0RTg2MEZGN0I4MTE1RTVCNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM3MDQxOTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3B1SWFaWWJUSEs4eGJRaU1qRHZSd1wiLFxuICBcInBob25lSWRcIjogXCJkNWQ2MTA4ZC0wYTY1LTQ0MTMtOWMyZS01ZTMxZTJjZGMzM2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAyNDgsXG4gICAgICAyMTMsXG4gICAgICA3NSxcbiAgICAgIDc4LFxuICAgICAgMjQ1LFxuICAgICAgMTY3LFxuICAgICAgMjM4LFxuICAgICAgNjMsXG4gICAgICAxOTEsXG4gICAgICAxMTksXG4gICAgICAxMDEsXG4gICAgICAyMTIsXG4gICAgICAyMjcsXG4gICAgICAyMTksXG4gICAgICAxNTUsXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICAyMTIsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTk4LFxuICAgICAgOTcsXG4gICAgICA5MCxcbiAgICAgIDE5MCxcbiAgICAgIDI1LFxuICAgICAgMTA5LFxuICAgICAgMTA5LFxuICAgICAgMTM2LFxuICAgICAgMTMwLFxuICAgICAgMTk5LFxuICAgICAgMTU5LFxuICAgICAgMTY5LFxuICAgICAgMTk0LFxuICAgICAgMTgwLFxuICAgICAgMjUwLFxuICAgICAgNDUsXG4gICAgICAxNTAsXG4gICAgICAxNzksXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFlCVzk3UzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzg3MTcxMTE6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTc4NzE5Njc3NjY0NDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSEhqNllFRVBUejJMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJtb29yYnpnc1RnOEZXMEN5SUZTb0JZcUVyVXVQZFJHR1NvTG9oVGdUa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNm02NW1sb1ZraVVLNFB3Q250SUNiVXBPRU1temQrWWtDVWYxNUFweE53M1JaNTEyU05BOWMvMS9aU0o3YTZpUng5eTMycGNpWlpsZThCY3RnTlFQQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDF4VTRlOTkyWUFza3FUQi9PaTF1N2dSeEZwNnFsak0zMFE1MU9FRUFCSEpCZXFzek9uVVpRT0dVd3cxZSs0NFFKemF0bE1GbmdrYk50a3NNSjBsaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3ODcxNzExMToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzcwNDE4M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
