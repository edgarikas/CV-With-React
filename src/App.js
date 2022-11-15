import './App.css';

import linkedinPng from './icons/linkedin.png';
import twitterPng from './icons/twitter.png';
import githubPng from './icons/github.png';
import devBlogPng from './icons/dev.png';

function App() {
  return (
    <div className='container'>
      <header>
        <div className='title-box'>
          <select className='select-language'>
            <option value='lt'>Lietuviu Kalba</option>
            <option value='en'>Anglu Kalba</option>
          </select>
        </div>
        <div className='person-describtion-box'>
          <h1 className='person'>Edgar Martynenko</h1>
          <p className='work-field'>PROGRAMMER</p>
        </div>
      </header>
      <main>
        <div className='aboutMe-links-box'>
          <div className='aboutMe-box'>
            <h2>About Me</h2>
            <div className='line'>
              <div className='hr1'></div>
              <div className='hr'></div>
            </div>
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
            <h2>Links</h2>
            <div className='line'>
              <div className='hr1'></div>
              <div className='hr'></div>
            </div>

            <p>
              <a target='_blank' href='https://lt.linkedin.com/'>
                <img className='icons' src={linkedinPng}></img>{' '}
                LINKEDIN/username
              </a>
            </p>
            <p>
              <a target='_blank' href='https://twitter.com/'>
                <img className='icons' src={twitterPng}></img> TWITTER/@username
              </a>
            </p>
            <p>
              <a target='_blank' href='https://github.com/'>
                <img className='icons' src={githubPng}></img> GITHUB/username
              </a>
            </p>
            <p>
              <a target='_blank' href='https://dev.to/t/blog'>
                <img className='icons' src={devBlogPng}></img> BLOG/blog-name
              </a>
            </p>
          </div>
        </div>

        <div className='education-skills'>
          <section className='education'>
            <h2>Education</h2>
            <div className='line'>
              <div className='hr1'></div>
              <div className='hr'></div>
            </div>
            <h3>Ryto gimnazija</h3>
            <p>2007-2019</p>
            <p>Vidutinis issilavinimas</p>
            <hr className='min' />
            <h3>Vilniaus Kolegija</h3>
            <p>2019-2022</p>
            <p>Aukstasis</p>
          </section>
          <section className='personal-skills'>
            <h2>Personal Skills</h2>
            <div className='hr1'></div>
            <div className='hr'></div>
            <div className='personal-skills_list'>
              <p className='blue'>teamwork</p>
              <p className='yellow'>comunications</p>
              <p className='brown'>organization</p>
              <p className='lightGreen'>adaptive</p>
            </div>
          </section>
          <section className='technical-skills'>
            <h2>technical skills</h2>
            <div className='line'>
              <div className='hr1'></div>
              <div className='hr'></div>
            </div>
            <div className='technical-skills_list'>
              <p className='blue'>html</p>
              <p className='blue'>CSS/SCSS</p>
              <p className='yellow'>JAVASCRIPT</p>
              <p className='yellow'>REACT.JS</p>
              <p className='brown'>Nodde.JS</p>
            </div>
          </section>
        </div>

        <div className='workExperience'>
          <section className='workExperience_box'>
            <h2>Work Experience</h2>
            <div className='line'>
              <div className='hr1'></div>
              <div className='hr'></div>
            </div>
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
              <div className='ontacts-title_box-description'>
                <ul>
                  <li>
                    <a href='tel:+37064588222'>+37064588222</a>
                  </li>
                  <li>
                    <a href='mailto:example@gmail.com'>example@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='contacts-title_box'>
              <h2 className='contacts-title_box-type'>Social</h2>
              <div className='ontacts-title_box-description'>
                <ul>
                  <li>
                    <a target='_blank' href='https://lt.linkedin.com/'>
                      LinekdIn/username
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href='https://twitter.com/'>
                      Twitter/@user-handle
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
