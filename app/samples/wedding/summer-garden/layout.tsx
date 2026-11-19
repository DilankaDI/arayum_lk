import "./summer-garden.css";
import { wedding } from "./lib/wedding";
import { DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--invitation-sans" });

export const metadata = { title: wedding.bride + " & " + wedding.groom + " | Summer Garden" };
export default function Layout({ children }: {children: React.ReactNode}) {
  return <div className={`summer-garden ${bodyFont.variable}`}>{children}</div>;
}
