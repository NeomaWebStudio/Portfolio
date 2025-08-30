import {useInView} from 'react-intersection-observer'
import style from './css/animation.module.css';

// Поява блоків технологій та фреймворків з анімацією при скролі
const Animation = ({children}) => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

  return (
    <div
        ref={ref}
        className={`${style.show} ${inView ? style.visible : ''}`}
    >
      {children}
    </div>
  )
}

export {Animation};
