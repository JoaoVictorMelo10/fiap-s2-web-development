import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className="nav">
        <Link to="/">Home</Link>
        <Link to="/produto">Produto</Link>
    </section>
  )
}

export default Header