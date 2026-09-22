import "./Profile.css";

function Profile({ onNext, onBack }) {
  return (
    <section className="profile-page">

      {/* ==================== INTRO ==================== */}
      <section className="profile-intro">

        <div className="profile-intro-decoration profile-star">✦</div>
        <div className="profile-intro-decoration profile-plus">+</div>
        <div className="profile-intro-decoration profile-sparkle">✧</div>

        <div className="profile-intro-content">

          <div className="profile-cover-card">
            <div className="profile-window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img
              src="/assets/images/cover.jpg"
              alt="Somanit Vonchhay"
            />
          </div>

          <div className="profile-intro-text">

            <p className="profile-level-label">
              PLAYER 01 • PROFILE UNLOCKED
            </p>

            <h1>
              SOMANIT
              <br />
              VONCHHAY
            </h1>

            <p className="profile-role">
              A JUNIOR OF DATA SCIENCE &amp;
              <br />
              ENGINEERING AT RUPP
            </p>

            <div className="profile-intro-tags">
              <span>DATA</span>
              <span>TECH</span>
              <span>CREATIVE</span>
            </div>

          </div>
        </div>

        <div className="profile-scroll-message">
          ↓ SCROLL TO MY JOURNEY ↓
        </div>

      </section>


      {/* ==================== EDUCATION ==================== */}
      <section
        id="education"
        className="profile-section education-section"
      >

        <div className="profile-section-heading">
          <span className="profile-section-number">01</span>

          <div>
            <p>PLAYER JOURNEY</p>
            <h2>EDUCATION</h2>
          </div>
        </div>


        <div className="education-layout">

          {/* UNIVERSITY PHOTOS */}
          <div className="education-photos">

            <div className="education-photo">
              <img
                src="/assets/images/university2.jpg"
                alt="Royal University of Phnom Penh"
              />
            </div>

            <div className="education-photo">
              <img
                src="/assets/images/university1.jpg"
                alt="Royal University of Phnom Penh"
              />
            </div>

          </div>


          {/* EDUCATION CONTENT */}
          <div className="education-content">

            <article className="education-item">

              <div className="education-marker">
                01
              </div>

              <div className="education-item-text">

                <h3>
                  Cheasim Sonthirmuk High School
                </h3>

                <p className="education-date">
                  2012–2024 / Graduated: 2023–2024
                </p>

                <ul>
                  <li>
                    Grade A student, Top 17 overall students in school
                  </li>

                  <li>
                    Ranked Top 8 among 600+ students in Grade 7, Semester 1
                  </li>

                  <li>
                    Ranked Top 10 among 600+ students in Grade 7, Semester 2
                  </li>
                </ul>

              </div>

            </article>


            <article className="education-item">

              <div className="education-marker">
                02
              </div>

              <div className="education-item-text">

                <h3>
                  Royal University of Phnom Penh
                </h3>

                <p className="education-date">
                  Faculty of Engineering — Department of Data Science &amp; Engineering
                </p>

                <ul>
                  <li>
                    Ministry of Post and Tele-Commune's Scholar
                  </li>

                  <li>
                    Top 9 in Data Science RUPP entrance exam for CBC Scholarship
                  </li>

                  <li>
                    Year 1 GPA: 3.69/4.00
                  </li>

                  <li>
                    Year 2 GPA:
                  </li>
                </ul>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ==================== SCHOLARSHIPS ==================== */}
      <section
        id="scholarships"
        className="profile-section scholarships-section"
      >

        <div className="profile-section-heading">

          <span className="profile-section-number">
            02
          </span>

          <div>
            <p>ACHIEVEMENTS</p>
            <h2>SCHOLARSHIPS</h2>
          </div>

        </div>


        <div className="scholarship-layout">

          <div className="scholarship-content">

            <article className="scholarship-item">

              <span className="scholarship-icon">
                ◇
              </span>

              <div>
                <h3>CBC Scholarship</h3>

                <p>
                  Royal University of Phnom Penh
                </p>

                <small>
                  Top 9 in Data Science entrance examination.
                </small>
              </div>

            </article>


            <article className="scholarship-item">

              <span className="scholarship-icon">
                ◇
              </span>

              <div>
                <h3>Techo Digital Scholarship</h3>

                <p>
                  Ministry of Post and Telecommunications
                </p>

                <small>
                  Full Bachelor's scholarship recipient.
                </small>
              </div>

            </article>


            <article className="scholarship-item">

              <span className="scholarship-icon">
                ◇
              </span>

              <div>
                <h3>
                  Royal University of Fine Arts
                </h3>

                <p>
                  Faculty of Music — Department of Historical Music
                </p>

                <small>
                  Top 1 in scholarship selection based on high-school academic ranking.
                </small>
              </div>

            </article>

          </div>


          <div className="scholarship-photos">

            <div className="scholarship-photo scholarship-photo-1">
              <img
                src="/assets/images/scholarship1.jpg"
                alt="CBC Scholarship"
              />
            </div>

            <div className="scholarship-photo scholarship-photo-2">
              <img
                src="/assets/images/scholarship2.jpg"
                alt="Scholarship"
              />
            </div>

            <div className="scholarship-photo scholarship-photo-3">
              <img
                src="/assets/images/scholarship3.jpg"
                alt="Scholarship"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ==================== PROJECTS ==================== */}
      <section
        id="projects"
        className="profile-section projects-section"
      >

        <div className="profile-section-heading">

          <span className="profile-section-number">
            03
          </span>

          <div>
            <p>WHAT I BUILD</p>
            <h2>PROJECTS</h2>
          </div>

        </div>


        <div className="projects-list">

          {/* LISTÉ */}
          <article className="project-item project-item-left">

            <div className="project-image">
              <img
                src="/assets/images/Listé.jpg"
                alt="Listé inventory management system"
              />
            </div>

            <div className="project-content">

              <span className="project-type">
                01 • WEB PROJECT
              </span>

              <h3>Listé</h3>

              <p>
                A web-based inventory management system designed for small
                businesses to manage products, stock, and daily operations.
              </p>

              <a
                href="https://listeee.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                VIEW PROJECT →
              </a>


              {/* DEMO ACCOUNTS */}
              <div className="demo-accounts">

                <h4>DEMO ACCOUNTS</h4>


                <div className="demo-account">

                  <div className="demo-account-info">
                    <strong>manita</strong>
                    <span>D-outlet • Boss</span>
                  </div>

                  <div className="demo-password">
                    <small>PASSWORD</small>
                    <code>Aa0123456789</code>
                  </div>

                </div>


                <div className="demo-account">

                  <div className="demo-account-info">
                    <strong>smeyna</strong>
                    <span>SKcare • Boss</span>
                  </div>

                  <div className="demo-password">
                    <small>PASSWORD</small>
                    <code>Bb12345678</code>
                  </div>

                </div>


                <div className="demo-account">

                  <div className="demo-account-info">
                    <strong>tunaasmey</strong>
                    <span>Superadmin</span>
                  </div>

                  <div className="demo-password">
                    <small>PASSWORD</small>
                    <code>Bb12345678</code>
                  </div>

                </div>

              </div>

            </div>

          </article>


          {/* PHNOM PENH TOURISM */}
          <article className="project-item project-item-right">

            <div className="project-image">
              <img
                src="/assets/images/khmer_tourism_system.jpg"
                alt="Phnom Penh Tourism System"
              />
            </div>

            <div className="project-content">

              <span className="project-type">
                02 • SYSTEM PROJECT
              </span>

              <h3>
                Phnom Penh Tourism System
              </h3>

              <p>
                A tourism recommendation system designed to help visitors
                discover places to visit in Phnom Penh based on their
                interests and preferences.
              </p>

              <div className="algorithm-tags">
                <span>BFS</span>
                <span>DFS</span>
                <span>DIJKSTRA</span>
              </div>

              <button
                type="button"
                className="project-button project-button-disabled"
              >
                LINK COMING SOON →
              </button>

            </div>

          </article>


          {/* IRRIGATION */}
          <article className="project-item project-item-left">

            <div className="project-image">
              <img
                src="/assets/images/irrigation_system.jpg"
                alt="Mini Smart Irrigation System"
              />
            </div>

            <div className="project-content">

              <span className="project-type">
                03 • HARDWARE / IOT
              </span>

              <h3>
                Mini Smart Irrigation System
              </h3>

              <p>
                A mini irrigation system designed to help water water spinach
                automatically based on environmental conditions.
              </p>

              <p>
                The system uses sensors to monitor soil humidity, temperature,
                and soil water level. When soil moisture falls below a defined
                level such as 60%, the system can trigger watering to maintain
                suitable conditions for the plant.
              </p>

              <div className="algorithm-tags">
                <span>ARDUINO</span>
                <span>IOT</span>
                <span>SENSORS</span>
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ==================== END ==================== */}
      <section className="profile-end">

        <span>✦</span>

        <p>
          END OF LEVEL 02
        </p>

        <h2>
          MORE TO COME ♡
        </h2>

      </section>


      {/* ==================== NAVIGATION ==================== */}
      <div className="profile-navigation">

        <button
          type="button"
          onClick={onBack}
        >
          ← BACK
        </button>

        <span>
          02 / 04
        </span>

        <button
          type="button"
          onClick={onNext}
        >
          NEXT →
        </button>

      </div>

    </section>
  );
}

export default Profile;