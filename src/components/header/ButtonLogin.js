import style from './ButtonLogin.module.css';
import swal from 'sweetalert';
function ButtonLogin({}) {

    function confirm(){
        swal("Estamos em manutenção.", "Estamos em processo de manutenção. Por favor, tente mais tarde.", "warning");
        
    }
    return(
        <div onClick={confirm} className={style.buttonDiv}>
            <button>Entrar</button>
        </div>
    )
}
export default ButtonLogin;