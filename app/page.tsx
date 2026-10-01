
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard id="123" name="Neura the Brainy" topic="some topic" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="124" name="Countsy the number Wizard" topic="some topic" subject="science" duration={45} color="#e5f0ff" />
        <CompanionCard id="125" name="Neura the Brainy" topic="some topic" subject="science" duration={45} color="#BDE7FF" />
      </section>
      <section className='home-section'>
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page