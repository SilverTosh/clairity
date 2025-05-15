
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = 'KINGVON';
global.owner = '254720326316';
global.botname = 'KINGVON MD';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
