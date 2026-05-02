// Chat / messaging screen
const Chat = ({ students, conversations, activeId, onSelect }) => {
  const active = students.find(s => s.id === activeId) || students[0];
  const msgs = conversations[active.id] || [];
  const [draft, setDraft] = React.useState('');

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 32px 0', height: 'calc(100vh - 200px)', minHeight: 600 }}>
      <h1 style={{ fontFamily: 'var(--tc-font-display)', fontWeight: 500, fontSize: 44, letterSpacing: '-0.02em', color: 'var(--tc-ink-900)', marginBottom: 24 }}>
        消息<em style={{ fontStyle: 'italic', color: 'var(--tc-peach-600)', fontWeight: 400 }}> · messages</em>
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 0, height: '100%', background: '#fff', border: '1px solid var(--tc-border-1)', borderRadius: 24, overflow: 'hidden' }}>
        {/* Sidebar list */}
        <aside style={{ borderRight: '1px solid var(--tc-border-1)', overflowY: 'auto' }}>
          <div style={{ padding: '20px 20px 12px', fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-fg-3)' }}>
            MUTUAL · 互相想认识
          </div>
          {students.filter(s => conversations[s.id]).map(s => {
            const last = conversations[s.id][conversations[s.id].length - 1];
            return (
              <button key={s.id} onClick={() => onSelect(s.id)} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer',
                background: s.id === active.id ? 'var(--tc-cream-100)' : 'transparent',
                border: 'none', padding: '14px 20px', display: 'flex', gap: 12, alignItems: 'center',
                borderBottom: '1px solid var(--tc-border-1)',
              }}>
                <img src={s.photo} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--tc-ink-900)' }}>{s.name}</div>
                  <div style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 12, color: 'var(--tc-ink-500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{last.text}</div>
                </div>
              </button>
            );
          })}
        </aside>

        {/* Conversation */}
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <header style={{ padding: '16px 24px', borderBottom: '1px solid var(--tc-border-1)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={active.photo} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--tc-ink-900)' }}>{active.name}</div>
              <div style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 12, color: 'var(--tc-ink-500)' }}>{active.school} · {active.major}</div>
            </div>
          </header>
          <div style={{ flex: 1, padding: 24, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--tc-cream-50)' }}>
            <div style={{ textAlign: 'center', fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--tc-ink-500)', padding: '8px 0 16px' }}>
              你们成为同窗了 — say hello.
            </div>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '70%' }}>
                  <div style={{
                    padding: '10px 14px',
                    background: m.from === 'me' ? 'var(--tc-peach-500)' : '#fff',
                    color: m.from === 'me' ? '#fff' : 'var(--tc-ink-900)',
                    border: m.from === 'me' ? 'none' : '1px solid var(--tc-border-1)',
                    borderRadius: m.from === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    fontFamily: 'var(--tc-font-sans)', fontSize: 14, lineHeight: 1.5,
                  }}>{m.text}</div>
                  <div style={{ fontFamily: 'var(--tc-font-mono)', fontSize: 10, color: 'var(--tc-ink-300)', marginTop: 4, textAlign: m.from === 'me' ? 'right' : 'left' }}>{m.t}</div>
                </div>
              </div>
            ))}
          </div>
          <footer style={{ padding: 16, borderTop: '1px solid var(--tc-border-1)', display: 'flex', gap: 8 }}>
            <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="说点什么…"
              style={{
                flex: 1, fontFamily: 'var(--tc-font-sans)', fontSize: 15,
                padding: '12px 16px', border: '1px solid var(--tc-cream-300)', borderRadius: 999,
                background: 'var(--tc-cream-50)', color: 'var(--tc-ink-900)', outline: 'none',
              }}
            />
            <button onClick={() => setDraft('')} style={{
              width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'var(--tc-peach-500)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><SendIcon size={18} /></button>
          </footer>
        </section>
      </div>
    </main>
  );
};

Object.assign(window, { Chat });
