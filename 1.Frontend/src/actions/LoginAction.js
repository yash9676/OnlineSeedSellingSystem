export const LoginAction = (user) =>{
    return {
        type: 'true',
        user: user,
    }

}
export const LoginFaileAction = () =>{
    return {
        type: 'false',
        user: {},
    }
}