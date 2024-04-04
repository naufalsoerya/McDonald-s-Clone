interface featured {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

interface ArrayOfFeatured {
  product: featured[];
}

export default function Card({ product }: { product: featured }) {
  return (
    <>
      <div className="flex flex-wrap ml-6">
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              src={product.thumbnail}
              alt={product.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
