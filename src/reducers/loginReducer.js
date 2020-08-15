
const loginReducer = (state, action) =>{
  switch (action.type) {
    case 'setUserName':
      return {...state, username: action.playload};
    case 'setUserPassword':
      return {...state, password: action.playload};
    case 'setUsernameError':
      return {...state, usernameError: action.playload};
    case 'setPasswordError':
      return {...state, passwordError: action.playload};
    default:
      throw new Error();
  }
}
export default loginReducer