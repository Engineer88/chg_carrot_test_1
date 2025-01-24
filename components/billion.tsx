"use client";

import { useRouter } from "next/navigation";

interface IBillion {
  id: string;
  fullname: string;
  image_path: string;
  asset: number;
  industry: string;
}

export default function Billion({
  id,
  fullname,
  image_path,
  asset,
  industry,
}: IBillion) {
  const adjustAsset = Math.round(asset / 1000);
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className="px-3 py-6">
      <img src={image_path} alt="image" onClick={onClick} />
      <span>{fullname}</span>
      <div>
        <span>
          {adjustAsset} Billion / {industry}
        </span>
      </div>
    </div>
  );
}
