import React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {AppBackHeader} from '@components/AppBackHeader';
import {TextField} from '@components/UI/TextField';
import {Spacing} from '@styles/index';
import {AppButton} from '@components/UI/AppButton';
import {useStores} from '../../../../hooks/useStores';
import {observer} from 'mobx-react';

export const AddTaskScreen: React.FC = observer(() => {
  const [value, setValue] = React.useState<string>('');
  const {tasksStore} = useStores();

  const onAddTask = () => {
    tasksStore.addTask(value);
    setValue('');
    Keyboard.dismiss();
  };

  const onChange = (text: string) => {
    setValue(text);
  };

  return (
    <>
      <AppBackHeader title="Вернуться назад" />
      <View style={styles.content}>
        <TextField
          placeholder="Текст новой задачи"
          onChangeText={onChange}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <AppButton text="Добавить" disabled={!value} onPress={onAddTask} />
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.SCALE_16,
  },
  buttonContainer: {
    marginTop: Spacing.SCALE_16,
    width: '100%',
  },
});
