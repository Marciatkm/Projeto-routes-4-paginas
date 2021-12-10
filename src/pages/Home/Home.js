import Menu from '../../componentes/Menu/Menu'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import ImageHome from '../../assets/home.svg'
import "../Home/home.styles.css"

const Home = () => {
    return(
        <>
            <Menu/>
            <Header image={ImageHome}> Bem-vindos Amados</Header>
            <Footer/>
        </>
        
    )
}
export default Home