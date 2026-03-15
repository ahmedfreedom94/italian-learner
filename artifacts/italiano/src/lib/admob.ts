import { Capacitor } from "@capacitor/core";
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  AdOptions,
  AdLoadInfo,
  InterstitialAdPluginEvents,
} from "@capacitor-community/admob";

const BANNER_ID = "ca-app-pub-3322579866946140/1119585755";
const INTERSTITIAL_ID = "ca-app-pub-3322579866946140/8319418928";

export const isNative = () => Capacitor.isNativePlatform();

export async function initAdMob() {
  if (!isNative()) return;
  await AdMob.initialize({ initializeForTesting: false });
}

export async function showBanner() {
  if (!isNative()) return;
  const options: BannerAdOptions = {
    adId: BANNER_ID,
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
    isTesting: false,
  };
  await AdMob.showBanner(options);
}

export async function hideBanner() {
  if (!isNative()) return;
  await AdMob.hideBanner();
}

export async function prepareInterstitial() {
  if (!isNative()) return;
  const options: AdOptions = {
    adId: INTERSTITIAL_ID,
    isTesting: false,
  };
  await AdMob.prepareInterstitial(options);
}

export async function showInterstitial() {
  if (!isNative()) return;
  await AdMob.showInterstitial();
}

export function onInterstitialDismiss(cb: () => void) {
  if (!isNative()) return;
  AdMob.addListener(InterstitialAdPluginEvents.Dismissed, cb);
}
