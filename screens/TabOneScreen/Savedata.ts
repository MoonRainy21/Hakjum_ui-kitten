import { appendData } from "../../storage/data"

export async function Savedata(data: Data) {
    await appendData(data)
    return
}