// Atoms — Button, IconButton, HeartButton, Tag, Badge

const Button = ({ variant = 'primary', size = 'md', children, onClick, ...rest }) => {
  const styles = {
    base: {
      fontFamily: 'var(--tc-font-sans)', fontWeight: 600, borderRadius: 999,
      border: '1px solid transparent', cursor: 'pointer', display: 'inline-flex',
      alignItems: 'center', gap: 8, transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
      whiteSpace: 'nowrap',
    },
    primary: { background: 'var(--tc-peach-500)', color: '#fff' },
    secondary: { background: 'var(--tc-cream-100)', color: 'var(--tc-ink-900)' },
    ghost: { background: 'transparent', color: 'var(--tc-ink-900)', borderColor: 'var(--tc-cream-300)' },
    sm: { fontSize: 13, padding: '8px 16px' },
    md: { fontSize: 15, padding: '12px 22px' },
    lg: { fontSize: 16, padding: '14px 28px' },
  };
  return <button onClick={onClick} {...rest} style={{ ...styles.base, ...styles[variant], ...styles[size] }}>{children}</button>;
};

const IconButton = ({ children, active = false, onClick, title }) => (
  <button onClick={onClick} title={title} style={{
    width: 44, height: 44, borderRadius: '50%',
    border: '1px solid ' + (active ? 'var(--tc-rose-500)' : 'var(--tc-cream-300)'),
    background: active ? 'var(--tc-rose-500)' : '#fff',
    color: active ? '#fff' : 'var(--tc-ink-700)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
    transition: 'all 220ms cubic-bezier(0.34,1.56,0.64,1)',
  }}>{children}</button>
);

const HeartButton = ({ active, onClick, label = '想认识' }) => (
  <button onClick={onClick} style={{
    fontFamily: 'var(--tc-font-sans)', fontSize: 15, fontWeight: 600,
    padding: '12px 22px', borderRadius: 999, cursor: 'pointer',
    border: '1px solid ' + (active ? 'var(--tc-rose-500)' : 'var(--tc-rose-300)'),
    background: active ? 'var(--tc-rose-500)' : 'transparent',
    color: active ? '#fff' : 'var(--tc-rose-500)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'all 220ms cubic-bezier(0.34,1.56,0.64,1)',
  }}>
    <HeartIcon filled={active} size={16} />
    {active ? '已表示' : label}
  </button>
);

const TAG_COLORS = {
  sage:  { bg: 'rgba(138,166,140,0.12)', fg: '#5a7a5d', bd: 'rgba(138,166,140,0.4)' },
  sky:   { bg: 'rgba(138,182,214,0.12)', fg: '#5985a8', bd: 'rgba(138,182,214,0.4)' },
  plum:  { bg: 'rgba(176,134,181,0.12)', fg: '#7c5a82', bd: 'rgba(176,134,181,0.4)' },
  honey: { bg: 'rgba(224,184,112,0.14)', fg: '#8a6a2f', bd: 'rgba(224,184,112,0.4)' },
};

const Tag = ({ children, cat = 'sage', size = 'md' }) => {
  const c = TAG_COLORS[cat] || TAG_COLORS.sage;
  return <span style={{
    fontFamily: 'var(--tc-font-sans)', fontSize: size === 'sm' ? 11 : 13,
    padding: size === 'sm' ? '4px 10px' : '6px 12px',
    borderRadius: 999, background: c.bg, color: c.fg, border: '1px solid ' + c.bd,
    display: 'inline-block',
  }}>{children}</span>;
};

const VerifiedBadge = () => (
  <span style={{
    fontFamily: 'var(--tc-font-sans)', fontSize: 11, fontWeight: 600,
    padding: '3px 8px', borderRadius: 4, letterSpacing: '0.04em',
    background: 'var(--tc-peach-100)', color: 'var(--tc-peach-700)',
    display: 'inline-flex', alignItems: 'center', gap: 4,
  }}><CheckIcon size={11} /> 学籍已认证</span>
);

Object.assign(window, { Button, IconButton, HeartButton, Tag, VerifiedBadge });
