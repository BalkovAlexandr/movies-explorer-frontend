import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio root__section'>
      <div className=' portfolio__content root__content'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__projects'>
          <li className='portfolio__project'>
            <p className='portfolio__name'>Статичный сайт</p>
            <a className='portfolio__link' href='https://github.com/BalkovAlexandr/how-to-learn' target='_blank' rel='noopener noreferrer'>
              <img className='portfolio__pic' src={arrow} alt='Ссылка на проект'/>
            </a>
          </li>
          <li className='portfolio__project'>
            <p className='portfolio__name'>Адаптивный сайт</p>
            <a className='portfolio__link' href='https://github.com/BalkovAlexandr/russian-travel' target='_blank' rel='noopener noreferrer'>
              <img className='portfolio__pic' src={arrow} alt='Ссылка на проект'/>
            </a>
          </li>
          <li className='portfolio__project'>
            <p className='portfolio__name'>Одностраничное приложение</p>
            <a className='portfolio__link' href='https://github.com/BalkovAlexandr/react-mesto-api-full' target='_blank' rel='noopener noreferrer'>
              <img className='portfolio__pic' src={arrow} alt='Ссылка на проект'/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;