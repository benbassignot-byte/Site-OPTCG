const products = [
  {
    name: "Rouge / noir",
    images: ["IMG_5983.JPG", "IMG_5984.JPG"],
  },
  {
    name: "Rouge / blanc",
    images: ["IMG_5991.JPG", "IMG_5992.JPG"],
  },
  {
    name: "Noir / rouge",
    images: ["IMG_8687.jpg", "IMG_8688.jpg"],
  },
  {
    name: "Noir / violet",
    tag: "MODÈLE COMPACT",
    description: "Format plus petit.",
    images: ["IMG_5974.JPG", "IMG_5986.JPG"],
  },
  {
    name: "Violet / blanc",
    images: ["IMG_5844.jpg", "IMG_5845.jpg"],
  },
  {
    name: "Bleu / blanc",
    images: ["IMG_8715.jpg", "IMG_8716.jpg"],
  },
];

const imageUrl = (filename: string) =>
  `https://raw.githubusercontent.com/benbassignot-byte/Site-OPTCG/main/${filename}`;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="nav container">
          <a className="logo" href="#top">OPTCG</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>

        <div className="hero-content container" id="top">
          <p className="eyebrow">CRÉATIONS 3D · ONE PIECE</p>
          <h1>Des accessoires<br />pour jouer.</h1>
          <p className="intro">Des créations imprimées en 3D pour vos parties de One Piece.</p>
          <a className="button" href="#creations">Voir les créations</a>
        </div>
      </header>

      <section className="section container" id="creations">
        <div className="section-heading">
          <p className="eyebrow">LES CRÉATIONS</p>
          <h2>Les modèles</h2>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-photos">
                {product.images.map((image, index) => (
                  <img
                    key={image}
                    src={imageUrl(image)}
                    alt={`${product.name} — photo ${index + 1}`}
                  />
                ))}
              </div>
              <div className="product-info">
                {product.tag && <span className="tag">{product.tag}</span>}
                <h3>{product.name}</h3>
                {product.description && <p>{product.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>Une question ?</h2>
            <p>Contactez-moi directement.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:benji.bassdef@outlook.com">
              <span>E-mail</span>
              <strong>benji.bassdef@outlook.com</strong>
            </a>
            <div>
              <span>Discord</span>
              <strong>benj331</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} · Créations personnelles</p>
        <p>One Piece est une marque de leurs ayants droit. Ce site n’est pas affilié à ceux-ci.</p>
      </footer>
    </main>
  );
}
