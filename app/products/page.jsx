import "../styles/Products.css";
import product from "../../public/products.json";
export default function products() {
  console.log("new", product);
  return (
    <div className="product bg-teal-200">
      <h1>My products</h1>
      <div className="w-[100%] flex flex-row flex-wrap gap-3 items-center justify-center">
        {product.map((productImg) => (
          <div key={productImg.id} class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <strong>{productImg.title}</strong>
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <small class="badge">{productImg.price}</small>
                  <div class="description">
                    <div class="title">
                      <p class="title">
                        <strong>{productImg.desc}</strong>
                      </p>
                      <p class="card-footer">order now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
