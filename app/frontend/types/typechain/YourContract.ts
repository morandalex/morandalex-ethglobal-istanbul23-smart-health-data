/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface YourContractInterface extends utils.Interface {
  functions: {
    "addToWhitelist(address)": FunctionFragment;
    "addUser(address,string,address,uint8)": FunctionFragment;
    "allowedDistricts(address,uint256)": FunctionFragment;
    "canModify(address,uint256)": FunctionFragment;
    "getAuthorizationLevelByUserAddress(address,uint256)": FunctionFragment;
    "getDistrictAdressByUserAddress(address,uint256)": FunctionFragment;
    "modifyUserHealthRecord(address,uint256,string)": FunctionFragment;
    "removeFromWhitelist(address)": FunctionFragment;
    "userHealthRecords(address)": FunctionFragment;
    "whitelist(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addToWhitelist"
      | "addUser"
      | "allowedDistricts"
      | "canModify"
      | "getAuthorizationLevelByUserAddress"
      | "getDistrictAdressByUserAddress"
      | "modifyUserHealthRecord"
      | "removeFromWhitelist"
      | "userHealthRecords"
      | "whitelist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addToWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedDistricts",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "canModify",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizationLevelByUserAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDistrictAdressByUserAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyUserHealthRecord",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userHealthRecords",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelist",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedDistricts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canModify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizationLevelByUserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDistrictAdressByUserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyUserHealthRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userHealthRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;

  events: {};
}

export interface YourContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YourContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addToWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUser(
      newUser: PromiseOrValue<string>,
      initialHealthRecord: PromiseOrValue<string>,
      initialDistrictAddress: PromiseOrValue<string>,
      initialAuthorizationLevel: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowedDistricts(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number] & { districtAddress: string; authorizationLevel: number }
    >;

    canModify(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getAuthorizationLevelByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getDistrictAdressByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    modifyUserHealthRecord(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      newRecord: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeFromWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userHealthRecords(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addToWhitelist(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUser(
    newUser: PromiseOrValue<string>,
    initialHealthRecord: PromiseOrValue<string>,
    initialDistrictAddress: PromiseOrValue<string>,
    initialAuthorizationLevel: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowedDistricts(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, number] & { districtAddress: string; authorizationLevel: number }
  >;

  canModify(
    userAddress: PromiseOrValue<string>,
    districtId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAuthorizationLevelByUserAddress(
    userAddress: PromiseOrValue<string>,
    districtId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getDistrictAdressByUserAddress(
    userAddress: PromiseOrValue<string>,
    districtId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  modifyUserHealthRecord(
    userAddress: PromiseOrValue<string>,
    districtId: PromiseOrValue<BigNumberish>,
    newRecord: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeFromWhitelist(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userHealthRecords(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  whitelist(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addToWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUser(
      newUser: PromiseOrValue<string>,
      initialHealthRecord: PromiseOrValue<string>,
      initialDistrictAddress: PromiseOrValue<string>,
      initialAuthorizationLevel: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedDistricts(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, number] & { districtAddress: string; authorizationLevel: number }
    >;

    canModify(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAuthorizationLevelByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getDistrictAdressByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    modifyUserHealthRecord(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      newRecord: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeFromWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    userHealthRecords(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addToWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUser(
      newUser: PromiseOrValue<string>,
      initialHealthRecord: PromiseOrValue<string>,
      initialDistrictAddress: PromiseOrValue<string>,
      initialAuthorizationLevel: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowedDistricts(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canModify(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizationLevelByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDistrictAdressByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyUserHealthRecord(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      newRecord: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeFromWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userHealthRecords(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUser(
      newUser: PromiseOrValue<string>,
      initialHealthRecord: PromiseOrValue<string>,
      initialDistrictAddress: PromiseOrValue<string>,
      initialAuthorizationLevel: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowedDistricts(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canModify(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizationLevelByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDistrictAdressByUserAddress(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyUserHealthRecord(
      userAddress: PromiseOrValue<string>,
      districtId: PromiseOrValue<BigNumberish>,
      newRecord: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeFromWhitelist(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userHealthRecords(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelist(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}