function GradientSVG() {
  const idCSS = "hello";
  const gradientTransform = `rotate(130, 0.5, 0.5) `;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="59.51%" stopColor="#FFFFFF" />
          <stop offset="83.84%" stopColor="#FF0000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSVG;
