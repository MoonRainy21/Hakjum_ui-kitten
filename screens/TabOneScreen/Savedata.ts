import { appendData } from "../../storage/data"

interface Subject {
    name: string
}
interface Data {
    subject: Subject
    midscore: number
    finscore: number
    actscore: number
}

export async function Savedata(data: Data) {
    await appendData(data)
    return
}