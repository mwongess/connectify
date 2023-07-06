import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../types/statetypes'

const Signin = () => {
  const userName = useSelector((state: RootState)=> state.user.details!.userName)
  
  return (
    <div>Signin</div>
  )
}

export default Signin