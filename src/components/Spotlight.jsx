import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!ref.current) return
      ref.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      aria-hidden="true"
    />
  )
}
