"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
const exportABI_1 = require("./exportABI");
dotenv_1.default.config();
const contracTLC = process.env.TELECOIN_ADDRESS;
const contractAssets = process.env.ASSETS_ADDRESS;
const contractHire = process.env.HIRE_ASSETS_ADDRESS;
if (!contracTLC) {
    throw new Error('TELECOIN_ADDRESS is not defined');
}
if (!contractAssets) {
    throw new Error('ASSETS_ADDRESS is not defined');
}
if (!contractHire) {
    throw new Error('HIRE_ASSETS_ADDRESS is not defined');
}
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.ETHEREUM_PROVIDER_URL);
const privKey = process.env.MARKETPLACE_PRIVATE_KEY;
if (!privKey) {
    throw new Error('MARKETPLACE_PRIVATE_KEY is not defined');
}
const connectWallet = new ethers_1.Wallet(privKey, provider);
const TelecoinContract = new ethers_1.ethers.Contract(contracTLC, exportABI_1.TLCAbi, connectWallet);
const AssetsContract = new ethers_1.ethers.Contract(contractAssets, exportABI_1.AssetAbi, connectWallet);
const HireContract = new ethers_1.ethers.Contract(contractHire, exportABI_1.HireAssetAbi, connectWallet);
function createAssets() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Enviando a transação para criar o ativo
            const tx = yield AssetsContract.CreateAssetsRegistry('0333', // ID do ativo
            'bla bla bla', // Descrição
            100, // Quantidade de ativos
            10, // Slices
            3, // Meses disponíveis
            10, // Preço total
            3 // Preço por slice
            );
            console.log("Transação enviada:", tx);
            const receipt = yield tx.wait();
            console.log("Transação confirmada:", receipt);
        }
        catch (error) {
            console.error("Erro ao criar ativo:", error);
        }
    });
}
createAssets();
