import AsyncStorage from "@react-native-async-storage/async-storage"

export const SUBJECTDATA : Subject[] = [
    { name: '물리1', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리2', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리3', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리4', midportion: 35, finportion: 35, actportion: 30 },
    { name: '화학1', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학2', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학3', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학4', midportion: 30, finportion: 30, actportion: 40 },
]

export async function postSubjectData(value: Subject[]) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('subjectdata', jsonValue)
    } catch (e) {
        console.error('appending subjectdata' + e)
    }
    return
}

export async function getSubjectData() {
    try {
        const jsonValue = await AsyncStorage.getItem('subjectdata')
        console.log(jsonValue)
        if (jsonValue !== null) {
            const result = JSON.parse(jsonValue)
            return result
        }
    } catch (e) {
        console.error('getting subjectdata ' + e)
    }
    return []
}