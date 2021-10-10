import { v4 } from 'uuid';
import { OpenSeaNFT } from '../../models/nft';

const API = 'https://rinkeby-api.opensea.io/api/v1';
const perPage = 18;

export const fetchPagedNFTs = async (
  owner: string,
  page: number = 0,
): Promise<OpenSeaNFT[]> => {
  const offset = page * perPage;
  const res = await fetch(
    `${API}/assets?owner=${owner}&offset=${offset}&limit=${perPage}`,
  );
  const { assets } = await res.json();
  return assets
    .filter((d: any) => d.image_url !== '')
    .map((d: any) => ({
      id: v4(),
      url: d.image_url,
      name: d.name,
    }));
};
