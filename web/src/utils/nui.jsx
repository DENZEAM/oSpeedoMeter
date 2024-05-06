export default {
    async send(event, data = {}) {
        return fetch(`https://${GetParentResourceName()}/${event}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        })
    },


}