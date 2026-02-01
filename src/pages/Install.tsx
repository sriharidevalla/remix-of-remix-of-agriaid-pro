import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Check, Share, PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Already Installed!</CardTitle>
            <CardDescription>
              Plant Health Advisory is installed on your device. Open it from your home screen.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/">
              <Button>Go to App</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Install Plant Health Advisory</CardTitle>
          <CardDescription>
            Get quick access to crop disease diagnosis right from your home screen
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isIOS ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                To install on your iPhone or iPad:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Share className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">1. Tap the Share button</p>
                    <p className="text-xs text-muted-foreground">
                      Located at the bottom of Safari
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <PlusSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">2. Select "Add to Home Screen"</p>
                    <p className="text-xs text-muted-foreground">
                      Scroll down in the share menu to find it
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">3. Tap "Add"</p>
                    <p className="text-xs text-muted-foreground">
                      The app will appear on your home screen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : deferredPrompt ? (
            <Button onClick={handleInstall} className="w-full" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Install App
            </Button>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                Open this page in Chrome or Edge browser, then tap the menu and select "Install app" or "Add to Home Screen"
              </p>
            </div>
          )}

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Why install?</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Quick access from home screen
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Always available on your device
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Full screen experience
              </li>
            </ul>
          </div>

          <Link to="/" className="block">
            <Button variant="outline" className="w-full">
              Continue in Browser
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Install;
