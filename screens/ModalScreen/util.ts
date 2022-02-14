export function HakjumByScore(score: number): string {
    if (score > 95) return 'A#'
    else if (score > 90) return 'A+'
    else if (score > 85) return 'A0'
    else if (score > 80) return 'A-'
    else if (score > 75) return 'B+'
    else if (score > 70) return 'B0'
    else if (score > 65) return 'B-'
    else if (score > 60) return 'C+'
    else if (score > 55) return 'C0'
    else if (score > 50) return 'C-'
    else if (score > 45) return 'D+'
    else if (score > 40) return 'D0'
    else if (score > 35) return 'D-'
    return 'F'
}

export function RawScoreByData(data: Data): number {
    console.log(data)
    return (data.actscore + data.midscore * data.subject.midportion/100 + data.finscore * data.subject.finportion/100)
}

export const HakjumByData = (data: Data): string => HakjumByScore(RawScoreByData(data))