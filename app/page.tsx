const products = [
  { name: "Noir / rouge", images: ["IMG_5983.JPG", "IMG_5984.JPG"] },
  { name: "Rouge / noir", images: ["IMG_5991.JPG", "IMG_5992.JPG"] },
  { name: "Rouge / blanc", images: ["IMG_8687.jpg", "IMG_8688.jpg"] },
  {
    name: "Noir / violet",
    tag: "MODÈLE COMPACT",
    description: "Format plus petit.",
    images: ["IMG_5974.JPG", "ed80225f-cea3-4d9b-81a8-5e80c551a043.jpg"],
  },
  { name: "Violet / blanc", images: ["IMG_5844.jpg", "IMG_5845.jpg"] },
  { name: "Bleu / blanc", images: ["IMG_8715.jpg", "IMG_8716.jpg"] },
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
          <p className="intro">Une boîte personnalisable selon tes envies.</p>
          <a className="button" href="#personnalisation">Personnaliser</a>
        </div>
      </header>

      <section className="section container" id="personnalisation">
        <div className="section-heading">
          <p className="eyebrow">PERSONNALISATION</p>
          <h2>Crée ta combinaison.</h2>
          <p>Choisis les couleurs, les jetons, leur nombre et même le logo.</p>
        </div>

        <div className="custom-grid">
          <article className="custom-card">
            <span className="custom-number">01</span>
            <h3>Les couleurs</h3>
            <p>Chaque composant peut avoir sa propre couleur.</p>
            <div className="color-preview">
              <span>Couleurs disponibles :</span>
              <div className="color-swatches" aria-label="Couleurs disponibles">
                <span className="color-swatch" title="Bleu clair" aria-label="Bleu clair" style={{ background: "#55b9e8" }} />
                <span className="color-swatch" title="Orange" aria-label="Orange" style={{ background: "#f47b20" }} />
                <span className="color-swatch" title="Marron" aria-label="Marron" style={{ background: "#7a4030" }} />
                <span className="color-swatch" title="Violet" aria-label="Violet" style={{ background: "#8d63d6" }} />
                <span className="color-swatch glitter-swatch" title="Violet foncé pailleté" aria-label="Violet foncé pailleté" />
                <span className="color-swatch" title="Bleu" aria-label="Bleu" style={{ background: "#087fd1" }} />
                <span className="color-swatch" title="Blanc cassé" aria-label="Blanc cassé" style={{ background: "#e8e2d5" }} />
                <span className="color-swatch" title="Noir" aria-label="Noir" style={{ background: "#15171b" }} />
                <span className="color-swatch" title="Blanc" aria-label="Blanc" style={{ background: "#ffffff" }} />
                <span className="color-swatch" title="Jaune" aria-label="Jaune" style={{ background: "#f4d62e" }} />
                <span className="color-swatch" title="Rouge" aria-label="Rouge" style={{ background: "#bd2148" }} />
                <span className="color-swatch" title="Rose" aria-label="Rose" style={{ background: "#e63b8d" }} />
              </div>
            </div>
          </article>
          <article className="custom-card">
            <span className="custom-number">02</span>
            <h3>Les jetons</h3>
            <p>Choisis les jetons que tu veux dans ta boîte.</p>
          </article>
          <article className="custom-card">
            <span className="custom-number">03</span>
            <h3>Les quantités</h3>
            <p>Choisis le nombre de jetons dont tu as besoin.</p>
          </article>
          <article className="custom-card">
            <span className="custom-number">04</span>
            <h3>Le logo</h3>
            <p>Le logo peut également être personnalisé selon ta demande. Un supplément peut s'appliquer.</p>
          </article>
          <article className="custom-card">
            <span className="custom-number">05</span>
            <h3>La fermeture</h3>
            <p>Des aimants assurent une fermeture propre et maintiennent la boîte bien fermée.</p>
          </article>
        </div>
      </section>

      <section className="prices-section">
        <div className="container">
          <div className="section-heading">
            <h2>Tarifs :</h2>
          </div>

          <div className="prices-grid">
            <div className="price-card">
              <div className="price-card-heading">
                <h3>Grand format</h3>
                <p>Espace pour placer des dés de taille standard.</p>
              </div>
              <div className="price-list">
                <div><span>Boîte + 5 compteurs</span><strong>16 €</strong></div>
                <div><span>Boîte + logo + 5 compteurs</span><strong>19 €</strong></div>
                <div><span>Boîte + 5 compteurs + 14 jetons</span><strong>19 €</strong></div>
                <div><span>Boîte + logo + 5 compteurs + 14 jetons</span><strong>22 €</strong></div>
              </div>
            </div>

            <div className="price-card">
              <div className="price-card-heading">
                <h3>Petit format</h3>
                <p>Sans espace pour placer des dés.</p>
              </div>
              <div className="price-list">
                <div><span>Boîte + 5 compteurs</span><strong>14 €</strong></div>
                <div><span>Boîte + logo + 5 compteurs</span><strong>17 €</strong></div>
                <div><span>Boîte + 5 compteurs + 14 jetons</span><strong>17 €</strong></div>
                <div><span>Boîte + logo + 5 compteurs + 14 jetons</span><strong>20 €</strong></div>
              </div>
            </div>
          </div>

          <div className="custom-price">
            <span>LOGO PERSONNALISÉ</span>
            <strong>+5 €</strong>
          </div>
        </div>
      </section>

      <section className="examples-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">EXEMPLES</p>
            <h2>Quelques créations.</h2>
            <p>Ces modèles montrent quelques combinaisons possibles.</p>
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
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>Intéressé ?</h2>
            <p>Contactez-moi pour discuter de votre projet et passer commande.</p>
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
