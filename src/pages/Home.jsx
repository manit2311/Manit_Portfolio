import "./Home.css";

function Home({ onEnter }) {
  return (
    <section className="home-page">

      {/* Decorative stickers */}
      <div className="home-sticker home-plus home-plus-1">+</div>
      <div className="home-sticker home-plus home-plus-2">+</div>
      <div className="home-sticker home-star home-star-1">✦</div>
      <div className="home-sticker home-star home-star-2">✧</div>
      <div className="home-sticker home-heart">♡</div>
      <div className="home-pixel-dots">▪ ▪ ▪</div>

      <div className="home-controller">
        <span>✚</span>
        <span>●</span>
      </div>

      {/* Main Home Layout */}
      <div className="home-layout">

        {/* Left Side */}
        <div className="home-content">

          <div className="home-eyebrow">
            <span className="home-eyebrow-star">✦</span>
            PERSONAL PORTFOLIO
            <span className="home-eyebrow-line"></span>
            <span>2026</span>
          </div>

          <p className="home-label">
            PLAYER 01 • WELCOME
          </p>

          <h1 className="home-title">
            WELCOME TO
            <br />
            <span>MY PORTFOLIO</span>
          </h1>

          <p className="home-description">
            A little digital scrapbook about the person behind the projects,
            ideas, and things I'm still figuring out.
          </p>

          {/* Main Tags */}
          <div className="home-tags">
            <span>DATA</span>
            <span>CREATIVITY</span>
            <span>CURIOSITY</span>
          </div>

          {/* Social Links */}
          <div className="home-social-area">
            <span className="home-social-caption">
              FIND ME AROUND THE INTERNET
            </span>

            <div className="home-socials">
              <a
                href="https://github.com/manit2311"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="home-social github"
              >
                <span>GH</span>
              </a>

              <a
                href="https://www.tiktok.com/@maanitt_11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="home-social tiktok"
              >
                <span>TT</span>
              </a>

              <a
                href="https://www.linkedin.com/in/somanit-vonchhay-31a5a1382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="home-social linkedin"
              >
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Enter Button */}
          <button
            type="button"
            className="home-see-more"
            onClick={onEnter}
          >
            <span>EXPLORE MY WORLD</span>
            <span className="home-button-arrow">→</span>
          </button>

          <p className="home-scroll-hint">
            <span>↓</span> YOUR NEXT ADVENTURE STARTS HERE
          </p>

        </div>

        {/* Right Side */}
        <div className="home-profile">

          <div className="home-photo-decoration home-photo-decoration-one">
            ✦
          </div>

          <div className="home-photo-decoration home-photo-decoration-two">
            ♡
          </div>

          <div className="home-profile-card">

            <div className="home-profile-header">
              <span>PLAYER PROFILE</span>
              <span>♡</span>
            </div>

            <div className="home-photo">
              <img
                src="/assets/images/cover1.png"
                alt="Somanit"
              />

              <span className="home-photo-label">
                PLAYER 01
              </span>
            </div>

            <div className="home-profile-footer">

              <div>
                <strong>SOMANIT</strong>
                <small>DATA SCIENCE &amp; ENGINEERING</small>
              </div>

              <span className="home-level">
                LV. 01
              </span>

            </div>

          </div>

          <div className="home-profile-note">
            <span>✧</span>
            A LITTLE INTRODUCTION
          </div>

        </div>

      </div>

      {/* Bottom Status */}
      <div className="home-status">

        <span>♥ HP 100</span>
        <span>✦ XP 2026</span>
        <span>⌁ READY TO EXPLORE</span>

      </div>

    </section>
  );
}

export default Home;
