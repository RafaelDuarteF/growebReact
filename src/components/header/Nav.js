import style from './Nav.module.css';
function Nav() {
    return(
        <nav>
            <ul className={style.nav}>
                <li>Nossos métodos</li>
                <li>Planos</li>
                <li>Documentação</li>
            </ul>
        </nav>
    )
}
export default Nav;