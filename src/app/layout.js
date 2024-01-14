import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Meghna Home Made Cake',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            duration: 1000,
          }}
        />
      </body>
    </html>
  );
}
