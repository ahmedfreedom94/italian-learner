import { Capacitor } from "@capacitor/core";

const BANNER_ID = "ca-app-pub-3322579866946140/1119585755";
const INTERSTITIAL_ID = "ca-app-pub-3322579866946140/8319418928";

export const isNative = () => Capacitor.isNativePlatform();

export async function initAdMob() {
  if (!isNative()) return;
}

export async function showBanner() {
  if (!isNative()) return;
}

export async function hideBanner() {
  if (!isNative()) return;
}

export async function prepareInterstitial() {
  if (!isNative()) return;
}

export async function showInterstitial() {
  if (!isNative()) return;
}

export function onInterstitialDismiss(cb: () => void) {
  if (!isNative()) return;
}
