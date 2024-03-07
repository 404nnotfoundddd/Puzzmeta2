import { useEffect } from 'react'

/**
 * Add event listener to body
 
useBodyEventListener(eventName: string,
 * handler: (e?: any) => void,
 * options?: boolean | AddEventListenerOptions)
 */
export const useBodyEventListener = (
  eventName: string,
  // eslint-disable-next-line no-unused-vars
  handler: (e?: any) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  useEffect(() => {
    const body = document.body

    body.addEventListener(eventName, handler, options)

    return () => {
      body.removeEventListener(eventName, handler, options)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
