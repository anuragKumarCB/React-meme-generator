

export default function Header() {
    const siteTitle = "Meme Generator"
    const siteSubTitle = "React course Project - 3"
    const imgURL = "../img/troll-face.png"
    return (
        <header className="header">
            <img src={imgURL} alt="" className="header--img" />
            <h2 className="header--title">{siteTitle}</h2>
            <h4 className="header--subtitle">{siteSubTitle}</h4>
        </header>
    )
}