export default class ImageShowCtrl {
  static SID = 'imageShow';
  static $inject = ['$stateParams'];

  id: string;

  constructor($stateParams: ng.ui.IStateParamsService) {
    this.id = $stateParams['id'];
  }
}
