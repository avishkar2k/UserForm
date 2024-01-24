export function getDisplayStringDob(dob){
    return new Date(dob).toLocaleDateString('en-US')
}

export function getDateFromString(dob){
    const date = new Date(dob)
    return date instanceof Date? date: new Date()
}

export function commonDateToString(dob){
    return dob.toISOString()
}