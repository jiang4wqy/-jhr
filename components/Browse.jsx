// Browse / Discover screen — daily curated grid
const Browse = ({ students, likes, toggleLike, openProfile }) => {
  const today = students.slice(0, 3);
  const more = students.slice(3);

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 0' }}>
      {/* Today section */}
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-peach-700)' }}>FOR YOU TODAY</span>
        <h1 style={{ fontFamily: 'var(--tc-font-display)', fontWeight: 500, fontSize: 48, letterSpacing: '-0.02em', margin: '12px 0 8px', color: 'var(--tc-ink-900)' }}>
          今天的三位<em style={{ fontStyle: 'italic', color: 'var(--tc-peach-600)', fontWeight: 400 }}> classmates</em>
        </h1>
        <p style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 15, color: 'var(--tc-ink-500)', maxWidth: 520, lineHeight: 1.6 }}>
          根据你的资料和兴趣，我们今天为你挑选了三位同学。明天 9:00 更新。
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 80 }}>
        {today.map(s => <ProfileCard key={s.id} student={s} liked={likes[s.id]} onLike={() => toggleLike(s.id)} onOpen={() => openProfile(s.id)} featured />)}
      </div>

      {/* Filter / browse more */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingTop: 32, borderTop: '1px solid var(--tc-border-1)' }}>
        <h2 style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 22, fontWeight: 600, color: 'var(--tc-ink-900)' }}>更多同学</h2>
        <Button variant="ghost" size="sm"><SlidersIcon size={16} /> 筛选</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {more.map(s => <ProfileCard key={s.id} student={s} liked={likes[s.id]} onLike={() => toggleLike(s.id)} onOpen={() => openProfile(s.id)} />)}
      </div>
    </main>
  );
};

const ProfileCard = ({ student, liked, onLike, onOpen, featured }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff', border: '1px solid var(--tc-border-1)', borderRadius: 28,
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover ? '0 12px 32px rgba(122,64,32,0.12), 0 2px 6px rgba(122,64,32,0.06)' : 'none',
        cursor: 'pointer',
      }}
    >
      <div onClick={onOpen} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--tc-cream-100)' }}>
        <img src={student.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 400ms', transform: hover ? 'scale(1.02)' : 'scale(1)' }} />
        {featured && (
          <span style={{
            position: 'absolute', top: 14, left: 14,
            fontFamily: 'var(--tc-font-mono)', fontSize: 10, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '5px 10px', borderRadius: 999,
            background: 'rgba(253,250,246,0.92)', backdropFilter: 'blur(8px)', color: 'var(--tc-peach-700)',
          }}>今日推荐</span>
        )}
      </div>
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }} onClick={onOpen}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 20, fontWeight: 700, color: 'var(--tc-ink-900)' }}>{student.name}</span>
            <span style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 16, color: 'var(--tc-ink-500)' }}>· {student.age}</span>
          </div>
          {student.verified && <CheckIcon size={14} style={{ color: 'var(--tc-peach-500)' }} />}
        </div>
        <div style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 13, color: 'var(--tc-ink-500)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--tc-peach-500)' }} />
          {student.school} · {student.major}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {student.interests.slice(0, 3).map(i => <Tag key={i.label} cat={i.cat} size="sm">{i.label}</Tag>)}
        </div>
        <p style={{ fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontSize: 14, lineHeight: 1.55, color: 'var(--tc-ink-700)', paddingTop: 8, borderTop: '1px solid var(--tc-border-1)', margin: 0 }}>
          "{student.tagline}"
        </p>
      </div>
      <div style={{ padding: '0 20px 18px', display: 'flex', gap: 8 }} onClick={e => e.stopPropagation()}>
        <HeartButton active={liked} onClick={onLike} />
      </div>
    </article>
  );
};

Object.assign(window, { Browse, ProfileCard });
