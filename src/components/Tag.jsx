export default function Tag({ children }) {
  return (
    <li className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
      {children}
    </li>
  )
}
