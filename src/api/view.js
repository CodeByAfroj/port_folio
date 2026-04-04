// api/views.js

import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  try {
    const views = await kv.incr("portfolio-views");
    res.status(200).json({ views });
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
}