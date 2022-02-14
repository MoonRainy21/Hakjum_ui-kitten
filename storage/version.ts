import AsyncStorage from "@react-native-async-storage/async-storage"

export async function postVersion(version: string) {
    try {
        await AsyncStorage.setItem('version', version)
    } catch (e) {
        console.error('getting version' + e)
    }
    return
}

export async function getVersion() {
    try {
        const jsonValue = await AsyncStorage.getItem('version')
        console.log(jsonValue)
        if (jsonValue !== null) {
            return jsonValue
        }
    } catch (e) {
        console.error('getting data ' + e)
    }
    return 'version not found'
}