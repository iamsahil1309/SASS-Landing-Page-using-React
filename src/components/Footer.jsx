import React from 'react'

function Footer() {
  return (
    <footer className='text-center p-8 text-gray-600 text-lg border-t bg-white/20 backdrop-blur-xl mt-10'>
        <p>
            &copy: {new Date().getFullYear()} Sahil Singh. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer
