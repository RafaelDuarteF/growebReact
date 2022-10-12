import style from './AvisoHeader.module.css';
import swal from 'sweetalert';
function AvisoHeader ({}) {
    function btnClick() {
        swal("Estamos em manutenção.", "Estamos em processo de manutenção. Por favor, tente mais tarde.", "warning");
    }
    return(
        <div className={style.avisoHeader}>
            <p className={style.tipPlano}>Plano Profissional</p>
            <p>|</p>
            <p className={style.prazoPlano}>Promoção até dia 31/12/2021</p>
            <button onClick={btnClick}>Clique aqui</button>
        </div>
    )
}
export default AvisoHeader;