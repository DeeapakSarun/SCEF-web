import { useState } from 'react'
import './App.css'
function Content() {
    const [count, setCount] = useState(0)

    return (
        <div className=" min-h-20 grow flex items-center justify-center">
            <h1 className='bg-black text-white text-3xl'>BODY GOES HERE</h1>
        </div>
    )
}

export default Content
