import './Promo.css';
import img from '../../../images/text-color.svg';

function Promo() {
  return (
  <section className='promo'>
    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    <img className='promo__image' src={img} alt='Узор' />
  </section>
  )
}

export default Promo;