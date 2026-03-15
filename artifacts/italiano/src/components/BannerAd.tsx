import { useEffect } from "react";
import { showBanner, isNative } from "@/lib/admob";

export default function BannerAd() {
  useEffect(() => {
    showBanner().catch(() => {});
  }, []);

  if (isNative()) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(480px, 100vw)",
        height: "56px",
        background: "#f1f1f1",
        borderTop: "1px solid #ddd",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <span style={{ fontSize: "11px", color: "#aaa", fontFamily: "sans-serif" }}>
        إعلان AdMob — يظهر فقط داخل التطبيق
      </span>
    </div>
  );
}
