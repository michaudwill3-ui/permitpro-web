"use client";
import { useState } from "react";
import Image from "next/image";
import { TRADES, STATES, CITIES, getJobTypes, getChecklist } from "./data/permits";

type Screen = "form" | "results";

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

  function generate() { setChecked(new Set()); setScreen("results"); }
  function reset() { setScreen("form"); setTrade(""); setJob(""); setState(""); setCity(""); setChecked(new Set()); }
  function toggleCheck(id: string) {
    setChecked(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", minHeight: "100vh", paddingBottom: 40 }}>
      <div style={{ background: "#000", padding: "16px 20px 12px", textAlign: "center", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 10 }}>
        <Image src="/logo.png" alt="PermitPro" width={180} height={45} style={{ objectFit: "contain" }} priority />
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

          <button onClick={reset} style={{ background: "transparent", border: "1px solid #333", color: "#fff", borderRadius: 6, padding: "12px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginTop: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            ← New Search
          </button>
        </div>
      )}
    </div>
  );
}