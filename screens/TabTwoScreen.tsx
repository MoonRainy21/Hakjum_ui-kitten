import { Divider, List, ListItem } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getData } from '../storage/data';
import { RootTabScreenProps } from '../types';
import { HakjumByData } from './ModalScreen/util';

export default function TabTwoScreen({navigation}:RootTabScreenProps<'TabTwo'>) {
  const [initdata, setInit] = useState([])
  useEffect(() => {
    async function temp() {
      setInit(await getData())
      console.log(initdata)
      console.log(typeof initdata)
    }
    temp()
  }, [])
  return (
    <View style={styles.container}>
      <List style={{ width: '100%', marginTop: 10 }}
        data={initdata.reverse()}
        renderItem={({ item, index }) => {
          console.log(item)
          return <ListItem title={item.subject.name} description={HakjumByData(item)} onPress={()=> navigation.navigate('Modal', item)} />
        }}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
