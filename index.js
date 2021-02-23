require('dotenv/config.js')
const { default: axios } = require('axios')
const { Composer } = require('micro-bot')
// const { Telegraf } = require('telegraf')
// const Covid = require('./Components/Covid')
const help = require('./Components/Help')
const { opt, opts, schedule } = require('./Components/Schedule')

const bot = new Composer()
// const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  ctx.reply(`Hello @${ctx.message.from.username}\n${help}`)
})

bot.help(ctx => {
  ctx.reply(help)
})

bot.command('putol', async (ctx) => {
  await ctx.reply('JADWAL PELAJARAN', opt)
})

bot.command('skaga', async (ctx) => {
  await ctx.reply('JADWAL PELAJARAN', opts)
})

bot.action('Del', (ctx) => {
  ctx.deleteMessage()
})

bot.action(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], (ctx) => {
  let text = ctx.update.callback_query.data
  let result = schedule[text.toLowerCase()].join('\n')
  ctx.editMessageText(result, opt)
})

bot.action(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'], (ctx) => {
  let text = ctx.update.callback_query.data
  let result = schedule[text.toLowerCase()].join('\n')
  ctx.editMessageText(result, opts)
})


bot.command('covid', async (ctx) => {
  let input = ctx.message.text
  let inputArr = input.split(' ')
  let mess = ' '
  
  if(inputArr.length == 1) return ctx.reply('masukkan kata seperti ( /covid lalu negara yang dicari )')
  inputArr.shift()
  mess = inputArr.join()
  
  const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${mess}`)
  const data = await res.data
  const formatData = 
      `
TOTAL
${data.country}
Cases : ${data.cases}
Deaths : ${data.deaths}
Recovered : ${data.recovered}
Active : ${data.active}

TODAY
${data.country}
Today Cases : ${data.todayCases}
TOday Deaths : ${data.todayDeaths}
Today Recovered : ${data.todayRecovered}
${data.countryInfo.flag}
      `
  const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  ctx.reply(formatNumber(formatData))
})

bot.command('p', (ctx) => {
  let date = new Date
  let ms = date.getMilliseconds()
  ctx.reply(`Ping!!! ${ms}ms`)
})

// https://bot-arnoldart.herokuapp.com/ | https://git.heroku.com/bot-arnoldart.git
// exports.mess = mess
module.exports = bot

// bot.launch()