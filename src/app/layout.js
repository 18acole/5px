import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '5PX Landing',
  description: 'Welcome to 5PX Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}