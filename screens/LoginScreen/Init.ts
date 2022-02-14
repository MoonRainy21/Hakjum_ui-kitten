import { postSubjectData } from "../../storage/subjectData"
import { getVersion, postVersion } from "../../storage/version"

const thisVersion = 'v1.0.0'

const SUBJECTDATA : Subject[] = [
    { name: '물리1', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리2', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리3', midportion: 35, finportion: 35, actportion: 30 },
    { name: '물리4', midportion: 35, finportion: 35, actportion: 30 },
    { name: '화학1', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학2', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학3', midportion: 30, finportion: 30, actportion: 40 },
    { name: '화학4', midportion: 30, finportion: 30, actportion: 40 },
]

async function SubjectDataInit() {
    await postSubjectData(SUBJECTDATA)
    return 
}

export async function VersionCheck() {
    try{
        const currentVersion = await getVersion()
        if (currentVersion !== thisVersion) {
            await postVersion(thisVersion)
            await SubjectDataInit()
        }
    } catch(e) {
        await postVersion(thisVersion)
        await SubjectDataInit()
    }
    return
}