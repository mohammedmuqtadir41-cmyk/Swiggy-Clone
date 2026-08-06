import "./Page.css";

const SignIn = () => {
  return (
    <main className="page-wrapper centered animate-fade-in">
      <div className="auth-container">
        <div className="auth-header">
          <span className="auth-brand-icon">🧡</span>
          <h2>Welcome to Food Stack</h2>
          <p>Sign in to unlock personalized curated restaurant lists, real-time live tracking, and saved checkout credentials.</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number / Email</label>
            <input type="text" id="phone" placeholder="Enter your credentials..." required />
          </div>

          <button type="submit" className="btn-submit-auth">Proceed via OTP</button>

          <div className="form-divider">
            <span>or continue with secure partners</span>
          </div>

          <div className="oauth-row">
            <button type="button" className="btn-oauth">
              <span className="oauth-icon">🌐</span> Google
            </button>
            <button type="button" className="btn-oauth">
              <span className="oauth-icon">💻</span> GitHub
            </button>
          </div>
        </form>

        <footer className="auth-footer">
          <p>By creating an account or logging in, you agree to our <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Policy</a>.</p>
        </footer>
      </div>
    </main>
  );
};

export default SignIn;