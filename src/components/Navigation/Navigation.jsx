function Navigation({data}) {
    return (
        <nav>
            <ul>
                {data.map((el, idx) =>
                    <li key={idx}><a href={el.link}>{el.text}</a></li>
                )}
            </ul>
        </nav>
    )
}
export default Navigation;