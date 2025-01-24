import Billion from "@/components/billion";
import { API_URL } from "./constants";

export const metadata = {
  title: "Home",
};

async function getBillion() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const billions = await getBillion();

  return (
    <div className="bg-black text-white w-full items-center flex flex-col">
      <div className="w-2/3 py-6 grid grid-cols-4">
        {billions.map((billion) => (
          <Billion
            key={billion.id}
            id={billion.id}
            fullname={billion.name}
            image_path={billion.squareImage}
            asset={billion.netWorth}
            industry={billion?.industries}
          />
        ))}
      </div>
    </div>
  );
}
