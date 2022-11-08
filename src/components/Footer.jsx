import { Container } from '@/components/Container'
import logo from '@/images/logo.png'
import Image from 'next/image'
export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image height={60} width={60} src={logo} />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Association of Teenage
          Founders.
        </p>
      </Container>
    </footer>
  )
}
