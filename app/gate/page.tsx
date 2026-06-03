"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gate() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!code.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim().toUpperCase() }),
      });
      const data = await res.json();
      if (data.valid) {
        sessionStorage.setItem("pp_access", code.trim().toUpperCase());
        window.location.href = "/";
      } else {
        setError("Invalid access code. Please contact PermitPro to get access.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Image src="/logo.png" alt="PermitPro" width={200} height={50} style={{ objectFit: "contain" }} priority />
        </div>
        <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 32 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Enter Access Code</div>
          <div style={{ fontSize: 12, color: "#888", marginBottom: 24 }}>PermitPro is available to licensed contractors by access code only.</div>
          <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === "Enter" && submit()}
            placeholder="ACCESS CODE"
            style={{ width: "100%", background: "#1a1a1a", border: "1px solid #333", borderRadius: 6, padding: "12px 14px", fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: "0.15em", outline: "none", marginBottom: 12, boxSizing: "border-box" }}
            autoFocus
          />
          {error && <div style={{ fontSize: 12, color: "#ff6b6b", marginBottom: 12 }}>{error}</div>}
          <button
            onClick={submit}
            disabled={loading || !code.trim()}
            style={{ width: "100%", background: "#FDB913", border: "none", borderRadius: 6, padding: "13px 0", fontSize: 13, fontWeight: 800, color: "#000", letterSpacing: "0.08em", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", opacity: (!code.trim() || loading) ? 0.6 : 1 }}>
            {loading ? "Verifying..." : "Access PermitPro"}
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: 20, fontSize: 11, color: "#555" }}>
          Need access? Contact us to get your code.
        </div>
      </div>
    </div>
  );
}
