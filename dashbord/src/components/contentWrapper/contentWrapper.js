import ContentRowTop from "./contentRowTop/contentRowTop"
import Footer from "./footer/footer"
import TopBar from "./topBar.js/topBar"

export default function ContentWrapper() {
    return (
        <div 
         id="content"
        >
        <TopBar />
        <ContentRowTop />
        <Footer />
        </div>
    )
}