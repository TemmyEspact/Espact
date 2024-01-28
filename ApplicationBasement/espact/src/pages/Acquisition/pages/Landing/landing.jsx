import React from 'react'
import LandingInitialComponent from './components/initial'
import LandingAboutComponent from './components/about'
import LandingServiceComponent from './components/service'
import LandingTestimoniesComponent from './components/testimonies'
import LandingTeamComponent from './components/team'
import LandingTalkComponent from './components/talk'
import LandingMailingComponent from './components/mailing'
import LandingFooterComponent from './components/footer'

export default function LandingScreen() {
  return (
    <div className='bg-[#FFFFFF] w-full'>
      <LandingInitialComponent />
      <LandingAboutComponent />
      <LandingServiceComponent />
      <LandingTestimoniesComponent />
      <LandingTalkComponent />
      <LandingTeamComponent />
      <LandingMailingComponent />
      <LandingFooterComponent />
    </div>
  )
}
