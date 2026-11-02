import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nexus AI", description: "Painel educacional de análise de mercados" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
