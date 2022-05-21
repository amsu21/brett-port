import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
// import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>
              I'm Brett{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              At a young age I was always the person that never went with the crowd I was always and I mean always an independent thinker. Fast forward to now I am 22 and have dove into the world of financial literacy and that trait from a young kid serves me well . I aim to change the lack of financial literacy for my community. One of my favorite quotes I've heard is that "conversation changes compensation". The most important factor is changing and restructuring the way that we have been "taught" finances.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              The thing that I came to realize is that we were not taught finances at all. School taught us nothing about credit scores other than pay your bills on time. But realizing that it isn't anybody else's job but our own to educate ourselves.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'learning new technologies',
                    'exercising',
                    'solving complex problems',
                    'skiing',
                    'fixing hard-to-fix bugs',
                    'trying new things',
                    'collaborating with others',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
            My goal is to educate my community on financial literacy to obtain a better quality of life. Whether that be through personal credit, business credit, manufactured spending, travel hacking, or just learning simple extra ways to bring income. Whether your goal be to just put extra money in your pocket, quit your job.
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Norfolk, Virginia</p>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default About
