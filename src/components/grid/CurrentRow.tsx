import { Cell } from './Cell'
import { ORTHOGRAPHY_PATTERN } from '../../lib/tokenizer';

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = guess.split(ORTHOGRAPHY_PATTERN).filter(i => i)
  const emptyCells = Array.from(Array(5 - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
