import NextAuthProvider from "./_components/next-auth.provider";
import ReactQueryProvider from "./_components/react-query-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>{children}</NextAuthProvider>
    </ReactQueryProvider>
  );
}
