import { Image, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { VersionCheck } from './Init';
import { UserInput } from './UserInput';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/sshs_icon_white.png')} style={{ width: "40%", height: undefined, aspectRatio: 1, backgroundColor: "#ffffff", marginBottom:10 }} />
            <UserInput />
            <Pressable onPress={() => { VersionCheck();navigation.navigate('Root') }} style={[styles.button, { backgroundColor: '#000066', width: '70%', marginTop:10 }]} >
                <Text style={{ color: 'white', fontSize: 15 }}>LOGIN</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
});
