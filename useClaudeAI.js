import { useState } from "react";
const API = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-20250514";
export function useClaudeAI() {
  const [loading, setLoading] = useState(false);
  async function callClaude(system, user, max=1000) {
    setLoading(true);
    try {
      const r = await fetch(API, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({model:MODEL,max_tokens:max,system,messages:[{role:"user",content:user}]}) });
      const d = await r.json();
      return d.content?.find(b=>b.type==="text")?.text || "";
    } finally { setLoading(false); }
  }
  async function analyzeResume(text) {
    const result = await callClaude("Return ONLY JSON: {"strengths":[],"weaknesses":[],"roles":[{"role":"","match":0}],"improvements":[],"timeline":""}", );
    return JSON.parse(result.replace(/```json|```/g,"").trim());
  }
  async function tailorResume(resume, jd) { return callClaude("Rewrite resume to match JD. Keep facts accurate. Return only resume text.", ); }
  return { analyzeResume, tailorResume, loading };
}
