import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    className: string;
    id?: string;
}

const Section = ({ children, className, id }: Props) => {
  return (
    
      <section className={`w-screen min-h-screen ${className}`} id={id}>{children}</section>
  )
}

export default Section
