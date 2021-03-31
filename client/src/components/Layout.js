import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column vh-100">
            <Header />
            <main className="container mt-3">
                {children} 
            </main>
            <Footer />   
        </div>
    )
}

export default Layout
