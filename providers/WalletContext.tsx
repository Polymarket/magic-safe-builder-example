import { createContext, useContext } from "react";
import { Magic as MagicBase } from "magic-sdk";
import { PublicClient, WalletClient } from "viem";
import { providers } from "ethers";

export interface WalletContextType {
  magic: MagicBase | null;
  eoaAddress: `0x${string}` | undefined;
  walletClient: WalletClient | null;
  ethersSigner: providers.JsonRpcSigner | null;
  publicClient: PublicClient | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: boolean;
}

export const WalletContext = createContext<WalletContextType>({
  magic: null,
  eoaAddress: undefined,
  walletClient: null,
  ethersSigner: null,
  publicClient: null,
  connect: async () => {},
  disconnect: async () => {},
  isConnected: false,
});

export function useWallet(): WalletContextType {
  return useContext(WalletContext);
}
