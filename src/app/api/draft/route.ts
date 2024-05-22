import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { client } from "studio/lib/client";
import { env } from "~/env";

const clientWithToken = client.withConfig({ token: env.SANITY_API_READ_TOKEN });

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url,
  );

  if (!isValid) return new Response("Invalid secret", { status: 401 });

  draftMode().enable();
  redirect(redirectTo);
}
