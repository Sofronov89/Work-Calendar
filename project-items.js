import * as React from 'react';
import ItemService from './item-service';

export class Projects extends React.Component {

    render() {
        let projectMass = [
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 3,
                hourStart: 14,
                minutesStart: 30,
                hourEnd: 16,
                minutesEnd: 0,
                date: 28,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '13',
                idProject: 0,
                IdPerson: 3,
                hourStart: 12,
                minutesStart: 0,
                hourEnd: 13,
                minutesEnd: 30,
                date: 28,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '15',
                idProject: 0,
                IdPerson: 0,
                hourStart: 15,
                minutesStart: 0,
                hourEnd: 17,
                minutesEnd: 0,
                date: 28,
                month: 'AUG',
                year: 2020
            },
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 2,
                hourStart: 10,
                minutesStart: 0,
                hourEnd: 12,
                minutesEnd: 0,
                date: 28,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 1,
                hourStart: 14,
                minutesStart: 30,
                hourEnd: 16,
                minutesEnd: 0,
                date: 29,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '13',
                idProject: 0,
                IdPerson: 3,
                hourStart: 12,
                minutesStart: 0,
                hourEnd: 13,
                minutesEnd: 30,
                date: 29,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '15',
                idProject: 0,
                IdPerson: 0,
                hourStart: 15,
                minutesStart: 0,
                hourEnd: 17,
                minutesEnd: 0,
                date: 29,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 2,
                hourStart: 10,
                minutesStart: 0,
                hourEnd: 12,
                minutesEnd: 0,
                date: 29,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 1,
                hourStart: 14,
                minutesStart: 30,
                hourEnd: 16,
                minutesEnd: 0,
                date: 30,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '13',
                idProject: 0,
                IdPerson: 3,
                hourStart: 12,
                minutesStart: 0,
                hourEnd: 16,
                minutesEnd: 30,
                date: 30,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '15',
                idProject: 0,
                IdPerson: 0,
                hourStart: 15,
                minutesStart: 0,
                hourEnd: 16,
                minutesEnd: 0,
                date: 30,
                month: 'JUL',
                year: 2020
            },
            {
                name: 'develop',
                cost: '12',
                idProject: 0,
                IdPerson: 2,
                hourStart: 10,
                minutesStart: 0,
                hourEnd: 13,
                minutesEnd: 0,
                date: 30,
                month: 'JUL',
                year: 2020
            },
        ];
        ItemService.saveProject(projectMass);
        projectMass = [];

        let projectPerson = this.props.projects;
        let activeDateItem = this.props.activeDateItem;
        projectPerson = projectPerson.filter(function(project) {
            if(!!activeDateItem && (activeDateItem.year == project.year) && (activeDateItem.month == project.month) && (activeDateItem.date == project.date)) {
                return project;
            }
        });
        let projectIdArr = projectPerson;
        let thisIdMan = this.props.thisIdMan;
        projectIdArr = projectIdArr.filter(function(project) {
            return project.IdPerson == thisIdMan;
        });

        let TimeDivMas = [];
        for(let i = 0; i < 9; i++) {
            let valueTime = [];
            let valueTime2 = [];
            let valueTimeHour = '';
            let valueTimeHalfHour = '';

            valueTimeHour = i + 9;
            if (i != 9) {
                valueTimeHalfHour = 0;
                valueTime.push(valueTimeHour);
                valueTime.push(valueTimeHalfHour);
                TimeDivMas.push(valueTime);

                valueTimeHalfHour = 30;
                valueTime2.push(valueTimeHour);
                valueTime2.push(valueTimeHalfHour);
                TimeDivMas.push(valueTime2);
            } else {
                valueTimeHalfHour = 0;
                valueTime.push(valueTimeHour);
                valueTime.push(valueTimeHalfHour);
                TimeDivMas.push(valueTime);
            }
        }
        return (
            <div className = 'time_arr projects_stroke'>
                {TimeDivMas.map(item => {
                    if((item[0] == '17') && (item[1] == '30')) {
                        return(
                            <div className = 'table_item last_item time_line'>
                                {projectIdArr.map(project => {
                                    if ((((item[0] >= project.hourStart) && (item[1] >= project.minutesStart)) || (item[0] >= project.hourStart + 1)) &&
                                        ((item[0] < project.hourEnd) || ((item[0] == project.hourEnd) && (project.minutesEnd == item[1] + 30)))) {
                                        return (
                                            <div className = 'project'>
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'pic_clock'></div>}
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'project_time'>{project.hourStart} :</div>}
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'project_time'>:{project.minutesStart}</div>}
                                                {
                                                    ((item[0] == project.hourEnd -1 && project.minutesEnd == item[1] - 30) ||
                                                        ((item[0] == project.hourEnd && project.minutesEnd == item[1] + 30))) &&
                                                    <div className = 'project_cost'>{project.cost}$</div>
                                                }
                                                <div className = 'project_underline'></div>
                                            </div>)
                                    }
                                })}
                            </div>
                        )
                    }else{
                        return(
                            <div className = 'table_item time_line'>
                                {projectIdArr.map(project => {
                                    if ((((item[0] >= project.hourStart) && (item[1] >= project.minutesStart)) || (item[0] >= project.hourStart + 1)) &&
                                        ((item[0] < project.hourEnd) || ((item[0] == project.hourEnd) && (project.minutesEnd == item[1] + 30)))) {
                                        return (
                                            <div className = 'project'>
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'pic_clock'></div>}
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'project_time'>{project.hourStart}</div>}
                                                {(item[0] == project.hourStart && item[1] == project.minutesStart) && <div className = 'project_time'>:{project.minutesStart}</div>}
                                                {
                                                    ((item[0] == project.hourEnd -1 && project.minutesEnd == item[1] - 30) ||
                                                     ((item[0] == project.hourEnd && project.minutesEnd == item[1] + 30))) &&
                                                    <div className = 'project_cost'>{project.cost}$</div>
                                                }
                                                <div className = 'project_underline'></div>
                                            </div>)
                                    }
                                })}
                            </div>
                        )
                    }
                })}
            </div>
        )
    };
}

