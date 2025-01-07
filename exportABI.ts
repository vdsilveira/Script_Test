// abis.ts

export const AssetAbi = [
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

export const HireAssetAbi = [
  
  "function hireAsset(string Id, uint256 slices) public",
  "function payAsset(string Id, address renterAddress, uint256 payment, uint256 refund) public",
  "function getContractBalance() public view returns (uint256)",
  "event PaymentMade(string indexed id, address indexed renter, uint256 payment, uint256 refund)"
];

export const TLCAbi = [
  
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address account) public view returns (uint256)",
  "function transfer(address to, uint256 amount) public returns (bool)",
  "function approve(address spender, uint256 amount) public returns (bool)",
  "function allowance(address owner, address spender) public view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)"
];

export const ServiceContractAbi = [
  
  "function CreateServiceRecordWithAssets(string serviceId, string[] assetIds, uint256[] slices, string description, uint256 monthsAvailable, uint256 price, uint256 finalPrice) public",
  "function CreateServiceRecord(string serviceId, string description, uint256 monthsAvailable, uint256 price, uint256 finalPrice) public",
  "function _hireService(string serviceId, address callerAddress, address sender) external",
  "function getserviceHired(string serviceId, address renterAddress) external view returns (tuple(string id, address renter, uint256 startRent, uint256 lockedValue, bool openStatus, address hireAddress))",
  "function getservice(string serviceId) external view returns (tuple(string serviceId, string[] assetIds, address supplier, string description, uint256 startOffer, uint256 availability, uint256 initialPrice, uint256 totalPrice, bool registered, uint8 status))",
  "function updateRenterDetails(string Id, address renterAddress) external",
  "function checkServiceOpenStatus(string id, address renterAddress) external view returns (bool)",
  "function getProvider(string Id) public view returns (address)",
  "event RegisteredService(string indexed id, address indexed supplier)",
  "event ServiceHired(string indexed id, address indexed sender)"
];

export const HireServiceAbi = [
  "constructor(address _ServiceContractAddress, address _contractTLC)",
  "function hireService(string serviceId) public",
  "function payService(string Id, address renterAddress, uint256 payment, uint256 refund) public",
  "function getContractBalance() public view returns (uint256)",
  "event PaymentMade(string indexed id, address indexed renter, uint256 payment, uint256 refund)"
];
