import AsyncStorage from "@react-native-async-storage/async-storage"

interface Subject {
    name: string
}

interface Data {
    subject: Subject
    midscore: number
    finscore: number
    actscore: number
}

export async function appendData(value: Data) {
    try {
        const lastdata = await AsyncStorage.getItem('data')
        var data: Data[];
        if (lastdata === null || lastdata === undefined) {
            data = []
        }
        else {
            data = JSON.parse(lastdata)
        }
        data.push(value)
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('data', jsonValue)
    } catch (e) {
        console.error('appending data' + e)
    }
    return
}

export async function getData() {
    try {
        const jsonValue = await AsyncStorage.getItem('data')
        console.log(jsonValue)
        if (jsonValue !== null) {
            const result = JSON.parse(jsonValue)
            return result
        }
    } catch (e) {
        console.error('getting data ' + e)
    }
    return []
}