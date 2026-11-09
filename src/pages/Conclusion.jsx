import "./Conclusion.css";

function Conclusion({ onBack, onStartAgain }) {
  const photos = [
    {
      src: "/assets/images/final1.JPG",
      className: "final-photo-1",
    },
    {
      src: "/assets/images/final2.jpg",
      className: "final-photo-2",
    },
    {
      src: "/assets/images/final3.jpg",
      className: "final-photo-3",
    },
    {
      src: "/assets/images/final4.JPG",
      className: "final-photo-4",
    },
    {
      src: "/assets/images/final5.jpg",
      className: "final-photo-5",
    },
    {
      src: "/assets/images/final6.jpg",
      className: "final-photo-6",
    },
    {
      src: "/assets/images/final7.JPEG",
      className: "final-photo-7",
    },
    {
      src: "/assets/images/final8.JPG",
      className: "final-photo-8",
    },
  ];

  return (
    <main className="conclusion-page">
      {/* DECORATIONS */}
      <span className="conclusion-deco deco-star-1">✦</span>
      <span className="conclusion-deco deco-star-2">✧</span>
      <span className="conclusion-deco deco-heart">♡</span>
      <span className="conclusion-deco deco-plus">+</span>

      {/* MEMORY BOARD */}
      <section className="conclusion-photo-stage">
        <div className="photo-stage-label">
          MY LITTLE MEMORY BOARD
        </div>

        <div className="photo-stage-line" />

        <div className="conclusion-photo-field">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`conclusion-photo ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={`Somanit memory ${index + 1}`}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </section>

      {/* THANK YOU CARD */}
      <section className="conclusion-center">
        <span className="conclusion-kicker">
          ✦ LEVEL COMPLETE ✦
        </span>

        <h1>
          THANK YOU
          <br />
          FOR VISITING
        </h1>

        <p>
          A little collection of my journey,
          ideas, memories, and the things
          I'm still figuring out.
          I'm always grateful for every experience.
        </p>

        <div className="conclusion-divider">
          ♡ ✦ ♡
        </div>

        <span className="conclusion-note">
          MORE TO COME...
        </span>

        <button
          type="button"
          className="conclusion-start-button"
          onClick={onStartAgain}
        >
          ↻ START AGAIN
        </button>
      </section>

      {/* NAVIGATION */}
      <nav
        className="conclusion-navigation"
        aria-label="Page navigation"
      >
        <button
          type="button"
          onClick={onBack}
        >
          ← BACK
        </button>

        <span>04 / 04</span>
      </nav>
    </main>
  );
}

export default Conclusion;
