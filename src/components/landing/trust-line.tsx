import { IconCheck } from "@/components/icons";
import { PageWrap } from "@/components/ui/page-wrap";
import { SITE } from "@/lib/site-config";

type TrustItem =
  | { kind: "stat"; stat: string; text: string }
  | { kind: "message"; bold: string; text: string };

const items: TrustItem[] = [
  { kind: "stat", stat: SITE.travelers, text: "travelers served" },
  { kind: "stat", stat: SITE.years, text: "years of experience" },
  {
    kind: "stat",
    stat: SITE.groups,
    text: "Umrah & group departures",
  },
  {
    kind: "message",
    bold: "No online payment",
    text: "— you approve every quote first",
  },
];

export function TrustLine() {
  return (
    <div className="border-hair bg-bg-soft border-b py-5">
      <PageWrap>
        <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          {items.map((item) => (
            <li
              key={item.kind === "stat" ? item.text : item.bold}
              className="text-muted flex items-center gap-2.5 text-[0.85rem]"
            >
              <IconCheck className="text-gold shrink-0" />
              <span>
                {item.kind === "stat" ? (
                  <>
                    <strong className="text-navy font-semibold">{item.stat}</strong>{" "}
                    {item.text}
                  </>
                ) : (
                  <>
                    <strong className="text-navy font-semibold">{item.bold}</strong>{" "}
                    {item.text}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </PageWrap>
    </div>
  );
}