export const metadata = {
  title: 'Merakaka',
  description: 'Mom-focused AI chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
