import { Toaster } from "@/components/ui/sonner";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( <main>{children}
<Toaster richColors />
</main> )
}