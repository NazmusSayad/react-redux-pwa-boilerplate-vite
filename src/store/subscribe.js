import store from './index'
let prevState = store.getState()

const subscribers = []

store.subscribe(() => {
  const currentState = store.getState()

  subscribers.forEach(({ getState, listner }) => {
    const prevTarget = getState(prevState)
    const currentTarget = getState(currentState)

    if (prevTarget !== currentTarget) {
      listner(currentTarget, prevTarget)
    }
  })

  prevState = currentState
})

export default (getState, listner) => {
  subscribers.push({
    getState,
    listner,
  })
  listner(getState(prevState))
}
