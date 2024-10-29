import React from "react";
import { Link,Outlet } from "react-router-dom";

const LayoutPage = ()=>{
  return(
    <>
      {/* <div className="d-flex">
        <Link className="m-2" to="Home">Home</Link>
        <Link className="m-2" to="About">About</Link>
        <Link className="m-2" to="Contact">Contact</Link>
        <Link className="m-2" to="Service">Service</Link>
        <Link className="m-2" to="Help">Help</Link>        
      </div> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="m-2" to="Home">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="m-2" to="/About">About</Link>
        </li>
        <li>
        <Link className="m-2" to="/Service">Service</Link>
        </li>
        <li class="nav-item">
        <Link className="m-2" to="/Contact">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default LayoutPage;