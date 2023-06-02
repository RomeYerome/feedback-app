import React from 'react'
// import ReactDOM from 'react-dom'    // imports the entire react-dom library
// import {render} from 'react-dom'    // imports just the render method from the react-dom library
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


const container = document.getElementById('root')

// OLD METHOD OF RENDERING YOUR APP USING ReactDOM.render
// ReactDOM.render(
//     <React.StrictMode>
//         <App />,
//     </React.StrictMode>

//     , container
// )

const root = createRoot(container)
root.render(<App />)