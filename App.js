import React from 'react';
import './App.css';
import {TimeMass} from './time';
import {People} from './people';
import ItemService from './item-service';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            people: ItemService.getMan(),
            projects: ItemService.getProject(),
            activeDateItem: []
        };

        if (!this.state.people){
            this.state.people = []
        };
        if (!this.state.projects){
            this.state.projects = []
        }
    };

    activeDate(timeElem){
        this.setState({activeDateItem: timeElem})
    };

    render() {
        return (
            <div className = 'App'>
                <header className = 'header'>
                    <div className = 'label_main'>
                        <div className = 'label'>
                            <div className = 'oval'></div>
                        </div>
                    </div>
                    <div className = 'header_div'>
                        <input placeholder = 'Search'/>
                        <div className = 'person_photo'></div>
                    </div>
                </header>
                <div className = 'content'>
                    <button className = 'button_header'>SELL GOODS</button>
                    <button className = 'button_header'>SCHEDULE</button>
                    <div className = 'header_2'>
                        <select className = 'select_bar'>
                        </select>
                        <TimeMass activeDate = {this.activeDate.bind(this)} activeDateItem = {this.state.activeDateItem}/>
                    </div>
                    <div className = 'content_projects'>
                        <div className = 'table'>
                            <div className = 'name_div'></div>
                            <div className = 'time_arr'>
                                <div className = 'table_item'>09:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>10:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>11:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>12:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>13:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>14:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>15:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item'>16:00
                                    <div className = 'line_central'></div>
                                </div>
                                <div className = 'table_item last_item'>17:00
                                    <div className = 'line_central'></div>
                                </div>
                            </div>
                        </div>
                        <People people = {this.state.people} projects = {this.state.projects} activeDateItem = {this.state.activeDateItem}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;