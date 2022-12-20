const WorkDay = ({weekDay, handleDayChange}) => {

    return (
        <select className="form_select" value={weekDay} onChange={handleDayChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
        </select>
    )
}

export default WorkDay;