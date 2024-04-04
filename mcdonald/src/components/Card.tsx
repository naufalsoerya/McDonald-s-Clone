export default function Card() {
  return (
    <>
      <div className="flex flex-wrap gap-6 ml-16 mr-16">
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off"
              alt="bigmac"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Big Mac</h2>
            <p>
              Two all-beef patties, special sauce, lettuce, cheese, pickles,
              onions on a sesame seed bun
            </p>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-crispy-chicken-salad:1-3-product-tile-desktop?wid=829&hei=515&dpr=off"
              alt="Chicken Salad"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chicken Salad</h2>
            <p>
              A healthy salad option with grilled chicken, fresh greens, and a variety of vegetables.
            </p>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://s7d1.scene7.com/is/image/mcdonalds/Header_McDouble_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off"
              alt="McDouble"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">McDouble</h2>
            <p>
              Two beef patties, cheese, onions, pickles, mustard, and ketchup in a double cheeseburger.
            </p>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-hotcakes-syrup-butter:1-3-product-tile-desktop?wid=829&hei=515&dpr=off"
              alt="Hotcakes with Syrup"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hotcakes with Syrup</h2>
            <p>
              Delicious hotcakes served with butter and syrup for a delightful breakfast.
            </p>
          </div>
        </div>

        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://s7d1.scene7.com/is/image/mcdonalds/Header_HotNSpicyMcChicken_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off"
              alt="McChicken"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">McChicken</h2>
            <p>
              A spicy twist on the classic McChicken sandwich with a spicy mayo kick
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
