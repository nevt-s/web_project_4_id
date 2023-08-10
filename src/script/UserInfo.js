import { name, about, nameContent, aboutContent } from "./constants"

export class UserInfo{
    constructor(name, about){
        this.name = name,
        this.about = about
    }

    getUserInfo(){
        name.value = this.name;
        about.value = this.about;
    }

    setUserInfo(){
        nameContent.textContent = name.value;
        aboutContent.textContent = about.value;
    }
}