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
    const COUNTRY = phone.substring(0, 2)
    const DDD = phone.substring(2, 4)
    const numberFirstPart = phone.substring(4, 9)
    const numberLastPart = phone.substring(9, 13)

    return `+${COUNTRY} (${DDD}) ${numberFirstPart}-${numberLastPart}`
}

export function capitalizeString(text: string) {
    const textCapitalized = text.charAt(0).toUpperCase() + text.slice(1)
    
    return textCapitalized
}