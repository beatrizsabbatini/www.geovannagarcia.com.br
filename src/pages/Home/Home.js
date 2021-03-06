import React, { Component, Fragment } from 'react'

//Components
import Menu                 from '../../components/Menu'
import Section              from '../../components/Section'
import Content              from '../../components/Content'
import ContentHome          from '../../components/Content/ContentHome'
import ContentPresentation  from '../../components/Content/ContentPresentation'
import ContentAbout         from '../../components/Content/ContentAbout'
import ContentServices      from '../../components/Content/ContentServices'
import ContentContact       from '../../components/Content/ContentContact'
import ContentTestmonials   from '../../components/Content/ContentTestmonials'

// JQuery
import $ from 'jquery'

//Plugins
import { PluginMouseWheel }     from '../../plugins/plugin-mouse-wheel'
import { PluginNiceScroll }     from '../../plugins/plugin-nice-scroll'
import { PluginScrollReveal }   from '../../plugins/plugin-scroll-reveal'
import { PluginOwlCarousel }    from '../../plugins/plugin-owl-carousel'

// Menu
import menu from '../../data/menu'

class Home extends Component {
	componentDidMount(){
		this.pluginNiceScroll   = new PluginNiceScroll()
		this.pluginScrollReveal = new PluginScrollReveal()
		this.pluginOwlCarousel  = new PluginOwlCarousel()
		this.pluginMouseWheel   = new PluginMouseWheel()
		$('#loader').fadeOut();
	}
	render() {
		return(
			<Fragment>
				<Menu itemsMenu={menu}/>
				<Section id="home">
					<Content id="content-home" container="false">
						<ContentHome></ContentHome>
					</Content>
				</Section>
				<Section id="presentation">
					<Content id="content-presentation" container="false">
						<ContentPresentation></ContentPresentation>
					</Content>
				</Section>
				<Section id="about">
					<Content id="content-about">
						<ContentAbout></ContentAbout>
					</Content>
				</Section>
				<Section id="services">
					<Content id="content-services">
						<ContentServices></ContentServices>
					</Content>
				</Section>
				<Section id="testmonials">
					<Content id="content-testmonials">
						<ContentTestmonials></ContentTestmonials>
					</Content>
				</Section>
				<Section id="contact">
					<Content id="content-contact" container="false">
						<ContentContact></ContentContact>
					</Content>
				</Section>
			</Fragment>
		)
	}
}

export default Home