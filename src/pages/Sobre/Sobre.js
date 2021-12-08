import Menu from '../../Menu/Menu'
import Header from '../../Header/Header'
import ImageSobre from '../../assets/sobre.svg'
import Footer from '../../Footer/Footer'


import '../Sobre/sobre.styles.css'

const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageSobre}>Sobre mim</Header>
    <div className='main'>
      <img src="https://i.picasion.com/pic91/b5b0f31f7b065ba1c53de0f554fef78b.gif" alt="foto" />
      <div>
        <h2>Márcia Tadakuma</h2>
        <p>Desenvolvedora Jr</p>
        
       
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Sobre 