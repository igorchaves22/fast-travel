import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { ScrollToTop } from "../ScrollToTop";

export const RootLayout = () => (
    <div>
        <Header />
        <Main />
        <ScrollToTop />
        <Footer />
    </div>
);
