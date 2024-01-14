import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import boy from "./image/boy.jpg";
import girl from "./image/girl.jpg";
import "../assets/cards.css";
import "./batch.css";
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Batch2024() {
  return (
    <>
      <Navbar />

      <div className="batch_container"> <h1> Batch 2020-24</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team ">
              <div className="picture">
               
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/410200186_366624569188461_7624045907190699982_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=MhYchIDBpkgAX-vvnCY&_nc_ht=scontent.cdninstagram.com&oh=00_AfCvbUwMMaP5hB0K18f1hebY2qdC9-WEUbTE1u176ipkMA&oe=65A5F228" />
                
              </div>
              <div className="team-content">
                <h3 className="name">Vikash Kaushik <VerifiedIcon/></h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
              {/* <li>
                  <a href="https://theneoalpha.vercel.app/">
                    <LanguageIcon/>
                  </a>
                </li> */}
              <li>
                  <a href="https://www.linkedin.com/in/vikashkaushik79/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:vikashkaushik910@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/theneoalpha">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/theneoalpha/">
                    <InstagramIcon />
                  </a>
                </li>
                
                
                
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/401786787_254300204286671_3854906606076386958_n.jpg?stp=dst-jpg_s120x120&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=O497AWCkVcsAX_oIuGP&_nc_ht=scontent.cdninstagram.com&oh=00_AfBmoagUi9EECZ6tbmeRjuRa9OQQfL3Q7h2jtWwEARZ77A&oe=65A6FE9D" />
              </div>
              <div className="team-content">
                <h3 className="name">Avinash Singh</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/avinash__117/">
                    <InstagramIcon />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li> */}
                <li>
                  <a href="mailto:avinash1221@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/417458204_739762701055289_483173472118831536_n.jpg?stp=dst-jpg_s120x120&_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=de1P_6e3U3AAX8tudEU&_nc_ht=scontent.cdninstagram.com&oh=00_AfDehO4a9_LE2ryJDfCeVb660Oq6WscaDhzsk3HldQ6bUg&oe=65A4E1AD" />
              </div>
              <div className="team-content">
                <h3 className="name">Tikesh Usendi</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/itst_ikesh?igsh=NzYzYzVsaTZmcTJk">
                    <InstagramIcon />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/in/tikesh-kumar-usendi-284356234/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:tikeshbhilai1234@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={boy} />
              </div>
              <div className="team-content">
                <h3 className="name">Tushar Sahu</h3>
                <h4 className="title">Batch 2020-24</h4>
              </div>
              <ul className="social">
                {/* <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li> */}
                <li>
                  <a href="https://www.linkedin.com/in/tushar-sahu-6b15b4231/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="mailto:tusharsahu0212@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/384065273_243090581654267_6748725019067548581_n.jpg?stp=dst-jpg_s120x120&_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Tb5ho1bumwwAX8KZ-_g&_nc_ht=scontent.cdninstagram.com&oh=00_AfB0aJTo853TSPnr7PMijhWkmuFTNw4LK3VvbcvVQPRxqA&oe=65A5AF3C"/>
              </div>
              <div className="team-content">
                <h3 className="name">Derhu Joshi</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/thejoshi31/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/263009951_141975751520903_3821106824413730622_n.jpg?stp=dst-jpg_s120x120&_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=hnd_NTQ4zdQAX-wMXaZ&_nc_ht=scontent.cdninstagram.com&oh=00_AfBUHKdIFdl-llE9ql8clq_MWWzI5BvT1hxVJ4ne7VyHjg&oe=65A5D854" />
              </div>
              <div className="team-content">
                <h3 className="name">Dooman Maitry</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/maitrydooman/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/349327064_638986538267925_7405924310439311141_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=cQD4l_Qb5goAX8ZmJ1h&_nc_ht=scontent.cdninstagram.com&oh=00_AfDAQ-kwowvHDlxvDPf-KoPdlfMSajNBzLDsXlU9fl6fkA&oe=65A65C87" />
              </div>
              <div className="team-content">
                <h3 className="name">Ajay Patel</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/ajaykashyap_a01/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="https://scontent.cdninstagram.com/v/t51.2885-19/364986967_988438875737810_1281060800323658394_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=0gOn1GzNT68AX9yGloj&_nc_ht=scontent.cdninstagram.com&oh=00_AfAh2W-mcebBDK6AefPteGd8W_c78x2oFkLG-TG-guTs1g&oe=65A69689" />
              </div>
              <div className="team-content">
                <h3 className="name">Neetish Yadu</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/neetishyadu/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={boy} />
              </div>
              <div className="team-content">
                <h3 className="name" />
                <h3>Aayush Verma</h3>
                <h4 className="title">Batch 2020-24(IT)</h4>
              </div>
              <ul className="social">
                <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
