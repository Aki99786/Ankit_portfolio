import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>LLM Recruiter Chatbot</h2>
                    <p>
                        Built a RAG-based AI recruiter assistant using LangChain and OpenAI APIs
                        to provide contextual, explainable candidate recommendations. Integrated
                        embeddings and vector search to reduce recruiter screening time and
                        cognitive load.
                    </p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>JD–CV Matching Engine</h2>
                    <p>
                        Developed an NLP-powered resume–job matching system using embeddings to
                        score and rank candidates. Improved recruiter decision accuracy and
                        accelerated shortlisting through semantic similarity analysis.
                    </p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Multilingual Resume Summarizer</h2>
                    <p>
                        Built a multilingual resume summarization tool using Hugging Face
                        Transformers and LangChain, enabling global talent evaluation across
                        multiple languages with consistent output quality.
                    </p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Video Recommendation System</h2>
                    <p>
                        Designed a semantic video recommendation engine using Whisper for
                        transcription, FAISS for vector similarity search, and LangChain for
                        content summarization and ranking.
                    </p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <h2>Compliance Document QA Bot</h2>
                    <p>
                        Built an internal QA chatbot for compliance teams to query large policy
                        and contract documents using RAG pipelines and GPT-4, enabling accurate
                        and explainable legal interpretations.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
