const initialState = {
    lang: localStorage.getItem("lang")
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
        return ({ 
            lang: action.language_code
        })

    default:
        return state
  }
}
