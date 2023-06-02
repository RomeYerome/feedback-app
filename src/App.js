import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from "./components/AboutIconLink"
// import Card from "./components/shared/Card"
import { FeedbackProvider } from "./context/FeedbackContext"


function App() {



    return (
        <FeedbackProvider>

            <Router>

                <Header />
                <div className="container">
                    <Routes>

                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />

                        {/* </Route> */}
                        <Route path='/about' element={<AboutPage />} />

                    </Routes>


                    {/* <Card>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>
                        <NavLink to='/about' activeClassName='active'>About</NavLink>
                    </Card> */}

                </div>

                <AboutIconLink />

            </Router>

        </FeedbackProvider>
    )
}




export default App