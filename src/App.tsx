import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Copy,
  Database,
  ExternalLink,
  Layers3,
  Globe2,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Server,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { sendContact, validateContact } from './contact'
import type { ContactForm } from './contact'
import { capabilities, principles, profile, projects } from './data'

type Project = (typeof projects)[number]

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Brian Ragasi home" onClick={close}>
        <span>{profile.initials}</span><strong>Brian Ragasi</strong>
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={close}>About</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#expertise" onClick={close}>Expertise</a>
        <a className="nav-contact" href="#contact" onClick={close}>Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <div className="status"><span />{profile.availability}</div>
        <p className="overline">FULL-STACK DEVELOPER · PHILIPPINES</p>
        <h1>Building dependable digital products from interface to infrastructure.</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <ArrowRight size={17} /></a>
          <a className="button button-secondary" href="#contact">Contact me</a>
        </div>
        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ExternalLink size={12} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Globe2 size={16} /> LinkedIn <ExternalLink size={12} /></a>
          <span><MapPin size={16} /> {profile.location}</span>
        </div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-frame"><img src={profile.photo} alt="Brian Ragasi" width="1080" height="1053" /></div>
        <div className="portrait-caption"><span>BR</span><div><strong>{profile.name}</strong><small>{profile.role}</small></div></div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-shell section-pad" id="about">
      <div className="section-label"><span>01</span> About</div>
      <div className="about-body">
        <div><p className="overline">PROFESSIONAL PROFILE</p><h2>Practical thinking, thoughtful execution.</h2></div>
        <div className="about-copy">
          <p>I’m Brian, an IT student and full-stack developer interested in the complete life of a digital product—how it looks, how it works, and how reliably it runs.</p>
          <p>I enjoy projects at the intersection of clear interface design, useful data, and solid infrastructure. My goal is straightforward: understand the real problem, build a dependable solution, and keep improving it.</p>
          <a href={`mailto:${profile.email}`}>Discuss an opportunity <ChevronRight size={16} /></a>
        </div>
      </div>
      <div className="principles">
        {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, open }: { project: Project; index: number; open: () => void }) {
  return (
    <article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
      <button className="project-image" type="button" onClick={open} aria-label={`View details for ${project.title}`}>
        <img src={project.image} alt={project.imageAlt} loading={index === 0 ? 'eager' : 'lazy'} />
        <span>View project <ArrowRight size={16} /></span>
      </button>
      <div className="project-content">
        <p className="project-number">{String(index + 1).padStart(2, '0')} / {project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <button className="project-link" type="button" onClick={open}>Read project summary <ArrowRight size={15} /></button>
      </div>
    </article>
  )
}

function Work() {
  const [selected, setSelected] = useState<Project | null>(null)
  useEffect(() => {
    if (!selected) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const escape = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', escape)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', escape) }
  }, [selected])
  return (
    <section className="work section-pad" id="work">
      <div className="section-shell">
        <div className="section-label section-label-light"><span>02</span> Selected work</div>
        <div className="work-heading"><div><p className="overline">PROJECT PORTFOLIO</p><h2>Systems designed around real needs.</h2></div><p>A selection of application, data, and infrastructure work showing how I approach practical technical challenges.</p></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} open={() => setSelected(project)} />)}</div>
      </div>
      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close project details"><X /></button>
            <div className="modal-image"><img src={selected.image} alt={selected.imageAlt} /></div>
            <div className="modal-content"><p className="overline">{selected.category}</p><h2 id="project-dialog-title">{selected.title}</h2><p>{selected.description}</p><h3>My contribution</h3><p>{selected.contribution}</p><div className="modal-tags">{selected.technologies.map((item) => <span key={item}>{item}</span>)}</div></div>
          </section>
        </div>
      )}
    </section>
  )
}

const capabilityIcons = [<Layers3 />, <Database />, <Server />, <Check />]

function Expertise() {
  return (
    <section className="expertise section-shell section-pad" id="expertise">
      <div className="section-label"><span>03</span> Expertise</div>
      <div className="expertise-heading"><div><p className="overline">CAPABILITIES</p><h2>A balanced technical toolkit.</h2></div><p>I work across product interfaces, application logic, data, and systems—allowing me to understand how the pieces fit together.</p></div>
      <div className="capability-grid">{capabilities.map((item, index) => <article key={item.title}><div>{capabilityIcons[index]}</div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      <div className="technology-row"><span>React</span><span>TypeScript</span><span>JavaScript</span><span>Node.js</span><span>PHP</span><span>Python</span><span>MySQL</span><span>PostgreSQL</span><span>Linux</span><span>Docker</span></div>
    </section>
  )
}

const initialForm: ContactForm = { name: '', email: '', message: '', website: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [state, setState] = useState<'idle' | 'sending' | 'accepted' | 'activation'>('idle')
  const [error, setError] = useState('')
  const update = (field: keyof ContactForm, value: string) => setForm((current) => ({ ...current, [field]: value }))
  const submit = async (event: FormEvent) => {
    event.preventDefault()
    const validation = validateContact(form)
    if (validation) return setError(validation)
    setError(''); setState('sending')
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), 20000)
    try {
      const result = await sendContact(form, profile.email, controller.signal)
      setState(result)
      if (result === 'accepted') setForm(initialForm)
    } catch (reason) {
      setState('idle')
      setError(controller.signal.aborted ? 'The request timed out. Your message was kept—please try again or email me directly.' : reason instanceof Error ? reason.message : 'Something went wrong. Please email me directly.')
    } finally { window.clearTimeout(timer) }
  }
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email) } catch { window.location.href = `mailto:${profile.email}` }
  }
  return (
    <section className="contact section-pad" id="contact">
      <div className="section-shell">
        <div className="section-label section-label-light"><span>04</span> Contact</div>
        <div className="contact-grid">
          <div className="contact-copy"><p className="overline">START A CONVERSATION</p><h2>Let’s build something useful.</h2><p>If you have an opportunity, a project, or an interesting technical problem, I’d be glad to hear about it.</p><div className="direct-email"><small>EMAIL</small><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" onClick={copyEmail} aria-label="Copy email address"><Copy size={16} /></button></div><div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Globe2 /> LinkedIn</a></div></div>
          <div className="contact-form-wrap">
            {state === 'accepted' || state === 'activation' ? <div className="form-success"><CheckCircle2 /><h3>{state === 'accepted' ? 'Message submitted.' : 'One-time activation required.'}</h3><p>{state === 'accepted' ? 'Thank you. The email service accepted your message and I’ll respond as soon as I can.' : `Please confirm the activation message sent to ${profile.email}. Your draft remains available.`}</p><button type="button" onClick={() => setState('idle')}>{state === 'accepted' ? 'Send another message' : 'Return to message'}</button></div> : <form onSubmit={submit} aria-busy={state === 'sending'}><div className="form-row"><label>Name<input value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" maxLength={100} required placeholder="Your name" /></label><label>Email<input value={form.email} onChange={(e) => update('email', e.target.value)} type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" /></label></div><label>Message<textarea value={form.message} onChange={(e) => update('message', e.target.value)} maxLength={5000} required placeholder="Tell me about your project or opportunity." /></label><input className="honeypot" value={form.website} onChange={(e) => update('website', e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-light" type="submit" disabled={state === 'sending'}>{state === 'sending' ? <LoaderCircle className="spin" /> : <Mail />} {state === 'sending' ? 'Sending…' : 'Send message'}</button><small>Your details are sent securely through FormSubmit to Brian.</small></form>}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer><div className="section-shell"><a className="brand brand-footer" href="#top"><span>BR</span><strong>Brian Ragasi</strong></a><p>Full-Stack Developer & IT Student</p><p>© {new Date().getFullYear()} Brian Ragasi</p></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><About /><Work /><Expertise /><Contact /></main><Footer /></>
}
