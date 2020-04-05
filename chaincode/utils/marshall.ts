export class Marshall {

    public static marshallToObject(data: Buffer | string | object, obj: object) {
        let json
        if (Buffer.isBuffer(data)) {
            if (!data.length) {
                return
            }

            json = JSON.parse(data.toString('utf-8'), Marshall.reviver)
        } else if (typeof data === 'string') {
            json = JSON.parse(data, Marshall.reviver)
        } else {
            json = data
        }
        console.log(`JSON: ${json}`)
        return Object.assign(obj, json)
    }

    public static replacer(key: string, value: any) {
        const originalObject = this[key]
        if (originalObject instanceof Set) {
            return {
                dataType: 'Set',
                value: [...originalObject],
            }
        } else {
            return value
        }
    }

    public static reviver(key: string, value: any) {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Set') {
                return new Set(value.value)
            }
        }
        return value
    }
}