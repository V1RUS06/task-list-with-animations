import React from 'react';
import {useStores} from '../../../../hooks/useStores';
import {ITask} from '@store/modules/TasksStore';
import {observer} from 'mobx-react';
import {TaskCard} from '@components/TaskCard';
import {FlatList} from 'react-native-gesture-handler';

export const TasksList: React.FC = observer(() => {
  const {tasksStore} = useStores();
  const flatListRef = React.useRef(null);

  const renderItems = React.useCallback(
    ({item}: {item: ITask}) => {
      return (
        <TaskCard
          task={item}
          key={item.id.toString()}
          simultaneousHandlers={flatListRef}
        />
      );
    },
    [tasksStore.tasks],
  );

  return (
    <FlatList
      ref={flatListRef}
      data={tasksStore.tasks}
      renderItem={renderItems}
    />
  );
});
