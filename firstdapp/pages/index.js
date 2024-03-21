import {useState, useEffect} from "react";
import {ethers} from "ethers";
import voting_abi from "../artifacts/contracts/SimpleVoting.sol/SimpleVoting.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [voting, setVoting] = useState(undefined);
  const [votesOfA, setVotesOfA] = useState(0);
  const [votesOfB, setVotesOfB] = useState(0);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const votingABI = voting_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({method: "eth_accounts"});
      handleAccount(accounts);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getVotingContract();
  };

  const getVotingContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const votingContract = new ethers.Contract(contractAddress, votingABI, signer);
 
    setVoting(votingContract);
  }

  const voteForA = async() => {
    if (voting) {
      console.log(`Voting for A`);
      let tx = await voting.voteForA();
      await tx.wait();
    }
  }

  const voteForB = async() => {
    if (voting) {
      let tx = await voting.voteForB();
      await tx.wait();
    }
  }

  const checkVotes = async() => {
    if (voting) {
      const res = await voting.checkVotes();
      console.log(`Res: ${res}`);
      setVotesOfA(res[0].toNumber());
      setVotesOfB(res[1].toNumber());
    }
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this Voting.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Connect Wallet</button>
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <button onClick={checkVotes}>Check Votes</button>
        <p>Votes of A: {votesOfA}</p>
        <p>Votes of B: {votesOfB}</p>
        <button onClick={voteForA}>Vote for A</button>
        <button onClick={voteForB}>Vote for B</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Welcome to SimpleVoting</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}
