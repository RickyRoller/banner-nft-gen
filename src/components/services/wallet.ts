export const connectWallet = (): Promise<string> =>
  new Promise(async (resolve, reject) => {
    if (!window.ethereum) reject('');
    const addressArray = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    resolve(addressArray[0]);
  });
