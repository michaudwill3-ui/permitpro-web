"use client";
import { useState } from "react";
import Image from "next/image";
import { TRADES, STATES, CITIES, getJobTypes, getChecklist } from "./data/permits";
import { getMaterials } from "./data/materials";

type Screen = "form" | "results";

function doPrint(trade: string, job: string, state: string, city: string, safetyAlerts: any[], permits: any[], materials: any[]) {
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>PermitPro — ${trade} ${job}</title>
<style>body{font-family:Arial,sans-serif;color:#000;padding:32px;max-width:800px;margin:0 auto}.logo{font-size:26px;font-weight:900;letter-spacing:.05em;border-bottom:3px solid #FDB913;padding-bottom:12px;margin-bottom:16px}.logo span{color:#FDB913}.meta{font-size:13px;color:#444;margin-bottom:20px}h2{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#333;border-bottom:2px solid #FDB913;padding-bottom:4px;margin:20px 0 10px}.item{border:1px solid #ddd;border-radius:4px;padding:10px 12px;margin-bottom:8px}.item-title{font-weight:700;font-size:13px}.item-sub{font-size:12px;color:#333;font-weight:700;margin-top:2px}.item-desc{font-size:12px;color:#555;margin-top:4px}.item-footer{font-size:12px;color:#333;margin-top:6px;font-weight:700}.critical{border-left:3px solid #cc3333}.critical .item-title{color:#cc3333}.footer{margin-top:32px;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:10px;text-align:center}</style>
</head><body>
<div class="logo">PERMIT<span>PRO</span></div>
<div class="meta"><strong>${trade} — ${job}</strong>${city||state?` &nbsp;|&nbsp; ${[city,state].filter(Boolean).join(", ")}`:""} &nbsp;|&nbsp; ${new Date().toLocaleDateString()}</div>
${safetyAlerts.length>0?`<h2>Safety Alerts</h2>${safetyAlerts.map(a=>`<div class="item${a.isCritical?" critical":""}"><div class="item-title">${a.title}</div><div class="item-desc">${a.description}</div></div>`).join("")}`:""}
<h2>Permits Required</h2>
${permits.map(p=>`<div class="item"><div class="item-title">${p.permitName}</div><div class="item-sub">${p.department} Dept.</div>${p.description?`<div class="item-desc">${p.description}</div>`:""}<div class="item-footer">${p.phone?`📞 ${p.phone} &nbsp;|&nbsp; `:""}Est. ${p.estimatedDays} days</div></div>`).join("")}
${materials.length>0?`<h2>Code-Required Materials & Specs</h2>${materials.map(m=>`<div class="item"><div class="item-title">${m.item}</div><div class="item-desc">${m.spec}</div>${m.code?`<div class="item-sub">${m.code}</div>`:""}</div>`).join("")}`:""}
<div class="footer">DISCLAIMER: PermitPro is an informational tool only. This checklist is not legal, governmental, or safety advice. Permit requirements, codes, and safety standards vary by jurisdiction and change frequently. Always verify all requirements with the appropriate local, state, and federal authorities before starting any work. PermitPro and its operators assume no liability for errors, omissions, inaccuracies, or any reliance placed on this information.</div>
</body></html>`;
  const w = window.open("","_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 400);
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("form");
  const [trade, setTrade] = useState("");
  const [job, setJob] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const jobTypes = trade ? getJobTypes(trade) : [];
  const cities = state ? (CITIES[state] || []) : [];
  const canGenerate = trade && job;
  const checklist = screen === "results" ? getChecklist(trade, job, state, city) : null;
  const materials = screen === "results" ? getMaterials(trade, job) : [];

  function generate() { setChecked(new Set()); setScreen("results"); }
  function reset() { setScreen("form"); setTrade(""); setJob(""); setState(""); setCity(""); setChecked(new Set()); }
  function toggleCheck(id: string) {
    setChecked(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", minHeight: "100vh", paddingBottom: 40 }}>
      <div style={{ background: "#000", padding: "12px 20px", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Image src="/logo.png" alt="PermitPro" width={180} height={45} style={{ objectFit: "contain" }} priority />
        {screen === "results" && checklist && (
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => doPrint(trade, job, state, city, checklist.safetyAlerts, checklist.permits, materials)}
              style={{ background: "#111", border: "1px solid #444", color: "#fff", borderRadius: 6, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em", display: "flex", alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:6}}><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Print
            </button>
            <button onClick={() => {
              const blob = new Blob([`<html><head><title>PermitPro</title></head><body>${document.querySelector('[data-results]')?.innerHTML||""}</body></html>`], {type:"text/html"});
              const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
              a.download = `permitpro-${trade.toLowerCase().replace(/\s+/g,"-")}.html`; a.click();
            }}
              style={{ background: "#111", border: "1px solid #444", color: "#fff", borderRadius: 6, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em", display: "flex", alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:6}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download
            </button>
          </div>
        )}
      </div>

      {screen === "form" ? (
        <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <span className="label">Trade Type</span>
            <div style={{ position: "relative" }}>
              <select value={trade} onChange={e => { setTrade(e.target.value); setJob(""); }}>
                <option value="">Select trade...</option>
                {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#FDB913", pointerEvents: "none" }}>▼</span>
            </div>
          </div>

          <div>
            <span className="label">Job Type</span>
            <div style={{ position: "relative" }}>
              <select value={job} onChange={e => setJob(e.target.value)} disabled={!trade}>
                <option value="">Select job...</option>
                {jobTypes.map(j => <option key={j} value={j}>{j}</option>)}
              </select>
              <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#FDB913", pointerEvents: "none" }}>▼</span>
            </div>
          </div>

          <div>
            <span className="label">State</span>
            <div style={{ position: "relative" }}>
              <select value={state} onChange={e => { setState(e.target.value); setCity(""); }}>
                <option value="">Select state...</option>
                {STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#FDB913", pointerEvents: "none" }}>▼</span>
            </div>
          </div>

          {state && (
            <div>
              <span className="label">City / Town</span>
              <div style={{ position: "relative" }}>
                <select value={city} onChange={e => setCity(e.target.value)}>
                  <option value="">Select city...</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#FDB913", pointerEvents: "none" }}>▼</span>
              </div>
            </div>
          )}

          <button className="btn-gold" onClick={generate} disabled={!canGenerate} style={{ marginTop: 8 }}>
            Generate Checklist
          </button>
        </div>

      ) : (
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "#111", borderRadius: 8, padding: "14px 16px", borderLeft: "3px solid #FDB913" }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", color: "#FDB913" }}>{trade} — {job}</div>
            {(state || city) && <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>{[city, state].filter(Boolean).join(", ")}</div>}
          </div>

          {checklist && checklist.safetyAlerts.length > 0 && (
            <div>
              <span className="label">Safety Alerts</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {checklist.safetyAlerts.map((alert, i) => {
                  const id = `alert-${i}`;
                  const isChecked = checked.has(id);
                  return (
                    <div key={id} className="card" onClick={() => toggleCheck(id)}
                      style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", opacity: isChecked ? 0.45 : 1, borderLeft: alert.isCritical ? "3px solid #FF6B6B" : "none" }}>
                      <span style={{ fontSize: 18, color: "#FDB913", flexShrink: 0, marginTop: 1 }}>{isChecked ? "☑" : "☐"}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: alert.isCritical ? "#FF6B6B" : "#fff" }}>{alert.title}</div>
                        <div style={{ fontSize: 12, color: "#ccc", marginTop: 3 }}>{alert.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <span className="label">Permits Required</span>
            {checklist && checklist.permits.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {checklist.permits.map((permit, i) => {
                  const id = `permit-${i}`;
                  const isChecked = checked.has(id);
                  return (
                    <div key={id} className="card" onClick={() => toggleCheck(id)}
                      style={{ cursor: "pointer", opacity: isChecked ? 0.45 : 1 }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 18, color: "#FDB913", flexShrink: 0 }}>{isChecked ? "☑" : "☐"}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 700 }}>{permit.permitName}</div>
                          <div style={{ fontSize: 12, color: "#FDB913", marginTop: 2 }}>{permit.department} Dept.</div>
                          {permit.description && <div style={{ fontSize: 12, color: "#ccc", marginTop: 4 }}>{permit.description}</div>}
                          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                            {permit.phone && (
                              <a href={`tel:${permit.phone.replace(/\D/g,"")}`}
                                style={{ fontSize: 12, fontWeight: 700, color: "#FDB913", textDecoration: "none" }}
                                onClick={e => e.stopPropagation()}>
                                📞 {permit.phone}
                              </a>
                            )}
                            <span style={{ fontSize: 12, color: "#888" }}>Est. {permit.estimatedDays} days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card" style={{ color: "#888", fontSize: 13 }}>No permits required for this job type.</div>
            )}
          </div>

          {materials.length > 0 && (
            <div>
              <span className="label">Code-Required Materials & Specs</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {materials.map((mat, i) => (
                  <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>{mat.item}</div>
                      <div style={{ fontSize: 12, color: "#ccc", marginTop: 3 }}>{mat.spec}</div>
                    </div>
                    {mat.code && (
                      <span style={{ fontSize: 11, color: "#FDB913", fontWeight: 700, whiteSpace: "nowrap", marginTop: 2 }}>{mat.code}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

                    <div style={{ fontSize: 11, color: "#555", lineHeight: 1.6, padding: "14px 0", borderTop: "1px solid #222", marginTop: 8 }}>
            <strong style={{ color: "#888" }}>DISCLAIMER:</strong> PermitPro is an informational tool only. This checklist is not legal, governmental, or safety advice. Permit requirements, codes, and safety standards vary by jurisdiction and change frequently. Always verify all requirements with the appropriate local, state, and federal authorities before starting any work. PermitPro and its operators assume no liability for errors, omissions, inaccuracies, or any reliance placed on this information.
          </div>
          <button onClick={reset} style={{ background: "transparent", border: "1px solid #333", color: "#fff", borderRadius: 6, padding: "12px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginTop: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            ← New Search
          </button>
        </div>
      )}
    </div>
  );
}