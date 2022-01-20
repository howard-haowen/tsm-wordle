import { getGuessStatuses } from '../../lib/statuses'
import { ORTHOGRAPHY_PATTERN } from '../../lib/tokenizer'
import { MiniCell } from './MiniCell'

type Props = {
  guess: string
}

export const MiniCompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split(ORTHOGRAPHY_PATTERN).filter(char => char).map((letter, i) => (
        <MiniCell key={i} status={statuses[i]} letter={letter} />
      ))}
    </div>
  )
}
