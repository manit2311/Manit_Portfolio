function MusicPlayer({ isPlaying, onToggle }) {
  return (
    <div className="music-player">
      <span className="music-note">♫</span>
      <div className="music-copy">
        <span>PORTFOLIO THEME</span>
        <strong>{isPlaying ? "PLAYING" : "PAUSED"}</strong>
      </div>
      <button className="music-button" onClick={onToggle} aria-label={isPlaying ? "Pause music" : "Play music"}>
        {isPlaying ? "Ⅱ" : "▶"}
      </button>
    </div>
  );
}
export default MusicPlayer;
