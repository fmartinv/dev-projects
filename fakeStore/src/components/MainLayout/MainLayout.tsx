import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>Header</div>
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
