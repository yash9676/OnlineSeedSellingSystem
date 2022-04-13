const LoginReducer = (state = {status:false, user:{}}, action) => {
  switch (action.type) {
    case "true":
      return {
        status:true,
        user:action.user
      };
    case "false":
      return {
        status:false,
        user:{}
      };
    default:
      return state;
  }
}
export default LoginReducer;