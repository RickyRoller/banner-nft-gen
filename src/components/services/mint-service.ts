import { pinJSONToIPFS } from './ipfs';
import contractABI from 'artifacts/contracts/BannerNFT.sol/BannerNFT.json';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
const contractAddress = '0x2e7fC63F364416099d81382392aC5B639E1428d3';
const alchemyKey = process.env.REACT_APP_ALCHEMY_API ?? '';
const web3 = createAlchemyWeb3(alchemyKey);

const loadContract = () =>
  // @ts-ignore
  new web3.eth.Contract(contractABI.abi, contractAddress);

const mintNFT = async (url: string, name: string, description: string) => {
  if (url.trim() == '' || name.trim() == '' || description.trim() == '') {
    return {
      success: false,
      status: '❗Please make sure all fields are completed before minting.',
    };
  }

  const metadata = {
    name,
    image: url,
    description,
  };

  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: '😢 Something went wrong while uploading your tokenURI.',
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  const contract = loadContract();

  try {
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        '✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/' +
        txHash,
    };
  } catch (error: any) {
    return {
      success: false,
      status: '😥 Something went wrong: ' + error.message,
    };
  }
};

export const MintService = {
  mintNFT,
};
