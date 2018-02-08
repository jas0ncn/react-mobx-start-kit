import { observable, computed, action } from 'mobx';

export class AppStore {
        
    @observable
    public ids: number[] = [1, 2, 3];

}

export default AppStore;
