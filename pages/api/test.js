export default function handler(req, res) {
  res.json({ message: "API works!", time: new Date().toISOString() });
} 