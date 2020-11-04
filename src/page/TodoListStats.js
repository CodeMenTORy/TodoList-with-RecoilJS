import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoil/selector';

export default function TodoListStats() {
  const {
    totalNum,
    totalCmpltNum,
    totalunCmpltNum,
    percentCmplt,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCmplt * 100);

  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCmpltNum}</li>
        <li>Items not completed: {totalunCmpltNum}</li>
        <li>Percent completed: {formattedPercentCompleted + '%'}</li>
      </ul>
    </div>
  );
}
