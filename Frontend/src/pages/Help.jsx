import "./Page.css";

const Help = () => {
  const faqs = [
    { q: "Can I edit my delivery address after routing payment?", a: "Once the restaurant accepts the order ticket, addresses lock automatically to maintain driver dispatch windows. Contact Live Support instantly if you need rerouting." },
    { q: "What happens if my food arrives cold or compromised?", a: "Every partner restaurant complies with strict temperature-controlled packing mandates. If your delivery is flawed, submit a photo ticket through your order history dashboard for an instant refund." },
    { q: "How do I claim bank partnership coupon rewards?", a: "All eligible card-based discounts activate natively during the checkout funnel. If your card matches, the pricing delta computes dynamically before processing billing." }
  ];

  return (
    <main className="page-wrapper animate-fade-in">
      <header className="page-hero help-hero">
        <span className="page-badge">Support Center</span>
        <h1>Help & Customer Care</h1>
        <p>Looking for order resolutions, payment clarifications, or platform onboarding protocols? We are online 24/7.</p>
      </header>

      {/* Interactive FAQ Block */}
      <section className="help-section-grid">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item" open={idx === 0}>
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Live Support Escalation Sidebar */}
        <aside className="support-sidebar">
          <div className="sidebar-card">
            <h3>Direct Resolution Line</h3>
            <p>Skip the documentation queues entirely. Connect straight to our local engineering or triage desk directly.</p>
            <div className="support-channels">
              <div className="channel">
                <span className="channel-icon">💬</span>
                <div>
                  <h4>Live Chat Assistant</h4>
                  <p>Average wait time: &lt; 2 mins</p>
                </div>
              </div>
              <div className="channel">
                <span className="channel-icon">✉️</span>
                <div>
                  <h4>Developer Escalations</h4>
                  <p>triage@foodstack.dev</p>
                </div>
              </div>
            </div>
            <button className="btn-chat-now">Initialize Chat</button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Help;