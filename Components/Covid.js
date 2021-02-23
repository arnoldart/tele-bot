const { default: axios } = require("axios")

function Covid() {
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
}

module.exports = Covid