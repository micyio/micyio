import { technologyData } from "./data";

export function TechList() {
  return (
    <div>
      {technologyData?.map((techData, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold">{techData?.techName}</h3>
          <div className="mt-5 flex flex-row gap-6">
            {techData?.techList?.map((techInfo, j) => (
              <div key={j}>
                <div className="flex items-center justify-center gap-2 rounded-lg border px-3 py-1.5">
                  <span className="inline-block ">{techInfo?.logo}</span>
                  {techInfo?.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
