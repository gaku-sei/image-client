import HomeCtrl from 'controllers/HomeCtrl';
import ImageShowCtrl from 'controllers/ImageShowCtrl';

let states = new Map<string, ng.ui.IState>();

states.set('app', {
  url: '/',
  views: {
    toolbar: {
      templateUrl: 'app/partials/toolbar.html',
      controller: () => {},
      controllerAs: 'toolbar'
    },
    content: {
      templateUrl: 'app/partials/home.html',
      controller: HomeCtrl,
      controllerAs: HomeCtrl.SID
    }
  }
});

states.set('app.show-image', {
  url: 'image/:id',
  views: {
    'content@': {
      templateUrl: 'app/partials/images/show.html',
      controller: ImageShowCtrl,
      controllerAs: ImageShowCtrl.SID
    }
  }
});

export default states;
