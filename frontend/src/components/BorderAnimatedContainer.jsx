function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#172033,#172033)_padding-box,conic-gradient(from_var(--border-angle),#6db0fc_0%,#8ace00_50%,#6db0fc_100%)_border-box] rounded-2xl border border-transparent animate-border flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
