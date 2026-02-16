export function SectionTitle(props: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="container-pad">
      {props.eyebrow ? (
        <div className="text-xs font-semibold tracking-widest text-gold-200/90">{props.eyebrow.toUpperCase()}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">{props.title}</h2>
      {props.subtitle ? <p className="muted mt-2 max-w-prose">{props.subtitle}</p> : null}
    </div>
  );
}
