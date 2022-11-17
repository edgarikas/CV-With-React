import './App.css';

import linkedinPng from './icons/linkedin.png';
import twitterPng from './icons/twitter.png';
import githubPng from './icons/github.png';
import devBlogPng from './icons/dev.png';

import Links from './components/Links/Links.js';
import Headings2 from './components/Headings2/Headings2.js';
import TitleBox from './components/TitleBox/TitleBox';
import PersonDesciption from './components/PersonDesciption/PersonDesciption';
import Badge from './components/Badge/Badge';

function App() {
  return (
    <div className='container'>
      <header>
        <TitleBox>
          <select className='select-language'>
            <option value='lt'>Lietuviu Kalba</option>
            <option value='en'>Anglu Kalba</option>
          </select>
        </TitleBox>

        <PersonDesciption>
          <h1 className='person'>Edgar Martynenko</h1>
          <p className='work-field'>PROGRAMMER</p>
        </PersonDesciption>
      </header>
      <main>
        <div className='aboutMe-links-box'>
          <div className='aboutMe-box'>
            <Headings2>About Me</Headings2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              dolorem, maiores exercitationem consequatur incidunt autem
              sapiente dolor neque magni obcaecati placeat beatae doloribus
              deleniti architecto ex! Laudantium tenetur soluta maiores ipsum
              reiciendis dicta saepe enim eaque facilis quasi possimus laborum
              expedita rem amet animi odit doloremque tempora ducimus ea quis
              explicabo, suscipit recusandae minima! Magnam porro cupiditate rem
              ratione incidunt illum explicabo voluptatum sapiente tempore!
              Repellat laudantium quibusdam neque, tempora ab ducimus molestias
              modi veniam exercitationem enim totam sed aliquam odio. Ad aut
              quidem explicabo, odio atque provident cumque minus ratione
              placeat eos sed laudantium, veritatis optio, expedita consequatur
              qui?
            </p>
          </div>

          <div className='links-box'>
            <Headings2>Links</Headings2>

            <Links href='https://lt.linkedin.com/' target='_blank'>
              <img className='icons' src={linkedinPng}></img> LINKEDIN/username
            </Links>

            <Links href='https://twitter.com/'>
              <img className='icons' src={twitterPng}></img> TWITTER/@username
            </Links>

            <Links href='https://github.com/'>
              <img className='icons' src={githubPng}></img> GITHUB/username
            </Links>

            <Links href='https://dev.to/t/blog'>
              <img className='icons' src={devBlogPng}></img> BLOG/blog-name
            </Links>
          </div>
        </div>

        <div className='education-skills'>
          <section className='education'>
            <Headings2>Education</Headings2>

            <h3>Ryto gimnazija</h3>
            <p>2007-2019</p>
            <p>Vidutinis issilavinimas</p>
            <hr className='min' />
            <h3>Vilniaus Kolegija</h3>
            <p>2019-2022</p>
            <p>Aukstasis</p>
          </section>

          <section className='personal-skills'>
            <Headings2>Personal Skills</Headings2>

            <div className='personal-skills_list'>
              <Badge>teamwork</Badge>
              <Badge className='yellow'>comunications</Badge>
              <Badge className='brown'>organization</Badge>
              <Badge className='lightGreen'>adaptive</Badge>
            </div>
          </section>
          <section className='technical-skills'>
            <Headings2>Technical Skills</Headings2>

            <div className='technical-skills_list'>
              <Badge>html</Badge>
              <Badge>CSS/SCSS</Badge>
              <Badge className='brown'>AVASCRIPT</Badge>
              <Badge className='yellow'>REACT.JS</Badge>
              <Badge className='lightGreen'>Nodde.JS</Badge>
            </div>
          </section>
        </div>

        <div className='workExperience'>
          <section className='workExperience_box'>
            <Headings2>Work Experience </Headings2>

            <div className='workExperience_box-jobs'>
              <div className='job-box job-box-border'>
                <h3>JOB POSITION</h3>
                <p>Company</p>
                <p>2020 - present</p>
                <div className='job-box_experience'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum deleniti quam porro, ipsa consectetur perspiciatis
                    tempore itaque iusto corporis officia.
                  </p>
                  <div className='job-box_experience'>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='job-box job-box-border'>
                <h3>JOB POSITION</h3>
                <p>Company</p>
                <p>2018 - 2020</p>
                <div className='job-box_experience'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum deleniti quam porro, ipsa consectetur perspiciatis
                    tempore itaque iusto corporis officia.
                  </p>
                  <div className='job-box_experience'>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='job-box'>
                <h3>JOB POSITION</h3>
                <p>Company</p>
                <p>2016 - 2018</p>
                <div className='job-box_experience'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum deleniti quam porro, ipsa consectetur perspiciatis
                    tempore itaque iusto corporis officia.
                  </p>
                  <div className='job-box_experience'>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <section className='footer'>
          <div className='contacts'>
            <div className='hr3'></div>
          </div>
          <div className='contacts-title'>
            <div className='contacts-title_box'>
              <h2 className='contacts-title_box-type'>Location</h2>
              <div className='ontacts-title_box-description'>
                <ul>
                  <li>Lithuania, Vilnius</li>
                </ul>
              </div>
            </div>

            <div className='contacts-title_box'>
              <h2 className='contacts-title_box-type'>Contact</h2>
              <div className='contacts-title_box-description'>
                <Links href='tel:+37064588222'>+37064588222</Links>
                <Links className='mt' href='mailto:example@gmail.com'>
                  example@gmail.com
                </Links>
              </div>
            </div>

            <div className='contacts-title_box'>
              <h2 className='contacts-title_box-type'>Social</h2>
              <div className='ontacts-title_box-description'>
                <Links target='_blank' href='https://lt.linkedin.com/'>
                  LinekdIn/username
                </Links>
                <Links
                  className='mt'
                  target='_blank'
                  href='https://twitter.com/'
                >
                  Twitter/@user-handle
                </Links>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
