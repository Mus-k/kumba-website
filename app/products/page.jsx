import "../styles/Products.css";

export default function products() {
  return (
    <div className="bg-teal-200 w-full min-h-screen flex justify-center items-center">
      <div class="card">
        <div class="content">
          <div class="back">
            <div class="back-content">
              <strong>Hover Me</strong>
            </div>
          </div>
          <div class="front">
            <div class="front-content">
              <small class="badge">Pasta</small>
              <div class="description">
                <div class="title">
                  <p class="title">
                    <strong>Spaguetti Bolognese</strong>
                  </p>
                </div>
                <p class="card-footer">order now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
