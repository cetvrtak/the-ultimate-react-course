import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    const skillList = [
        { title: 'HTML 💪', color: 'lightblue' },
        { title: 'CSS 💪', color: 'orange' },
        { title: 'JavaScript 💪', color: 'red' },
        { title: 'Vue 👋', color: 'aquamarine' },
        { title: 'React 🐣', color: 'olive' },
        { title: 'Git 🦸‍♂️', color: 'yellow' },
    ];

    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
                <SkillList skillList={skillList} />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className='avatar' src='./avatar.avif' alt='Avatar' />;
}

function Intro() {
    return (
        <div>
            <h1>Stevo Ilišković</h1>
            <div>Web Developer</div>
        </div>
    )
}

function SkillList(props) {
    return (
        <div className='skill-list'>
            {props.skillList.map(({ title, color }, index) => (
                <Skill title={title} bgColor={color} key={index} />
            ))}
        </div>
    );
}

function Skill(props) {
    return <div style={{ backgroundColor: props.bgColor }} className='skill'>{props.title}</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);