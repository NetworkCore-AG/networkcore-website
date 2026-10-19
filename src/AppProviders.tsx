import { type ReactNode, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async/lib/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface AppProvidersProps {
  children: ReactNode;
  helmetContext?: { helmet?: HelmetServerState };
}

export default function AppProviders({ children, helmetContext }: AppProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
