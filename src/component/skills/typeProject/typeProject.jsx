"use client"
import { Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import style from './css/typeProject.module.css'


ChartJS.register(ArcElement, Tooltip, Legend)

const TypeProject = () => {
  return (
    <div className={style.pieContainer}>
        <span className={style.title}>Розділ проектів за типами</span>
        {/* Діаграма типу пиріг */}
        <div className={style.pie}>
        <Pie 
            data={{
                // Назви кусків 
                labels: ['E-commerce', 'SaaS', 'Landing Pages', 'Mobile Apps', 'APIs'],
                // Налаштування діаграми
                datasets: [
                    {
                        // Відсотки
                        data: [30, 25, 20, 15, 10],
                        // Фон
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ],
                        // Колір обводки
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        // Ширина обводки
                        borderWidth: 1,
                        
                    },
                ],
            }}
            // Внутрішні налаштування діаграми
            options={{
                // Час, тип анімації
                animation:{
                    duration: 2000,
                    easing: 'easeInOutCirc',
                    animateRotate: true
                },
                // Початок анімації з градуса 90
                rotation: 90,
                responsive: true,
                maintainAspectRatio: false,
                // Налаштування відображення підсказок та бокової панелі заголовків 
                plugins: {
                    // Заголовки і їх тип відображення
                    legend: {
                        display: true,
                        position: 'right',           
                        align: 'center',            
                        labels: {
                            usePointStyle: true,      
                            pointStyle: 'circle',    
                            boxWidth: 10,             
                            boxHeight: 10,
                            padding: 16,              
                            color: '#cfd8e3',         
                            font: { size: 13, weight: 600 }
                        },
																								onHover: (event, legendItem, legend) => {
                            event.native.target.style.cursor = "pointer";
                        }
                    },
                    // Налаштування стилів підсказок при наведені
                    tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(36, 33, 33, 0.7)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function(context){
                            const label = context.label || ''
                            const value = context.parsed || 0
                            return `${label}: ${value}%`
                        },
                        title: function(){
                            return ''
                        }
                    }
                }
                },
                // Розмір діаграми
                // radius: 120,
                
            }}
        />
        </div>
    </div>
  )
}

export default TypeProject
