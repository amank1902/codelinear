export default function Section({ id, className = "", children, container = true }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 lg:py-28 ${className}`}>
      {container ? <div className="container-shell">{children}</div> : children}
    </section>
  );
}
