import { ComponentProps } from "@/interfaces";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;