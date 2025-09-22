import Chatpage from '../components/Chatpage'
import { useParams } from 'react-router-dom'
// "7550884491460345856"  7550598865406132224
const Agent: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="agent">
      <Chatpage id={id} />
    </div>
  )
}

export default Agent