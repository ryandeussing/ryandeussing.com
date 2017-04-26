import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import LazyLoad from 'react-lazyload';
import merritt from './merritt-square.jpg'
import avs from './avs-square.jpg'
import ogroup from './ogroup-square.jpg'
import ps212 from './ps212-square.jpg'
import burkeman from './burkeman-square.jpg'
import lbd from './lbd-square.jpg'
import eventnet from './eventnet-square.jpg'
import dirtcandy from './dirtcandy-square.jpg'
import ConfettiButton from '../components/confetti-button.js'

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  setLoading(value) {
    this.setState({ isLoading: value });
  }

  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Hi, I'm Ryan. I use design, code, and strategy to help people and products succeed on the web."},
            {"name": "keywords", "content": "unicorn, hackey sack, rainbow, taco, saison, po-boy"},
          ]}
        />
        <section className="hello tc pv6">
          <h1 className="blue center lh-title mv0">Hi, I&rsquo;m Ryan</h1>
        </section>
        <section className="headline tc bg-near-white pv5">
          <h2 className="text center lh-title mv3">I help people and products <ConfettiButton
            isLoading={ this.state.isLoading }
            setLoading={ this.setLoading }
          /> on the web using strategy, design, and code.</h2>
        </section>
        <section className="copy tc pv5">
          <div className="center">
            <p className="tl b copy-header mt3">Consulting</p>
            <p className="tl text center lh-copy mv0">I work with individuals, agencies, and brands. If you&rsquo;d like to discuss a project, or just talk shop, <a className="green" href="mailto:ryan@ryandeussing.com">please get in touch</a>.</p>
            <div className="images">
              <a target="_blank" href="http://mww.netlify.com">
                <img className="mh4 mh0-ns" src={merritt} />
              </a>
              <LazyLoad height={590} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.ps212.com">
                  <img className="mh4 mh0-ns" src={ps212} />
                </a>
              </LazyLoad>
              <LazyLoad height={712} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.audiovideosystems.com">
                  <img className="mh4 mh0-ns" src={avs} />
                </a>
              </LazyLoad>
              <LazyLoad height={720} unmountIfInvisible={false}>
                <img className="mh4 mh0-ns" src={burkeman} />
              </LazyLoad>
              <LazyLoad height={794} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.ogroup.net">
                  <img className="mh4 mh0-ns" src={ogroup} />
                </a>
              </LazyLoad>
              <LazyLoad height={688} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.lbdwines.com">
                  <img className="mh4 mh0-ns" src={lbd} />
                </a>
              </LazyLoad>
              <LazyLoad height={642} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.eventnetusa.com">
                  <img className="mh4 mh0-ns" src={eventnet} />
                </a>
              </LazyLoad>
              <LazyLoad height={642} unmountIfInvisible={false}>
                <a target="_blank" href="http://www.dirtcandynyc.com">
                  <img className="mh4 mh0-ns" src={dirtcandy} />
                </a>
              </LazyLoad>
            </div>
          </div>
        </section>
        <section className="copy tc">
          <div className="center bt top-border pv5">
            <p className="tl b copy-header mv3">Entrepreneur in Residence</p>
            <p className="tl text center lh-copy mt0 mb3"><span className="strike">I am</span> I was a 2016 Kaufmann Foundation EIR at <a className="orange" target="_blank" href="http://www.nydesigns.org">NYDesigns</a>, helping young companies identify opportunities and develop strategies for traction and growth.</p>
          </div>
        </section>
        <section className="headline tc bg-near-white pv5">
          <h2 className="text center lh-title mb0 mt3">Let&rsquo;s connect.</h2>
          <h4 className="dib"><a target="_blank" className="dib text" href="mailto:ryan@ryandeussing.com">Email</a></h4>&nbsp;&nbsp;/&nbsp;&nbsp;<h4 className="dib"><a target="_blank" className="dib text" href="https://www.twitter.com/ryandeussing">Twitter</a></h4>&nbsp;&nbsp;/&nbsp;&nbsp;<h4 className="dib"><a target="_blank" className="dib text" href="https://www.linkedin.com/in/ryandeussing">Linkedin</a></h4>
        </section>

      </div>
    )
  }
}
