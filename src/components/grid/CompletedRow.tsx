import { getGuessStatuses } from '../../lib/statuses'
import { ORTHOGRAPHY_PATTERN } from '../../lib/tokenizer'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split(ORTHOGRAPHY_PATTERN).filter(i => i).map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
