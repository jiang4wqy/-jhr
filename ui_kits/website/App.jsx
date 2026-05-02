// Root app — handles routing between marketing/browse/profile/chat
const App = () => {
  const [screen, setScreen] = React.useState('marketing');
  const [profileId, setProfileId] = React.useState('s1');
  const [activeChat, setActiveChat] = React.useState('s2');
  const [likes, setLikes] = React.useState({ s2: true, s3: true });

  const toggleLike = (id) => setLikes(p => ({ ...p, [id]: !p[id] }));
  const openProfile = (id) => { setProfileId(id); setScreen('profile'); };
  const openChat = (id) => { setActiveChat(id); setScreen('chat'); };

  const student = STUDENTS.find(s => s.id === profileId);

  return (
    <div>
      <Header current={screen} onNav={setScreen} />
      {screen === 'marketing' && <Marketing onNav={setScreen} />}
      {screen === 'browse' && <Browse students={STUDENTS} likes={likes} toggleLike={toggleLike} openProfile={openProfile} />}
      {screen === 'profile' && (
        <Profile
          student={student}
          liked={likes[profileId]}
          onLike={() => toggleLike(profileId)}
          onBack={() => setScreen('browse')}
          onMessage={() => openChat(profileId)}
        />
      )}
      {screen === 'chat' && <Chat students={STUDENTS} conversations={MESSAGES} activeId={activeChat} onSelect={setActiveChat} />}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
