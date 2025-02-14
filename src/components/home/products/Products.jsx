import "./styles.css"

const products = [
  {
    label: "Office Essentials",
    title: "Stationery",
    description:
      "High-quality stationery items to keep your office organized and efficient. From premium paper to elegant writing instruments, we have everything you need.",
  },
  {
    label: "Bulk Printing Solutions",
    title: "Continuous Printed Paper",
    description:
      "Specialized paper with custom printed company format, ideal for forms and invoices. Available in various sizes and paper types.",
  },
  {
    label: "Print Performance",
    title: "Printer Consumables",
    description:
      "Top-grade printer consumables to keep your printers running at peak performance. Choose from our wide selection of toners, ink cartridges, and more.",
  },
]

const Products = () => {
  return (
    <section className="product-showcase">
      <div className="container">
        <h2 className="main-products-title"><span class="decorative-line"></span>Product Categories</h2>
        <div className="product-grid">
          {products.map((product, index) => {
            const src = product.title.toLowerCase().split(' ').join('-');
            
            return (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={`/images/${src}.jpg`} alt={product.title} />
                </div>
                <div className="product-content">
                  <div className="product-label">{product.label}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products;

