const Footer = () => {

    let now = new Date();

    return (
        <footer className="wrapper sisi">
            <h5>Schedule Maker - {now.getFullYear()}</h5>
        </footer>
    )
}

export default Footer;