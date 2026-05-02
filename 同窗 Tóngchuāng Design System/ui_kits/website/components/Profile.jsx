// Profile screen — magazine-style single-profile page
const Profile = ({ student, liked, onLike, onBack, onMessage }) => {
  if (!student) return null;
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '32px 32px 0' }}>
      <button onClick={onBack} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none',
        cursor: 'pointer', fontFamily: 'var(--tc-font-sans)', fontSize: 14,
        color: 'var(--tc-ink-500)', padding: '8px 0', marginBottom: 24,
      }}>
        <ArrowLeftIcon size={16} /> 回到推荐
      </button>

      {/* Title block */}
      <header style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-peach-700)', marginBottom: 12 }}>
          {student.school.toUpperCase()} · {student.year} · CLASS OF 2026
        </div>
        <h1 style={{ fontFamily: 'var(--tc-font-display)', fontWeight: 500, fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--tc-ink-900)', margin: 0 }}>
          {student.name}<em style={{ fontStyle: 'italic', color: 'var(--tc-peach-600)', fontWeight: 400, fontSize: 60 }}>, {student.age}.</em>
        </h1>
        <p style={{ fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: 'var(--tc-ink-700)', marginTop: 16 }}>
          "{student.tagline}"
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          {student.verified && <VerifiedBadge />}
          <span style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 13, color: 'var(--tc-ink-500)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <MapPinIcon size={14} /> {student.city}
          </span>
          <span style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 13, color: 'var(--tc-ink-500)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ClockIcon size={14} /> 三天前活跃
          </span>
        </div>
      </header>

      {/* Photos */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: 'repeat(2, 200px)', gap: 12, marginBottom: 56 }}>
        <img src={student.photo} style={{ gridRow: 'span 2', width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }} />
        <img src="../../assets/placeholders/hero-cafe.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }} />
        <img src="../../assets/placeholders/hero-campus.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }} />
      </div>

      {/* Sections */}
      <Section label="ABOUT" title="关于我">
        <p style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 17, lineHeight: 1.75, color: 'var(--tc-ink-700)', whiteSpace: 'pre-wrap' }}>
          {student.bio}
        </p>
      </Section>

      <Section label="INTERESTS" title="兴趣爱好">
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {student.interests.map(i => <Tag key={i.label} cat={i.cat}>{i.label}</Tag>)}
        </div>
      </Section>

      <Section label="LOOKING FOR" title="想认识什么样的人">
        <p style={{ fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.6, color: 'var(--tc-ink-700)' }}>
          "{student.looking}"
        </p>
      </Section>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
        <img src="../../assets/ornament-blossom.svg" style={{ width: 200 }} />
      </div>

      {/* Sticky-ish action bar */}
      <div style={{
        position: 'sticky', bottom: 24, marginTop: 40,
        display: 'flex', justifyContent: 'center', gap: 12,
      }}>
        <div style={{ display: 'flex', gap: 12, padding: 10, background: 'rgba(253,250,246,0.92)', backdropFilter: 'blur(20px)', borderRadius: 999, border: '1px solid var(--tc-border-2)', boxShadow: '0 12px 32px rgba(122,64,32,0.12)' }}>
          <HeartButton active={liked} onClick={onLike} />
          <Button variant="ghost" onClick={onMessage}><MessageIcon size={16} /> 说你好</Button>
        </div>
      </div>
    </main>
  );
};

const Section = ({ label, title, children }) => (
  <section style={{ paddingTop: 40, marginBottom: 40, borderTop: '1px solid var(--tc-border-1)' }}>
    <div style={{ fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-fg-3)', marginBottom: 8 }}>{label}</div>
    <h2 style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 24, fontWeight: 600, color: 'var(--tc-ink-900)', marginBottom: 16, letterSpacing: '-0.01em' }}>{title}</h2>
    {children}
  </section>
);

Object.assign(window, { Profile });
