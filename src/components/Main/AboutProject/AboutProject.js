import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about  root__section'>
      <div className='about__content root__content'>
        <h2 className='about__title'>О проекте</h2>
        <div className='about__diploma'>
          <div className='about__stages'>
            <h3 className='about__chapter-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about__chapter-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about__time'>
            <h3 className='about__chapter-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about__chapter-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='project__duration'>
          <p className='project__line-time project__line-time_type_short'>1 неделя</p>
          <p className='project__line-time project__line-time_type_long'>4 недели</p>
          <p className='project__line-time project__part'>Back-end</p>
          <p className='project__line-time project__part'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;