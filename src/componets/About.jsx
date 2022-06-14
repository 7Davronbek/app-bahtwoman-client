import React from 'react'

const About = () => {
    return (
        <>  <div className="About">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="about_h">О нас</div>
                        <div className="about_p">Конкурентные преимущества наших курсов
                            и марафонов отличаются тем, что они разрабатывались в течении 10-ти лет и максимально были адаптированы под менталитет женщин, проживающих в странах Средней Азии.
                            <span>
                                В данный Проект были вовлечены не только ведущие клинические психологи, но и социологи, а также бихевиористы (специалисты из области поведенческой психологии).
                            </span>

                        </div>

                    </div>
                    <div className="col-4 ">
                        <div className="about_p">Соответственно, мы даём 100% гарантию, что после прохождения наших курсов, ваша жизнь кардинально измениться к лучшему
                            и вы обязательно станете одной из самых счастливых женщин в мире.
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/image/about.png" alt="" className="about_img" />
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default About