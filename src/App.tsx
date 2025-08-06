import './App.css'
import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'

function App() {
  return (
    <>

      
      <Container>
        <Logo/>
      </Container>

      <Container>
        Home
      </Container>

      <Container>
        Footer
      </Container>
    </>
  )
}

export default App
