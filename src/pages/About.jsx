import { useState } from "react";
import "./About.css";

function About({ onNext, onBack }) {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const interests = [
    {
      id: "data",
      label: "DATA",
      text: "I enjoy working with data because it helps me look beyond the surface of a problem. I like finding patterns, understanding why things happen, and turning information into something meaningful.",
    },
    {
      id: "ml",
      label: "MACHINE LEARNING",
      text: "Machine learning interests me because it combines analytical thinking with the possibility of creating something that can learn from data. I am still exploring it, but I want to become much stronger in this area.",
    },
    {
      id: "iot",
      label: "IOT",
      text: "I became interested in IoT through building small hardware projects. I like seeing how sensors, data, and physical devices can work together to solve real-world problems.",
    },
    {
      id: "art",
      label: "ART",
      text: "Art is one of the parts of me that exists outside of numbers and technology. I enjoy visual creativity, colors, design, and the freedom to express ideas in ways that do not always need words.",
    },
    {
      id: "psychology",
      label: "PSYCHOLOGY",
      text: "Psychology interests me because I am curious about people, emotions, behavior, and the reasons behind the way we think and act. It also helps me understand myself and the people around me better.",
    },
    {
      id: "culture",
      label: "CULTURE",
      text: "I care about Cambodian culture and the stories, traditions, and creativity behind it. I would love to explore ways technology can help preserve, understand, and share those cultural experiences.",
    },
  ];

  const activeInterest = interests.find(
    (interest) => interest.id === selectedInterest
  );

  return (
    <section className="about-page">

      {/* =====================================================
          01 — ABOUT ME
      ===================================================== */}

      <section className="about-me-section">

        <div className="page-sticker sticker-about-1">✦</div>
        <div className="page-sticker sticker-about-2">♡</div>
        <div className="page-sticker sticker-about-3">✧</div>
        <div className="page-sticker sticker-about-4">+</div>

        <div className="about-section-heading">
          <span className="about-section-number">01</span>

          <div>
            <p>GET TO KNOW ME</p>
            <h2>ABOUT ME</h2>
          </div>
        </div>


        <div className="about-me-card">

          <div className="about-me-photo">
            <img
              src="/assets/images/about1.jpg"
              alt="Somanit"
            />
          </div>


          <div className="about-me-text">

            <span className="about-mini-label">
              ✦ A LITTLE INTRODUCTION
            </span>

            <h3>
              A little bit of data,
              <br />
              a little bit of art,
              <br />
              and a lot of curiosity.
            </h3>

            <p>
              Hi, I'm Somanit! I'm a Data Science &amp; Engineering
              student at the Royal University of Phnom Penh who enjoys
              exploring the space between technology, creativity, and people.
            </p>

            <p>
              I like understanding the reasons behind problems instead of
              simply looking at their results. At the same time, I don't
              want technology to feel disconnected from creativity and
              human experiences.
            </p>

            <div className="about-me-tags">
              <span>CURIOUS</span>
              <span>CREATIVE</span>
              <span>ALWAYS LEARNING</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — EXPERIENCES
      ===================================================== */}

      <section className="experiences-section">

        <div className="page-sticker experience-sticker-1">✦</div>
        <div className="page-sticker experience-sticker-2">♡</div>

        <div className="about-section-heading">
          <span className="about-section-number">02</span>

          <div>
            <p>WHAT I'VE EXPERIENCED</p>
            <h2>EXPERIENCES</h2>
          </div>
        </div>


        <div className="experiences-grid">

          {/* WORK EXPERIENCE */}

          <article className="experience-card experience-card-work">

            <div className="experience-card-top">
              <span className="experience-number">
                01
              </span>

              <span className="experience-type">
                WORK EXPERIENCE
              </span>
            </div>

            <h3>
              Beauty Consultant
            </h3>

            <h4>
              Lush Skin
            </h4>

            <p className="experience-date">
              March 2026 – August 2026
            </p>

            <p>
              Worked with Korean skincare, Cambodian local brands,
              and trending beauty products while communicating directly
              with customers and helping them find products suitable
              for their concerns.
            </p>

            <ul>
              <li>
                Recommended skincare products based on customers'
                needs and preferences.
              </li>

              <li>
                Explained product ingredients, functions, and benefits.
              </li>

              <li>
                Communicated with both local and international customers.
              </li>

              <li>
                Assisted customers with product selection and questions.
              </li>

              <li>
                Supported product promotion and appeared in promotional
                content.
              </li>

              <li>
                Helped manage product stock, including stock-in
                and stock-out.
              </li>
            </ul>

          </article>


          {/* CONTENT EXPERIENCE */}

          <article className="experience-card experience-card-content">

            <div className="experience-card-top">
              <span className="experience-number">
                02
              </span>

              <span className="experience-type">
                CONTENT &amp; CREATIVE
              </span>
            </div>

            <h3>
              Personal Content Creation
            </h3>

            <p>
              I enjoy creating casual educational and lifestyle content
              using CapCut, Canva, photography, and social media platforms.
            </p>

            <p>
              My experience includes creating skincare-related content,
              photo strips, makeup routines, unboxing content, and
              short-form videos.
            </p>

            <p>
              These experiences helped me become more comfortable with
              visual storytelling, presenting information, and
              communicating ideas in a way that feels natural to younger
              audiences.
            </p>

            <div className="experience-tags">
              <span>CAPCUT</span>
              <span>CANVA</span>
              <span>PHOTOGRAPHY</span>
              <span>SOCIAL MEDIA</span>
            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          03 — CREATIVE SIDE
      ===================================================== */}

      <section className="creative-section">

        <div className="page-sticker sticker-creative-1">✦</div>
        <div className="page-sticker sticker-creative-2">♡</div>
        <div className="page-sticker sticker-creative-3">✧</div>
        <div className="page-sticker sticker-creative-4">+</div>

        <div className="about-section-heading">
          <span className="about-section-number">03</span>

          <div>
            <p>THE OTHER SIDE OF ME</p>
            <h2>CREATIVE</h2>
          </div>
        </div>


        <div className="creative-scrapbook">

          {/* CREATIVE 1 — LANDSCAPE */}

          <div className="creative-photo creative-photo-one">
            <img
              src="/assets/images/creative1.jpg"
              alt="Somanit's creative work"
            />

            <span className="creative-sticker">
              ✦
            </span>
          </div>


          {/* CREATIVE 2 — LANDSCAPE */}

          <div className="creative-photo creative-photo-two">
            <img
              src="/assets/images/creative2.jpg"
              alt="Somanit's creative work"
            />

            <span className="creative-sticker">
              ♡
            </span>
          </div>


          {/* CENTER TEXT */}

          <div className="creative-center-note">

            <span>
              ♡ MY CREATIVE SIDE ♡
            </span>

            <p>
              Creativity is the space where I can experiment
              without having to find one correct answer.
            </p>

            <p>
              I enjoy photography, visual design, storytelling,
              and creating little things that reflect my personality.
              Sometimes it is a website, sometimes a photo, sometimes
              a random idea that I just want to turn into something real.
            </p>

            <strong>
              TECHNOLOGY GIVES ME THE TOOLS.
              <br />
              CREATIVITY GIVES ME THE WAY TO USE THEM.
            </strong>

          </div>


          {/* CREATIVE 3 — LANDSCAPE */}

          <div className="creative-photo creative-photo-three">
            <img
              src="/assets/images/creative3.jpg"
              alt="Somanit's creative work"
            />

            <span className="creative-sticker">
              ✧
            </span>
          </div>


          {/* CREATIVE 4 — NEW SQUARE */}

          <div className="creative-photo creative-photo-four">
            <img
              src="/assets/images/creative4.jpg"
              alt="Somanit's creative moment"
            />

            <span className="creative-sticker">
              +
            </span>
          </div>


          {/* CREATIVE 5 — NEW LANDSCAPE */}

          <div className="creative-photo creative-photo-five">
            <img
              src="/assets/images/creative5.jpg"
              alt="Somanit's creative moment"
            />

            <span className="creative-sticker">
              ♡
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
    04 — INTERESTS
===================================================== */}

<section className="interests-section">

  <div className="page-sticker sticker-interest-1">
    ✦
  </div>

  <div className="page-sticker sticker-interest-2">
    ♡
  </div>

  <div className="page-sticker sticker-interest-3">
    ✧
  </div>


  <div className="about-section-heading">

    <span className="about-section-number">
      04
    </span>

    <div>
      <p>THINGS THAT KEEP ME CURIOUS</p>
      <h2>INTERESTS</h2>
    </div>

  </div>


  {/* INTEREST BUTTONS */}

  <div className="interest-tabs">

    {interests.map((interest) => (

      <button
        key={interest.id}
        type="button"
        className={`interest-tab ${
          activeInterest?.id === interest.id
            ? "interest-tab-active"
            : ""
        }`}
        onClick={() =>
          setSelectedInterest(interest.id)
        }
      >
        {interest.label}
      </button>

    ))}

  </div>


  {/* DISCOVERY BOX */}

  <div
    className={`interest-display-box ${
      activeInterest
        ? "interest-display-active"
        : ""
    }`}
  >

    {!activeInterest ? (

      <div className="interest-hint">

        <span className="interest-hint-icon">
          ✦
        </span>

        <p>
          CLICK AN INTEREST
        </p>

        <small>
          Discover a little more about me ♡
        </small>

      </div>

    ) : (

      <div className="interest-content">

        <div className="interest-content-header">

          <span className="interest-content-icon">
            ✦
          </span>

          <h3>
            {activeInterest.label}
          </h3>

        </div>

        <p>
          {activeInterest.text}
        </p>

      </div>

    )}

  </div>

</section>


      {/* =====================================================
          05 — PASSIONS
      ===================================================== */}

      <section className="passions-section">

        <div className="page-sticker sticker-passion-1">✦</div>
        <div className="page-sticker sticker-passion-2">♡</div>
        <div className="page-sticker sticker-passion-3">✧</div>

        <div className="about-section-heading">

          <span className="about-section-number">
            05
          </span>

          <div>
            <p>WHAT MATTERS TO ME</p>
            <h2>PASSIONS</h2>
          </div>

        </div>


        <div className="passions-layout">

          <div className="passions-photos">

            <div className="passion-photo passion-photo-one">
              <img
                src="/assets/images/passion1.jpg"
                alt="Somanit's passions"
              />
            </div>

            <div className="passion-photo passion-photo-two">
              <img
                src="/assets/images/passion2.jpg"
                alt="Somanit's passions"
              />
            </div>

            <span className="passion-photo-sticker passion-star">
              ✦
            </span>

            <span className="passion-photo-sticker passion-heart">
              ♡
            </span>

          </div>


          <div className="passions-text">

            <span className="about-mini-label">
              ✦ THINGS I CARE ABOUT
            </span>

            <h3>
              Learning, creating,
              <br />
              and giving ideas meaning.
            </h3>

            <p>
              I'm passionate about learning, creating, and exploring
              ideas that can have a meaningful impact. I enjoy technology,
              but I also care about the human side behind it.
            </p>

            <p>
              Art, psychology, mental care, Cambodian culture, and
              traditional dance are some of the things that remind me
              that there is much more to life than just studying technology.
            </p>

            <p>
              I want to keep exploring the connection between
              <strong>
                {" "}technology, creativity, culture, and human experiences.
              </strong>
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — A LITTLE OF ME
      ===================================================== */}

      <section className="little-me-section">

        <div className="page-sticker sticker-little-1">✦</div>
        <div className="page-sticker sticker-little-2">♡</div>
        <div className="page-sticker sticker-little-3">✧</div>

        <div className="about-section-heading">

          <span className="about-section-number">
            06
          </span>

          <div>
            <p>BEYOND THE RESUME</p>
            <h2>A LITTLE OF ME</h2>
          </div>

        </div>


        <div className="little-me-layout">

          <div className="little-me-text">

            <span className="about-mini-label">
              ✦ JUST ME BEING ME
            </span>

            <p>
              Outside of university and projects, I'm someone who enjoys
              music, fashion, photography, visual design, discovering new
              places, and collecting little moments that inspire me.
            </p>

            <p>
              I like cute things, colorful ideas, good music, and anything
              that lets me express a little personality.
            </p>

            <p>
              I'm still figuring out what my future will look like,
              but I know I want to keep learning, creating, and trying
              things that genuinely interest me.
            </p>

            <p className="little-me-ending">
              Still learning. Still creating. Still figuring it out. ♡
            </p>

            <div className="little-me-stickers">
              <span>♡</span>
              <span>✦</span>
              <span>✧</span>
              <span>+</span>
            </div>

          </div>


          <div className="little-me-photos">

            <div className="little-me-photo little-me-photo-one">

              <img
                src="/assets/images/me1.jpg"
                alt="Somanit"
              />

              <span>♡</span>

            </div>


            <div className="little-me-photo little-me-photo-two">

              <img
                src="/assets/images/me2.jpg"
                alt="Somanit"
              />

              <span>✦</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          END
      ===================================================== */}

      <section className="about-end">

        <span>
          ✦
        </span>

        <p>
          END OF LEVEL 03
        </p>

        <h2>
          THAT'S A LITTLE
          <br />
          ABOUT ME ♡
        </h2>

      </section>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div className="about-navigation">

        <button
          type="button"
          onClick={onBack}
        >
          ← BACK
        </button>

        <span>
          03 / 04
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

export default About;