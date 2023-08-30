import { name, about, nameContent, aboutContent, avatarImage} from "./constants";
import { callUser, editUser } from "./Api";

callUser();

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
        editUser(name.value, about.value)
    }
}