import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/marvel', {
      replace:true
    });
  }
  return (
    <div>
      <h2 className="text-2xl text-center text-violet-isra-500">Login</h2>
      <button type="button" onClick={handleNavigate}>Login</button>
    </div> 
  )
}

export default Login