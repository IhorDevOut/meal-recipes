import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Outlet } from 'react-router-dom'

export function BaseLayout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
