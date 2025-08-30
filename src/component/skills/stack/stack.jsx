import style from "./css/stack.module.css";
import {StackLine, FrameworkBlock} from "./stackComponent/stackComponent";

const Stack = () => {
  return (
    <div className={style.componentContainer}>

        <div className={style.stackContainer}>
            <h4 className={style.titleStack}>Технічний стек</h4>
            <StackLine title='React/Next.js' percent={95} delay={0}/>
            <StackLine title='TypeScript' percent={90} delay={100}/>
            <StackLine title='Node.js' percent={88} delay={200}/>
            <StackLine title='Python' percent={85} delay={300}/>
            <StackLine title='PostgreSQL' percent={82} delay={400}/>
            <StackLine title='AWS/Cloud' percent={80} delay={500}/>
        </div>

        <div className={style.frameContainer}>
            <FrameworkBlock text='React'/>
            <FrameworkBlock text='Vue.js'/>
            <FrameworkBlock text='Express.js'/>
            <FrameworkBlock text='FastAPI'/>
            <FrameworkBlock text='MongoDB'/>
            <FrameworkBlock text='Redis'/>
            <FrameworkBlock text='Docker'/>
            <FrameworkBlock text='AWS'/>
            <FrameworkBlock text='Next.js'/>
            <FrameworkBlock text='Angular'/>
            <FrameworkBlock text='Django'/>
            <FrameworkBlock text='Nest.js'/>
            <FrameworkBlock text='PostgreSQL'/>
            <FrameworkBlock text='ElasticSearch'/>
            <FrameworkBlock text='Kubernetes'/>
            <FrameworkBlock text='Vercel'/>
        </div>

    </div>
  )
}

export default Stack
