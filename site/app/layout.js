import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'AI Agents From Scratch — Interactive Tutorial',
  description: 'Learn to build AI agents locally without frameworks. Understand function calling, memory, and ReAct patterns from first principles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
