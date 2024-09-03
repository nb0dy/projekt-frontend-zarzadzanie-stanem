import { useCallback, useState } from 'react';

import { Button } from '../button/button';
import { Icon, type TIconNames } from '../icon/icon';
import { Text } from '../text/text';

interface IResultItemInfoProps {
  name: string;
  iconName: TIconNames;
}

const ResultItemInfo = ({ name, iconName }: IResultItemInfoProps) => {
  return (
    <span className='flex mb-1'>
      <Icon name={iconName} width={16} height={16} className='mr-1.5' />
      <Text type='span' content={name} fontSize='medium' fontWeight='regular' />
    </span>
  );
};

// TODO: to be removed in the future, once we will work on comparison functionality
const hideCompareButton = 'opacity-0 pointer-events-none';

export interface IResultItemProps {
  imageUrl: string;
  collectionName: string;
  date: string;
  time: string;
  cloudCoverage?: string;
  gridCode?: string;
  onSelected?: () => void;
  selected?: boolean;
  className?: string;
  id: string | number;
  // TODO rething logic and type definition for comparison functionality
  addedForComparison?: boolean;
  onAddToCompare?: () => void;
  onRemoveFromCompare?: () => void;
}

export const ResultItem = ({
  imageUrl,
  collectionName,
  date,
  time,
  cloudCoverage,
  gridCode,
  selected,
  onSelected,
  className,
  addedForComparison,
  onAddToCompare,
  onRemoveFromCompare,
}: IResultItemProps) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isAddedForComparison, setIsAddedForComparison] = useState(addedForComparison);

  const handleSelectItem = useCallback(() => {
    setIsSelected(!isSelected);
    if (onSelected) {
      onSelected();
    }
  }, [isSelected, onSelected]);

  const handleCompareClick = useCallback(() => {
    if (!isAddedForComparison && onAddToCompare) {
      setIsAddedForComparison(true);
      onAddToCompare();
    } else if (isAddedForComparison && onRemoveFromCompare) {
      setIsAddedForComparison(false);
      onRemoveFromCompare();
    }
  }, [onAddToCompare, isAddedForComparison, onRemoveFromCompare]);

  return (
    <div
      className={`flex bg-bright-light p-4 rounded-md max-w-96 border-[3px] ${
        selected ? ' border-primary' : 'border-transparent'
      } ${className}`}
    >
      <img
        src={imageUrl}
        alt='ResultItem'
        className='w-[132px] h-[132px] object-cover rounded-md cursor-pointer'
        onClick={handleSelectItem}
      />
      <div className='ml-2.5 text-text w-full flex flex-col h-auto'>
        <div className='flex-grow'>
          <ResultItemInfo name={collectionName} iconName='Satellite' />
          <ResultItemInfo name={date} iconName='Calendar' />
          <ResultItemInfo name={time} iconName='Schedule' />
          {cloudCoverage && <ResultItemInfo name={cloudCoverage} iconName='Cloud' />}
          {gridCode && <ResultItemInfo name={gridCode} iconName='Map' />}
        </div>
        <div className='flex justify-between mt-auto'>
          <Button
            appearance='text'
            text={
              isAddedForComparison
                ? 'GLOBAL.DESIGN_SYSTEM.RESULT_ITEM.REMOVE_COMPARE'
                : 'GLOBAL.DESIGN_SYSTEM.RESULT_ITEM.ADD_TO_COMPARE'
            }
            size='medium'
            onClick={handleCompareClick}
            className={`${hideCompareButton} ${isAddedForComparison ? '!text-error' : ''}`}
          />
          <Button text='GLOBAL.DESIGN_SYSTEM.RESULT_ITEM.BUTTON' size='small' onClick={handleSelectItem} />
        </div>
      </div>
    </div>
  );
};