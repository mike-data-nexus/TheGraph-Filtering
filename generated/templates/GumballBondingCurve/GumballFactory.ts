// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxiesDeployed extends ethereum.Event {
  get params(): ProxiesDeployed__Params {
    return new ProxiesDeployed__Params(this);
  }
}

export class ProxiesDeployed__Params {
  _event: ProxiesDeployed;

  constructor(event: ProxiesDeployed) {
    this._event = event;
  }

  get tokenProxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gumballProxy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get gumbar(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenLibrary(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get gumballLibrary(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class UpdateNftLibrary extends ethereum.Event {
  get params(): UpdateNftLibrary__Params {
    return new UpdateNftLibrary__Params(this);
  }
}

export class UpdateNftLibrary__Params {
  _event: UpdateNftLibrary;

  constructor(event: UpdateNftLibrary) {
    this._event = event;
  }

  get newLibraryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpdateTokenLibrary extends ethereum.Event {
  get params(): UpdateTokenLibrary__Params {
    return new UpdateTokenLibrary__Params(this);
  }
}

export class UpdateTokenLibrary__Params {
  _event: UpdateTokenLibrary;

  constructor(event: UpdateTokenLibrary) {
    this._event = event;
  }

  get newLibraryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GumballFactory__deployInfoResult {
  value0: Address;
  value1: Address;
  value2: boolean;

  constructor(value0: Address, value1: Address, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }

  getToken(): Address {
    return this.value0;
  }

  getNft(): Address {
    return this.value1;
  }

  get_whitelist(): boolean {
    return this.value2;
  }
}

export class GumballFactory extends ethereum.SmartContract {
  static bind(address: Address): GumballFactory {
    return new GumballFactory("GumballFactory", address);
  }

  deployInfo(id: BigInt): GumballFactory__deployInfoResult {
    let result = super.call(
      "deployInfo",
      "deployInfo(uint256):(address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new GumballFactory__deployInfoResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBoolean()
    );
  }

  try_deployInfo(
    id: BigInt
  ): ethereum.CallResult<GumballFactory__deployInfoResult> {
    let result = super.tryCall(
      "deployInfo",
      "deployInfo(uint256):(address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GumballFactory__deployInfoResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBoolean()
      )
    );
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gumballLibraryAddress(): Address {
    let result = super.call(
      "gumballLibraryAddress",
      "gumballLibraryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_gumballLibraryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gumballLibraryAddress",
      "gumballLibraryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gumballsDeployed(param0: BigInt): Address {
    let result = super.call(
      "gumballsDeployed",
      "gumballsDeployed(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_gumballsDeployed(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gumballsDeployed",
      "gumballsDeployed(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenLibraryAddress(): Address {
    let result = super.call(
      "tokenLibraryAddress",
      "tokenLibraryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_tokenLibraryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenLibraryAddress",
      "tokenLibraryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokensDeployed(param0: BigInt): Address {
    let result = super.call(
      "tokensDeployed",
      "tokensDeployed(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_tokensDeployed(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokensDeployed",
      "tokensDeployed(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalDeployed(): BigInt {
    let result = super.call("totalDeployed", "totalDeployed():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalDeployed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalDeployed",
      "totalDeployed():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whitelist(param0: BigInt): boolean {
    let result = super.call("whitelist", "whitelist(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whitelist(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("whitelist", "whitelist(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenLibraryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _gumballLibraryAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddOrRemoveFactoryWhitelistCall extends ethereum.Call {
  get inputs(): AddOrRemoveFactoryWhitelistCall__Inputs {
    return new AddOrRemoveFactoryWhitelistCall__Inputs(this);
  }

  get outputs(): AddOrRemoveFactoryWhitelistCall__Outputs {
    return new AddOrRemoveFactoryWhitelistCall__Outputs(this);
  }
}

export class AddOrRemoveFactoryWhitelistCall__Inputs {
  _call: AddOrRemoveFactoryWhitelistCall;

  constructor(call: AddOrRemoveFactoryWhitelistCall) {
    this._call = call;
  }

  get _addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bool(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AddOrRemoveFactoryWhitelistCall__Outputs {
  _call: AddOrRemoveFactoryWhitelistCall;

  constructor(call: AddOrRemoveFactoryWhitelistCall) {
    this._call = call;
  }
}

export class DeployProxiesCall extends ethereum.Call {
  get inputs(): DeployProxiesCall__Inputs {
    return new DeployProxiesCall__Inputs(this);
  }

  get outputs(): DeployProxiesCall__Outputs {
    return new DeployProxiesCall__Outputs(this);
  }
}

export class DeployProxiesCall__Inputs {
  _call: DeployProxiesCall;

  constructor(call: DeployProxiesCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _URIs(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _supplyCap(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _init_vBase(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _baseToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _artist(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _delay(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class DeployProxiesCall__Outputs {
  _call: DeployProxiesCall;

  constructor(call: DeployProxiesCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateNFTLibraryCall extends ethereum.Call {
  get inputs(): UpdateNFTLibraryCall__Inputs {
    return new UpdateNFTLibraryCall__Inputs(this);
  }

  get outputs(): UpdateNFTLibraryCall__Outputs {
    return new UpdateNFTLibraryCall__Outputs(this);
  }
}

export class UpdateNFTLibraryCall__Inputs {
  _call: UpdateNFTLibraryCall;

  constructor(call: UpdateNFTLibraryCall) {
    this._call = call;
  }

  get _gumballLibraryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateNFTLibraryCall__Outputs {
  _call: UpdateNFTLibraryCall;

  constructor(call: UpdateNFTLibraryCall) {
    this._call = call;
  }
}

export class UpdateTokenLibraryCall extends ethereum.Call {
  get inputs(): UpdateTokenLibraryCall__Inputs {
    return new UpdateTokenLibraryCall__Inputs(this);
  }

  get outputs(): UpdateTokenLibraryCall__Outputs {
    return new UpdateTokenLibraryCall__Outputs(this);
  }
}

export class UpdateTokenLibraryCall__Inputs {
  _call: UpdateTokenLibraryCall;

  constructor(call: UpdateTokenLibraryCall) {
    this._call = call;
  }

  get _tokenLibraryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTokenLibraryCall__Outputs {
  _call: UpdateTokenLibraryCall;

  constructor(call: UpdateTokenLibraryCall) {
    this._call = call;
  }
}

export class WhitelistExistingCall extends ethereum.Call {
  get inputs(): WhitelistExistingCall__Inputs {
    return new WhitelistExistingCall__Inputs(this);
  }

  get outputs(): WhitelistExistingCall__Outputs {
    return new WhitelistExistingCall__Outputs(this);
  }
}

export class WhitelistExistingCall__Inputs {
  _call: WhitelistExistingCall;

  constructor(call: WhitelistExistingCall) {
    this._call = call;
  }

  get _index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bool(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WhitelistExistingCall__Outputs {
  _call: WhitelistExistingCall;

  constructor(call: WhitelistExistingCall) {
    this._call = call;
  }
}
