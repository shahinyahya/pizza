import menus from "../helper/menuList";

const MenuItems = () => {
  return (
    <div className="menu-list">
      <div className="menu-head">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-list-items">
        {menus.map((data) => {
          return (
            <div className="card" key={data.id}>
              <div className="image-head">
                <img src={data.image} alt="pizza" width="250" height="200" />
              </div>
              <div className="text-head">
                <h2>{data.name}</h2>
                <small>$ {data.price}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
