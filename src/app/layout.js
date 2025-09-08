import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});


export const metadata = {
  title: "InstaPlex Solutions | Business Software for CRM, E-Commerce, Monitoring & More",
  description: "Discover InstaPlex Solutions – providing CRM, Partner Management, E-Commerce, Monitoring, Communication, Learning, and Booking software to help businesses grow smarter and faster."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
