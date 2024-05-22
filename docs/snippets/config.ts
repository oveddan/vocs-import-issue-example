import { zora } from "viem/chains";
import { http, createPublicClient } from "viem";

export const publicClient = createPublicClient({
  // this will determine which chain to interact with
  chain: zora,
  transport: http(),
});
