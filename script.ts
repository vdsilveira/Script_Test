import { ethers, Wallet } from "ethers";
import dotenv from 'dotenv';
import {TLCAbi,AssetAbi,HireAssetAbi} from './exportABI'


dotenv.config();


const contracTLC = process.env.TELECOIN_ADDRESS
const contractAssets = process.env.ASSETS_ADDRESS
const contractHire =  process.env.HIRE_ASSETS_ADDRESS

if (!contracTLC) {
  throw new Error('TELECOIN_ADDRESS is not defined');
}
if (!contractAssets) {
  throw new Error('ASSETS_ADDRESS is not defined');
}
if (!contractHire) {
  throw new Error('HIRE_ASSETS_ADDRESS is not defined');
}



const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_PROVIDER_URL)
const privKey= process.env.MARKETPLACE_PRIVATE_KEY
const otherPrivekey = process.env.OTHER_PRIVATE_KEY

if (!privKey) {
  throw new Error('MARKETPLACE_PRIVATE_KEY is not defined');
}
if (!otherPrivekey) {
  throw new Error('OTHER_PRIVATE_KEY is not defined');
}

const connectWallet = new Wallet(privKey,provider)
const connectOtherWallet = new Wallet(otherPrivekey,provider)

const TelecoinContract = new ethers.Contract(contracTLC, TLCAbi, connectWallet)
const AssetsContract = new ethers.Contract(contractAssets, AssetAbi, connectWallet)
const HireContract = new ethers.Contract(contractHire, HireAssetAbi, connectWallet)
const HireConnect =  new ethers.Contract(contractHire, HireAssetAbi, connectOtherWallet)
const TLCwithOther = new ethers.Contract(contracTLC, TLCAbi, connectOtherWallet)
async function createAssets(id:string) {
  try {
    // Enviando a transação para criar o ativo
    const tx = await AssetsContract.CreateAssetsRegistry(
      id,                 // ID do ativo
      "bla bla bla",          // Descrição
      100,                    // Quantidade de ativos
      10,                     // Slices
      3,                      // Meses disponíveis
      10,                     // Preço total
      3                       // Preço por slice
    );
    
    //console.log("Transação enviada:", tx.hash);
    
    
    const receipt = await tx.wait();
    console.log("Transação confirmada:", receipt);
  } catch (error) {
    console.error("Erro ao criar ativo:", error);
  }
}
async function getAssets(id:string) {
  try {
    const assets = await AssetsContract.getAssets(id);
    if (assets && assets !== '0x') {
      console.log(assets);
    } else {
      console.log('No assets found or invalid response');
    }
  } catch (error) {
    console.error('Error fetching assets:', error);
  }
}

async function transferTLC() {
  const balance = await TelecoinContract.balanceOf(connectWallet.address);
  const balanceInTokens = ethers.formatUnits(balance, 18); 
  //console.log(balanceInTokens);

  const divAmount = balance / BigInt(2);

  const transfer = await TelecoinContract.transfer(connectOtherWallet.address, divAmount);
  console.log("Transferência realizada: ", transfer.hash);


}

async function getBalance() {
  const Mybalance = await TelecoinContract.balanceOf(connectOtherWallet.address);

  console.log("Saldo em tokens:", Mybalance.toString());
  const ethBalance = await provider.getBalance(connectOtherWallet.address);
  console.log("Saldo em ETH:", ethers.formatEther(ethBalance), "ETH");
 
}

async function approveHire() {
  const walletAddress = connectOtherWallet.address;
  const Mybalance = await TelecoinContract.balanceOf(walletAddress);

  const tx = await TLCwithOther.approve(contractHire,Mybalance)
  console.log(tx)

  
}



async function HireAssets(id:string) {


  //try {

   
  //   const tx1 = await HireConnect.hireAsset(
  //     id,                 // ID do ativo
  //     10,                     // Slices
      
  //   );
    
  //   console.log("Transação enviada:", tx1);
    
    
  //   const receipt = await tx1.wait();
  //   console.log("Transação confirmada:", receipt);
  // } catch (error) {
  //   console.error("Erro ao criar ativo:", error);
  // }

  try {
    // Use staticCall para realizar a chamada de método sem enviar transação
    const result = await HireConnect.hireAsset.staticCall(id, 10);
    console.log("Execução estática bem-sucedida:", result);
  } catch (error) {
    console.error("Erro durante execução estática:", error);
  }
  
  
}

async function BalanceHireAssets() {
  const tx1 = await HireContract.getContractBalance()

  console.log("Transação enviada:", tx1);
  //console.log(connectOtherWallet.address)
}




var id= "2"

//createAssets(id);
 //getAssets(id)
 // approveHire()
HireAssets(id)
 //BalanceHireAssets()
 //getBalance();
 // transferTLC()