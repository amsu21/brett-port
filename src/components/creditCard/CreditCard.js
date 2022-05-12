import React from 'react'
import './CreditCard.css'

const CreditCard = ({ credit }) => {
    let { link, title, info } = credit 
    return (
        <a
            className="credit-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="credit-card-wrapper">
                <div className="credit-card">
                    <div className="credit-card-top">
                        <div
                            className="credit-bg"
                            style={{ background: credit.colourPrimary }}
                        ></div>
                        <h2>{company}</h2>
                        <div className="image-wrapper">
                            <div
                                className="credit-bg logo-bg"
                                style={{
                                    background: experience.colourSecondary
                                    ? experience.colourSecondary
                                    : experience.colourPrimary,
                                }}
                            ></div>
                            <div className="credit-card-bottom">
                                <div>
                                    <h2>{titlle}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CreditCard