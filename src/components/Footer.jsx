import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <Link to="https://github.com/Edmuna" target="_blank"><i className="fa-brands fa-github fa-2xl"></i></Link>
            <Link to="https://www.linkedin.com/in/edin-hamzi%C4%87-655591235" target="_blank">
                <i className="fa-brands fa-linkedin fa-2xl"></i>
            </Link >
        </div>
    )
}

export default Footer