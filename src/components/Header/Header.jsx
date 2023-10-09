import Navigation from "../Navigation/Navigation";

function Header() {
    const navigation = [
        {text: 'О нас', link: '#'},
        {text: 'Каталог', link: '#'},
        {text: 'Контакты', link: '#'},
    ]
    return (
        <header className="header">
            <div className="container">
                <Navigation data={navigation} />
            </div>
        </header>
    );
}
export default Header;