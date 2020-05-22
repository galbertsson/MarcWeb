

const sendPost = (path: string, body: any): Promise<any> => {
    const csrfToken = window.localStorage.getItem('csrf_token');

    if (!csrfToken) {
        
        // TODO: Fetch csrf token
    }

    return new Promise((resolve, reject) => {
        //If 200, resolve the response
        
        //If not 200, reject with the error
    })
}

const sendGet = () => {

}

export {
    sendPost,
    sendGet
}