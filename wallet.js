let account;

async function connectWallet() {
    if (window.ethereum) {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        });
        account = accounts[0];
        document.getElementById("walletStatus").innerText =
            "Connected: " + account;

    } else {
        alert("Please install MetaMask");
    }
}
