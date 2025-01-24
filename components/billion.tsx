"use client";

import { useRouter } from "next/navigation";

export interface IBillion {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries?: string[];
}

export default function Billion({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IBillion) {
  const adjustAsset = Math.round(netWorth / 1000);
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className="px-3 py-6">
      <img src={squareImage} alt="image" onClick={onClick} />
      <span>{name}</span>
      <div>
        <span>
          {adjustAsset} Billion / {industries}
        </span>
      </div>
    </div>
  );
}
