import { API_URL } from "@/app/page";

export async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionInfo({ id }: { id: string }) {
  const billion = await getBillion(id);
  const adjustAsset = Math.round(billion.netWorth / 1000);
  return (
    <>
      <div className="flex flex-col py-5 w-3/5 bg-gray-930">
        <img src={billion.thumbnail} alt="image" width={200} />
        <h1 className="font-semibold text-2xl">{billion.name}</h1>
        <span>Networth : {adjustAsset} Billion</span>
        <span>Country : {billion.country}</span>
        <span>Industry : {billion?.industries}</span>
        <p>{billion.bio}</p>
      </div>
      <div className="flex flex-col py-5 w-3/5">
        <h1 className="font-semibold text-2xl py-5">Financial Asset</h1>
        <div className="grid grid-cols-4 gap-5">
          {billion.financialAssets.map((asset) => (
            <div
              key={billion.id}
              className="flex flex-col border border-red-300 rounded-md"
            >
              <span>Ticker : {asset.ticker}</span>
              <span>Company Name : {asset.companyName}</span>
              <span>Shares : {asset.numberOfShares}</span>
              <span>Price : {asset.sharePrice}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
