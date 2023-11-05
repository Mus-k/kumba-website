import "../styles/Products.css";
import product from "../../public/products.json";
import Image from "next/image";
export default function products() {
  return (
    <div className="product bg-teal-200">
      <h1 className="myProducts">My products</h1>
      <div className="w-[100%] flex flex-row max-w-[1600px] flex-wrap gap-3 items-center justify-center">
        {product.map((productImg) => (
          <div key={productImg.id} class="card">
            <div className="content">
              <div className="back">
                <div className="content-div">
                  <Image
                    src={`/productImages/${productImg.FrontImage2Url}`}
                    alt="My Image"
                    width={500} // Desired width in pixels
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
              <div className="front">
                <div className="front-content">
                  <div className="content-items">
                    <small className="item-price">${productImg.price}</small>
                    <Image
                      src={`/productImages/${productImg.BackImageUrl}`}
                      alt="My Image"
                      width={500} // Desired width in pixels
                      height={200} // Desired height in pixels
                      className="secondImage"
                    />
                  </div>
                  <div className="description">
                    <div className="bottom-Text">
                      <p className="productDesc">
                        <strong>
                          {productImg.desc.length > 15
                            ? productImg.desc.slice(0, 20) + "..."
                            : productImg.desc}
                        </strong>
                      </p>
                      <button
                        className="buttonCl inline-block self-end bg-cyan-700
									text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                      >
                        <a
                          aria-label="Chat on WhatsApp"
                          href="https://wa.me/905383665305"
                        >
                          order now
                        </a>
                      </button>
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
