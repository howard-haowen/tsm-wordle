import { CONFIG } from './config'

export const WORDS = [
'mɨtaat',
'pax̱aat',
'mɨx̱ɨsh',
'mɨkɨɬ',
'timash',
'lataam',
'patat',
"tɬ'piip",
'kakya',
'watim',
'ɨwinsh',
'aswan',
'xaslu',
'maytski',
'pachway',
'kwlaawit',
'shatay',
'taymun',
'tkwsay',
'aykawaas',
'tamam',
"kw'aɬa",
'ɨshchɨt',
'waawk’a',
'tiskay',
'kalux̱',
'anahúy',
'lakas',
'likúuk',
'yaamash',
'timash',
'tiinma',
'chawtun',
'mɨnan',
'mɨnik',
'aytalu',
'x̱alish',
'tsxwiili',
'watam',
'núsux̱',
'latit',
'ḵ’ax̱nu',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
