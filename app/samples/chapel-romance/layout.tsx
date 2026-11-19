import type { ReactNode } from "react";
import { wedding } from "./lib/wedding";
import "../_shared/invitation.css";
import "./chapel-romance.css";

export const metadata = {
  title: wedding.card.names.join(" & ") + " | " + wedding.card.title,
  description: wedding.card.description,
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="invitation-sample chapel-romance">{children}</div>;
}
