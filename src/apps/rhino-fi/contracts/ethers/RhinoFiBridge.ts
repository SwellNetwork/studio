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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface RhinoFiBridgeInterface extends utils.Interface {
  functions: {
    'allWithdrawalBalances(uint256[],uint256)': FunctionFragment;
    'approveTokenToDeployedProxy(address)': FunctionFragment;
    'deposit(uint256,uint256,uint256,uint256,address,uint256)': FunctionFragment;
    'depositEth(uint256,uint256,uint256)': FunctionFragment;
    'depositWithPermit(uint256,uint256,uint256,uint256,address,uint256,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'initialize(address)': FunctionFragment;
    'instance()': FunctionFragment;
    'registerAndDeposit(uint256,bytes,uint256,uint256,uint256,address,uint256)': FunctionFragment;
    'registerAndDepositEth(uint256,bytes,uint256,uint256)': FunctionFragment;
    'registerAndDepositWithPermit(uint256,bytes,uint256,uint256,uint256,address,uint256,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allWithdrawalBalances'
      | 'approveTokenToDeployedProxy'
      | 'deposit'
      | 'depositEth'
      | 'depositWithPermit'
      | 'initialize'
      | 'instance'
      | 'registerAndDeposit'
      | 'registerAndDepositEth'
      | 'registerAndDepositWithPermit',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'allWithdrawalBalances',
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'approveTokenToDeployedProxy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'depositEth',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'depositWithPermit',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'initialize', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'instance', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'registerAndDeposit',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'registerAndDepositEth',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'registerAndDepositWithPermit',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;

  decodeFunctionResult(functionFragment: 'allWithdrawalBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approveTokenToDeployedProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositEth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositWithPermit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'instance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerAndDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerAndDepositEth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerAndDepositWithPermit', data: BytesLike): Result;

  events: {};
}

export interface RhinoFiBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RhinoFiBridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allWithdrawalBalances(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _whoKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { balances: BigNumber[] }>;

    approveTokenToDeployedProxy(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    depositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    depositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _deployedStarkExProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    instance(overrides?: CallOverrides): Promise<[string]>;

    registerAndDeposit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    registerAndDepositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    registerAndDepositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  allWithdrawalBalances(
    _tokenIds: PromiseOrValue<BigNumberish>[],
    _whoKey: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  approveTokenToDeployedProxy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit(
    starkKey: PromiseOrValue<BigNumberish>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    quantizedAmount: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    quantum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  depositEth(
    starkKey: PromiseOrValue<BigNumberish>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  depositWithPermit(
    starkKey: PromiseOrValue<BigNumberish>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    quantizedAmount: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    quantum: PromiseOrValue<BigNumberish>,
    permitValue: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _deployedStarkExProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  instance(overrides?: CallOverrides): Promise<string>;

  registerAndDeposit(
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    quantizedAmount: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    quantum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  registerAndDepositEth(
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  registerAndDepositWithPermit(
    starkKey: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    assetType: PromiseOrValue<BigNumberish>,
    vaultId: PromiseOrValue<BigNumberish>,
    quantizedAmount: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<string>,
    quantum: PromiseOrValue<BigNumberish>,
    permitValue: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allWithdrawalBalances(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _whoKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    approveTokenToDeployedProxy(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    deposit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    depositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    depositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    initialize(_deployedStarkExProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    instance(overrides?: CallOverrides): Promise<string>;

    registerAndDeposit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    registerAndDepositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    registerAndDepositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    allWithdrawalBalances(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _whoKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approveTokenToDeployedProxy(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    depositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    depositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    initialize(
      _deployedStarkExProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    instance(overrides?: CallOverrides): Promise<BigNumber>;

    registerAndDeposit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    registerAndDepositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    registerAndDepositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allWithdrawalBalances(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      _whoKey: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approveTokenToDeployedProxy(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    depositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    depositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _deployedStarkExProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    instance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerAndDeposit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    registerAndDepositEth(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    registerAndDepositWithPermit(
      starkKey: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      assetType: PromiseOrValue<BigNumberish>,
      vaultId: PromiseOrValue<BigNumberish>,
      quantizedAmount: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<string>,
      quantum: PromiseOrValue<BigNumberish>,
      permitValue: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
