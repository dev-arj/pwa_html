const imageGrid = document.getElementById('image-grid');
const experienceGrid = document.getElementById('experience');
const skillGrid = document.getElementById('skills');

const imageUrls = [
    'images/car-1.jpg',
    'images/car-2.jpg',
];

const skills = [
    {
        Tech: "NodeJS",
        Rating: "3"
    },
    {
        Tech: "Angular",
        Rating: "2"
    },
    {
        Tech: "Python",
        Rating: "2"
    },
    {
        Tech: "C++",
        Rating: "2"
    },
    {
        Tech: "Javascript",
        Rating: "2"
    },
    {
        Tech: "Typescript",
        Rating: "2"
    },
    {
        Tech: "iOS",
        Rating: "2"
    },
    {
        Tech: "Swift",
        Rating: "2"
    },
    {
        Tech: "HTML5",
        Rating: "2"
    },
    {
        Tech: "CSS",
        Rating: "2"
    }
];

const history = [
    {
        designation: "Assistant System Engg. - Trainee",
        company: "Tata Consultancy Services Ltd.",
        period: "17-06-2019 - 17-06-2020",
        acheivements: [
            {
                area: "Customer Relationship",
                description: "Had first person interaction with client in understanding the requirements of new features and also identifying the shortcomings of built and delivered product and suggesting for enhancements",
            },
            {
                area: "Technology",
                description: "Learnt and well versed the depth of nodeJS and generated readable, optimised and elegant WebAPIs which was used by multiple applications across the organisation."
            }
        ]
    },
    {
        designation: "Assistant System Engg.",
        company: "Tata Consultancy Services Ltd.",
        period: "17-06-2020 - 17-06-2021",
    },
    {
        designation: "System Engg.",
        company: "Tata Consultancy Services Ltd.",
        period: "17-06-2021 - Present",
    }
];

history.forEach((occurance) => {
    const div = document.createElement('div')

    const span1 = document.createElement('div')
    const span2 = document.createElement('div')
    const span3 = document.createElement('div')
    div.textContent = occurance.designation;
    span1.textContent = occurance.company;
    span2.textContent = occurance.period;
    experienceGrid.appendChild(div);
    experienceGrid.appendChild(span1);
    experienceGrid.appendChild(span2);
    experienceGrid.appendChild(document.createElement('hr'));
});

skills.forEach((skill) => {
    const div = document.createElement('span');
    div.setAttribute('class', skill.Rating === '2' ? 'badge bg-secondary' : 'badge bg-primary');
    div.setAttribute('style', 'margin-right : 0.25rem;');
    div.textContent = skill.Tech;
    skillGrid.appendChild(div);
})

imageUrls.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageGrid.appendChild(img);
});

