// TF-IDF cosine similarity match scorer
export function computeMatchScore(resumeText, jobDescription) {
  const r = tokenize(resumeText), j = tokenize(jobDescription);
  const vocab = new Set([...r, ...j]);
  return Math.round(cosineSimilarity(buildVector(r, vocab), buildVector(j, vocab)) * 100);
}
function tokenize(t) { return t.toLowerCase().replace(/[^a-z0-9\s]/g,'').split(/\s+/).filter(w=>w.length>2); }
function buildVector(tokens, vocab) { const f={}; tokens.forEach(t=>f[t]=(f[t]||0)+1); return Array.from(vocab).map(v=>f[v]||0); }
function cosineSimilarity(a, b) { const dot=a.reduce((s,v,i)=>s+v*b[i],0), mA=Math.sqrt(a.reduce((s,v)=>s+v*v,0)), mB=Math.sqrt(b.reduce((s,v)=>s+v*v,0)); return mA&&mB?dot/(mA*mB):0; }
