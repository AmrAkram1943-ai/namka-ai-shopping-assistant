import Landing from '../features/home/components/Landing'
import AppShell from '../layouts/AppShell'
import { useChat } from '../shared/hooks/useChat'

function App() {
  const chat = useChat()

  return (
    <AppShell hasStarted={chat.hasStarted}>
      <Landing chat={chat} />
    </AppShell>
  )
}

export default App
