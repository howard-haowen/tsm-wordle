import { CONFIG } from './config'

export const ORTHOGRAPHY = [
’a’,
’aa’,
’aw’,
’aaw’,
’ay’,
’aay’,
’ch’,
"ch’",
’h’,
’i’,
’ii’,
’iw’,
’iiw’,
’ɨ’,
’k’,
"k’",
’kw’,
"kw’",
’ḵ’,
"ḵ’",
’ḵw’,
"kw’",
’l’,
’ɬ’,
’m’,
’n’,
’p’,
"p’",
’s’,
’sh’,
’t’,
"t’",
’tɬ’,
"tɬ’",
’ts’,
"ts’",
’u’,
’uu’,
’uy’,
’uuy’,
’w’,
’x’,
’xw’,
’x̱’,
’x̱w’
’y’

]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
