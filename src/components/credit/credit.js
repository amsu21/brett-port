import React from 'react'
import './Credit.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import { CreditCard } from '@material-ui/icons'
import creditData from '../../data/credit.json'


const Credit = () => {
    return (
        <Section title="CREDIT REPARI PROGRAMS">
            <div className="credit-content">
                <ul className="credit-list">
                    {creditData.credit.reverse().map((exp) => (
                        <Fade bottom duration={1000} distance="20px">
                            <CreditCard credit={exp} />
                        </Fade>
                    ))}
                </ul>
                <Fade bottom duration={1200} distance="20px">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <p style={{ textAlign: 'center' }}>
                            Blah blah blah
                        </p>
                    </div>
                </Fade>
            </div>
        </Section>
    )
}

export default Credit