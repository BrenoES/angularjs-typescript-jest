import angular from 'angular';

export class FileController {
    static nameCtrl: string = 'fileController';
    constructor() {
    }

    divideDoisInteiros(x: number, y: number) {
        return x / y;
    }

    getKeyByValue(obj: any, key :any) {
        return Object.keys(obj).filter((value) => obj[value] === key)[0]
    }

}
class FileComponent implements angular.IComponentOptions {
    static controller = FileController;
    static selector = 'bsFile'

}
angular.module('fileModule', [])
    .component(FileComponent.selector, FileComponent)
    .controller(FileController.nameCtrl, FileController)