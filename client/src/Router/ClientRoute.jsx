import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage";
import Contact from "../component/commonComponent/Contact";
import Blog from "../component/commonComponent/Blog";
import Service from "../component/commonComponent/Services";
import Home from "../component/commonComponent/Home";
import Login from "../component/commonComponent/Login";
import Register from "../component/commonComponent/Register";
import LogoutClient from "../component/clientComponent/LogoutCleint";
import { Useauth } from "../Auth";
const ClientRoute = () => {
    const { loggedpatient } = Useauth();
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                {
                    loggedpatient ?
                        <Route path="/logoutclient" element={<LogoutClient />} />
                        :
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </>
                }
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
export default ClientRoute;