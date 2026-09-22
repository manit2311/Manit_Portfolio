import "./Home.css";

function Home({ onEnter }) {
  return (
    <section className="home-page">

      {/* GAMING DECORATIONS */}

      <div className="home-sticker home-plus home-plus-1">
        +
      </div>

      <div className="home-sticker home-plus home-plus-2">
        +
      </div>

      <div className="home-sticker home-star home-star-1">
        ✦
      </div>

      <div className="home-sticker home-star home-star-2">
        ✧
      </div>

      <div className="home-sticker home-heart">
        ♡
      </div>

      <div className="home-pixel-dots">
        ▪ ▪ ▪
      </div>

      <div className="home-controller">
        <span>✚</span>
        <span>●</span>
      </div>


      {/* MAIN */}

      <div className="home-layout">

        {/* LEFT SIDE */}

        <div className="home-content">

          <p className="home-label">
            ✦ PLAYER 01 • WELCOME ✦
          </p>

          <h1 className="home-title">
            WELCOME TO
            <br />
            <span>MY PORTFOLIO</span>
          </h1>

          <p className="home-description">
            A little digital scrapbook about the person
            behind the projects, ideas, and things I'm
            still figuring out.
          </p>

          <div className="home-tags">
            <span>DATA</span>
            <span>CREATIVITY</span>
            <span>CURIOSITY</span>
          </div>

          <button
            type="button"
            className="home-see-more"
            onClick={onEnter}
          >
            <span>SEE MORE?!</span>
            <span>→</span>
          </button>

        </div>


        {/* RIGHT SIDE */}

        <div className="home-profile">

          <div className="home-profile-card">

            <div className="home-profile-header">
              <span>PLAYER PROFILE</span>
              <span>♡</span>
            </div>

            <div className="home-photo">

              <img
                src="/assets/images/cover.jpg"
                alt="Somanit"
              />

            </div>

            <div className="home-profile-footer">

              <div>
                <strong>SOMANIT</strong>

                <small>
                  DATA SCIENCE &amp; ENGINEERING
                </small>
              </div>

              <span className="home-level">
                LV. 01
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM STATUS */}

      <div className="home-status">

        <span>♥ HP 100</span>

        <span>✦ XP 2026</span>

        <span>⌁ READY TO EXPLORE</span>

      </div>

    </section>
  );
}

export default Home;