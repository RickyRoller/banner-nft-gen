import { NFTMetaData } from 'models/nft';

export const pinJSONToIPFS = async (metadata: NFTMetaData) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        pinata_api_key: process.env.REACT_APP_PINATA_KEY ?? '',
        pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET ?? '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metadata),
    });
    const data = await res.json();
    return {
      success: true,
      pinataUrl: 'https://gateway.pinata.cloud/ipfs/' + data.IpfsHash,
    };
  } catch (e) {
    return {
      success: false,
      status: e,
    };
  }
};
