import './App.css'
import {Route, Routes} from "react-router-dom"
import Header from './components/MainPage/header/Header'
import Preview from './components/MainPage/preview/Preview'
import About from './components/MainPage/about/About'
import Veterans from './components/MainPage/veterans/Veterans'
import Footer from './components/MainPage/footer/Footer'
import Login from './components/authPage/Login'
import Register from './components/authPage/Register'
import PrivateRoutes from './components/authPage/PrivateRoutes'
import History from './components/historyPage/history/History'
import VeteranProfile from './components/veteranPage/veteranProfile/VeteranProfile'
import UserProfile from './components/userPage/userProfile/UserProfile'
import AdminProfile from './components/adminPage/adminProfile/AdminProfile'

function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<>
				<Header/>
				<Preview/>
				<About/>
				<Veterans/>
				<Footer/>
			</>}/>
			<Route element={<PrivateRoutes/>}>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
			</Route>
			<Route path="/history" element={<>
				<Header/>
				<History/>
				<Footer/>
			</>}/>
			<Route path="/veterans/:id" element={<>
				<Header/>
				<VeteranProfile/>
				<Footer/>
			</>}/>
			<Route path="/profile" element={<>
				<Header/>
				<UserProfile/>
				<Footer/>
			</>}/>
			<Route path="/admin" element={<>
				<Header/>
				<AdminProfile/>
				<Footer/>
			</>}/>
		</Routes>
		</>
	)
}

export default App
