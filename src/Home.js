import Header from "./components/header/Header";
import AvisoHeader from "./components/header/AvisoHeader";
import styles from './Home.module.css';
import Footer from "./components/footer/Footer";
function Home() {
    return(
        <div className={styles.home}>
          <Header/>
          <AvisoHeader/>
          <Footer />
        </div>
    )
}
export default Home;