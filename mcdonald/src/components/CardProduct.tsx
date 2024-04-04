interface CardProps {
  _id: Object;
  name: string; // validation: required
  slug: string; // validation: required, unique
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface CardPropsArray {
  product: CardProps;
}

export default function CardProduct({ product }: { product: CardProps }) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={product.thumbnail} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            {/* <div className="flex justify-start">
              <p className="text-green-600">$ {product.price}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
