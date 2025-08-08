import './App.css'
import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'

function App() {
  return (
    <>

      
      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        Footer
      </Container>
    </>
  )
}

export default App
