import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
