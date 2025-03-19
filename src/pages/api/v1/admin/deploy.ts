// src/pages/api/deploy.ts

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const response = await fetch(
      //note: this is the deploy webhook it should be set by an env var or whatever the astro version of this is.
      "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/939fb54f-5773-47b8-8729-f3c7ba76677d",
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ status: "error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ status: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ status: "error", error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
