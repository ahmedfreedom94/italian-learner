import { useEffect } from "react";
import { prepareInterstitial, showInterstitial, onInterstitialDismiss, isNative } from "@/lib/admob";

type Props = { onClose: () => void };

export default function InterstitialAd({ onClose }: Props) {
  useEffect(() => {
    if (isNative()) {
      prepareInterstitial()
        .then(() => showInterstitial())
        .catch(() => onClose());
      onInterstitialDismiss(onClose);
    } else {
      onClose();
    }
  }, []);

  return null;
}
