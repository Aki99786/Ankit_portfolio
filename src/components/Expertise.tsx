import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "FastAPI",
    "Node.js",
    "REST APIs",
    "Microservices",
    "MongoDB",
    "Redis",
    "Cassandra",
    "Kafka",
    "RabbitMQ"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Monitoring",
    "awsbedrock",
];

const labelsThird = [
    "LangChain",
    "LlamaIndex",
    "OpenAI APIs",
    "Hugging Face",
    "FAISS",
    "Pinecone",
    "Redis Vector",
    "Embeddings",
    "RAG Pipelines",
    "Prompt Engineering",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>Backend Engineering</h3>
                        <p>
                            Experienced in building scalable backend systems and APIs using Python
                            and FastAPI. Developed data-driven platforms, recommendation engines,
                            and distributed services with a strong focus on performance and reliability.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Automation</h3>
                        <p>
                            Once the application is built, I help clients set up DevOps testing,
                            CI/CD pipelines, and deployment automation to support the successful Go-Live.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>GenAI & LLM</h3>
                        <p>
                            Professional experience building enterprise-grade GenAI solutions including
                            RAG-based chatbots, AI recruiters, document QA systems, and recommendation
                            engines using LLMs, embeddings, and vector databases.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
