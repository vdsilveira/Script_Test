"use strict";
// abis.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLCAbi = exports.HireAssetAbi = exports.AssetAbi = void 0;
exports.AssetAbi = [
    "function CreateAssetsRegistry(string Id, string description, uint256 amount, uint256 slices, uint256 monthsAvailable, uint256 totalPrice, uint256 pricePerSlice)",
    "function _hireAsset(string Id, uint256 slices, address callerAddress, address sender) external",
    "function getRenter(address account, string id) external view returns (uint256)",
    "function commission(uint256 _value) private pure returns (uint256)",
    "function service(uint256 _value) private pure returns (uint256)",
    "function getRenterDetails(string assetId, address renterAddress) external view returns (tuple(string id, address renter, uint256 slice, uint256 startRent, uint256 lockedValue, bool openStatus, address hireAddress))",
    "function updateRenterDetails(string Id, address renterAddress) external",
    "function checkOpenStatus(string id, address renterAddress) external view returns (bool)",
    "function getAssets(string Id) public view returns (tuple(string id, address supplier, string description, uint256 startOffer, uint256 amount, uint256 amountPerSlices, uint256 slices, uint256 initialSlices, uint256 availability, uint256 totalPrice, uint256 pricePerSlice, bool registered, uint8 status))",
    "function getSupplier(string Id) public view returns (address)",
    "function getAssetsStatus(string Id) public view returns (uint8)",
];
exports.HireAssetAbi = [
    "constructor(address _serviceContractAddress, address _contractTLC)",
    "function hireAsset(string Id, uint256 slices) public",
    "function payAsset(string Id, address renterAddress, uint256 payment, uint256 refund) public",
    "function getContractBalance() public view returns (uint256)",
    "event PaymentMade(string indexed id, address indexed renter, uint256 payment, uint256 refund)"
];
exports.TLCAbi = [
    "constructor()",
    "function totalSupply() public view returns (uint256)",
    "function balanceOf(address account) public view returns (uint256)",
    "function transfer(address to, uint256 amount) public returns (bool)",
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
    "event Approval(address indexed owner, address indexed spender, uint256 value)"
];
