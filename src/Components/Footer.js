import logoImg from "C:/Users/aasid/front-end-meta/src/Assets/Logo.svg";


function Footer() {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logoImg} alt=""/>
                    <p>
                        We are a fmaily owned Mediterranean restaurant, focused on traditional recipes. 
                    </p>
                </div>
                <div>
                    <h3>
                        Important links
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>  
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Order Online</a></li>
                            <li><a href="/">Reservations</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                    </h3>
                </div>

                <div>
                    <h3>
                        Contact
                    </h3>
                    <ul>
                        <li>Adress: 73439 Town Name</li>
                        <li>Email: Littlelemon@mail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>
                        Media
                        <ul>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Facebook</a></li>  
                        </ul>
                    </h3>
                </div>

            </section>
        </footer>
    )
}
export default Footer;