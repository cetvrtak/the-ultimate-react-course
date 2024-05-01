import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    const skillList = [
        { skill: 'HTML', level: 'advanced', color: 'lightblue' },
        { skill: 'CSS', level: 'advanced', color: 'orange' },
        { skill: 'JavaScript', level: 'advanced', color: 'red' },
        { skill: 'Vue', level: 'familiar', color: 'aquamarine' },
        { skill: 'React', level: 'beginner', color: 'olive' },
        { skill: 'Git', level: 'superhero', color: 'yellow' },
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

function SkillList({ skillList }) {
    return (
        <div className='skill-list'>
            {skillList.map(({ skill, level, color }, index) => (
                <Skill skill={skill} level={level} bgColor={color} key={index} />
            ))}
        </div>
    );
}

function Skill({ skill, level, bgColor }) {
    const levelMap = {
        'beginner': '🐣',
        'familiar': '👋',
        'advanced': '💪',
        'superhero': '🦸‍♂️'
    }
    return <div style={{ backgroundColor: bgColor }} className='skill'>{skill} {levelMap[level]}</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);