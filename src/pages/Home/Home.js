import Menu from '../../Menu/Menu'
import Header from '../../Header/Header'
import ImageHome from '../../assets/home.svg'
import Footer from '../../Footer/Footer'

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