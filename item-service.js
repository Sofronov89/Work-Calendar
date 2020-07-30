export default class ItemService {

    static saveMan(people){
        localStorage.setItem('people', JSON.stringify(people))
    };

    static getMan(){
        return JSON.parse(localStorage.getItem('people'))
    };

    static saveProject(projects){
        localStorage.setItem('projects', JSON.stringify(projects))
    };

    static getProject(){
        return JSON.parse(localStorage.getItem('projects'))
    };
}
