import Header from '@/components/shared/Header';
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
      </body>
    </html>
  );
}
