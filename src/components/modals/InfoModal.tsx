import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { CONFIG } from '../../constants/config'
import { useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const { t } = useTranslation()
  return (
    <BaseModal title={t('howToPlay')} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        {t('instructions', { tries: CONFIG.tries })}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('firstExampleWord.0')} status="correct" />
        <Cell value={t('firstExampleWord.1')} />
        <Cell value={t('firstExampleWord.2')} />
        <Cell value={t('firstExampleWord.3')} />
        <Cell value={t('firstExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('correctSpotInstructions')}</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('secondExampleWord.0')} />
        <Cell value={t('secondExampleWord.1')} />
        <Cell value={t('secondExampleWord.2')} status="present" />
        <Cell value={t('secondExampleWord.3')} />
        <Cell value={t('secondExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('wrongSpotInstructions')}</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value={t('thirdExampleWord.0')} />
        <Cell value={t('thirdExampleWord.1')} />
        <Cell value={t('thirdExampleWord.2')} />
        <Cell value={t('thirdExampleWord.3')} status="absent" />
        <Cell value={t('thirdExampleWord.4')} />
      </div>
      <p className="text-sm text-gray-500">{t('notInWordInstructions')}</p>
    </BaseModal>
  )
}
