import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed
    const isInstalled = window.matchMedia("(display-mode: standalone)").matches;
    const isDismissed = localStorage.getItem("installBannerDismissed");
    
    if (isInstalled || isDismissed) {
      return;
    }

    // Check if running on iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Show banner after delay for all users
    const timer = setTimeout(() => setShowBanner(true), 3000);

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("installBannerDismissed", "true");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-card border border-border rounded-xl shadow-lg p-4">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Smartphone className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm">Install Plant Health App</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Get quick access to crop diagnosis from your home screen
            </p>
            
            <div className="flex gap-2 mt-3">
              {isIOS ? (
                <Link to="/install" className="flex-1">
                  <Button size="sm" className="w-full text-xs">
                    How to Install
                  </Button>
                </Link>
              ) : deferredPrompt ? (
                <Button size="sm" onClick={handleInstall} className="flex-1 text-xs">
                  <Download className="w-3 h-3 mr-1" />
                  Install Now
                </Button>
              ) : (
                <Link to="/install" className="flex-1">
                  <Button size="sm" className="w-full text-xs">
                    Learn More
                  </Button>
                </Link>
              )}
              <Button size="sm" variant="ghost" onClick={handleDismiss} className="text-xs">
                Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallBanner;
