import * as React from 'react';
import ItemService from './item-service';
import {Projects} from './project-items';
import pic0 from './pictures/pic0.jpg';
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';
import pic4 from './pictures/pic4.jpg';

export class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thisTime: 0}
    };

    timeLineStart = () =>{
        let date = new Date();
        let timeElem = [];
        timeElem.minutes = date.getMinutes();
        timeElem.hours = date.getHours();
        timeElem.date = date.getDate();
        if(date.getDay() == 1){timeElem.day = 'MO'};
        if(date.getDay() == 2){timeElem.day = 'TU'};
        if(date.getDay() == 3){timeElem.day = 'WE'};
        if(date.getDay() == 4){timeElem.day = 'TH'};
        if(date.getDay() == 5){timeElem.day = 'FR'};
        if(date.getMonth() == 0){timeElem.month = 'JAN'};
        if(date.getMonth() == 1){timeElem.month = 'FEB'};
        if(date.getMonth() == 2){timeElem.month = 'MAR'};
        if(date.getMonth() == 3){timeElem.month = 'APR'};
        if(date.getMonth() == 4){timeElem.month = 'MAY'};
        if(date.getMonth() == 5){timeElem.month = 'JUN'};
        if(date.getMonth() == 6){timeElem.month = 'JUL'};
        if(date.getMonth() == 7){timeElem.month = 'AUG'};
        if(date.getMonth() == 8){timeElem.month = 'SEP'};
        if(date.getMonth() == 9){timeElem.month = 'OCT'};
        if(date.getMonth() == 10){timeElem.month = 'NOV'};
        if(date.getMonth() == 11){timeElem.month=  'DEC'};
        timeElem.year = date.getFullYear();
        this.setState({thisTime: timeElem});
    };

    componentDidMount(){
        this.timeLineStart();
        this.interval = setInterval(() => this.timeLineStart(), 20000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let peopleMass = [
            {
                name: 'sergey',
                idMan: 0,
                picture: pic0
            },
            {
                name: 'nikolas',
                idMan: 1,
                picture: pic1
            },
            {
                name: 'ann',
                idMan: 2,
                picture: pic2
            },
            {
                name: 'tania',
                idMan: 3,
                picture: pic3
            },
            {
                name: 'julia',
                idMan: 4,
                picture: pic4
            }
        ];
        ItemService.saveMan(peopleMass);
        peopleMass = [];

        let widthTimeDiv = ((((this.state.thisTime.hours - 9) + (this.state.thisTime.minutes - 0)/ 60) * 100 / (18 - 9)) * 0.815);

        return (
            <div className = 'projects'>
                {this.props.people.map(man => (
                    <div className = 'stroke_person'>
                        <div className = 'name_div main_name'>
                            <img className = 'project_photo' src = {man.picture} alt = 'img'></img>
                            {man.name}
                        </div>
                        <Projects projects = {this.props.projects} thisIdMan = {man.idMan} activeDateItem = {this.props.activeDateItem}/>
                    </div>
                ))}
                {(this.props.activeDateItem.date == this.state.thisTime.date) && (this.props.activeDateItem.month == this.state.thisTime.month) &&
                (widthTimeDiv >= 0) && (this.state.thisTime.hours < 18) &&
                <div className = 'time_line_main_div'>
                    <div className = 'name_div' style = {{height: '100%'}}></div>
                    <div className = 'time_arr time_line_div' style = {{width: widthTimeDiv + '%', height: '100%'}}></div>
                    <div className = 'div_line'></div>
                    <div className = 'dynamic_time_div'>{this.state.thisTime.hours}:{this.state.thisTime.minutes}</div>
                </div>
                }
            </div>
        )
    };
}