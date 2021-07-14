import {Component} from 'react'
import NavBar from '../NavBar'
import SocialMediaSection from '../SocialMediaSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'
import HomeSection from '../HomeSection'

import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here
class Portfolio extends Component {
  state = {
    activeNavBarItem: navBarItems[0].name,
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case navBarItems[1].name:
        return <AboutSection />
      case navBarItems[2].name:
        return <ProjectsSection />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({activeNavBarItem})
  }

  render() {
    const {activeNavBarItem} = this.state

    return (
      <div className="portfolio-container">
        <NavBar
          activeNavbarItem={activeNavBarItem}
          changeActiveNavBarItem={this.changeActiveNavBarItem}
          navBarItems={navBarItems}
        />
        <div className="portfolio-body">
          <div className="active-section">{this.renderComponent()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
