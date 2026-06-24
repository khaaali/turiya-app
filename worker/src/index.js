const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    const url = new URL(request.url);
    // Expect path: /sync/:key
    const match = url.pathname.match(/^\/sync\/([a-zA-Z0-9-]{8,64})$/);
    if (!match) return json({ error: "Not found" }, 404);

    const key = match[1];

    if (request.method === "GET") {
      const data = await env.TURIYA_KV.get(key);
      if (!data) return json({ data: null });
      return json({ data: JSON.parse(data) });
    }

    if (request.method === "PUT") {
      const body = await request.json();
      await env.TURIYA_KV.put(key, JSON.stringify(body), {
        expirationTtl: 60 * 60 * 24 * 365, // 1 year
      });
      return json({ ok: true });
    }

    if (request.method === "DELETE") {
      await env.TURIYA_KV.delete(key);
      return json({ ok: true });
    }

    return json({ error: "Method not allowed" }, 405);
  },
};
