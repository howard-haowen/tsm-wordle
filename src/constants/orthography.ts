import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'i',
  'u',
  'e',
  'o',
  'oo',
  'p',
  'ph',
  'b',
  'm',
  't',
  'th',
  'n',
  'nn',
  'l',
  'k',
  'kh',
  'g',
  'ng',
  'h',
  'ts',
  'tsh',
  's',
  'j',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
