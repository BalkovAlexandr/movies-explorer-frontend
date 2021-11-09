import './AboutMe.css';
import photo from '../../../images/my-photo2.jpg';

function AboutMe() {
  return (
    <section className='content'>
      <h2 className='content__title'>Студент</h2>
      <div className='about-me'>
        <div className='about-me__photo-box'>
          <img className='about-me__photo' src={photo} alt='Моё фото' />
        </div>
        <div className='about-me__info'>
          <h3 className='about-me__title'>Александр</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 26 лет.</p>
          <p className='about-me__text'>Родился в Севастополе, сейчас живу в Калининграде. Люблю животных, нравится слушать музыку и 
            в свободное время заниматься спортом. Сейчас работаю и учусь на Веб-разработчика.</p>
          <div className='about-me__contacts'>
            <a className='about-me__link app__link' href='https://ru-ru.facebook.com/' target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className='about-me__link app__link' href='https://github.com/BalkovAlexandr' target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;