// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (<>
    <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-end-3">@Ayush Barnwal</div>
        <div className="col-span-2 col-end-7">
            <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  </>
  );
}

export default Navbar;
