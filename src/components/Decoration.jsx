const bubbles = [
  { size: 46, left: "4%", duration: 22, delay: -2 },
  { size: 26, left: "12%", duration: 16, delay: -9 },
  { size: 64, left: "20%", duration: 27, delay: -14 },
  { size: 32, left: "30%", duration: 19, delay: -4 },
  { size: 20, left: "38%", duration: 14, delay: -11 },
  { size: 54, left: "47%", duration: 24, delay: -7 },
  { size: 30, left: "56%", duration: 18, delay: -1 },
  { size: 70, left: "64%", duration: 29, delay: -18 },
  { size: 24, left: "73%", duration: 15, delay: -6 },
  { size: 44, left: "81%", duration: 21, delay: -13 },
  { size: 34, left: "89%", duration: 20, delay: -3 },
  { size: 58, left: "95%", duration: 26, delay: -16 },
];

function Decoration() {
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            "--size": `${bubble.size}px`,
            left: bubble.left,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Decoration;
