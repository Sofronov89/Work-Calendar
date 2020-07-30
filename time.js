import React from 'react';

export class TimeMass extends React.Component {

    activeDateStart = () => {
        let date = new Date();
        let timeElem = [];
        let flag = false;
        for (let i = 0; i < 3; i++) {
            if(date.getDay()!= 0 && date.getDay()!= 6 && flag == false){
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
                this.props.activeDate(timeElem);
                flag = true;
            };
            date.setDate(date.getDate() + 1)
        };
    };

    componentDidMount(){
        this.activeDateStart();
    };

    activeDateIn(timeElem){
        this.props.activeDate(timeElem);
    };

    render() {
        let dates= [];
        let date= new Date();
        function timeElem(){
            let timeElem = [];
            timeElem.minutes = date.getMinutes();
            timeElem.hours = date.getHours();
            timeElem.date = date.getDate();
            if(date.getDay() == 0){timeElem.day = 'SU'};
            if(date.getDay() == 1){timeElem.day = 'MO'};
            if(date.getDay() == 2){timeElem.day = 'TU'};
            if(date.getDay() == 3){timeElem.day = 'WE'};
            if(date.getDay() == 4){timeElem.day = 'TH'};
            if(date.getDay() == 5){timeElem.day = 'FR'};
            if(date.getDay() == 6){timeElem.day = 'SA'};

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
            if(date.getMonth() == 11){timeElem.month = 'DEC'};
            timeElem.year = date.getFullYear();
            dates.push(timeElem);
        };

        for(let i = 0; i < 15; i++){
            timeElem();
            date.setDate(date.getDate() + 1);
        };

        return (
            <div className = 'time_arr'>
                {dates.map(timeElem => (
                    <div className = 'time_item_main'>
                        {!!(timeElem.date == 1) && <div>
                            <div>{timeElem.month}</div>
                        </div>}
                        <div className = 'time_item'>
                            {!!((timeElem.day == 'SU') || (timeElem.day == 'SA')) && <div className ='time_day shadow_date'>{timeElem.day}</div>}
                            {!((timeElem.day == 'SU') || (timeElem.day == 'SA')) && <div className ='time_day'>{timeElem.day}</div>}
                            {!!((timeElem.day == 'SU') || (timeElem.day == 'SA')) && <div className ='button_date shadow_date'>{timeElem.date}</div>}
                            {
                                !(timeElem.date == this.props.activeDateItem.date) && (!((timeElem.day == 'SU') || (timeElem.day == 'SA'))) &&
                                <button className ='button_date' onClick = {this.activeDateIn.bind(this, timeElem)}>{timeElem.date}</button>
                            }
                            {
                                !!(timeElem.date == this.props.activeDateItem.date) && (!((timeElem.day == 'SU') || (timeElem.day == 'SA'))) &&
                                <button className = 'button_date active_date' onClick = {this.activeDateIn.bind(this, timeElem)}>{timeElem.date}</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        )
    };
}
