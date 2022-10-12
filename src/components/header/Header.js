import style from './Header.module.css';
import Nav from './Nav';
import ButtonLogin from './ButtonLogin';
function Header() {
    return(
        <header className={style.header}>
            <div className={style.logotipo}>GROWEB</div>
            <Nav/>
            <ButtonLogin/>
        </header>
    )
}
export default Header;