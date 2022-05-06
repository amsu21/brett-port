import React from 'react'
import './credit.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'


const Credit = () => {
    return (
        <Section title="CREDIT REPARI PROGRAMS">
            <div className="credit-content">
                <ul className="credit-list">
                    {creditData.credit.reverse().map((exp) => (
                        <Fade bottom duration={1000} distance="20px">
                            <
                        </Fade>
                    ))}
                </ul>
            </div>
        </Section>
    )
}