// init comp and import in app.jsx to render
import React from 'react'
import "./about.css";
import greenme from "../../img/me.png"
import Goal from "../../img/target.png";

const About = () => {
  return (
    <div className="a">
        {/* card stack */}
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={greenme} alt="" className="a-img" />
            </div>
        </div>

        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Full-stack engineer, <br /> building AI-native products.
            </p>

            <div className="a-desc">
                <p>
                    I'm a full-stack engineer with 4+ years shipping production
                    apps in React, Next.js, TypeScript, and Node.js. <br />
                    Lately, that's meant building AI-native systems &mdash; a
                    multi-retrieval RAG platform (FAISS/BM25/hybrid search,
                    citation-grounded LLM responses) and an AI slide-deck
                    generator built at a university AI research center.
                    <br />
                    <br />
                    I care about the whole product, not just the ticket:
                    scoping the problem, weighing tradeoffs with the team,
                    and shipping something reliable end to end &mdash; from
                    Figma to Docker to production.
                    <br />
                    <br />
                    Get in touch.<br />
                    Let's build something great.
                </p>
                <div className="a-asp">
                    <img src={Goal} alt="" className="a-asp-img" />
                    <div className="a-asp-texts">
                        <h4 className="a-asp-title">Aspiration</h4>
                        <p className="a-asp-desc">
                            To build AI-powered products that make people <br />
                            genuinely better at what they do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About