import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="vh-100">
            <Header />
            <main className="container mt-3">
                {children}
            </main>
        </div>
    )
}

export default Layout
