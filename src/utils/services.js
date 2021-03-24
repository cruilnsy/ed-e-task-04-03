import request from './request'

export const signIn = data => {
    // console.log('signIn: ', JSON.stringify(data))
    return request({
        method: 'POST',
        url: '/users/login',
        data
    })
}

export const signUp = data => {
    // {username: "bcui", email: "crui@gmail.com", password: "fasdfasdf"}
    return request({
        method: 'POST',
        url: '/users',
        data
    })
}