const NavBar = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-xs-12">
                    <nav class="navbar fixed-top navbar-expand-md scrolling-navbar">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="./index.html">
                                        Inicio <span class="sr-only"></span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/iluminacion.html">
                                        {" "}
                                        Iluminación{" "}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/espacio.html">
                                        {" "}
                                        Espacio muebles{" "}
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./pages/contacto.html">
                                        {" "}
                                        Contacto{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
