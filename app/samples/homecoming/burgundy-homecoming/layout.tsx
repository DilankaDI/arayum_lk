import "./burgundy-homecoming.css";
import { homecoming } from "./lib/homecoming";
import { DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--invitation-sans" });

export const metadata = { title: homecoming.bride + " & " + homecoming.groom + " | Burgundy Homecoming" };
export default function Layout({ children }: {children: React.ReactNode}) {
  return <div className={`burgundy-homecoming ${bodyFont.variable}`}>{children}</div>;
}
