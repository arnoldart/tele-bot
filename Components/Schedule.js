const { Keyboard, Key } = require('telegram-keyboard')

const schedule = {
  // prettier-ignore
  senin: [
    "JADWAL SKAGA SENIN : \n",
    "PJOK", "PJOK", "Matematika", "Matematika",
    "BD", "BD", "PPL", "PPL", "PPL", "PPL",
  ],
  mon: [
    "JADWAL PUTOL SENIN : \n",
    "PPL", "PPL", 
    "B Ind","B Ing",
  ],
  // prettier-ignore
  selasa: [
    "JADWAL SKAGA SELASA : \n",
    "PABP", "PABP", "PABP",
    "PBO", "PBO", "PBO", "PBO",
    "Bahasa Indonesia", "bahasa Indonesia", "Bahasa Indonesia",
  ],
  tue: [
    "JADWAL PUTOL SELASA : \n",
    "P Agm", "MTK", "PKWU",
    "PKWU", "PBO", "PBO",
  ],
  // prettier-ignore
  rabu: [
    "JADWAL SKAGA RABU : \n",
    "PPKn", "PPKn", "BK",
    "Matematika", "Matematika",
    "PBO", "PBO", "PBO", "PBO",
  ],
  wed: [
    "JADWAL PUTOL RABU : \n",
    "PENJAS", "PKN", "BJS", "MTK",
  ],
  // prettier-ignore
  kamis: [
    "JADWAL SKAGA KAMIS : \n",
    "PWPB", "PWPB", "PWPB", "PWPB", "PWPB",
    "PKKwu", "PKKwu", "PKKwu", "PKKwu", "PKKwu", "PKKwu", "PKKwu",
  ],
  thu: [
    "JADWAL PUTOL KAMIS : \n",
    "P WEB", "P WEB", "PKWU", "PKWU", "BSDT",
    "BSDT", "PBO", "PBO",
  ],
  // prettier-ignore
  jumat: [
    "JADWAL SKAGA JUMAT : \n",
    "PWPB", "PWPB", "PWPB",
    "Bahasa Inggris", "Bahasa Inggris", "Bahasa Inggris",
    "Basis Data", "Basis Data", "Basis Data", "Basis Data",
  ],
  fri: [
    "JADWAL PUTOL JUMAT : \n",
    "P WEB", "P WEB", "PBO",
    "PBO", "B Ind",
  ],
}

const opt = Keyboard.make([
  Key.callback('Senin', 'Mon'),
  Key.callback('Selasa', 'Tue'),
  Key.callback('Rabu', 'Wed'),
  Key.callback('Kamis', 'Thu'),
  Key.callback('Jumat', 'Fri'),
  Key.callback('Del', 'Del')
], {
  columns: 2,
}).inline()

const opts = Keyboard.make(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Del'], {
  columns: 2,
}).inline()

exports.opt = opt
exports.opts = opts
exports.schedule = schedule