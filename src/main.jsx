import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)


//HTTP GET REQUEST
async function getData() {
    try {
        const result = await ('https://test.nl');
    } catch (e) {
        console.error(e);
    }
}




