import "./Page.css";

const Offers = () => {
  const couponDeals = [
    { code: "FOODSTACK125", title: "Flat ₹125 OFF", desc: "Valid on orders above ₹499", type: "primary" },
    { code: "BOGOFEAST", title: "Buy 1 Get 1 Free", desc: "On selected top-rated items", type: "secondary" },
    { code: "TRYNEW", title: "Up to 60% OFF", desc: "Welcome deal on your next 3 orders", type: "primary" },
    { code: "AXISFEST", title: "Instant 15% OFF", desc: "Using Axis Bank Credit Cards", type: "bank" }
  ];

  return (
    <main className="page-wrapper animate-fade-in">
      <header className="page-hero offers-hero">
        <span className="page-badge">Deals For You</span>
        <h1>Top Offers & Hidden Discounts</h1>
        <p>Save big on your favorite meals with handpicked restaurant vouchers, banking cashbacks, and seasonal mega deals.</p>
      </header>

      {/* Coupon Matrix Grid */}
      <section className="offers-grid">
        {couponDeals.map((deal, idx) => (
          <article key={idx} className={`coupon-card ${deal.type}`}>
            <div className="coupon-cutout left"></div>
            <div className="coupon-cutout right"></div>
            <div className="coupon-body">
              <span className="deal-badge">{deal.title}</span>
              <p className="deal-desc">{deal.desc}</p>
              <div className="coupon-footer">
                <span className="code-box">{deal.code}</span>
                <button className="btn-copy" onClick={() => navigator.clipboard.writeText(deal.code)}>Copy</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Bank Partnership Banner */}
      <section className="promo-banner">
        <div className="banner-text">
          <h3>⚡ Supercharge Your Savings</h3>
          <p>Link your premium credit cards or digital wallets to unlock automated 20% point matchers at checkout.</p>
        </div>
        <button className="btn-action">Link Wallet</button>
      </section>
    </main>
  );
};

export default Offers;