import { useEffect, useState } from "react";
import { Trash2, Pencil } from "lucide-react";

let initializeDatas = [
  {
    id: 0,
    name: "Baju",
    price: 19000,
  },
  {
    id: 1,
    name: "Celana",
    price: 19000,
  },
  {
    id: 2,
    name: "Kaos",
    price: 19000,
  },
  {
    id: 3,
    name: "Kemeja",
    price: 19000,
  },
  {
    id: 4,
    name: "Rok",
    price: 19000,
  },
];

const Home = () => {
  const [products, setProducts] = useState(initializeDatas);
  const [updateData, setUpdateData] = useState(null);

  const handleDelete = (product) => {
    confirm(`Anda Yakin Ingin Menghapus ${product.name}?`) &&
      setProducts(products.filter((item) => item.id !== product.id));
  };

  const handleUpdate = (product) => {
    setUpdateData(product)
  }

  useEffect(() => {});

  return (
    <main className="p-6">
      <h1 className="text-center text-2xl font-bold">Welcome To Home</h1>
      <section>
        <h3>Daftar Produk:</h3>
        <div className="flex justify-center gap-4">
          {products !== null && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="pt-2 gap-2">
                <h5 className="text-center">{product.name}</h5>
                <p className="text-xs">Rp. {product.price}</p>
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleDelete(product)}>
                    <Trash2 />
                  </button>
                  <button>
                    <Pencil />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Data Kosong</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
