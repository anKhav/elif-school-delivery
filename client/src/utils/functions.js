export const makeRightUrlStr = (str) => {
    const res = str.replace(/\s/g, '')
    return res.toLowerCase()
}