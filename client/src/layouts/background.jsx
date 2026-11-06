/**
 * Site-wide background: charcoal base + thin grid + intersection nodes
 * + soft gold / crimson ambient light.
 * All styling lives in src/styles/grid-pattern.css (CSS variables), so the
 * pattern scales on any viewport without extra markup.
 */
const Background = () => {
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-bg__glow" />
      <div className="grid-bg__lines" />
      <div className="grid-bg__nodes" />
      <div className="grid-bg__vignette" />
    </div>
  );
};

export default Background;