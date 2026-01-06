const contractAddress = "PASTE_DEPLOYED_ADDRESS_HERE";
const contractABI = [
  // paste ABI from Remix
];

let contract;

async function loadContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, contractABI, signer);
}
