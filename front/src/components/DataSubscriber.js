import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSubscription } from 'urql'

const TimeSubscription = `
  subscription TimeSubscription {
    time
  }
`

const handleTimeSubscription = (messages = [], response) => response ? response.time : null

function DataSubscriber() {
  const [timeSubscriptionResults] = useSubscription({ query: TimeSubscription }, handleTimeSubscription)
  const dispatch = useDispatch()

  useEffect(() => {
    if (timeSubscriptionResults.data) {
      dispatch({
        type: 'SET_TIME',
        payload: timeSubscriptionResults.data,
      })
    }
  }, [timeSubscriptionResults.data, dispatch])

  return null
}

export default DataSubscriber
