require('dotenv/config.js')
const { Composer } = require('micro-bot')
const help = require('./Components/Help')
const { opt, opts, schedule } = require('./Components/Schedule')

const bot = new Composer()

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

bot.command('p', (ctx) => {
  let date = new Date
  let ms = date.getMilliseconds()
  ctx.reply(`Ping!!! ${ms}ms`)
})

// https://bot-arnoldart.herokuapp.com/ | https://git.heroku.com/bot-arnoldart.git

module.exports = bot