export default function shallowCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}