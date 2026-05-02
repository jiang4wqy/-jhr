// Lucide-style inline SVG icons. 1.5px stroke, currentColor.
const Icon = ({ d, fill = 'none', size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>{d}</svg>
);

const HeartIcon = ({ filled = false, size = 20 }) => (
  <Icon size={size} fill={filled ? 'currentColor' : 'none'} d={<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>} />
);
const MessageIcon = (p) => <Icon {...p} d={<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>} />;
const SearchIcon  = (p) => <Icon {...p} d={<g><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></g>} />;
const UserIcon    = (p) => <Icon {...p} d={<g><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></g>} />;
const HomeIcon    = (p) => <Icon {...p} d={<g><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></g>} />;
const CheckIcon   = (p) => <Icon {...p} d={<g><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></g>} />;
const ClockIcon   = (p) => <Icon {...p} d={<g><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g>} />;
const SendIcon    = (p) => <Icon {...p} d={<g><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></g>} />;
const ArrowLeftIcon = (p) => <Icon {...p} d={<g><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></g>} />;
const SlidersIcon = (p) => <Icon {...p} d={<g><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></g>} />;
const MapPinIcon  = (p) => <Icon {...p} d={<g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></g>} />;

Object.assign(window, { Icon, HeartIcon, MessageIcon, SearchIcon, UserIcon, HomeIcon, CheckIcon, ClockIcon, SendIcon, ArrowLeftIcon, SlidersIcon, MapPinIcon });
