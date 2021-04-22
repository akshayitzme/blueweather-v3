import React from 'react'

const Footer= ()=>{
    return(
    <footer className="footer d-flex justify-content-between align-items-center px-2">
    <span className="text-white f-5 fw-bold fs-7">coded with ❤️ in react.js </span>
    <div className="">
        <a target="_blank" className="text-decoration-none" href="https://github.com/akshayitzme/blueweather-v3">
            <i className="bi fs-3 bi-github text-dark"></i>
        </a>

        <a target="_blank" className="text-decoration-none" href="https://instagram.com/akshayitzme">
            <i class="clr-12 fs-3 bi bi-instagram"></i>    
        </a> 
        
        <a target="_blank" className="text-decoration-none" href="https://t.me/coderitzme">
            <i className="bi bi-telegram fs-3 text-white"></i>
        </a>
    </div>
</footer>
    )
}

export default Footer
