import { LINKS } from './data/links'
import LinkPill from './components/linkPill'
import HeroLeft from './components/heroleft'
import Credits from './components/credits'
import Content from './components/content'

export default function App() {
  return (
    <div className="min-h-screen w-full md:flex">
      <aside className="paper-bg scallop-right w-full md:w-[500px] md:min-h-screen">
        <HeroLeft />
        <main className="mx-auto w-full max-w-md px-6">
          <div className="space-y-3">
            {LINKS.map((item) => <LinkPill key={item.label} item={item} />)}
          </div>
        </main>
        <Credits />
      </aside>

      <section className="relative flex-1 min-h-screen">
        <Content />
      </section>
    </div>
  )
}