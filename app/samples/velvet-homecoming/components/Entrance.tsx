import type { ReactNode } from "react";
import InvitationOpening from "../../_shared/InvitationOpening";
import { wedding } from "../lib/wedding";

export default function Entrance({ children }: { children: ReactNode }) {
  const { names, date } = wedding.card;
  return (
    <InvitationOpening music={wedding.music} cover={<>
      <span className="monogram" aria-hidden="true">{names.map(name => name[0]).join(" · ")}</span>
      <p className="eyeline">{wedding.opening}</p>
      <h1 className="couple my-5">{names.join(" & ")}</h1>
      <p>{date}</p>
    </>}>
      {children}
    </InvitationOpening>
  );
}
