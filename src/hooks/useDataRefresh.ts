import { useEffect, useRef } from "react";

const STORAGE_KEY = "diverge:data-sync";

export function publishDataChange() {
  if (typeof window === "undefined") return;
  const revision = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  window.localStorage.setItem(STORAGE_KEY, revision);
  window.dispatchEvent(new Event("diverge:data-changed"));
}

export function useDataRefresh(refresh: () => void | Promise<void>, intervalMs = 15000) {
  const refreshRef = useRef(refresh);
  refreshRef.current = refresh;

  useEffect(() => {
    const refreshNow = () => {
      void refreshRef.current();
    };
    const refreshFromStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) refreshNow();
    };

    window.addEventListener("diverge:data-changed", refreshNow);
    window.addEventListener("storage", refreshFromStorage);
    const intervalId = window.setInterval(refreshNow, intervalMs);

    return () => {
      window.removeEventListener("diverge:data-changed", refreshNow);
      window.removeEventListener("storage", refreshFromStorage);
      window.clearInterval(intervalId);
    };
  }, [intervalMs]);
}
