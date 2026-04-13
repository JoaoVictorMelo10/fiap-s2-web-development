import Menuitem from "./Menuitem"

const Menu = ({itens}) => {
  return (
    <div>
        {itens.map((item) => (
            <Menuitem key={item} {...item} />
        ))}
    </div>
  )
}

export default Menu