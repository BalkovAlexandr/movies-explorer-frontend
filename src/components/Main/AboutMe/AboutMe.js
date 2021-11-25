import './AboutMe.css';
import photo from '../../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me  root__section'>
      <div className='about-me__content root__content'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__about'>
          <div className='about-me__description'>
            <h3 className='about-me__label'>Александр</h3>
            <p className='about-me__profession'>Фронтенд-разработчик, 26 лет</p>
            <p className='about-me__text'>
            Родился в Севастополе, сейчас живу в Калининграде. Люблю животных, нравится слушать музыку и 
            в свободное время заниматься спортом. Сейчас работаю и учусь на Веб-разработчика.
            </p>
            <div className='about-me__social'>
              <a className='about-me__about-link app__link' target='_blank' rel='noreferrer' href='https://ru-ru.facebook.com/'>
                Facebook
              </a>
              <a className='about-me__about-link app__link' target='_blank' rel='noreferrer' href='https://github.com/BalkovAlexandr'>
                Github
              </a>
            </div>
          </div>
          <img className='about-me__photo' src={photo} alt='Моё фото'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
