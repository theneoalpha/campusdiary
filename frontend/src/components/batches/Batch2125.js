import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


import '../assets/cards.css';
import './batch.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Batch2024() {
  const team = [ {
    name: 'Rajkamal Gandharla',
    src: require('../stud/2025/rajkamal.jpg'),
    linkedin: '',
    email: 'rajkamalgandharla1032@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/rajkamal_gandharla',
  }, {
    name: 'Tinu Bawne',
    src: require('../stud/2025/tinu.jpg'),
    linkedin: 'https://in.linkedin.com/in/tinu-bawne-120878293',
    email: 'tinubawne51@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/tinubawne/',
  },
  {
    name: 'Ananya Gaikwad',
    src: require('../stud/2025/ananya.jpg'),
    linkedin: 'https://www.linkedin.com/in/ananya-gaikwad3103',
    email: 'ananyagaikwad31@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/__ananyaa31',
  },
  {
    name: 'Ritesh Sahu',
    src: require('../stud/2025/ritesh.jpg'),
    linkedin: 'https://www.linkedin.com/in/ritesh-sahu-2869a52b4',
    email: 'riteshkumar00761@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/riiiteish',
  },
  {
    name: 'Divya Jaiswal',
    src: require('./image/girl.jpg'),
    linkedin: '',
    email: 'divyajaiswal1320@gmail.com',
    github: '',
    instagram: '',
  },
  {
    name: 'Agya Kurrey',
    src: require('./image/girl.jpg'),
    linkedin: 'https://www.linkedin.com/in/agya-kurrey-4a5a97273/',
    email: 'agyakurrey003@gmail.com',
    github: '',
    instagram: '',
  },
  {
    name: 'Deepak Gayakwad',
    src: require('../stud/2025/deepka.jpg'),
    linkedin: '',
    email: 'deepak2152g@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/deepak.78___',
  },
  {
    name: 'Aman Singh Rathore',
    src: require('../stud/2025/aman.jpg'),
    linkedin: '',
    email: 'amansrathore7000@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/_itz._me_aman_',
  }
 
  ]
   
  

  return (
    <>
      <Navbar />

      <div className="batch_container">
        <div className='row'>
        {team.map((teammate, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={teammate.src} alt={`${teammate.name}'s Profile`} />
              </div>
              <div className="team-content">
              <h3 className="name">
                  {teammate.name} {teammate.name === 'Vikash Kaushik' && <VerifiedIcon />}
                </h3>
                <h4 className="title">Batch 2021-25(IT)</h4>
              </div>
              <ul className="social">
              {teammate.linkedin && teammate.linkedin !== '' && (
                  <li>
                    <a href={teammate.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${teammate.email}`}>
                    <EmailIcon />
                  </a>
                </li>
                {teammate.github && teammate.github !== '' && (
                  <li>
                    <a href={teammate.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </li>
                )}
                {teammate.instagram && teammate.instagram !== '' && (
                  <li>
                    <a href={teammate.instagram} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
}
