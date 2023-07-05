import '../styles/main.scss'
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import { Nunito } from 'next/font/google'
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'TasteOfHelsinki',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar/>
      </ClientOnly>
      {children}
      </body>
    </html>
  )
}
