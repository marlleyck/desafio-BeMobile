export function dateRandom () {
    function randomDate(Start : Date, End : Date) {
        return new Date(Start.getTime() + (Math.random()) * (End.getTime() - Start.getTime()))
    }

    const RandomDateResult = randomDate(new Date(2015, 0, 1), new Date(2022, 12, 31))

    const day = ("0" + (RandomDateResult.getDay() > 0 ? RandomDateResult.getDate() : RandomDateResult.getDate() + 1)).slice(-2)
    const month = ("0" + (RandomDateResult.getMonth() + 1)).slice(-2)
    const year = RandomDateResult.getFullYear()

    return `${day}/${month}/${year}`
}

export function formatPhone(phone: string) {
    const DDD = phone.substring(0, 2)
    const numberFirstPart = phone.substring(2, 7)
    const numberLastPart = phone.substring(7, 11)

    return `(${DDD}) ${numberFirstPart}-${numberLastPart}`
}