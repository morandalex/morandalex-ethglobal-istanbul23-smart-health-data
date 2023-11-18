//SPDX-License-Identifier: UNLICENSED


pragma solidity ^0.8.9;


import "hardhat/console.sol";


contract YourContract {

    struct District {
        address districtAddress;
        uint8 authorizationLevel; // 200 = read, 100 = modify
    }

    mapping(address => District[]) public allowedDistricts;

    mapping(address => string) public userHealthRecords;

    mapping(address => bool) public whitelist;

    constructor() {
        whitelist[msg.sender] = true;
        addUser( 0x70997970C51812dc3A010C7d01b50e0d17dc79C8,   "hello health record",  0xB91bC2a105C03667930b5eBE639e7914c5763BDB,  100);
    }


    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "Not whitelisted");
        _;
    }


    function addToWhitelist(address _address) public onlyWhitelisted {
        whitelist[_address] = true;
    }

    function removeFromWhitelist(address _address) public onlyWhitelisted {
        whitelist[_address] = false;
    }
    function getAuthorizationLevelByUserAddress(address userAddress, uint districtId) public view returns (uint8) {
        District[] memory districts = allowedDistricts[userAddress];
        return districts[districtId].authorizationLevel;

    }

    function getDistrictAdressByUserAddress(address userAddress, uint districtId) public view returns (address) {
        District[] memory districts = allowedDistricts[userAddress];
        return districts[districtId].districtAddress;
    }

    function canModify(address userAddress,uint districtId) public view returns (bool) {
        District[] memory districts = allowedDistricts[userAddress];
        require(districts[districtId].authorizationLevel == 100,"The caller does not have permission to modify.");
        return true;

    }

    function modifyUserHealthRecord(address userAddress,uint districtId, string memory newRecord) public {
//        require(canModify(userAddress,districtId), "Caller does not have permission to modify.");
//        require(allowedDistricts[userAddress].length != 0, "User is not already added to districts.");
//        require(bytes(userHealthRecords[userAddress]).length != 0, "User is not already has a health record.");
        userHealthRecords[userAddress] = newRecord;
    }

    function addUser(address newUser, string memory initialHealthRecord, address initialDistrictAddress, uint8 initialAuthorizationLevel) public onlyWhitelisted {

        require(allowedDistricts[newUser].length == 0, "User already added to districts.");
        require(bytes(userHealthRecords[newUser]).length == 0, "User already has a health record.");

        allowedDistricts[newUser].push(District({
            districtAddress: initialDistrictAddress,
            authorizationLevel: initialAuthorizationLevel
        }));

        userHealthRecords[newUser] = initialHealthRecord;
    }

}
