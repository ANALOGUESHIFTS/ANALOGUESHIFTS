import Navigation from '@/components/Layouts/Navigation'
import Footer from './Footer'

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Page Content */}
            <main>{children}</main>

            <Footer />
        </div>
    )
}

export default AppLayout
