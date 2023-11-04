import "../styles/Products.css";
import product from "../../public/products.json";
import Image from "next/image";
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
                <div className="content-div">
                  <Image
                    src={`/productImages/${productImg.FrontImage2Url}`}
                    alt="My Image"
                    width={300} // Desired width in pixels
                    height={200} // Desired height in pixels
                    className="contentImage"
                  />

                  <p className="card-title">
                    {productImg.title.length > 20
                      ? productImg.title.slice(0, 20) + "..."
                      : productImg.title}
                  </p>
                </div>
              </div>
              <div class="front">
                <div class="front-content">
                  <div className="content-items">
                    <small class="item-price">${productImg.price}</small>
                    <Image
                      src={`/productImages/${productImg.BackImageUrl}`}
                      alt="My Image"
                      width={300} // Desired width in pixels
                      height={200} // Desired height in pixels
                      className="secondImage"
                    />
                  </div>
                  <div class="description">
                    <div class="bottom-Text">
                      <p class="productDesc">
                        <strong>
                          {productImg.desc.length > 15
                            ? productImg.desc.slice(0, 20) + "..."
                            : productImg.desc}
                        </strong>
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
