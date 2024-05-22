import * as queryStore from "@sanity/react-loader";

import { env } from "~/env";
import { client } from "./client";

queryStore.setServerClient(
  client.withConfig({ token: env.SANITY_API_READ_TOKEN }),
);

export const { loadQuery } = queryStore;
