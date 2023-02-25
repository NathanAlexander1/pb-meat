import React from 'react'

function NavBar() {
  return (
    <div className="sections">
    <div className="navList d-flex justify-content-around flex-wrap mb-3 mt-4">
    
    <a className='navLink text-decoration-none font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/about">About</a>
    <a className='navLink text-decoration-none font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/recipes">Recipes</a>
    <a className='navLink text-decoration-none font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/merch">Merch</a>
    <a className='navLink text-decoration-none font-mono font-bold hover:text-yellow-400  hover:tracking-wide' href="/contact">Contact</a>
</div>
<hr/>
</div>
  )
}

export default NavBar