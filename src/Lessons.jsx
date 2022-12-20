import WorkDay from "./WorkDay";

const Lessons = ({lessons, weekDay, handleDayChange, handleLessonCardClick}) => {
    
    return (
        <main className="wrapper">
            <div className="header_select">
                <WorkDay weekDay = {weekDay} handleDayChange = {handleDayChange}/>
            </div>
            <div className="list" style={{cursor: "pointer"}} >
                {lessons.map((lesson) => (
                    <div key={lesson.id} id={lesson.id} className={(lesson.day === weekDay ? 'list_item selected' : 'list_item')} onClick={handleLessonCardClick}>
                        <h3>{lesson.name}</h3>
                        <img src={lesson.image} alt={lesson.name} />  
                    </div> 
                ))
                }
            </div>
        </main>
    )
}
export default Lessons;