import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <section className="contact">
                <div className="question">QUESTIONS: +43 676 350 8788</div>
                <div className="contact__Links">
                    <Link to="https://github.com/Edmuna" target="_blank"><i className="fa-brands fa-github fa-2xl"></i></Link>
                    <Link to="https://www.linkedin.com/in/edin-hamzi%C4%87-655591235" target="_blank">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </Link >
                </div>
            </section>
            <section className="footer__Links">
                <div className="faq">
                    <Link>Ways to Watch</Link>
                    <Link>Corporate Information</Link>
                    <Link>Netflix Originals</Link>
                </div>
                <div className="help__Center">
                    <Link>Help Center</Link>
                    <Link>Jobs</Link>
                    <Link>Contact Us</Link>
                </div>
                <div className="account">
                    <Link>Account</Link>
                    <Link>Redeem Gift Cards</Link>
                    <Link>Privacy</Link>
                </div>
                <div className="media__Center">
                    <Link>Buy Gift Cards</Link>
                    <Link>Cookie Preferences</Link>
                    <Link>Legal Notices</Link>
                </div>
            </section>
            <section className="copyrights">
                Copyrights <i className="fa-solid fa-copyright fa-lg"></i> Edin Hamzić 2023 Austria
            </section>

        </footer>
    )
}

export default Footer




