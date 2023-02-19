export const useHTTPService = () => {

    const httpGet = (url) => {
        return $fetch(url, { method: 'GET' })
            .then(data => { return data })
            .catch(error => error)
    }

    return {
        httpGet
    }
}
