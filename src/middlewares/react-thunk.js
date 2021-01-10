function createThunkMiddleware(extraArgument) {
  // ! 返回值是一个 thunk，它是一个函数
  return ({ dispatch, getState }) => next => action => {
    // ! thunk 若感知到 action 是一个函数，就会执行 action
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }
    // ! 若 action 不是一个函数，则不处理，直接放过
    return next(action)
  }
}

const thunk = createThunkMiddleware()
thunk.withExtraArgument = createThunkMiddleware

export default thunk
